/*
 * Supplemental practice bank for the ChemEng Study Lab.
 * These are newly authored review items, not a verified translation of the
 * linked 107-question source bank. Replace/extend this array with the source
 * items once the original question data is available.
 */
window.STUDY_DATA = {
  categories: [
    { id: 'fundamentals', name: '化工基礎與單位', short: '化工基礎', color: '#2563eb', description: '系統邊界、流程圖、單位與守恆觀念' },
    { id: 'material', name: '物料衡算', short: '物料衡算', color: '#0f766e', description: '流入、流出、累積、反應與循環流' },
    { id: 'energy', name: '能量衡算與熱力學', short: '能量／熱力學', color: '#b45309', description: '第一定律、熱、功、焓與理想氣體' },
    { id: 'fluid', name: '流體力學與輸送', short: '流體力學', color: '#7c3aed', description: '壓力、流量、雷諾數、泵與管路' },
    { id: 'heat', name: '熱傳', short: '熱傳', color: '#c2410c', description: '傳導、對流、輻射與熱交換器' },
    { id: 'mass', name: '質傳與分離程序', short: '質傳／分離', color: '#0369a1', description: '擴散、濃度、蒸餾與吸收' },
    { id: 'reaction', name: '反應工程、控制與安全', short: '反應／控制／安全', color: '#be123c', description: '反應速率、催化、回授控制與程序安全' }
  ],
  lessons: [
    {
      id: 'fundamentals', title: '化工基礎與單位', subtitle: '先把系統、變數與單位說清楚', level: '入門', duration: '約 8 分鐘',
      prerequisites: ['代數運算與比例', '基本物理量與 SI 單位', '質量、莫耳數與密度的意義'],
      objectives: ['辨認開放系統與封閉系統', '理解流程圖與 P&ID 的差異', '檢查方程式與工程量的單位一致性'],
      notes: [
        { heading: '1. 先定義系統與邊界', body: '系統是你選來分析的對象；邊界用來區分系統內外。開放系統（控制體積）允許物質穿越邊界；封閉系統不允許物質穿越，但仍可能有熱或功跨越邊界。絕熱是「不傳熱」，不是「不傳能量」。' },
        { heading: '2. 流程圖的層級', body: '方塊流程圖（BFD）呈現主要製程步驟；程序流程圖（PFD）通常標示主要設備、物流與重要操作條件；管線與儀表流程圖（P&ID）則進一步呈現管線、閥件、儀表與控制迴路。三者細節層級不同，不能視為同一張圖。' },
        { heading: '3. 單位分析', body: '量綱檢查可用來發現公式或計算的錯誤。例如功率的 SI 單位為 W，且 1 W = 1 J/s；壓力的 SI 單位為 Pa，且 1 Pa = 1 N/m²。質量分率與莫耳分率皆為無因次量，但分母不同。' },
        { heading: '4. 通用衡算式', body: '對一般物種或能量可先寫成：累積 = 流入 − 流出 + 生成 − 消耗。對總質量而言，化學反應不會創造或消滅總質量，因此在總質量衡算中生成與消耗項互相抵消；對單一化學物種則需要計入反應生成與消耗。' }
      ],
      formulas: ['功率：1 W = 1 J/s', '壓力：1 Pa = 1 N/m²', '通用衡算：累積 = 流入 − 流出 + 生成 − 消耗'],
      misconceptions: ['封閉系統仍可與外界交換熱或功。', '絕熱不等於等溫；絕熱只代表熱傳量為零。', '質量分率與莫耳分率不一定相等。'],
      example: '若 10 kg/s 的流體流入設備，穩態時有 8 kg/s 流出且沒有其他出口，則剩餘 2 kg/s 不可能在真正穩態下持續累積；代表資料、邊界或穩態假設至少有一項需要重新檢查。'
    },
    {
      id: 'material', title: '物料衡算', subtitle: '把每個物流與每個物種逐一列清楚', level: '基礎至中階', duration: '約 10 分鐘',
      prerequisites: ['質量與莫耳數換算', '分率與百分比', '聯立方程式'],
      objectives: ['建立穩態物料衡算', '區分總量與成分衡算', '理解反應、回收與排放流的作用'],
      notes: [
        { heading: '1. 穩態衡算', body: '穩態代表系統內的狀態量不隨時間改變，因此對物料而言，累積項為零。非反應、穩態系統的總質量流率滿足：總流入 = 總流出。若有化學反應，總質量仍守恆，但單一物種可能因反應而生成或消耗。' },
        { heading: '2. 質量分率與莫耳分率', body: '質量分率 wᵢ = 成分 i 的質量／混合物總質量；莫耳分率 xᵢ = 成分 i 的莫耳數／總莫耳數。兩者通常不同，除非各成分分子量條件特殊。完整混合物中，各成分分率總和應為 1。' },
        { heading: '3. 回收流與排放流', body: '回收流把未反應或尚可利用的物料送回前段，可能提高原料利用率；但回收不必然降低每一項新鮮進料需求，實際結果取決於分離效率、轉化率與製程限制。排放流（purge）常用來避免惰性物或雜質在循環迴路中無限累積。' },
        { heading: '4. 解題流程', body: '先畫流程圖並標出已知、未知及流向；選擇計算基準；寫總量衡算與適用的成分衡算；最後檢查分率是否合理、總輸入輸出是否一致，以及答案是否符合物理限制。' }
      ],
      formulas: ['質量分率：wᵢ = mᵢ / m_total', '莫耳分率：xᵢ = nᵢ / n_total', '非反應穩態：總流入 = 總流出'],
      misconceptions: ['穩態不代表流量一定為零，而是系統內的累積量不隨時間改變。', '回收流不會憑定義就保證降低所有新鮮進料。', '總質量衡算與單一物種衡算的反應項處理不同。'],
      example: '若混合物含 2 kg A 與 8 kg B，A 的質量分率是 2/(2+8)=0.20；若改用莫耳數計算，必須先將兩者各自的質量除以分子量。'
    },
    {
      id: 'energy', title: '能量衡算與熱力學', subtitle: '分辨能量如何跨越邊界、如何儲存', level: '基礎至中階', duration: '約 10 分鐘',
      prerequisites: ['功、熱與內能的基本概念', '溫度與壓力', '代數與單位換算'],
      objectives: ['說明熱力學第一定律', '區分熱、功與質量攜帶的能量', '判斷理想氣體模型的適用性'],
      notes: [
        { heading: '1. 熱力學第一定律', body: '第一定律是能量守恆。對系統做能量衡算時，可能需要考慮內能、動能、位能，以及熱、軸功與流體攜帶的焓等。不同教材的功正負號約定可能不同，解題時需先固定約定，並全程一致。' },
        { heading: '2. 熱與功不是物質屬性', body: '熱與功是能量跨越系統邊界的傳遞方式，不是系統「存有」的狀態量。內能與焓則是狀態量。封閉系統不讓質量穿越邊界，但可以因加熱或做功而改變能量。' },
        { heading: '3. 理想氣體', body: '理想氣體方程式 PV = nRT 是模型，不是所有狀態下都完全精確的自然定律。氣體在較低壓力、較高溫度且遠離凝結區域時，通常較接近理想氣體行為。固定莫耳數且等溫時，P 與 V 成反比。' },
        { heading: '4. 熱平衡與化學平衡', body: '熱平衡涉及溫度差消失；化學平衡涉及正、逆反應速率相等，巨觀組成不再淨變化。催化劑會影響到達平衡的速率，但在相同條件下不改變熱力學平衡常數。' }
      ],
      formulas: ['理想氣體：PV = nRT', '能量衡算的核心：能量累積 = 能量輸入 − 能量輸出'],
      misconceptions: ['熱與功是跨越邊界的傳遞，不是狀態量。', '理想氣體方程式有適用範圍。', '催化劑改變反應速率，不改變平衡常數。'],
      example: '氣體在固定溫度、固定莫耳數下由 2 L 膨脹到 4 L，理想氣體模型預測壓力變成原來的一半。'
    },
    {
      id: 'fluid', title: '流體力學與輸送', subtitle: '用流量、壓力與無因次數描述流動', level: '基礎至中階', duration: '約 9 分鐘',
      prerequisites: ['密度、速度與壓力', '面積與體積流率', '基本代數'],
      objectives: ['解讀雷諾數', '連結管截面積與平均流速', '理解泵、壓降與機械能'],
      notes: [
        { heading: '1. 流量與平均速度', body: '對穩態、不可壓縮、無分支且無洩漏的管段，體積流率 Q = v̄A 為常數。因此截面積縮小時，平均速度會增加。若流體可壓縮，密度改變時不能直接推定體積流率也固定；此時質量流率守恆更基本。' },
        { heading: '2. 雷諾數', body: '雷諾數 Re = ρvD/μ，代表慣性效應相對於黏滯效應的重要性。管內流動常以 Re 作為判別層流、過渡流與紊流的參考，但臨界範圍會受入口條件、粗糙度、擾動與幾何形狀影響。' },
        { heading: '3. 壓力與泵', body: '流體沿管路流動可能因摩擦而產生壓降，但壓力不會在所有流動情境下都單調下降；高度、截面變化、泵或渦輪機等都會影響機械能。泵通常向液體輸入機械能，克服高程差、摩擦與設備需求。' },
        { heading: '4. 壓力是局部狀態', body: '靜壓力、速度與高程要放在同一個機械能框架中比較。只看「有沒有流動」並不足以判斷靜壓力一定上升或下降。工程上還需區分表壓與絕對壓力。' }
      ],
      formulas: ['體積流率：Q = v̄A', '雷諾數：Re = ρvD/μ'],
      misconceptions: ['雷諾數是慣性效應與黏滯效應的比較，不是流速本身。', '靜壓不一定沿每一段流路單調下降。', '可壓縮流體不能僅以體積流率判斷質量守恆。'],
      example: '若同一不可壓縮液體流經截面積縮小為原本一半的管段，且穩態、無分支、無洩漏，平均流速會變為兩倍。'
    },
    {
      id: 'heat', title: '熱傳', subtitle: '辨認傳導、對流與輻射的機制', level: '入門至中階', duration: '約 8 分鐘',
      prerequisites: ['溫度與熱量', '面積、厚度與時間', '比例與簡單函數'],
      objectives: ['區分三種熱傳機制', '理解傅立葉定律的方向性', '辨認熱交換器的主要設計因子'],
      notes: [
        { heading: '1. 傳導、對流、輻射', body: '傳導是微觀能量傳遞，常在固體中重要；對流是流體運動與分子傳導共同作用的熱傳；輻射則透過電磁波傳遞，無需介質，也能在真空中進行。實際設備常同時出現多種機制。' },
        { heading: '2. 傅立葉定律', body: '對一維傳導，熱通量方向與溫度梯度相反：q″ = −k(dT/dx)。負號代表熱量自然由高溫往低溫傳遞。對平板、穩態、一維、熱導率固定且無內部熱生成的情況，溫度分布為線性。' },
        { heading: '3. 熱阻與面積', body: '在其他條件固定時，增加傳熱面積通常有助於提升總熱傳率；增加壁厚則通常提高導熱熱阻。若熱導率隨溫度變化、存在內部熱生成或幾何不是平板，簡單線性溫度分布不一定成立。' },
        { heading: '4. 熱交換器', body: '熱交換器設計常需考慮總傳熱係數 U、傳熱面積 A、平均溫差與流體配置。常見概念式為 Q̇ = UAΔTₗₘ；使用前需確認溫差定義、穩態假設與單位一致性。' }
      ],
      formulas: ['傅立葉定律：q″ = −k(dT/dx)', '熱交換器概念式：Q̇ = UAΔTₗₘ'],
      misconceptions: ['輻射不需要流體或固體介質。', '負溫度梯度與熱流方向的關係不能忽略。', '線性溫度分布需要特定幾何與穩態假設。'],
      example: '若熱交換器的傳熱面積增加而總傳熱係數、平均溫差及其他條件都近似不變，則傳熱率通常會提高。'
    },
    {
      id: 'mass', title: '質傳與分離程序', subtitle: '讓成分差異形成可利用的分離驅動力', level: '基礎至中階', duration: '約 9 分鐘',
      prerequisites: ['莫耳數與濃度', '分子運動的基本概念', '氣液平衡的直觀概念'],
      objectives: ['描述分子擴散', '區分莫耳分率與質量分率', '解釋蒸餾與吸收的分離原理'],
      notes: [
        { heading: '1. 擴散與濃度梯度', body: '分子擴散源於分子隨機運動與組成差異，即使沒有整體流體運動，也可能發生。依常見的 Fick 第一定律形式，擴散通量與濃度梯度成正比且方向相反；濃度梯度愈大，在擴散係數相同等條件下，擴散通量的絕對值通常愈大。' },
        { heading: '2. 濃度尺度', body: '質量分率以質量作為比例基準，莫耳分率以莫耳數作為比例基準。濃度也可能用 mol/m³、kmol/m³、質量濃度或其他單位表示；閱讀題目時必須先確認定義與單位。' },
        { heading: '3. 蒸餾與揮發度', body: '蒸餾利用混合物各成分揮發性或氣液平衡差異，透過氣液接觸產生組成分配。揮發性較高的成分通常更傾向進入氣相，但實際分離程度仍取決於平衡關係、回流、級數與操作條件。' },
        { heading: '4. 吸收', body: '吸收通常使氣相中的某成分轉移到液相溶劑中，靠兩相間的化學勢或濃度差提供傳質驅動力。吸收與蒸餾的主要分離機制不同，不能僅把它們都描述為「加熱讓某物蒸發」。' }
      ],
      formulas: ['Fick 定律常見形式：Jₐ = −Dₐᵦ(dCₐ/dz)', '莫耳分率：xᵢ = nᵢ/n_total'],
      misconceptions: ['擴散不必然需要整體流動。', '莫耳分率與質量分率使用不同的基準。', '蒸餾主要利用揮發性／氣液平衡差異；吸收主要促使氣體成分進入液相。'],
      example: '若兩側濃度差加大且擴散係數與幾何條件不變，依簡化 Fick 定律，擴散通量的大小會增加。'
    },
    {
      id: 'reaction', title: '反應工程、控制與安全', subtitle: '把反應速率、製程穩定與風險管理連起來', level: '基礎至中階', duration: '約 10 分鐘',
      prerequisites: ['化學反應式與化學計量', '函數與速率概念', '基本測量與控制概念'],
      objectives: ['區分反應速率與反應平衡', '理解催化劑的作用', '說明回授控制與程序安全的目的'],
      notes: [
        { heading: '1. 反應速率與反應級數', body: '反應速率描述反應物消耗或產物生成的快慢。速率式中的反應級數通常由實驗或機理分析決定，不一定等於總反應式中的化學計量係數。應避免只憑配平後的反應式直接判定速率式。' },
        { heading: '2. 溫度與催化劑', body: '許多反應的速率常數隨溫度上升而增加，可由 Arrhenius 關係理解，但實際觀察仍可能受相態、平衡、副反應、失活或傳質限制影響。催化劑提供不同反應路徑、降低活化能，通常加快正逆反應到達平衡；它不消耗於總反應式中，也不改變平衡常數。' },
        { heading: '3. 回授控制', body: '回授控制會量測系統輸出，將測量值與設定值比較，再調整操縱變數以降低偏差。控制器效果取決於感測器、控制器、致動器、製程動態與控制參數；回授控制不代表系統永遠不會有偏差或不穩定。' },
        { heading: '4. 程序安全', body: '危害辨識、風險評估、工程防護、警報、聯鎖與緊急應變需要在事故前規劃。壓力釋放裝置、聯鎖或其他安全功能不能在沒有核准程序的情況下任意隔離或停用。若發現異常，應依正式操作程序與受訓人員指示處理。' }
      ],
      formulas: ['Arrhenius 關係：k = A exp(−Eₐ/RT)', '回授概念：誤差 = 設定值 − 測量值'],
      misconceptions: ['反應級數不必然等於化學計量係數。', '催化劑改變反應途徑與速率，不改變平衡常數。', '安全分析應在運轉前進行，不能只靠事故後檢討。'],
      example: '若槽內溫度偏離設定值，回授控制會使用量測到的溫度偏差調整冷卻或加熱輸出；若感測器失準，回授動作也可能跟著錯誤。'
    }
  ],
  questions: [
    { id:'S001', category:'fundamentals', lesson:'fundamentals', difficulty:1, statement:'A dimensionless quantity has no physical unit.', answer:true, explanation:'無因次量由相同量綱的量相除或以其他無因次方式組成，因此不帶 SI 單位。數值仍可能有意義，例如雷諾數。', misconception:'不要把「無因次」理解成「沒有物理意義」；它只是沒有物理單位。', keywords:['units','dimensionless'] },
    { id:'S002', category:'fundamentals', lesson:'fundamentals', difficulty:1, statement:'The SI unit of pressure is the joule (J).', answer:false, explanation:'壓力的 SI 單位是 pascal（Pa），且 1 Pa = 1 N/m²。Joule 是能量單位。', misconception:'把壓力和能量混淆會造成量綱錯誤；Pa 與 J 的量綱不同。', keywords:['pressure','SI'] },
    { id:'S003', category:'fundamentals', lesson:'fundamentals', difficulty:1, statement:'A closed system can exchange energy with its surroundings even though mass cannot cross its boundary.', answer:true, explanation:'封閉系統禁止質量穿越邊界，但可以透過熱或功交換能量。', misconception:'「封閉」是指物質不穿越邊界，不代表隔熱或完全隔離。', keywords:['system','boundary'] },
    { id:'S004', category:'fundamentals', lesson:'fundamentals', difficulty:2, statement:'An adiabatic process must occur at constant temperature.', answer:false, explanation:'絕熱代表系統與環境之間的熱傳量為零，不代表溫度不變。壓縮、膨脹或有功輸入時，溫度仍可能改變。', misconception:'等溫是溫度維持不變；絕熱是沒有熱傳，兩個條件不同。', keywords:['adiabatic','isothermal'] },
    { id:'S005', category:'fundamentals', lesson:'fundamentals', difficulty:2, statement:'A piping and instrumentation diagram (P&ID) usually contains more piping and control detail than a block flow diagram.', answer:true, explanation:'BFD 著重主要製程步驟；P&ID 會細化管線、閥件、儀表與控制資訊。', misconception:'流程圖類型的差異在用途與細節，不是僅有排版不同。', keywords:['P&ID','flowsheet'] },
    { id:'S006', category:'fundamentals', lesson:'fundamentals', difficulty:2, statement:'One kilowatt is equal to one kilojoule per second.', answer:true, explanation:'kW 是功率單位，1 kW = 1000 W = 1000 J/s = 1 kJ/s。', misconception:'kW 表示能量傳遞速率；kJ 則是能量。', keywords:['power','unit conversion'] },

    { id:'S007', category:'material', lesson:'material', difficulty:1, statement:'At steady state, the mass accumulation inside a fixed control volume is zero.', answer:true, explanation:'穩態代表控制體積內的質量存量不隨時間改變，因此質量累積項為零。', misconception:'穩態不表示流入與流出為零；流體可以持續通過設備。', keywords:['steady state','accumulation'] },
    { id:'S008', category:'material', lesson:'material', difficulty:1, statement:'For a nonreactive process at steady state, the total mass flow rate entering equals the total mass flow rate leaving.', answer:true, explanation:'無反應且穩態時，總質量不累積也不生成或消失，因此總流入等於總流出。', misconception:'若有未納入邊界的支流、洩漏或累積，表面上的輸入輸出可能不相等。', keywords:['mass balance','steady state'] },
    { id:'S009', category:'material', lesson:'material', difficulty:1, statement:'The mass fraction of a component is always equal to its mole fraction.', answer:false, explanation:'質量分率以質量為基準，莫耳分率以莫耳數為基準；由於各成分分子量可能不同，兩者一般不相等。', misconception:'只有在特殊分子量組合或混合物條件下，數值才可能碰巧相同。', keywords:['mass fraction','mole fraction'] },
    { id:'S010', category:'material', lesson:'material', difficulty:2, statement:'In a complete mixture, the mass fractions of all components sum to one.', answer:true, explanation:'所有成分的質量加總等於混合物總質量，所以各質量分率加總為 1（或 100%）。', misconception:'若加總不是 1，應檢查是否漏掉成分、重複計算或使用不一致的基準。', keywords:['mass fraction','mixture'] },
    { id:'S011', category:'material', lesson:'material', difficulty:2, statement:'A purge stream can help prevent inert species from accumulating in a recycle loop.', answer:true, explanation:'若惰性物質持續進入而無法在主要反應或分離步驟中移除，排放一部分循環流可避免其無限累積。', misconception:'排放流會同時帶走部分有用物料，所以需要在純度、收率與成本間取捨。', keywords:['purge','recycle'] },
    { id:'S012', category:'material', lesson:'material', difficulty:2, statement:'A recycle stream always reduces the fresh-feed requirement, regardless of separation efficiency or process constraints.', answer:false, explanation:'回收流可能提高原料利用率，但實際新鮮進料量仍取決於轉化率、分離效率、排放需求與製程限制；「一定」過度絕對。', misconception:'回收的目標常是減少損失或提升整體轉化，但效果需由整體物料衡算確認。', keywords:['recycle','fresh feed'] },

    { id:'S013', category:'energy', lesson:'energy', difficulty:1, statement:'The first law of thermodynamics expresses conservation of energy.', answer:true, explanation:'第一定律指出能量不會憑空產生或消失，只會在形式之間轉換或跨越系統邊界傳遞。', misconception:'能量衡算要明確計入適用的熱、功、流動焓，以及動能和位能變化。', keywords:['first law','energy balance'] },
    { id:'S014', category:'energy', lesson:'energy', difficulty:1, statement:'Heat and work are state properties stored inside a system.', answer:false, explanation:'熱與功是能量跨越系統邊界的傳遞方式，不是系統內部的狀態量；內能與焓才是常見狀態量。', misconception:'不要把「系統有多少內能」和「過程中傳了多少熱或功」當成同一件事。', keywords:['heat','work','state property'] },
    { id:'S015', category:'energy', lesson:'energy', difficulty:2, statement:'For a fixed amount of ideal gas at constant temperature, pressure is inversely proportional to volume.', answer:true, explanation:'由 PV=nRT，在 n、T 固定時，PV 為常數，因此 P 與 V 成反比。', misconception:'這個關係依賴固定莫耳數、固定溫度與理想氣體近似，不可任意套用到所有狀態。', keywords:['ideal gas','Boyle law'] },
    { id:'S016', category:'energy', lesson:'energy', difficulty:2, statement:'The ideal-gas equation accurately describes every real gas at all pressures and temperatures.', answer:false, explanation:'理想氣體方程式是一種近似模型；真實氣體在高壓、低溫或接近相變時可能偏離理想行為。', misconception:'工程計算要依壓力、溫度與精度需求判斷模型是否適用。', keywords:['ideal gas','model'] },
    { id:'S017', category:'energy', lesson:'energy', difficulty:2, statement:'A catalyst changes the equilibrium constant of a chemical reaction.', answer:false, explanation:'催化劑能降低反應途徑的活化障礙、加快正逆反應，但不改變相同溫度下的熱力學平衡常數。', misconception:'催化劑幫助系統更快接近平衡，不會改變平衡時由熱力學決定的組成關係。', keywords:['catalyst','equilibrium'] },
    { id:'S018', category:'energy', lesson:'energy', difficulty:2, statement:'At thermal equilibrium, there is no net heat transfer driven by a temperature difference between the bodies in contact.', answer:true, explanation:'熱平衡表示接觸系統間沒有持續的淨熱傳驅動力；若存在溫差，熱會自發地由高溫處傳向低溫處。', misconception:'熱平衡不等同化學平衡，也不代表所有物理變化都停止。', keywords:['thermal equilibrium','heat transfer'] },

    { id:'S019', category:'fluid', lesson:'fluid', difficulty:1, statement:'The Reynolds number compares inertial effects with viscous effects in a flow.', answer:true, explanation:'Re = ρvD/μ，反映慣性效應相對黏滯效應的重要程度，是分析流動型態的常用無因次數。', misconception:'雷諾數不是流速本身；它也與密度、特徵長度及黏度有關。', keywords:['Reynolds number','viscosity'] },
    { id:'S020', category:'fluid', lesson:'fluid', difficulty:1, statement:'For steady incompressible flow through a pipe with no branches or leaks, volumetric flow rate is constant along the pipe.', answer:true, explanation:'在穩態、不可壓縮且沒有分支或洩漏時，連續方程式要求體積流率守恆。', misconception:'若流體可壓縮，密度改變時體積流率可以改變；質量流率守恆仍是關鍵。', keywords:['continuity','volumetric flow'] },
    { id:'S021', category:'fluid', lesson:'fluid', difficulty:2, statement:'The static pressure of a fluid must decrease whenever the fluid moves through a pipe.', answer:false, explanation:'靜壓變化取決於摩擦、速度、截面、高程，以及泵或其他設備；不是只要流動就必定單調下降。', misconception:'摩擦通常造成機械能損失，但局部靜壓仍可能因速度或高程變化而上升。', keywords:['static pressure','pressure drop'] },
    { id:'S022', category:'fluid', lesson:'fluid', difficulty:2, statement:'A pump supplies mechanical energy to the liquid flowing through it.', answer:true, explanation:'泵通常透過軸功向液體輸入機械能，以克服管路損失、高程差或設備壓力需求。', misconception:'泵不是能量來源的唯一形式；系統仍可能有馬達效率、熱損失與其他能量變化。', keywords:['pump','mechanical energy'] },
    { id:'S023', category:'fluid', lesson:'fluid', difficulty:2, statement:'If an incompressible fluid enters a pipe section whose area is halved, its average velocity must also be halved under steady flow.', answer:false, explanation:'由 Q=v̄A 且體積流率固定，面積減半時平均速度會加倍，而不是減半。', misconception:'截面積與平均速度在此條件下成反比。', keywords:['continuity','velocity'] },
    { id:'S024', category:'fluid', lesson:'fluid', difficulty:2, statement:'Pressure measured relative to local atmospheric pressure is called gauge pressure.', answer:true, explanation:'表壓是相對於當地大氣壓的壓力；絕對壓力則以完全真空為基準。', misconception:'表壓可為負值（低於大氣壓），但在常見工程條件下絕對壓力不會低於零。', keywords:['gauge pressure','absolute pressure'] },

    { id:'S025', category:'heat', lesson:'heat', difficulty:1, statement:'Thermal radiation can transfer energy through a vacuum.', answer:true, explanation:'輻射透過電磁波傳遞，不需要物質介質，因此能穿越真空。', misconception:'傳導與對流需要物質介質或流體參與；輻射不需要。', keywords:['radiation','heat transfer'] },
    { id:'S026', category:'heat', lesson:'heat', difficulty:1, statement:'Under ordinary passive conditions, heat spontaneously flows from a colder body to a hotter body without external work.', answer:false, explanation:'自發淨熱傳方向是由高溫到低溫；要把熱從冷處送到熱處，通常需要外部功，例如冰箱或熱泵。', misconception:'熱泵確實能把熱從低溫處移至高溫處，但不是無需外部能量的自發過程。', keywords:['heat flow','second law'] },
    { id:'S027', category:'heat', lesson:'heat', difficulty:2, statement:'Thermal conductivity is a property that characterizes a material’s ability to conduct heat.', answer:true, explanation:'熱導率 k 量化材料對導熱的能力；數值與材料及溫度等條件有關。', misconception:'熱導率不同於對流熱傳係數，兩者描述的機制與單位不同。', keywords:['thermal conductivity','conduction'] },
    { id:'S028', category:'heat', lesson:'heat', difficulty:2, statement:'For a plane wall with steady one-dimensional conduction, constant thermal conductivity, and no internal heat generation, the temperature profile is linear.', answer:true, explanation:'在這些假設下，導熱方程式簡化為 d²T/dx²=0，所以溫度隨厚度方向呈線性變化。', misconception:'若熱導率隨溫度變化、存在內部熱生成或屬於非平板幾何，溫度分布可能不是線性。', keywords:['Fourier law','temperature profile'] },
    { id:'S029', category:'heat', lesson:'heat', difficulty:2, statement:'Increasing heat-exchanger area can increase the heat-transfer rate when the overall heat-transfer coefficient and mean temperature difference remain unchanged.', answer:true, explanation:'常見估算式 Q̇ = UAΔTₗₘ；在 U 與平均溫差固定時，增加 A 會提高熱傳率。', misconception:'真實設計中增加面積可能伴隨壓降、污垢、成本與操作條件變化，需要整體評估。', keywords:['heat exchanger','area'] },
    { id:'S030', category:'heat', lesson:'heat', difficulty:2, statement:'Convection occurs only in solids and never in fluids.', answer:false, explanation:'對流與流體的整體運動有關，典型發生在液體與氣體中；固體內的主要熱傳機制通常是傳導。', misconception:'真實設備中的熱傳可能同時包含流體側對流、壁面傳導與輻射。', keywords:['convection','mechanism'] },

    { id:'S031', category:'mass', lesson:'mass', difficulty:1, statement:'Molecular diffusion can occur even when there is no bulk fluid motion.', answer:true, explanation:'分子隨機運動會造成成分淨傳遞，因此在靜止流體中也可能因濃度差而發生擴散。', misconception:'整體流動會造成對流傳質，但不是分子擴散的必要條件。', keywords:['diffusion','mass transfer'] },
    { id:'S032', category:'mass', lesson:'mass', difficulty:1, statement:'Mole fraction and mass fraction are interchangeable for every mixture.', answer:false, explanation:'兩者分別以莫耳數與質量為分母；不同成分的分子量通常使兩者數值不同。', misconception:'做物料衡算前要先確認題目指定的是質量基準或莫耳基準。', keywords:['mole fraction','mass fraction'] },
    { id:'S033', category:'mass', lesson:'mass', difficulty:2, statement:'For a fixed diffusivity and geometry, a larger concentration gradient generally produces a larger magnitude of diffusive flux.', answer:true, explanation:'依簡化 Fick 定律，擴散通量大小與濃度梯度大小成正比。', misconception:'要比較通量，還需確認擴散係數、方向、幾何與邊界條件是否固定。', keywords:['Fick law','concentration gradient'] },
    { id:'S034', category:'mass', lesson:'mass', difficulty:2, statement:'Distillation separates components primarily by differences in volatility and vapor–liquid equilibrium.', answer:true, explanation:'蒸餾利用成分在氣相與液相間分配的差異，揮發性與氣液平衡是核心。', misconception:'蒸餾不是單純依密度分層；若揮發性差異很小，分離可能更困難。', keywords:['distillation','volatility'] },
    { id:'S035', category:'mass', lesson:'mass', difficulty:2, statement:'Gas absorption is primarily a process in which a gas-phase component transfers into a liquid solvent.', answer:true, explanation:'吸收促使氣體中的目標成分進入液相，常藉由溶解度、化學反應或兩者共同提供分離效果。', misconception:'吸收與蒸餾的主要驅動及設備目的不同，不應視為同一程序。', keywords:['absorption','separation'] },
    { id:'S036', category:'mass', lesson:'mass', difficulty:2, statement:'A concentration gradient has no effect on diffusive mass transfer.', answer:false, explanation:'濃度梯度正是分子擴散的常見驅動力之一；在其他條件固定時，梯度愈大通常會造成較大的擴散通量。', misconception:'即使沒有整體流動，仍可能因濃度梯度而有淨擴散。', keywords:['diffusion','driving force'] },

    { id:'S037', category:'reaction', lesson:'reaction', difficulty:1, statement:'The reaction order in a rate law must always equal the stoichiometric coefficient in the balanced equation.', answer:false, explanation:'反應級數通常需由實驗或機理推導確定，不能只從總反應式的化學計量係數直接讀出；單一步驟基元反應是需特別判斷的情況。', misconception:'配平反應式主要描述物料關係，不足以單獨決定一般反應的速率式。', keywords:['reaction order','rate law'] },
    { id:'S038', category:'reaction', lesson:'reaction', difficulty:2, statement:'For many reactions, the rate constant increases with temperature over a normal operating range.', answer:true, explanation:'許多反應符合 Arrhenius 趨勢，溫度上升會使具有足夠能量的分子比例增加，反應速率常數通常上升。', misconception:'這不是能涵蓋所有複雜製程觀察的絕對規則；副反應、失活與傳質限制都可能影響量測結果。', keywords:['Arrhenius','temperature'] },
    { id:'S039', category:'reaction', lesson:'reaction', difficulty:2, statement:'A feedback controller adjusts its action using measurements of the process output.', answer:true, explanation:'回授控制將測量值與設定值比較，根據偏差調節操縱變數。', misconception:'回授的效果取決於感測器、控制器、致動器與製程動態，並不保證任何情況下都穩定。', keywords:['feedback control','setpoint'] },
    { id:'S040', category:'reaction', lesson:'reaction', difficulty:1, statement:'Process hazard identification should be carried out only after an accident occurs.', answer:false, explanation:'危害辨識與風險評估應在設計、變更與操作前持續進行，以預防事故，而不是只在事故後執行。', misconception:'事故調查可帶來改進，但不能取代事前預防與例行安全管理。', keywords:['process safety','hazard identification'] },
    { id:'S041', category:'reaction', lesson:'reaction', difficulty:2, statement:'A safety interlock may be designed to move equipment toward a safer state when a specified hazardous condition occurs.', answer:true, explanation:'聯鎖可在預先定義的條件下觸發安全動作，例如停止進料或進入核定的安全狀態；具體行為要依系統設計與操作程序。', misconception:'聯鎖不是可以任意旁路的便利功能，操作、測試與隔離都需遵守正式管理程序。', keywords:['interlock','safety'] },
    { id:'S042', category:'reaction', lesson:'reaction', difficulty:2, statement:'A pressure-relief device may be isolated during normal operation whenever it is inconvenient.', answer:false, explanation:'壓力釋放裝置是重要的壓力保護層，不能因不方便就任意隔離。任何測試、維護或隔離都必須符合核准程序與適用規範。', misconception:'若保護功能需要維修，必須由合格人員依管理程序評估風險與替代防護，而不是自行停用。', keywords:['pressure relief','process safety'] }
  ]
};
