(() => {
  'use strict';
  const DATA = window.STUDY_DATA;
  const STORE_KEY = 'chem-eng-study-lab-v1';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const qById = new Map(DATA.questions.map(q => [q.id, q]));
  const lessonById = new Map(DATA.lessons.map(l => [l.id, l]));
  const categoryById = new Map(DATA.categories.map(c => [c.id, c]));
  const defaultState = () => ({ attempts: [], saved: [], lastSection: 'practice' });
  let state = loadState();
  let reviewMode = 'wrong';
  let activeLessonId = DATA.lessons[0].id;
  let toastTimer = null;
  let session = null;

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
      if (!parsed || !Array.isArray(parsed.attempts) || !Array.isArray(parsed.saved)) return defaultState();
      parsed.saved = parsed.saved.filter(id => qById.has(id));
      parsed.attempts = parsed.attempts.filter(a => qById.has(a.id) && typeof a.correct === 'boolean');
      return parsed;
    } catch (_) { return defaultState(); }
  }
  function persist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) { toast('瀏覽器無法儲存紀錄，請檢查儲存空間或隱私設定。'); }
    renderGlobalStats();
  }
  function toast(message) {
    const node = $('#toast'); node.textContent = message; node.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => node.classList.remove('show'), 2600);
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function accuracy(correct, total) { return total ? Math.round(correct / total * 100) : null; }
  function questionLabel(q) {
    if (q.originalNo) return `原題 ${q.originalNo}`;
    if (q.sourceType === 'midterm-style-practice') return `期中練習 ${q.id}`;
    return `基礎練習 ${q.id}`;
  }
  function difficultyLabel(q) { return q.difficulty === 1 ? 'FOUNDATION' : q.difficulty === 3 ? 'MIDTERM APPLIED' : 'INTERMEDIATE'; }
  function questionSource(q) {
    const parts = [q.lecture, q.sourceRef].filter(Boolean);
    return parts.length ? `<div class="question-source">出處：${escapeHtml(parts.join(' · '))}</div>` : '';
  }
  function shuffle(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  }
  function latestByQuestion() {
    const latest = new Map();
    for (const a of state.attempts) latest.set(a.id, a);
    return latest;
  }
  function pendingWrongIds() {
    const latest = latestByQuestion();
    return [...latest.entries()].filter(([, a]) => !a.correct).map(([id]) => id);
  }
  function categoryStatsLatest() {
    const latest = latestByQuestion();
    return DATA.categories.map(category => {
      const items = [...latest.entries()].filter(([id]) => qById.get(id).category === category.id).map(([, a]) => a);
      const correct = items.filter(a => a.correct).length;
      return { ...category, total: items.length, correct, rate: accuracy(correct, items.length) };
    });
  }
  function allHistoryStats() {
    const correct = state.attempts.filter(a => a.correct).length;
    const wrong = state.attempts.length - correct;
    return { total: state.attempts.length, correct, wrong, rate: accuracy(correct, state.attempts.length) };
  }

  function init() {
    $('#metric-total').textContent = DATA.questions.length;
    $('#nav-question-count').textContent = DATA.questions.length;
    const select = $('#category-filter');
    const learnSelects = [select];
    for (const category of DATA.categories) {
      const option = document.createElement('option'); option.value = category.id; option.textContent = category.name; select.append(option);
    }
    renderGlobalStats();
    renderSnapshot();
    renderLessonNav();
    renderLesson(activeLessonId);
    renderAnalytics();
    renderReviewList();
    bindEvents();
  }

  function bindEvents() {
    $$('.nav-item[data-view]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.view)));
    $$('[data-goto]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.goto)));
    $('#jump-learning').addEventListener('click', () => navigate('learn'));
    $('#category-filter').addEventListener('change', () => renderSetupSnapshot());
    $('#difficulty-filter').addEventListener('change', () => renderSetupSnapshot());
    $('#start-quiz').addEventListener('click', () => startQuiz());
    $('#submit-round').addEventListener('click', submitRound);
    $('#next-round').addEventListener('click', nextRound);
    $('#finish-quiz').addEventListener('click', () => finishSession(false));
    $('#quit-quiz').addEventListener('click', () => finishSession(true));
    $('#result-review-wrongs').addEventListener('click', () => { reviewMode = 'wrong'; navigate('review'); renderReviewList(); });
    $('#new-quiz-from-result').addEventListener('click', () => { $('#session-result').classList.add('hidden'); startQuiz(); });
    $('#reset-progress').addEventListener('click', resetProgress);
    $('#export-progress').addEventListener('click', exportProgress);
    $('#review-search').addEventListener('input', renderReviewList);
    $$('[data-review-mode]').forEach(button => button.addEventListener('click', () => {
      reviewMode = button.dataset.reviewMode;
      $$('[data-review-mode]').forEach(b => b.classList.toggle('active', b === button));
      renderReviewList();
    }));
    $('#lesson-nav').addEventListener('click', event => {
      const button = event.target.closest('[data-lesson-id]');
      if (!button) return;
      activeLessonId = button.dataset.lessonId; renderLessonNav(); renderLesson(activeLessonId);
    });
  }

  function navigate(view) {
    const valid = ['practice', 'learn', 'analytics', 'review'];
    if (!valid.includes(view)) return;
    $$('.view').forEach(section => section.classList.toggle('active', section.id === `view-${view}`));
    $$('.nav-item[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
    const labels = { practice: '測驗練習', learn: '分類學習區', analytics: '學習分析', review: '錯題與收藏' };
    $('#current-section-label').textContent = labels[view];
    state.lastSection = view; persist();
    if (view === 'analytics') renderAnalytics();
    if (view === 'review') renderReviewList();
    if (view === 'practice') renderSnapshot();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderGlobalStats() {
    const history = allHistoryStats();
    const pending = pendingWrongIds().length;
    const attemptedUnique = latestByQuestion().size;
    const completion = Math.round(attemptedUnique / DATA.questions.length * 100);
    $('#metric-attempted').textContent = attemptedUnique;
    $('#metric-attempted-sub').textContent = `${history.total} 次批改紀錄`;
    $('#metric-accuracy').textContent = history.rate === null ? '—' : `${history.rate}%`;
    $('#metric-review').textContent = pending;
    $('#nav-review-count').textContent = pending + state.saved.length;
    $('#side-progress-number').textContent = `${completion}%`;
    $('#side-progress-bar').style.width = `${completion}%`;
    $('#review-wrong-count').textContent = pending;
    $('#review-saved-count').textContent = state.saved.length;
    renderSnapshot();
    // Keep current review items and analytics in sync when a question is answered.
    if ($('#view-analytics').classList.contains('active')) renderAnalytics();
    if ($('#view-review').classList.contains('active')) renderReviewList();
  }

  function renderSnapshot() {
    const holder = $('#snapshot-list');
    if (!holder) return;
    const stats = categoryStatsLatest();
    holder.innerHTML = stats.map(category => `
      <div class="snapshot-row" title="${escapeHtml(category.name)}：${category.rate === null ? '尚無作答' : `${category.rate}%`}">
        <span class="snapshot-name">${escapeHtml(category.short)}</span>
        ${category.rate === null ? '<div class="empty-bar"></div>' : `<div class="mini-track"><span style="width:${category.rate}%;background:${category.color}"></span></div>`}
        <span class="snapshot-value">${category.rate === null ? '—' : `${category.rate}%`}</span>
      </div>`).join('');
  }
  function renderSetupSnapshot() {
    // Provide instant category context; the full snapshot continues to display all categories.
    renderSnapshot();
  }

  function renderLessonNav() {
    $('#lesson-nav').innerHTML = DATA.lessons.map((lesson, i) => `
      <button data-lesson-id="${lesson.id}" class="${lesson.id === activeLessonId ? 'active' : ''}">
        <span class="lesson-nav-index">${String(i + 1).padStart(2, '0')}</span>
        <span class="lesson-nav-text"><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.duration)} · ${lesson.level}</small></span>
      </button>`).join('');
  }

  function renderLesson(lessonId) {
    const lesson = lessonById.get(lessonId) || DATA.lessons[0];
    activeLessonId = lesson.id;
    renderLessonNav();
    const category = categoryById.get(lesson.id);
    const related = DATA.questions.filter(q => q.lesson === lesson.id);
    const stats = categoryStatsLatest().find(c => c.id === lesson.id);
    const holder = $('#lesson-detail');
    holder.innerHTML = `
      <div class="lesson-hero">
        <div class="eyebrow">LEARNING MODULE · ${escapeHtml(lesson.level.toUpperCase())}</div>
        <h2>${escapeHtml(lesson.title)}</h2><p>${escapeHtml(lesson.subtitle)}</p>
        <div class="lesson-hero-meta"><span>${escapeHtml(lesson.duration)}</span><span>${related.length} 道相關練習</span><span>${stats && stats.rate !== null ? `最近答對率 ${stats.rate}%` : '尚未作答'}</span></div>
        <div class="lesson-quick-actions"><button class="button button-primary" data-start-category="${lesson.id}">練習此分類 <span>→</span></button><button class="button button-outline" data-start-single="${related[0]?.id || ''}">先做一道檢核題 <span>↗</span></button></div>
      </div>
      <div class="lesson-grid">
        <div>
          <section class="panel lesson-section"><h3>學習目標</h3><ul class="lesson-objectives">${lesson.objectives.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></section>
          <section class="panel lesson-section"><h3>核心知識與先備概念</h3>${lesson.notes.map((note, i) => `<div class="note-card"><h4>${escapeHtml(note.heading)}</h4><p>${escapeHtml(note.body)}</p></div>`).join('')}</section>
        </div>
        <div>
          <section class="panel lesson-section"><h3>開始前先確認</h3><div class="prereq-list">${lesson.prerequisites.map(x => `<div class="prereq-item"><i>✓</i><span>${escapeHtml(x)}</span></div>`).join('')}</div></section>
          <section class="panel lesson-section"><h3>公式與關係式</h3>${lesson.formulas.map(formula => `<div class="formula-line">${escapeHtml(formula)}</div>`).join('')}</section>
          <section class="panel lesson-section"><h3>常見誤解</h3><div class="misconception-list">${lesson.misconceptions.map(x => `<div class="misconception-item"><span>!</span><span>${escapeHtml(x)}</span></div>`).join('')}</div></section>
          <section class="panel lesson-section"><h3>快速例題</h3><div class="example-box">${escapeHtml(lesson.example)}</div></section>
        </div>
      </div>
      <section class="panel related-questions"><div class="related-questions-header"><h3>本章節連結題目</h3><span class="panel-kicker">QUESTION LINKS</span></div>
        ${related.map(q => `<div class="related-question-row"><p><b>${escapeHtml(questionLabel(q))}</b> · ${escapeHtml(q.statement)}${q.sourceRef ? `<small class="related-source">${escapeHtml(q.sourceRef)}</small>` : ''}</p><button data-start-single="${q.id}">練習此題 →</button></div>`).join('')}
      </section>
      ${lesson.sources?.length ? `<section class="panel lesson-section lesson-sources"><h3>教材依據與出處</h3><ul>${lesson.sources.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></section>` : ''}`;
    holder.querySelectorAll('[data-start-category]').forEach(button => button.addEventListener('click', () => { $('#category-filter').value = lesson.id; $('#difficulty-filter').value = 'all'; navigate('practice'); startQuiz(); }));
    holder.querySelectorAll('[data-start-single]').forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.startSingle;
      if (id) { navigate('practice'); startQuiz({ ids: [id] }); }
    }));
  }

  function getFilteredQuestions() {
    const category = $('#category-filter').value;
    const difficulty = $('#difficulty-filter').value;
    return DATA.questions.filter(q => (category === 'all' || q.category === category) && (difficulty === 'all' || String(q.difficulty) === difficulty));
  }

  function startQuiz(options = {}) {
    const list = options.ids ? options.ids.map(id => qById.get(id)).filter(Boolean) : getFilteredQuestions();
    if (!list.length) { toast('此範圍目前沒有題目，請調整分類或難度。'); return; }
    let selected = options.ids ? [...list] : ($('#mode-filter').value === 'random' ? shuffle(list) : [...list].sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999)));
    session = { deck: selected.map(q => q.id), offset: 0, answers: {}, results: [], startedAt: Date.now(), revealed: false, stopped: false };
    $('#session-result').classList.add('hidden');
    $('#quiz-panel').classList.remove('hidden');
    $('#quiz-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderRound();
  }

  function currentBatch() { return session ? session.deck.slice(session.offset, session.offset + 3) : []; }
  function renderRound() {
    if (!session) return;
    session.revealed = false;
    const batch = currentBatch();
    const roundNumber = Math.floor(session.offset / 3) + 1;
    $('#quiz-round-label').textContent = `ROUND ${String(roundNumber).padStart(2, '0')}`;
    $('#quiz-title').textContent = `本回合題目 · ${Math.min(session.offset + batch.length, session.deck.length)} / ${session.deck.length}`;
    $('#quiz-instruction').textContent = `請用英文題目判斷 True 或 False。每題都作答後才會統一顯示答案與中文詳解。`;
    $('#round-progress').textContent = `${batch.filter(id => session.answers[id] !== undefined).length} / ${batch.length}`;
    $('#quiz-progress-bar').style.width = `${session.offset / session.deck.length * 100}%`;
    $('#quiz-hint').textContent = batch.length < 3 ? `本輪最後 ${batch.length} 題。` : '每回合 3 題；提交後會顯示正確觀念與另一選項的誤解。';
    $('#submit-round').classList.remove('hidden'); $('#submit-round').disabled = batch.some(id => session.answers[id] === undefined);
    $('#next-round').classList.add('hidden'); $('#finish-quiz').classList.add('hidden');
    $('#quit-quiz').classList.remove('hidden');
    $('#quiz-questions').innerHTML = batch.map((id, i) => renderQuestionCard(qById.get(id), i, false)).join('');
    bindQuestionControls();
    updateBatchAnswerCount();
  }

  function renderQuestionCard(q, index, showFeedback) {
    const category = categoryById.get(q.category);
    const chosen = session?.answers[q.id];
    const saved = state.saved.includes(q.id);
    const feedback = showFeedback ? questionFeedback(q, chosen) : '';
    return `<article class="question-card" data-question-card="${q.id}">
      <div class="question-top"><span class="question-id">${escapeHtml(questionLabel(q))} · ${difficultyLabel(q)}</span><span class="question-category">${escapeHtml(category?.short || q.category)}</span></div>
      ${questionSource(q)}
      <p class="question-statement">${escapeHtml(q.statement)}</p>
      <div class="question-answers" role="group" aria-label="Choose True or False">
        <button class="answer-option ${chosen === true ? 'selected' : ''} ${showFeedback && q.answer ? 'correct' : ''} ${showFeedback && chosen === true && !q.answer ? 'incorrect' : ''}" data-answer="true" ${showFeedback ? 'disabled' : ''}>True</button>
        <button class="answer-option ${chosen === false ? 'selected' : ''} ${showFeedback && q.answer === false ? 'correct' : ''} ${showFeedback && chosen === false && q.answer ? 'incorrect' : ''}" data-answer="false" ${showFeedback ? 'disabled' : ''}>False</button>
      </div>
      ${showFeedback ? feedback : ''}
      <div class="review-card-actions"><button data-save-question="${q.id}" class="${saved ? 'primary-text' : ''}">${saved ? '★ 已收藏' : '☆ 收藏題目'}</button><button data-open-lesson="${q.lesson}">閱讀相關知識 ↗</button></div>
    </article>`;
  }

  function questionFeedback(q, chosen) {
    const gotIt = chosen === q.answer;
    const category = categoryById.get(q.category);
    return `<div class="question-feedback ${gotIt ? 'is-correct' : 'is-wrong'}">
      <div class="feedback-status">${gotIt ? '✓ 判斷正確' : '✕ 判斷錯誤'} · 標準答案：<b>${q.answer ? 'True' : 'False'}</b></div>
      <div class="feedback-block"><strong>正確觀念</strong>${escapeHtml(q.explanation)}</div>
      <div class="feedback-block"><strong>另一選項／常見誤解</strong>${escapeHtml(q.misconception)}</div>
      <button class="feedback-link" data-open-lesson="${q.lesson}">查看「${escapeHtml(category?.name || '相關分類')}」先備知識 <span>↗</span></button>
    </div>`;
  }

  function bindQuestionControls() {
    $$('.question-card').forEach(card => {
      card.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
        if (!session || session.revealed) return;
        const id = card.dataset.questionCard;
        session.answers[id] = button.dataset.answer === 'true';
        const q = qById.get(id);
        // Refresh this card only so that selected state remains responsive.
        card.outerHTML = renderQuestionCard(q, 0, false);
        const newCard = $(`[data-question-card="${id}"]`);
        newCard.querySelectorAll('[data-answer]').forEach(b => b.addEventListener('click', () => {
          if (!session || session.revealed) return;
          session.answers[id] = b.dataset.answer === 'true';
          const before = $(`[data-question-card="${id}"]`);
          before.outerHTML = renderQuestionCard(q, 0, false);
          bindSingleCard(id);
          updateBatchAnswerCount();
        }));
        bindNonAnswerButtons(newCard);
        updateBatchAnswerCount();
      }));
      bindNonAnswerButtons(card);
    });
  }
  function bindSingleCard(id) {
    const card = $(`[data-question-card="${id}"]`); if (!card) return;
    card.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
      if (!session || session.revealed) return;
      session.answers[id] = button.dataset.answer === 'true';
      const q = qById.get(id); card.outerHTML = renderQuestionCard(q, 0, false);
      bindSingleCard(id); updateBatchAnswerCount();
    }));
    bindNonAnswerButtons(card);
  }
  function bindNonAnswerButtons(root) {
    root.querySelectorAll('[data-save-question]').forEach(button => {
      if (button.dataset.bound) return; button.dataset.bound = '1';
      button.addEventListener('click', () => toggleSaved(button.dataset.saveQuestion));
    });
    root.querySelectorAll('[data-open-lesson]').forEach(button => {
      if (button.dataset.bound) return; button.dataset.bound = '1';
      button.addEventListener('click', () => { activeLessonId = button.dataset.openLesson; navigate('learn'); renderLesson(activeLessonId); });
    });
  }
  function updateBatchAnswerCount() {
    if (!session || session.revealed) return;
    const batch = currentBatch();
    const count = batch.filter(id => session.answers[id] !== undefined).length;
    $('#round-progress').textContent = `${count} / ${batch.length}`;
    $('#submit-round').disabled = count !== batch.length;
  }

  function submitRound() {
    if (!session || session.revealed) return;
    const batch = currentBatch();
    if (batch.some(id => session.answers[id] === undefined)) { toast('請先回答本回合每一道題目。'); return; }
    session.revealed = true;
    for (const id of batch) {
      const q = qById.get(id); const chosen = session.answers[id]; const correct = chosen === q.answer;
      const result = { id, chosen, correct, at: new Date().toISOString(), sessionStart: session.startedAt };
      session.results.push(result); state.attempts.push(result);
    }
    persist();
    $('#quiz-questions').innerHTML = batch.map((id, i) => renderQuestionCard(qById.get(id), i, true)).join('');
    bindQuestionControls();
    $('#quiz-title').textContent = `本回合完成 · ${batch.filter(id => session.answers[id] === qById.get(id).answer).length} / ${batch.length} 題答對`;
    $('#quiz-instruction').textContent = '請閱讀中文詳解，並使用知識連結補足尚未掌握的觀念。';
    $('#quiz-progress-bar').style.width = `${Math.min(100, (session.offset + batch.length) / session.deck.length * 100)}%`;
    $('#submit-round').classList.add('hidden'); $('#quit-quiz').classList.add('hidden');
    if (session.offset + batch.length < session.deck.length) $('#next-round').classList.remove('hidden');
    else $('#finish-quiz').classList.remove('hidden');
    $('#quiz-hint').textContent = '詳解同時列出正確觀念與另一選項常見的錯誤理解。';
  }

  function nextRound() {
    if (!session) return;
    session.offset += 3; session.answers = {}; renderRound();
    $('#quiz-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function finishSession(stopped) {
    if (!session) { $('#quiz-panel').classList.add('hidden'); return; }
    session.stopped = stopped;
    // Match the source interaction model: when a user stops mid-round, selected answers count; blanks do not.
    if (stopped && !session.revealed) {
      for (const id of currentBatch()) {
        if (session.answers[id] === undefined || session.results.some(r => r.id === id)) continue;
        const q = qById.get(id);
        const result = { id, chosen: session.answers[id], correct: session.answers[id] === q.answer, at: new Date().toISOString(), sessionStart: session.startedAt };
        session.results.push(result); state.attempts.push(result);
      }
      persist();
    }
    const results = [...session.results];
    const correct = results.filter(r => r.correct).length;
    const wrong = results.length - correct;
    const unanswered = Math.max(0, session.deck.length - results.length);
    $('#quiz-panel').classList.add('hidden');
    $('#session-result').classList.remove('hidden');
    $('#session-score').textContent = results.length ? `${accuracy(correct, results.length)}%` : '—';
    $('#session-summary-text').textContent = `${stopped ? '本次練習已提前結束。' : '本次練習完成。'} 題目 ${session.deck.length} 題，已批改 ${results.length} 題，答對 ${correct} 題、答錯 ${wrong} 題，未作答 ${unanswered} 題。`;
    const categoryMap = new Map();
    results.forEach(r => {
      const q = qById.get(r.id); if (!categoryMap.has(q.category)) categoryMap.set(q.category, []);
      categoryMap.get(q.category).push(r);
    });
    $('#session-category-results').innerHTML = [...categoryMap.entries()].map(([categoryId, items]) => {
      const category = categoryById.get(categoryId); const nCorrect = items.filter(x => x.correct).length;
      return `<div class="session-category-card"><span>${escapeHtml(category.name)}</span><strong>${accuracy(nCorrect, items.length)}%</strong><small>${nCorrect} / ${items.length} 題答對</small></div>`;
    }).join('') || '<p class="subtle">本次沒有已批改題目。</p>';
    const wrongItems = results.filter(r => !r.correct);
    $('#session-wrongs').innerHTML = wrongItems.length ? `<h3>這次需要再讀一次的觀念</h3>${wrongItems.map(r => {
      const q = qById.get(r.id); return `<div class="session-wrong-item"><div class="question-id">${q.id} · ${escapeHtml(categoryById.get(q.category).short)}</div><div class="wrong-claim">${escapeHtml(q.statement)}</div><p>標準答案：<b>${q.answer ? 'True' : 'False'}</b>。${escapeHtml(q.explanation)}</p><button class="link-button" data-open-lesson="${q.lesson}">閱讀先備知識 →</button></div>`;
    }).join('')}` : '<div class="empty-state"><div class="empty-icon">✓</div><strong>本次沒有錯題</strong><p>保持間隔複習，並到分析區確認各分類的作答量。</p></div>';
    $('#session-wrongs').querySelectorAll('[data-open-lesson]').forEach(button => button.addEventListener('click', () => { activeLessonId = button.dataset.openLesson; navigate('learn'); renderLesson(activeLessonId); }));
    $('#quiz-panel').classList.add('hidden');
    $('#session-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    session = null;
    renderGlobalStats(); renderAnalytics(); renderReviewList();
  }

  function toggleSaved(id) {
    if (!qById.has(id)) return;
    if (state.saved.includes(id)) state.saved = state.saved.filter(x => x !== id);
    else state.saved.push(id);
    persist();
    // Repaint the currently active quiz cards so the bookmark label updates but preserve answers.
    if (session) {
      const batch = currentBatch();
      $('#quiz-questions').innerHTML = batch.map((qid, i) => renderQuestionCard(qById.get(qid), i, session.revealed)).join('');
      bindQuestionControls();
    }
    renderReviewList(); toast(state.saved.includes(id) ? '已加入收藏。' : '已從收藏移除。');
  }

  function renderAnalytics() {
    const history = allHistoryStats();
    const latest = latestByQuestion();
    const uniqueRate = (() => { const vals = [...latest.values()]; return accuracy(vals.filter(a => a.correct).length, vals.length); })();
    const best = categoryStatsLatest().filter(c => c.total).sort((a, b) => b.rate - a.rate)[0];
    const weakest = categoryStatsLatest().filter(c => c.total).sort((a, b) => a.rate - b.rate)[0];
    $('#analytics-kpis').innerHTML = `
      <div class="analytics-kpi"><span>累積批改次數</span><strong>${history.total}</strong><small>含同題重複練習</small></div>
      <div class="analytics-kpi"><span>最近一次掌握度</span><strong>${uniqueRate === null ? '—' : `${uniqueRate}%`}</strong><small>以每題最近作答計算</small></div>
      <div class="analytics-kpi"><span>表現最佳分類</span><strong>${best ? escapeHtml(best.short) : '—'}</strong><small>${best ? `${best.rate}% · ${best.total} 題` : '仍需要作答資料'}</small></div>
      <div class="analytics-kpi"><span>優先補強分類</span><strong>${weakest ? escapeHtml(weakest.short) : '—'}</strong><small>${weakest ? `${weakest.rate}% · ${weakest.total} 題` : '仍需要作答資料'}</small></div>`;

    const stats = categoryStatsLatest();
    $('#category-chart').innerHTML = stats.map(c => `<div class="bar-chart-row">
      <span class="bar-chart-label" title="${escapeHtml(c.name)}">${escapeHtml(c.short)}</span>
      ${c.rate === null ? '<div class="empty-bar"></div>' : `<div class="bar-chart-track"><span class="bar-chart-fill" style="width:${c.rate}%;background:${c.color}"></span></div>`}
      <span class="bar-chart-value">${c.rate === null ? '—' : `${c.rate}%`}<small>${c.total ? `${c.correct}/${c.total} 題` : '尚無作答'}</small></span>
    </div>`).join('');

    const all = allHistoryStats();
    const pctCorrect = all.total ? all.correct / all.total * 100 : 0;
    const pctWrong = all.total ? all.wrong / all.total * 100 : 0;
    $('#outcome-chart').innerHTML = all.total ? `<div class="donut-shell" style="background:conic-gradient(#2d9a7b 0 ${pctCorrect}%,#d65b70 ${pctCorrect}% 100%)"><div class="donut-center"><strong>${all.total}</strong><span>次批改</span></div></div>` : `<div class="empty-state"><div class="empty-icon">◌</div><strong>目前沒有作答紀錄</strong><p>完成第一輪練習後，這裡會顯示答對與答錯比例。</p></div>`;
    $('#outcome-legend').innerHTML = `<div class="outcome-legend-item"><span>答對</span><strong>${all.correct}</strong></div><div class="outcome-legend-item"><span>答錯</span><strong>${all.wrong}</strong></div><div class="outcome-legend-item"><span>歷史正確率</span><strong>${all.rate === null ? '—' : `${all.rate}%`}</strong></div>`;

    const maxAttempts = Math.max(1, ...stats.map(c => c.total));
    $('#volume-chart').innerHTML = stats.map(c => {
      const volumePct = c.total / maxAttempts * 100;
      const accuracyPct = c.rate === null ? 0 : c.rate;
      return `<div class="volume-row"><span class="volume-label" title="${escapeHtml(c.name)}">${escapeHtml(c.short)}</span><div class="volume-bar-area" title="${c.total} 題已作答，最近一次正確率 ${c.rate === null ? '無資料' : c.rate + '%'}"><span class="volume-bar-count" style="width:${Math.max(c.total ? 8 : 0, volumePct)}%"></span></div><span class="volume-count">${c.total} 題 · ${c.rate === null ? '—' : `${c.rate}%`}</span></div>`;
    }).join('');
    renderRecommendations(stats, best, weakest);
  }

  function renderRecommendations(stats, best, weakest) {
    const holder = $('#recommendations');
    const suggestions = [];
    const unanswered = stats.filter(c => c.total === 0);
    if (!state.attempts.length) {
      suggestions.push({ title: '先完成基線測驗', text: '先做一輪隨機題，取得各分類的初始表現；目前尚沒有可比較的作答數據。', action: '開始測驗', run: () => navigate('practice') });
      suggestions.push({ title: '先讀一個入門章節', text: '建議從「化工基礎與單位」建立系統邊界、單位與守恆的共同語言。', action: '開啟學習區', run: () => { activeLessonId = 'fundamentals'; navigate('learn'); renderLesson(activeLessonId); } });
    } else {
      if (weakest) suggestions.push({ title: `優先補強：${weakest.name}`, text: `最近一次掌握度 ${weakest.rate}%，已作答 ${weakest.total} 題。先讀本章核心概念與常見誤解，再針對此分類練習。`, action: '閱讀本章', run: () => { activeLessonId = weakest.id; navigate('learn'); renderLesson(activeLessonId); } });
      if (unanswered.length) {
        const next = unanswered[0]; suggestions.push({ title: `補齊尚未練習的分類：${next.name}`, text: `此分類尚無作答紀錄。補做後才能判斷是否真正掌握，不要將未作答視為低分。`, action: '開始練習', run: () => { $('#category-filter').value = next.id; navigate('practice'); startQuiz(); } });
      }
      if (best) suggestions.push({ title: `維持優勢：${best.name}`, text: `目前最近一次答對率 ${best.rate}%。隔一段時間再做幾題，檢查概念能否在沒有提示下保留。`, action: '再測一次', run: () => { $('#category-filter').value = best.id; navigate('practice'); startQuiz(); } });
      if (!pendingWrongIds().length && state.attempts.length) suggestions.push({ title: '安排間隔複習', text: '目前沒有最近一次答錯的題目。可改練不同分類或收藏容易混淆的概念。', action: '查看收藏', run: () => { reviewMode = 'saved'; $$('[data-review-mode]').forEach(b => b.classList.toggle('active', b.dataset.reviewMode === 'saved')); navigate('review'); renderReviewList(); } });
    }
    holder.innerHTML = suggestions.map((s, i) => `<div class="recommendation-item"><div class="recommendation-num">0${i + 1}</div><div><strong>${escapeHtml(s.title)}</strong><p>${escapeHtml(s.text)}</p><button data-recommend="${i}">${escapeHtml(s.action)} →</button></div></div>`).join('');
    holder.querySelectorAll('[data-recommend]').forEach(button => button.addEventListener('click', () => suggestions[Number(button.dataset.recommend)]?.run()));
  }

  function renderReviewList() {
    const holder = $('#review-list'); if (!holder) return;
    const latest = latestByQuestion();
    $('#review-wrong-count').textContent = pendingWrongIds().length;
    $('#review-saved-count').textContent = state.saved.length;
    $$('[data-review-mode]').forEach(button => button.classList.toggle('active', button.dataset.reviewMode === reviewMode));
    const search = ($('#review-search')?.value || '').trim().toLowerCase();
    let questions = DATA.questions;
    if (reviewMode === 'wrong') questions = questions.filter(q => latest.has(q.id) && !latest.get(q.id).correct);
    else if (reviewMode === 'saved') questions = questions.filter(q => state.saved.includes(q.id));
    questions = questions.filter(q => !search || q.statement.toLowerCase().includes(search) || q.explanation.toLowerCase().includes(search) || q.misconception.toLowerCase().includes(search) || categoryById.get(q.category)?.name.toLowerCase().includes(search) || String(q.sourceRef || '').toLowerCase().includes(search) || String(q.originalNo || '').includes(search));
    if (!questions.length) {
      const message = reviewMode === 'wrong' ? '目前沒有待複習錯題' : reviewMode === 'saved' ? '尚未收藏題目' : '沒有符合搜尋條件的題目';
      const detail = reviewMode === 'wrong' ? '完成測驗後，最近一次答錯的題目會自動出現在這裡。答對後便會離開待複習清單。' : '在測驗題目卡片按「收藏題目」，就能把易混淆的概念留在這裡。';
      holder.innerHTML = `<div class="empty-state"><div class="empty-icon">${reviewMode === 'wrong' ? '✓' : '☆'}</div><strong>${message}</strong><p>${detail}</p></div>`;
      return;
    }
    holder.innerHTML = questions.map(q => {
      const latestAttempt = latest.get(q.id);
      const isSaved = state.saved.includes(q.id);
      const pending = latestAttempt && !latestAttempt.correct;
      const category = categoryById.get(q.category);
      const correctText = `標準答案：${q.answer ? 'True' : 'False'}。`;
      return `<article class="review-card">
        <div class="review-card-top"><div class="review-card-meta"><span class="question-id">${escapeHtml(questionLabel(q))}</span><span class="question-category">${escapeHtml(category.short)}</span>${pending ? '<span class="status-pill wrong">待複習</span>' : latestAttempt ? '<span class="status-pill correct">最近答對</span>' : ''}${isSaved ? '<span class="status-pill saved">已收藏</span>' : ''}</div><span class="panel-kicker">${difficultyLabel(q)}</span></div>
        ${questionSource(q)}
        <p class="review-statement">${escapeHtml(q.statement)}</p>
        <p class="review-explanation"><b>${correctText}</b>${escapeHtml(q.explanation)}</p>
        <p class="review-explanation"><b>另一選項的常見誤解：</b>${escapeHtml(q.misconception)}</p>
        <div class="review-card-actions"><button class="primary-text" data-start-review="${q.id}">重新作答 →</button><button data-open-lesson="${q.lesson}">閱讀相關知識 ↗</button><button data-save-question="${q.id}">${isSaved ? '★ 取消收藏' : '☆ 收藏'}</button></div>
      </article>`;
    }).join('');
    holder.querySelectorAll('[data-start-review]').forEach(button => button.addEventListener('click', () => { navigate('practice'); startQuiz({ ids: [button.dataset.startReview] }); }));
    holder.querySelectorAll('[data-open-lesson]').forEach(button => button.addEventListener('click', () => { activeLessonId = button.dataset.openLesson; navigate('learn'); renderLesson(activeLessonId); }));
    holder.querySelectorAll('[data-save-question]').forEach(button => button.addEventListener('click', () => toggleSaved(button.dataset.saveQuestion)));
  }

  function resetProgress() {
    const ok = window.confirm('確定要重設本瀏覽器中的所有作答、錯題與收藏紀錄嗎？此操作無法還原。');
    if (!ok) return;
    state = defaultState(); persist(); renderGlobalStats(); renderAnalytics(); renderReviewList();
    $('#session-result').classList.add('hidden'); $('#quiz-panel').classList.add('hidden'); session = null;
    toast('已重設本機學習紀錄。');
  }

  function exportProgress() {
    const payload = {
      exportedAt: new Date().toISOString(),
      note: '此檔案包含本機學習紀錄；題庫為補充練習內容，不是原網站逐題翻譯版。',
      attempts: state.attempts,
      savedQuestionIds: state.saved,
      currentMasteryByQuestion: [...latestByQuestion().entries()].map(([id, result]) => ({ id, correct: result.correct, lastAnsweredAt: result.at })),
      categories: categoryStatsLatest().map(c => ({ category: c.name, attemptedQuestions: c.total, latestAccuracy: c.rate }))
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = `chem-eng-study-progress-${new Date().toISOString().slice(0,10)}.json`;
    document.body.append(a); a.click(); a.remove(); URL.revokeObjectURL(url); toast('已匯出學習紀錄 JSON。');
  }

  init();
})();
