# 化工概論學習實驗室（GitHub Pages 靜態網站）

這是一個不需要伺服器或登入的中文學習／英語是非題網站。將整個資料夾發布至 GitHub Pages 即可使用。

## 本版本功能

- 英文命題、True / False 作答；中文導覽、學習區與詳解。
- 每回合最多 3 題；整回合作答完才統一顯示答案。
- 每題皆包含正確觀念、另一選項的常見誤解，並可連到相關中文先備知識。
- 分類學習內容包含先備知識、學習目標、概念說明、公式、常見誤解及例題。
- 答對率、分類答對率、作答量與分類答對率比較圖。
- 自動整理待複習錯題、收藏、重做題目、搜尋、學習建議。
- localStorage 本機保存作答與收藏；可匯出 JSON 學習紀錄。
- 手機與桌面版響應式排版；不依賴外部圖表套件。

## 重要的題庫完整性說明

原始網站：<https://jerryhsu111111.github.io/midterm_practice/>。原始頁面標示 107 題，但本次可讀取的公開頁面內容沒有完整展開逐題題庫，因此 `data.js` 內暫時放入 **42 道新撰寫的補充練習題**，而非原網站 107 題的逐題英文翻譯。為避免偽造，補充題使用 `S001` 等識別碼，沒有冒用原題號或投影片頁碼。

要完成「原題 107 題全部英文命題」的最終版本，需取得可讀取的原始題目資料（例如原始 `index.html` 檔案或匯出的題庫 JSON），再將資料依 `data.js` 的結構轉換。學習區與測驗程式已分離，替換題目不需要改動畫面程式。

## 檔案結構

```text
chem-eng-study-site/
├── index.html   # 所有中文介面與各功能頁
├── styles.css   # 響應式樣式
├── data.js      # 分類、中文學習內容與題庫資料
├── app.js       # 測驗流程、詳解、紀錄、分析圖與錯題複習
└── README.md    # 使用與部署說明
```

## 發布到 GitHub Pages

1. 在 GitHub 建立一個新的 public repository。
2. 上傳這個資料夾內的五個檔案（不是只上傳 ZIP）。
3. 開啟 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**，Branch 選 `main`，資料夾選 `/(root)`，按 Save。
5. 等待 GitHub Pages 的部署工作完成後，使用設定頁顯示的網址。

若要放在既有 repo 的子路徑，保持 `index.html`、`styles.css`、`app.js`、`data.js` 位於同一層即可，不需要調整路徑。

## 如何新增或修正題目

在 `data.js` 的 `questions` 陣列新增物件，欄位如下：

```js
{
  id: 'S043',
  category: 'material',       // 必須是 categories / lessons 中存在的分類 id
  lesson: 'material',         // 對應中文學習區 id
  difficulty: 1,              // 1 = 基礎，2 = 進階
  statement: 'A sample statement in English.',
  answer: true,               // true 對應 True，false 對應 False
  explanation: '中文正確觀念與理由。',
  misconception: '說明另一選項為何不成立或常見誤解。',
  keywords: ['sample', 'concept']
}
```

題目文字 `statement` 請使用英文；其他介面與解釋使用中文。分類 id 應沿用現有分類，詳解中的「閱讀相關知識」會自動連到 `lesson` 指定的學習章節。

## 本機檢視

直接用瀏覽器開啟 `index.html` 即可。若瀏覽器對本機檔案或字型載入有限制，也可以在資料夾內執行簡易靜態伺服器：

```bash
python -m http.server 8000
```

再開啟 `http://localhost:8000`。

## 隱私

作答紀錄只保存在目前瀏覽器的 `localStorage`；不會傳送到任何伺服器。清除瀏覽器網站資料或按「重設紀錄」會移除相關學習紀錄。JSON 匯出檔也留在使用者自行下載的位置。
