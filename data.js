/* Generated course-aligned question bank. 107 translated source items + 44 newly authored midterm-style items + 42 original supplemental items. */
window.STUDY_DATA = {
  "categories": [
    {
      "id": "fundamentals",
      "name": "化工基礎與單位",
      "short": "化工基礎",
      "color": "#2563eb",
      "description": "系統邊界、流程圖、單位與守恆觀念"
    },
    {
      "id": "material",
      "name": "物料衡算",
      "short": "物料衡算",
      "color": "#0f766e",
      "description": "流入、流出、累積、反應與循環流"
    },
    {
      "id": "energy",
      "name": "能量衡算與熱力學",
      "short": "能量／熱力學",
      "color": "#b45309",
      "description": "第一定律、熱、功、焓與理想氣體"
    },
    {
      "id": "fluid",
      "name": "流體力學與輸送",
      "short": "流體力學",
      "color": "#7c3aed",
      "description": "壓力、流量、雷諾數、泵與管路"
    },
    {
      "id": "heat",
      "name": "熱傳",
      "short": "熱傳",
      "color": "#c2410c",
      "description": "傳導、對流、輻射與熱交換器"
    },
    {
      "id": "mass",
      "name": "質傳與分離程序",
      "short": "質傳／分離",
      "color": "#0369a1",
      "description": "擴散、濃度、蒸餾與吸收"
    },
    {
      "id": "reaction",
      "name": "反應工程、控制與安全",
      "short": "反應／控制／安全",
      "color": "#be123c",
      "description": "反應速率、催化、回授控制與程序安全"
    },
    {
      "id": "semiconductor",
      "name": "半導體產業與製程",
      "short": "半導體製程",
      "color": "#2563eb",
      "description": "供應鏈、製程圖案化、微影、蝕刻、互連、良率與先進封裝"
    },
    {
      "id": "industry",
      "name": "傳統化工與供應鏈",
      "short": "化工產業",
      "color": "#0f766e",
      "description": "青黴素發酵、合成氨、石化原料、聚合物、氫能與電子級化學品"
    },
    {
      "id": "thermodynamics",
      "name": "熱力學第二定律與熱機",
      "short": "熱機／相平衡",
      "color": "#b45309",
      "description": "熵、熱機、冰箱、熱泵、Carnot 極限、相圖與亞穩態"
    }
  ],
  "lessons": [
    {
      "id": "fundamentals",
      "title": "化工基礎與單位",
      "subtitle": "先把系統、變數與單位說清楚",
      "level": "入門",
      "duration": "約 8 分鐘",
      "prerequisites": [
        "代數運算與比例",
        "基本物理量與 SI 單位",
        "質量、莫耳數與密度的意義"
      ],
      "objectives": [
        "辨認開放系統與封閉系統",
        "理解流程圖與 P&ID 的差異",
        "檢查方程式與工程量的單位一致性",
        "辨別產品品質、產能、成本、安全及永續性之間的設計取捨",
        "區分製程可行性、反應速率與工業化可操作性"
      ],
      "notes": [
        {
          "heading": "1. 先定義系統與邊界",
          "body": "系統是你選來分析的對象；邊界用來區分系統內外。開放系統（控制體積）允許物質穿越邊界；封閉系統不允許物質穿越，但仍可能有熱或功跨越邊界。絕熱是「不傳熱」，不是「不傳能量」。"
        },
        {
          "heading": "2. 流程圖的層級",
          "body": "方塊流程圖（BFD）呈現主要製程步驟；程序流程圖（PFD）通常標示主要設備、物流與重要操作條件；管線與儀表流程圖（P&ID）則進一步呈現管線、閥件、儀表與控制迴路。三者細節層級不同，不能視為同一張圖。"
        },
        {
          "heading": "3. 單位分析",
          "body": "量綱檢查可用來發現公式或計算的錯誤。例如功率的 SI 單位為 W，且 1 W = 1 J/s；壓力的 SI 單位為 Pa，且 1 Pa = 1 N/m²。質量分率與莫耳分率皆為無因次量，但分母不同。"
        },
        {
          "heading": "4. 通用衡算式",
          "body": "對一般物種或能量可先寫成：累積 = 流入 − 流出 + 生成 − 消耗。對總質量而言，化學反應不會創造或消滅總質量，因此在總質量衡算中生成與消耗項互相抵消；對單一化學物種則需要計入反應生成與消耗。"
        },
        {
          "heading": "5. 工程設計的多目標取捨（ChE_01／ChE_03）",
          "body": "化工製程不能只追求最快反應或最高產品品質。設計時要同時考慮產量、產品規格、單位成本、設備需求、安全風險、廢棄物、能源與環境永續。題目若出現「只要……就不必考慮……」「必然越快越好」等絕對語句，應檢查它是否忽略其他約束。"
        },
        {
          "heading": "6. 可行性、平衡與速率是三個不同問題（ChE_01／ChE_04）",
          "body": "先問製程在物理與熱力學上是否可行，再問在目標條件下是否有足夠速率，最後問是否能以可接受成本、安全及規模實現。熱力學提供可行性與極限，動力學決定時間尺度，工程設計則處理輸送、控制、設備與經濟條件。"
        }
      ],
      "formulas": [
        "功率：1 W = 1 J/s",
        "壓力：1 Pa = 1 N/m²",
        "通用衡算：累積 = 流入 − 流出 + 生成 − 消耗",
        "工程問題檢查順序：可行性 → 速率／傳輸限制 → 設備與控制 → 成本、安全、永續"
      ],
      "misconceptions": [
        "封閉系統仍可與外界交換熱或功。",
        "絕熱不等於等溫；絕熱只代表熱傳量為零。",
        "質量分率與莫耳分率不一定相等。",
        "熱力學上可行不代表反應快，也不代表製程一定經濟可行。",
        "品質、速率、產能、成本、安全與永續必須一起評估。"
      ],
      "example": "若 10 kg/s 的流體流入設備，穩態時有 8 kg/s 流出且沒有其他出口，則剩餘 2 kg/s 不可能在真正穩態下持續累積；代表資料、邊界或穩態假設至少有一項需要重新檢查。",
      "sources": [
        "ChE_01_Intro_Syllabus_20260908.pdf：投影片 7–10、28",
        "ChE_03_ChE_Industry_20260929.pdf：投影片 5–8"
      ]
    },
    {
      "id": "material",
      "title": "物料衡算",
      "subtitle": "把每個物流與每個物種逐一列清楚",
      "level": "基礎至中階",
      "duration": "約 10 分鐘",
      "prerequisites": [
        "質量與莫耳數換算",
        "分率與百分比",
        "聯立方程式"
      ],
      "objectives": [
        "建立穩態物料衡算",
        "區分總量與成分衡算",
        "理解反應、回收與排放流的作用"
      ],
      "notes": [
        {
          "heading": "1. 穩態衡算",
          "body": "穩態代表系統內的狀態量不隨時間改變，因此對物料而言，累積項為零。非反應、穩態系統的總質量流率滿足：總流入 = 總流出。若有化學反應，總質量仍守恆，但單一物種可能因反應而生成或消耗。"
        },
        {
          "heading": "2. 質量分率與莫耳分率",
          "body": "質量分率 wᵢ = 成分 i 的質量／混合物總質量；莫耳分率 xᵢ = 成分 i 的莫耳數／總莫耳數。兩者通常不同，除非各成分分子量條件特殊。完整混合物中，各成分分率總和應為 1。"
        },
        {
          "heading": "3. 回收流與排放流",
          "body": "回收流把未反應或尚可利用的物料送回前段，可能提高原料利用率；但回收不必然降低每一項新鮮進料需求，實際結果取決於分離效率、轉化率與製程限制。排放流（purge）常用來避免惰性物或雜質在循環迴路中無限累積。"
        },
        {
          "heading": "4. 解題流程",
          "body": "先畫流程圖並標出已知、未知及流向；選擇計算基準；寫總量衡算與適用的成分衡算；最後檢查分率是否合理、總輸入輸出是否一致，以及答案是否符合物理限制。"
        }
      ],
      "formulas": [
        "質量分率：wᵢ = mᵢ / m_total",
        "莫耳分率：xᵢ = nᵢ / n_total",
        "非反應穩態：總流入 = 總流出"
      ],
      "misconceptions": [
        "穩態不代表流量一定為零，而是系統內的累積量不隨時間改變。",
        "回收流不會憑定義就保證降低所有新鮮進料。",
        "總質量衡算與單一物種衡算的反應項處理不同。"
      ],
      "example": "若混合物含 2 kg A 與 8 kg B，A 的質量分率是 2/(2+8)=0.20；若改用莫耳數計算，必須先將兩者各自的質量除以分子量。"
    },
    {
      "id": "energy",
      "title": "能量衡算與熱力學",
      "subtitle": "分辨能量如何跨越邊界、如何儲存",
      "level": "基礎至中階",
      "duration": "約 10 分鐘",
      "prerequisites": [
        "功、熱與內能的基本概念",
        "溫度與壓力",
        "代數與單位換算"
      ],
      "objectives": [
        "說明熱力學第一定律",
        "區分熱、功與質量攜帶的能量",
        "判斷理想氣體模型的適用性",
        "利用 E=PΔt、P_avg=E/Δt 進行功率與能量換算",
        "辨認汽油車與電動車比較中的能量系統邊界"
      ],
      "notes": [
        {
          "heading": "1. 熱力學第一定律",
          "body": "第一定律是能量守恆。對系統做能量衡算時，可能需要考慮內能、動能、位能，以及熱、軸功與流體攜帶的焓等。不同教材的功正負號約定可能不同，解題時需先固定約定，並全程一致。"
        },
        {
          "heading": "2. 熱與功不是物質屬性",
          "body": "熱與功是能量跨越系統邊界的傳遞方式，不是系統「存有」的狀態量。內能與焓則是狀態量。封閉系統不讓質量穿越邊界，但可以因加熱或做功而改變能量。"
        },
        {
          "heading": "3. 理想氣體",
          "body": "理想氣體方程式 PV = nRT 是模型，不是所有狀態下都完全精確的自然定律。氣體在較低壓力、較高溫度且遠離凝結區域時，通常較接近理想氣體行為。固定莫耳數且等溫時，P 與 V 成反比。"
        },
        {
          "heading": "4. 熱平衡與化學平衡",
          "body": "熱平衡涉及溫度差消失；化學平衡涉及正、逆反應速率相等，巨觀組成不再淨變化。催化劑會影響到達平衡的速率，但在相同條件下不改變熱力學平衡常數。"
        },
        {
          "heading": "5. 從功率反推能量，以及常見工程換算（ChE_04）",
          "body": "功率是能量流率，不是能量本身。恆定功率時 E=PΔt；平均功率 P_avg=E/Δt。1 W=1 J/s，1 kWh=3.6 MJ。若電費以 NTD/kWh 表示，先把金額除以單價求 kWh，再換成焦耳或熱量。計算前應將時間轉成與功率單位一致的單位。"
        },
        {
          "heading": "6. 比較車輛能源時先界定系統邊界（ChE_04／期中範例）",
          "body": "投影片以燃油車約 2.26 MJ/km、電動車電池約 0.6 MJ/km 作為端點能量比較。兩個數值有助於比較車端使用能量，但若要宣稱一次能源到車輪的整體效率，還需納入發電、燃料開採／精煉、充電與轉換損失。不要把不同系統邊界的能量數值直接當成相同效率指標。"
        },
        {
          "heading": "7. 同功率裝置與隔熱房間（ChE_04／期中範例）",
          "body": "若電腦與電暖器在房間內各自持續消耗 500 W，且電能最終都在房內轉成熱，兩者對房間的總能量輸入率近似相同。兩者的局部溫度分布、瞬態響應可能不同，但不能只因一個叫「電暖器」就推論它必定使整個房間升溫更快。"
        }
      ],
      "formulas": [
        "理想氣體：PV = nRT",
        "能量衡算的核心：能量累積 = 能量輸入 − 能量輸出",
        "1 kWh = 3.6 MJ = 3.6 × 10⁶ J",
        "平均功率：P_avg = E/Δt；恆功率下 E = PΔt",
        "電功率（題目適用條件下）：P = VI"
      ],
      "misconceptions": [
        "熱與功是跨越邊界的傳遞，不是狀態量。",
        "理想氣體方程式有適用範圍。",
        "催化劑改變反應速率，不改變平衡常數。",
        "kW 是功率，kWh 是能量；不能把 100 W 當成 100 J。",
        "同樣能量在較短時間釋放代表較高平均功率。",
        "端點能量使用量不同不會自動證明一次能源到車輪的整體效率差異。"
      ],
      "example": "氣體在固定溫度、固定莫耳數下由 2 L 膨脹到 4 L，理想氣體模型預測壓力變成原來的一半。",
      "sources": [
        "ChE_04_EMB_Thermo_20261013.pdf：投影片 9–18",
        "2026_Midterm_SampleProblems.pdf：第 1–3 頁"
      ]
    },
    {
      "id": "fluid",
      "title": "流體力學與輸送",
      "subtitle": "用流量、壓力與無因次數描述流動",
      "level": "基礎至中階",
      "duration": "約 9 分鐘",
      "prerequisites": [
        "密度、速度與壓力",
        "面積與體積流率",
        "基本代數"
      ],
      "objectives": [
        "解讀雷諾數",
        "連結管截面積與平均流速",
        "理解泵、壓降與機械能"
      ],
      "notes": [
        {
          "heading": "1. 流量與平均速度",
          "body": "對穩態、不可壓縮、無分支且無洩漏的管段，體積流率 Q = v̄A 為常數。因此截面積縮小時，平均速度會增加。若流體可壓縮，密度改變時不能直接推定體積流率也固定；此時質量流率守恆更基本。"
        },
        {
          "heading": "2. 雷諾數",
          "body": "雷諾數 Re = ρvD/μ，代表慣性效應相對於黏滯效應的重要性。管內流動常以 Re 作為判別層流、過渡流與紊流的參考，但臨界範圍會受入口條件、粗糙度、擾動與幾何形狀影響。"
        },
        {
          "heading": "3. 壓力與泵",
          "body": "流體沿管路流動可能因摩擦而產生壓降，但壓力不會在所有流動情境下都單調下降；高度、截面變化、泵或渦輪機等都會影響機械能。泵通常向液體輸入機械能，克服高程差、摩擦與設備需求。"
        },
        {
          "heading": "4. 壓力是局部狀態",
          "body": "靜壓力、速度與高程要放在同一個機械能框架中比較。只看「有沒有流動」並不足以判斷靜壓力一定上升或下降。工程上還需區分表壓與絕對壓力。"
        }
      ],
      "formulas": [
        "體積流率：Q = v̄A",
        "雷諾數：Re = ρvD/μ"
      ],
      "misconceptions": [
        "雷諾數是慣性效應與黏滯效應的比較，不是流速本身。",
        "靜壓不一定沿每一段流路單調下降。",
        "可壓縮流體不能僅以體積流率判斷質量守恆。"
      ],
      "example": "若同一不可壓縮液體流經截面積縮小為原本一半的管段，且穩態、無分支、無洩漏，平均流速會變為兩倍。"
    },
    {
      "id": "heat",
      "title": "熱傳",
      "subtitle": "辨認傳導、對流與輻射的機制",
      "level": "入門至中階",
      "duration": "約 8 分鐘",
      "prerequisites": [
        "溫度與熱量",
        "面積、厚度與時間",
        "比例與簡單函數"
      ],
      "objectives": [
        "區分三種熱傳機制",
        "理解傅立葉定律的方向性",
        "辨認熱交換器的主要設計因子"
      ],
      "notes": [
        {
          "heading": "1. 傳導、對流、輻射",
          "body": "傳導是微觀能量傳遞，常在固體中重要；對流是流體運動與分子傳導共同作用的熱傳；輻射則透過電磁波傳遞，無需介質，也能在真空中進行。實際設備常同時出現多種機制。"
        },
        {
          "heading": "2. 傅立葉定律",
          "body": "對一維傳導，熱通量方向與溫度梯度相反：q″ = −k(dT/dx)。負號代表熱量自然由高溫往低溫傳遞。對平板、穩態、一維、熱導率固定且無內部熱生成的情況，溫度分布為線性。"
        },
        {
          "heading": "3. 熱阻與面積",
          "body": "在其他條件固定時，增加傳熱面積通常有助於提升總熱傳率；增加壁厚則通常提高導熱熱阻。若熱導率隨溫度變化、存在內部熱生成或幾何不是平板，簡單線性溫度分布不一定成立。"
        },
        {
          "heading": "4. 熱交換器",
          "body": "熱交換器設計常需考慮總傳熱係數 U、傳熱面積 A、平均溫差與流體配置。常見概念式為 Q̇ = UAΔTₗₘ；使用前需確認溫差定義、穩態假設與單位一致性。"
        }
      ],
      "formulas": [
        "傅立葉定律：q″ = −k(dT/dx)",
        "熱交換器概念式：Q̇ = UAΔTₗₘ"
      ],
      "misconceptions": [
        "輻射不需要流體或固體介質。",
        "負溫度梯度與熱流方向的關係不能忽略。",
        "線性溫度分布需要特定幾何與穩態假設。"
      ],
      "example": "若熱交換器的傳熱面積增加而總傳熱係數、平均溫差及其他條件都近似不變，則傳熱率通常會提高。"
    },
    {
      "id": "mass",
      "title": "質傳與分離程序",
      "subtitle": "讓成分差異形成可利用的分離驅動力",
      "level": "基礎至中階",
      "duration": "約 9 分鐘",
      "prerequisites": [
        "莫耳數與濃度",
        "分子運動的基本概念",
        "氣液平衡的直觀概念"
      ],
      "objectives": [
        "描述分子擴散",
        "區分莫耳分率與質量分率",
        "解釋蒸餾與吸收的分離原理",
        "解釋反應器出口冷凝分離與未反應氣體回收",
        "辨認共沸對普通蒸餾分離極限的影響"
      ],
      "notes": [
        {
          "heading": "1. 擴散與濃度梯度",
          "body": "分子擴散源於分子隨機運動與組成差異，即使沒有整體流體運動，也可能發生。依常見的 Fick 第一定律形式，擴散通量與濃度梯度成正比且方向相反；濃度梯度愈大，在擴散係數相同等條件下，擴散通量的絕對值通常愈大。"
        },
        {
          "heading": "2. 濃度尺度",
          "body": "質量分率以質量作為比例基準，莫耳分率以莫耳數作為比例基準。濃度也可能用 mol/m³、kmol/m³、質量濃度或其他單位表示；閱讀題目時必須先確認定義與單位。"
        },
        {
          "heading": "3. 蒸餾與揮發度",
          "body": "蒸餾利用混合物各成分揮發性或氣液平衡差異，透過氣液接觸產生組成分配。揮發性較高的成分通常更傾向進入氣相，但實際分離程度仍取決於平衡關係、回流、級數與操作條件。"
        },
        {
          "heading": "4. 吸收",
          "body": "吸收通常使氣相中的某成分轉移到液相溶劑中，靠兩相間的化學勢或濃度差提供傳質驅動力。吸收與蒸餾的主要分離機制不同，不能僅把它們都描述為「加熱讓某物蒸發」。"
        },
        {
          "heading": "5. 蒸餾、冷凝與共沸（ChE_01／ChE_03／ChE_04）",
          "body": "蒸餾依據相對揮發度與氣液平衡，使較易進入氣相的成分在各級接觸中富集。合成氨可先冷卻使氨凝結，再將未反應氮氣和氫氣回收。並非所有混合物都能由普通蒸餾達到任意純度；乙醇–水的共沸組成會造成限制。分離設備與反應器、熱交換器和回收迴路共同構成完整製程。"
        },
        {
          "heading": "6. 物料衡算時分清單程轉化與整體回收（ChE_03）",
          "body": "反應器單程轉化率只描述一次通過反應器時反應物的轉化；若未反應物經分離後循環，工廠的整體原料利用率可能更高。衡算必須一致地選定控制體積，並把新鮮進料、回收流、排放流、產品和損失都納入。"
        }
      ],
      "formulas": [
        "Fick 定律常見形式：Jₐ = −Dₐᵦ(dCₐ/dz)",
        "莫耳分率：xᵢ = nᵢ/n_total"
      ],
      "misconceptions": [
        "擴散不必然需要整體流動。",
        "莫耳分率與質量分率使用不同的基準。",
        "蒸餾主要利用揮發性／氣液平衡差異；吸收主要促使氣體成分進入液相。",
        "蒸餾並非只用於酒精飲料，也不能保證所有混合物都能完全分離。",
        "單程轉化率與全流程原料利用率是不同指標。"
      ],
      "example": "若兩側濃度差加大且擴散係數與幾何條件不變，依簡化 Fick 定律，擴散通量的大小會增加。",
      "sources": [
        "ChE_03_ChE_Industry_20260929.pdf：投影片 12、16–20",
        "ChE_04_EMB_Thermo_20261013.pdf：投影片 34"
      ]
    },
    {
      "id": "reaction",
      "title": "反應工程、控制與安全",
      "subtitle": "把反應速率、製程穩定與風險管理連起來",
      "level": "基礎至中階",
      "duration": "約 10 分鐘",
      "prerequisites": [
        "化學反應式與化學計量",
        "函數與速率概念",
        "基本測量與控制概念"
      ],
      "objectives": [
        "區分反應速率與反應平衡",
        "理解催化劑的作用",
        "說明回授控制與程序安全的目的",
        "辨識反應控制、質傳控制與熱移除限制",
        "解釋發酵放大、氧氣供應、攪拌與溫度控制的取捨",
        "說明合成氨製程中的速率、平衡與催化劑功能"
      ],
      "notes": [
        {
          "heading": "1. 反應速率與反應級數",
          "body": "反應速率描述反應物消耗或產物生成的快慢。速率式中的反應級數通常由實驗或機理分析決定，不一定等於總反應式中的化學計量係數。應避免只憑配平後的反應式直接判定速率式。"
        },
        {
          "heading": "2. 溫度與催化劑",
          "body": "許多反應的速率常數隨溫度上升而增加，可由 Arrhenius 關係理解，但實際觀察仍可能受相態、平衡、副反應、失活或傳質限制影響。催化劑提供不同反應路徑、降低活化能，通常加快正逆反應到達平衡；它不消耗於總反應式中，也不改變平衡常數。"
        },
        {
          "heading": "3. 回授控制",
          "body": "回授控制會量測系統輸出，將測量值與設定值比較，再調整操縱變數以降低偏差。控制器效果取決於感測器、控制器、致動器、製程動態與控制參數；回授控制不代表系統永遠不會有偏差或不穩定。"
        },
        {
          "heading": "4. 程序安全",
          "body": "危害辨識、風險評估、工程防護、警報、聯鎖與緊急應變需要在事故前規劃。壓力釋放裝置、聯鎖或其他安全功能不能在沒有核准程序的情況下任意隔離或停用。若發現異常，應依正式操作程序與受訓人員指示處理。"
        },
        {
          "heading": "5. 反應速率、傳質與熱移除可能互相競爭（ChE_01／ChE_03）",
          "body": "觀察到的製程速率可能受本徵反應動力學、反應物輸送、氣液質傳或混合控制。木炭燃燒可能受氧氣傳輸限制；發酵槽需要供氧與適當攪拌；放熱反應器則需要確保移熱能力跟上熱生成。提高攪拌或溫度不保證每一項性能都改善。"
        },
        {
          "heading": "6. 青黴素發酵的放大例子（ChE_03）",
          "body": "課堂投影片把量產難題列為供氧、攪拌速度的取捨、反應器設計（例如死角）、監測，以及放熱與移熱的溫度控制。這些因素說明工業化不是把燒瓶等比例放大；流場、氣液界面、功率密度、熱交換面積及細胞耐受性都會改變。"
        },
        {
          "heading": "7. Haber–Bosch：速率與平衡轉化率（ChE_03）",
          "body": "N₂ + 3H₂ ⇌ 2NH₃ 是放熱反應。升溫一般可讓反應更快，但平衡會較不利於氨；升壓在簡化理想氣體定性判斷下有利於較少氣體莫耳數的一側。催化劑加速正、逆反應接近平衡，卻不改變固定溫度的平衡常數。工業流程還需分離氨、回收未反應氣體並管理熱量。"
        }
      ],
      "formulas": [
        "Arrhenius 關係：k = A exp(−Eₐ/RT)",
        "回授概念：誤差 = 設定值 − 測量值",
        "Haber–Bosch：N₂ + 3H₂ ⇌ 2NH₃（放熱）",
        "觀察速率可能受反應、混合、質傳或熱移除中的最慢環節限制"
      ],
      "misconceptions": [
        "反應級數不必然等於化學計量係數。",
        "催化劑改變反應途徑與速率，不改變平衡常數。",
        "安全分析應在運轉前進行，不能只靠事故後檢討。",
        "提高溫度可能增加速率但降低放熱反應的平衡轉化率。",
        "催化劑不改變固定溫度下的平衡常數。",
        "攪拌越快不是普遍成立的設計規則。"
      ],
      "example": "若槽內溫度偏離設定值，回授控制會使用量測到的溫度偏差調整冷卻或加熱輸出；若感測器失準，回授動作也可能跟著錯誤。",
      "sources": [
        "ChE_01_Intro_Syllabus_20260908.pdf：投影片 7、13–16",
        "ChE_03_ChE_Industry_20260929.pdf：投影片 6–12"
      ]
    },
    {
      "id": "semiconductor",
      "title": "半導體產業與製程",
      "subtitle": "把產業分工、微細圖案製造與良率串成一張流程圖",
      "level": "基礎至期中考應用",
      "duration": "約 15 分鐘",
      "prerequisites": [
        "微米與奈米的換算",
        "面積與比例縮放",
        "化學反應／物理製程的基本區分",
        "機率乘法與百分率"
      ],
      "objectives": [
        "區分 IC 設計、晶圓製造、封裝測試與材料設備供應",
        "依序理解薄膜沉積、光阻、微影、蝕刻與去光阻",
        "辨識 FEOL／BEOL、CMP、EUV 與先進封裝",
        "計算多步驟製程的總良率並理解污染控制"
      ],
      "notes": [
        {
          "heading": "1. 半導體產業不是單一工廠",
          "body": "依 ChE_02 投影片，產業包含 IC 設計、晶圓製造、封裝測試，以及材料、氣體和設備供應。晶圓代工（foundry）主要依客戶設計進行製造；供應商關係也從單純交貨逐步延伸到資格認證、製程整合、共同開發與持續改善。實際公司可能跨越多個環節，但回答概念題時要先辨認各環節的主要功能。"
        },
        {
          "heading": "2. 製程圖案化循環",
          "body": "投影片展示的基本流程包括薄膜沉積、光阻塗佈、微影曝光／顯影、蝕刻以及去光阻；各層可能重複多次。正型光阻曝光區通常變得較易被顯影液溶解。濕蝕刻利用液態化學品；乾蝕刻常使用氣相／電漿化學。不能把去光阻和蝕刻底層材料混為一談。"
        },
        {
          "heading": "3. FEOL、BEOL、CMP 與互連",
          "body": "FEOL（front-end-of-line）主要形成主動元件，例如電晶體；BEOL（back-end-of-line）主要形成金屬互連及相關介電層。CMP 結合化學作用與機械研磨以控制表面地形。薄膜厚度均勻不等於表面一定平坦；多層圖案的起伏常使平坦化仍然必要。銅互連通常涉及 damascene 類流程，不能假設和傳統鋁互連完全相同。"
        },
        {
          "heading": "4. 節點、EUV 與尺寸換算",
          "body": "現代製程節點名稱是技術世代標籤，不一定等於某個實際結構的寬度。EUV 波長約 13.5 nm；193 nm 對應常見的 ArF 深紫外微影。若長與寬都乘以 0.7，面積乘以 0.7²=0.49，約減半。把 50 μm 換算成奈米是 50,000 nm，可避免把頭髮尺度和電晶體特徵混淆。"
        },
        {
          "heading": "5. 為什麼良率會複利式下降",
          "body": "若每一步都必須成功且各步良率近似獨立，總良率為各步良率的乘積。每一步 90%、共 100 步時，總良率為 0.9^100，而不是 90%。粒子污染可能造成微小缺陷；HEPA 濾網的作用是去除空氣中的顆粒，不是提高晶圓導電率。先進製程需要同時控制粒子、化學、溫度、厚度、線寬及對位。"
        },
        {
          "heading": "6. Moore’s law 與 More than Moore",
          "body": "投影片將 Moore’s law 描述為晶片上電晶體數量隨世代增長的經驗趨勢，而不是能量守恆定律，也不表示某個電晶體尺寸每 18 個月增加一倍。More than Moore 強調功能整合與系統／封裝層級的整合，不只是不斷縮小單一電晶體。CoWoS、InFO 與 SoIC 是投影片介紹的先進封裝技術。"
        }
      ],
      "formulas": [
        "長寬縮放為 s 時，面積縮放為 s²",
        "多步驟總良率：Y_total = Π Y_i；相同良率 Y、共 n 步時 Y_total = Yⁿ",
        "1 μm = 1,000 nm；50 μm = 50,000 nm"
      ],
      "misconceptions": [
        "節點名稱不一定是實際 gate length 或所有結構的尺寸。",
        "正型光阻曝光區通常更容易顯影去除，不是更難溶解。",
        "薄膜厚度均勻不等於多層表面地形已平坦。",
        "HEPA 用於粒子控制，不是改變材料導電性。",
        "每一步高良率不代表長流程的總良率同樣高。"
      ],
      "example": "某製程有 20 個必須依序成功的步驟，每步良率皆為 99%。總良率約為 0.99²⁰=81.8%，已明顯低於單一步驟的 99%。若把每一步改善到 99.5%，總良率會變成 0.995²⁰≈90.5%。",
      "sources": [
        "ChE_02_IC_Industry_20260922.pdf：投影片 4–8、14–15、24–29、35–42",
        "2026_Midterm_SampleProblems.pdf：第 4–5 頁"
      ]
    },
    {
      "id": "industry",
      "title": "傳統化工與供應鏈",
      "subtitle": "從原料、反應器與分離設備一路追到產品及永續性",
      "level": "基礎至期中考應用",
      "duration": "約 15 分鐘",
      "prerequisites": [
        "化學式與配平反應式",
        "反應速率與平衡的差異",
        "基本流程圖與物料流概念",
        "聚合物與單體的名稱辨識"
      ],
      "objectives": [
        "理解供應鏈上游、中游與下游",
        "解釋化工反應從實驗室到量產的困難",
        "分析合成氨的速率、平衡、冷凝與回收",
        "辨識常見石化單體、聚合物與氫能路徑"
      ],
      "notes": [
        {
          "heading": "1. 製程設計是多目標取捨",
          "body": "ChE_03 的產業例子強調速率、成本、產量／密度、品質、安全、永續與舒適等因素需要一起考量。提高速率可能增加能源需求、熱移除負擔或副反應；只看產品品質或售價不足以證明製程可行。設計題應清楚指出目標與限制，避免用「一定越快越好」的絕對說法。"
        },
        {
          "heading": "2. 青黴素量產：放大不是等比例複製",
          "body": "投影片的青黴素歷史指出，從發現到量產需要多年工程發展。重要挑戰包含發酵槽供氧、攪拌過快或過慢、反應器死角／混合、溫度控制，以及放熱和移熱之間的平衡。放大設備時，混合、氣液質傳、功率需求與散熱不會自動保持同一比例，因此需要整體設計與監測。"
        },
        {
          "heading": "3. Haber–Bosch 合成氨",
          "body": "總反應為 N₂ + 3H₂ ⇌ 2NH₃，且為放熱反應。提高溫度常能加快反應，但會使放熱反應的平衡較不利於氨；提高壓力在理想氣體的定性判斷下有利於氣體莫耳數減少的一側，但壓縮成本與設備限制也重要。催化劑幫助正、逆反應更快達到平衡，不能改變平衡常數。"
        },
        {
          "heading": "4. 冷凝、分離與回收循環",
          "body": "反應器出口不是純氨。冷卻後氨可在適當條件下凝結，從未反應的 N₂ 和 H₂ 中分離出來，未反應氣體再循環使用。分離、壓縮、熱交換與反應器是相互連結的單元操作。物料衡算時需分清單程轉化率和整體原料利用率，並注意惰性物可能需要排放流避免累積。"
        },
        {
          "heading": "5. 石化供應鏈與聚合物",
          "body": "高層次供應鏈可分為上游基本原料、中游中間材料和下游製品。乙烷可經裂解製成乙烯，乙烯再聚合成聚乙烯（PE）。丙烯是聚丙烯（PP）的單體；PVC 的單體是氯乙烯（vinyl chloride），不是丙烯。鹼氯工業以鹽水為原料，電解可製得氯氣與氫氧化鈉，並常伴隨氫氣生成。"
        },
        {
          "heading": "6. 氫氣顏色與電子級化學品",
          "body": "常見教科書用法中，綠氫指再生電力電解水製氫；粉紅氫通常指核能電力電解水；藍氫通常指化石燃料製氫搭配碳捕捉與封存等措施。這些顏色是描述製程路徑，不代表 H₂ 分子不同，具體排放仍取決於系統邊界與上游排放。電子級化學品除了化學名稱，也必須控制純度及痕量雜質。"
        }
      ],
      "formulas": [
        "Haber–Bosch：N₂ + 3H₂ ⇌ 2NH₃",
        "總良率／總收率取決於串聯單元效率的乘積與回收流程",
        "物料衡算：累積 = 流入 − 流出 + 生成 − 消耗"
      ],
      "misconceptions": [
        "催化劑改變速率，不會改變固定溫度下的平衡常數。",
        "放熱反應提高溫度可能加快速率、但降低平衡轉化率。",
        "乙烷通常先轉成乙烯；PE 的單體是乙烯，PVC 的單體是氯乙烯。",
        "量產需要同時處理氧氣供應、混合、熱移除和分離回收。",
        "氫氣顏色分類描述製造路徑，並不表示分子種類不同。"
      ],
      "example": "若氨合成反應器中一部分 N₂ 與 H₂ 未反應，單程轉化率不等於整座工廠的總體原料利用率。產品冷凝後，未反應氣體可回收再進反應器；但實際設計還需考慮惰性物累積、壓縮功與分離效率。",
      "sources": [
        "ChE_01_Intro_Syllabus_20260908.pdf：投影片 8–10",
        "ChE_03_ChE_Industry_20260929.pdf：投影片 3–20",
        "2026_Midterm_SampleProblems.pdf：第 4 頁"
      ]
    },
    {
      "id": "thermodynamics",
      "title": "熱力學第二定律、熱機與相平衡",
      "subtitle": "第一定律管能量帳，第二定律限制方向與轉換上限",
      "level": "基礎至期中考計算",
      "duration": "約 18 分鐘",
      "prerequisites": [
        "能量與功率的單位換算",
        "攝氏與絕對溫度換算",
        "代數、比例與簡單指數",
        "熱與功的符號及能量衡算"
      ],
      "objectives": [
        "區分第一定律與第二定律",
        "計算 Carnot 熱機效率與冷凍機／熱泵 COP",
        "理解熵生成、熱泵能量平衡與封閉房間例題",
        "判讀三相點、臨界點、共沸與亞穩態"
      ],
      "notes": [
        {
          "heading": "1. 能量守恆不會告訴你所有方向",
          "body": "ChE_04 將質量衡算、能量衡算、動量衡算、熵衡算及通量與驅動力關係列為治理原則。第一定律追蹤能量的輸入、輸出與累積；但光靠能量守恆不能判斷某過程自發的方向。第二定律引入熵與不可逆性，限制熱不能在沒有外部效果的情況下自發地從低溫流向高溫，也限制循環熱機把單一熱源吸熱百分之百變為淨功。"
        },
        {
          "heading": "2. 熱機效率與 Kelvin 溫度",
          "body": "理想 Carnot 熱機效率為 η_C = 1 − T_L/T_H，其中 T_H、T_L 必須以 kelvin 表示。攝氏轉 Kelvin 的關係為 T(K)=T(°C)+273.15。提高熱端溫度、或在熱端固定時降低冷端溫度，會提高理想最大效率；但這是上限，不是實際電廠效率的直接保證。循環熱機的能量平衡為 Q̇_H = Ẇ_out + Q̇_L。"
        },
        {
          "heading": "3. 冰箱與熱泵：COP 不是熱效率",
          "body": "冰箱的目標是從低溫端移熱，COP_R = Q̇_L/Ẇ_in；熱泵的目標是把熱送到高溫端，COP_HP = Q̇_H/Ẇ_in。穩態循環能量平衡為 Q̇_H=Q̇_L+Ẇ_in。因為裝置也從環境搬運熱，所以 COP 可以大於 1，並不違反能量守恆。Carnot 逆循環的 COP 極限也需使用絕對溫度，例如 COP_R,C = T_L/(T_H−T_L)，COP_HP,C = T_H/(T_H−T_L)。"
        },
        {
          "heading": "4. 功率與能量、車輛比較",
          "body": "功率是能量流率，1 W=1 J/s；能量是累積量，1 kWh=3.6 MJ。若已知能量和時間，用 P_avg=E/Δt；若已知功率和時間，用 E=PΔt。投影片以汽油車約 2.26 MJ/km、電動車電池約 0.6 MJ/km 做比較，這反映不同車輛端點的能量使用，但因能量邊界不同，不能單憑這兩個值就推導一次能源到車輪的全鏈效率。"
        },
        {
          "heading": "5. 相圖、臨界點與共沸",
          "body": "水的三相點是固、液、氣三相共存的特定壓力與溫度。低於 1 atm 時水的沸點可低於 100°C。純物質高於臨界溫度後，不再有傳統液–氣共存邊界；若壓力也高於臨界壓力，可處於超臨界流體區。乙醇–水氣液平衡可能出現共沸點，使普通蒸餾無法跨越該組成而得到任意純度。"
        },
        {
          "heading": "6. 石墨與鑽石：穩定不代表立刻轉變",
          "body": "投影片碳相圖例子指出，常溫常壓下石墨在熱力學上比鑽石穩定，但鑽石可因轉成石墨的反應具有很高動力學障礙而長時間存在。應分別回答「哪個狀態較穩定」與「多久會轉變」。熱力學提供方向與極限，動力學提供變化速率。"
        },
        {
          "heading": "7. 絕熱房間、水霧扇與能量帳",
          "body": "水蒸發時會吸收汽化潛熱，能降低局部空氣的乾球溫度；高濕環境使蒸發較不容易，因此水霧扇效果降低。但在完全密閉、隔熱且無能量向外流出的房間中，水霧扇無法持續帶走全室總能量；電動機輸入的能量最終也會留在房間系統內。500 W 電腦與 500 W 電暖器運作同樣時間時，若所有電能都耗散在房間內，總能量輸入率近似相同。"
        }
      ],
      "formulas": [
        "1 kWh = 3.6 MJ；1 W = 1 J/s",
        "平均功率：P_avg = E/Δt；能量：E = PΔt",
        "Carnot 熱機：η_C = 1 − T_L/T_H（T 用 K）",
        "冰箱 COP_R = Q̇_L/Ẇ_in；熱泵 COP_HP = Q̇_H/Ẇ_in",
        "循環冷凍／熱泵：Q̇_H = Q̇_L + Ẇ_in",
        "Carnot 冰箱 COP_R,C = T_L/(T_H−T_L)；熱泵 COP_HP,C = T_H/(T_H−T_L)"
      ],
      "misconceptions": [
        "第一定律守恆能量；第二定律限制自發方向與轉換極限。",
        "Carnot 和 COP 溫度公式必須代入 Kelvin。",
        "COP 可以大於 1；它不是一般的能量轉換效率。",
        "熱泵輸出的熱包含輸入功及從低溫端吸收的熱。",
        "熱力學不穩定不代表會立刻消失，反應速率另受動力學控制。",
        "高於臨界溫度不會出現傳統液–氣相變；超臨界區需要同時高於臨界 T 與 P。",
        "總能量不能在隔熱密閉系統中被蒸發或其他操作憑空消除。"
      ],
      "example": "電廠熱端 500°C、冷端 30°C 時，先轉 Kelvin：T_H=773.15 K，T_L=303.15 K；Carnot 上限 η_C=1−303.15/773.15≈60.8%。若某熱泵輸入 1 kW 且 COP_HP=4，熱端供熱率為 4 kW，另外約 3 kW 來自低溫環境，能量帳仍然平衡。",
      "sources": [
        "ChE_04_EMB_Thermo_20261013.pdf：投影片 9–15、19–24、31–34",
        "2026_Midterm_SampleProblems.pdf：第 1–4 頁"
      ]
    }
  ],
  "questions": [
    {
      "id": "S001",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "statement": "A dimensionless quantity has no physical unit.",
      "answer": true,
      "explanation": "無因次量由相同量綱的量相除或以其他無因次方式組成，因此不帶 SI 單位。數值仍可能有意義，例如雷諾數。",
      "misconception": "不要把「無因次」理解成「沒有物理意義」；它只是沒有物理單位。",
      "keywords": [
        "units",
        "dimensionless"
      ],
      "order": 2001
    },
    {
      "id": "S002",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "statement": "The SI unit of pressure is the joule (J).",
      "answer": false,
      "explanation": "壓力的 SI 單位是 pascal（Pa），且 1 Pa = 1 N/m²。Joule 是能量單位。",
      "misconception": "把壓力和能量混淆會造成量綱錯誤；Pa 與 J 的量綱不同。",
      "keywords": [
        "pressure",
        "SI"
      ],
      "order": 2002
    },
    {
      "id": "S003",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "statement": "A closed system can exchange energy with its surroundings even though mass cannot cross its boundary.",
      "answer": true,
      "explanation": "封閉系統禁止質量穿越邊界，但可以透過熱或功交換能量。",
      "misconception": "「封閉」是指物質不穿越邊界，不代表隔熱或完全隔離。",
      "keywords": [
        "system",
        "boundary"
      ],
      "order": 2003
    },
    {
      "id": "S004",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 2,
      "statement": "An adiabatic process must occur at constant temperature.",
      "answer": false,
      "explanation": "絕熱代表系統與環境之間的熱傳量為零，不代表溫度不變。壓縮、膨脹或有功輸入時，溫度仍可能改變。",
      "misconception": "等溫是溫度維持不變；絕熱是沒有熱傳，兩個條件不同。",
      "keywords": [
        "adiabatic",
        "isothermal"
      ],
      "order": 2004
    },
    {
      "id": "S005",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 2,
      "statement": "A piping and instrumentation diagram (P&ID) usually contains more piping and control detail than a block flow diagram.",
      "answer": true,
      "explanation": "BFD 著重主要製程步驟；P&ID 會細化管線、閥件、儀表與控制資訊。",
      "misconception": "流程圖類型的差異在用途與細節，不是僅有排版不同。",
      "keywords": [
        "P&ID",
        "flowsheet"
      ],
      "order": 2005
    },
    {
      "id": "S006",
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 2,
      "statement": "One kilowatt is equal to one kilojoule per second.",
      "answer": true,
      "explanation": "kW 是功率單位，1 kW = 1000 W = 1000 J/s = 1 kJ/s。",
      "misconception": "kW 表示能量傳遞速率；kJ 則是能量。",
      "keywords": [
        "power",
        "unit conversion"
      ],
      "order": 2006
    },
    {
      "id": "S007",
      "category": "material",
      "lesson": "material",
      "difficulty": 1,
      "statement": "At steady state, the mass accumulation inside a fixed control volume is zero.",
      "answer": true,
      "explanation": "穩態代表控制體積內的質量存量不隨時間改變，因此質量累積項為零。",
      "misconception": "穩態不表示流入與流出為零；流體可以持續通過設備。",
      "keywords": [
        "steady state",
        "accumulation"
      ],
      "order": 2007
    },
    {
      "id": "S008",
      "category": "material",
      "lesson": "material",
      "difficulty": 1,
      "statement": "For a nonreactive process at steady state, the total mass flow rate entering equals the total mass flow rate leaving.",
      "answer": true,
      "explanation": "無反應且穩態時，總質量不累積也不生成或消失，因此總流入等於總流出。",
      "misconception": "若有未納入邊界的支流、洩漏或累積，表面上的輸入輸出可能不相等。",
      "keywords": [
        "mass balance",
        "steady state"
      ],
      "order": 2008
    },
    {
      "id": "S009",
      "category": "material",
      "lesson": "material",
      "difficulty": 1,
      "statement": "The mass fraction of a component is always equal to its mole fraction.",
      "answer": false,
      "explanation": "質量分率以質量為基準，莫耳分率以莫耳數為基準；由於各成分分子量可能不同，兩者一般不相等。",
      "misconception": "只有在特殊分子量組合或混合物條件下，數值才可能碰巧相同。",
      "keywords": [
        "mass fraction",
        "mole fraction"
      ],
      "order": 2009
    },
    {
      "id": "S010",
      "category": "material",
      "lesson": "material",
      "difficulty": 2,
      "statement": "In a complete mixture, the mass fractions of all components sum to one.",
      "answer": true,
      "explanation": "所有成分的質量加總等於混合物總質量，所以各質量分率加總為 1（或 100%）。",
      "misconception": "若加總不是 1，應檢查是否漏掉成分、重複計算或使用不一致的基準。",
      "keywords": [
        "mass fraction",
        "mixture"
      ],
      "order": 2010
    },
    {
      "id": "S011",
      "category": "material",
      "lesson": "material",
      "difficulty": 2,
      "statement": "A purge stream can help prevent inert species from accumulating in a recycle loop.",
      "answer": true,
      "explanation": "若惰性物質持續進入而無法在主要反應或分離步驟中移除，排放一部分循環流可避免其無限累積。",
      "misconception": "排放流會同時帶走部分有用物料，所以需要在純度、收率與成本間取捨。",
      "keywords": [
        "purge",
        "recycle"
      ],
      "order": 2011
    },
    {
      "id": "S012",
      "category": "material",
      "lesson": "material",
      "difficulty": 2,
      "statement": "A recycle stream always reduces the fresh-feed requirement, regardless of separation efficiency or process constraints.",
      "answer": false,
      "explanation": "回收流可能提高原料利用率，但實際新鮮進料量仍取決於轉化率、分離效率、排放需求與製程限制；「一定」過度絕對。",
      "misconception": "回收的目標常是減少損失或提升整體轉化，但效果需由整體物料衡算確認。",
      "keywords": [
        "recycle",
        "fresh feed"
      ],
      "order": 2012
    },
    {
      "id": "S013",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "statement": "The first law of thermodynamics expresses conservation of energy.",
      "answer": true,
      "explanation": "第一定律指出能量不會憑空產生或消失，只會在形式之間轉換或跨越系統邊界傳遞。",
      "misconception": "能量衡算要明確計入適用的熱、功、流動焓，以及動能和位能變化。",
      "keywords": [
        "first law",
        "energy balance"
      ],
      "order": 2013
    },
    {
      "id": "S014",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "statement": "Heat and work are state properties stored inside a system.",
      "answer": false,
      "explanation": "熱與功是能量跨越系統邊界的傳遞方式，不是系統內部的狀態量；內能與焓才是常見狀態量。",
      "misconception": "不要把「系統有多少內能」和「過程中傳了多少熱或功」當成同一件事。",
      "keywords": [
        "heat",
        "work",
        "state property"
      ],
      "order": 2014
    },
    {
      "id": "S015",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "statement": "For a fixed amount of ideal gas at constant temperature, pressure is inversely proportional to volume.",
      "answer": true,
      "explanation": "由 PV=nRT，在 n、T 固定時，PV 為常數，因此 P 與 V 成反比。",
      "misconception": "這個關係依賴固定莫耳數、固定溫度與理想氣體近似，不可任意套用到所有狀態。",
      "keywords": [
        "ideal gas",
        "Boyle law"
      ],
      "order": 2015
    },
    {
      "id": "S016",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "statement": "The ideal-gas equation accurately describes every real gas at all pressures and temperatures.",
      "answer": false,
      "explanation": "理想氣體方程式是一種近似模型；真實氣體在高壓、低溫或接近相變時可能偏離理想行為。",
      "misconception": "工程計算要依壓力、溫度與精度需求判斷模型是否適用。",
      "keywords": [
        "ideal gas",
        "model"
      ],
      "order": 2016
    },
    {
      "id": "S017",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "statement": "A catalyst changes the equilibrium constant of a chemical reaction.",
      "answer": false,
      "explanation": "催化劑能降低反應途徑的活化障礙、加快正逆反應，但不改變相同溫度下的熱力學平衡常數。",
      "misconception": "催化劑幫助系統更快接近平衡，不會改變平衡時由熱力學決定的組成關係。",
      "keywords": [
        "catalyst",
        "equilibrium"
      ],
      "order": 2017
    },
    {
      "id": "S018",
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "statement": "At thermal equilibrium, there is no net heat transfer driven by a temperature difference between the bodies in contact.",
      "answer": true,
      "explanation": "熱平衡表示接觸系統間沒有持續的淨熱傳驅動力；若存在溫差，熱會自發地由高溫處傳向低溫處。",
      "misconception": "熱平衡不等同化學平衡，也不代表所有物理變化都停止。",
      "keywords": [
        "thermal equilibrium",
        "heat transfer"
      ],
      "order": 2018
    },
    {
      "id": "S019",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 1,
      "statement": "The Reynolds number compares inertial effects with viscous effects in a flow.",
      "answer": true,
      "explanation": "Re = ρvD/μ，反映慣性效應相對黏滯效應的重要程度，是分析流動型態的常用無因次數。",
      "misconception": "雷諾數不是流速本身；它也與密度、特徵長度及黏度有關。",
      "keywords": [
        "Reynolds number",
        "viscosity"
      ],
      "order": 2019
    },
    {
      "id": "S020",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 1,
      "statement": "For steady incompressible flow through a pipe with no branches or leaks, volumetric flow rate is constant along the pipe.",
      "answer": true,
      "explanation": "在穩態、不可壓縮且沒有分支或洩漏時，連續方程式要求體積流率守恆。",
      "misconception": "若流體可壓縮，密度改變時體積流率可以改變；質量流率守恆仍是關鍵。",
      "keywords": [
        "continuity",
        "volumetric flow"
      ],
      "order": 2020
    },
    {
      "id": "S021",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 2,
      "statement": "The static pressure of a fluid must decrease whenever the fluid moves through a pipe.",
      "answer": false,
      "explanation": "靜壓變化取決於摩擦、速度、截面、高程，以及泵或其他設備；不是只要流動就必定單調下降。",
      "misconception": "摩擦通常造成機械能損失，但局部靜壓仍可能因速度或高程變化而上升。",
      "keywords": [
        "static pressure",
        "pressure drop"
      ],
      "order": 2021
    },
    {
      "id": "S022",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 2,
      "statement": "A pump supplies mechanical energy to the liquid flowing through it.",
      "answer": true,
      "explanation": "泵通常透過軸功向液體輸入機械能，以克服管路損失、高程差或設備壓力需求。",
      "misconception": "泵不是能量來源的唯一形式；系統仍可能有馬達效率、熱損失與其他能量變化。",
      "keywords": [
        "pump",
        "mechanical energy"
      ],
      "order": 2022
    },
    {
      "id": "S023",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 2,
      "statement": "If an incompressible fluid enters a pipe section whose area is halved, its average velocity must also be halved under steady flow.",
      "answer": false,
      "explanation": "由 Q=v̄A 且體積流率固定，面積減半時平均速度會加倍，而不是減半。",
      "misconception": "截面積與平均速度在此條件下成反比。",
      "keywords": [
        "continuity",
        "velocity"
      ],
      "order": 2023
    },
    {
      "id": "S024",
      "category": "fluid",
      "lesson": "fluid",
      "difficulty": 2,
      "statement": "Pressure measured relative to local atmospheric pressure is called gauge pressure.",
      "answer": true,
      "explanation": "表壓是相對於當地大氣壓的壓力；絕對壓力則以完全真空為基準。",
      "misconception": "表壓可為負值（低於大氣壓），但在常見工程條件下絕對壓力不會低於零。",
      "keywords": [
        "gauge pressure",
        "absolute pressure"
      ],
      "order": 2024
    },
    {
      "id": "S025",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 1,
      "statement": "Thermal radiation can transfer energy through a vacuum.",
      "answer": true,
      "explanation": "輻射透過電磁波傳遞，不需要物質介質，因此能穿越真空。",
      "misconception": "傳導與對流需要物質介質或流體參與；輻射不需要。",
      "keywords": [
        "radiation",
        "heat transfer"
      ],
      "order": 2025
    },
    {
      "id": "S026",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 1,
      "statement": "Under ordinary passive conditions, heat spontaneously flows from a colder body to a hotter body without external work.",
      "answer": false,
      "explanation": "自發淨熱傳方向是由高溫到低溫；要把熱從冷處送到熱處，通常需要外部功，例如冰箱或熱泵。",
      "misconception": "熱泵確實能把熱從低溫處移至高溫處，但不是無需外部能量的自發過程。",
      "keywords": [
        "heat flow",
        "second law"
      ],
      "order": 2026
    },
    {
      "id": "S027",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 2,
      "statement": "Thermal conductivity is a property that characterizes a material’s ability to conduct heat.",
      "answer": true,
      "explanation": "熱導率 k 量化材料對導熱的能力；數值與材料及溫度等條件有關。",
      "misconception": "熱導率不同於對流熱傳係數，兩者描述的機制與單位不同。",
      "keywords": [
        "thermal conductivity",
        "conduction"
      ],
      "order": 2027
    },
    {
      "id": "S028",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 2,
      "statement": "For a plane wall with steady one-dimensional conduction, constant thermal conductivity, and no internal heat generation, the temperature profile is linear.",
      "answer": true,
      "explanation": "在這些假設下，導熱方程式簡化為 d²T/dx²=0，所以溫度隨厚度方向呈線性變化。",
      "misconception": "若熱導率隨溫度變化、存在內部熱生成或屬於非平板幾何，溫度分布可能不是線性。",
      "keywords": [
        "Fourier law",
        "temperature profile"
      ],
      "order": 2028
    },
    {
      "id": "S029",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 2,
      "statement": "Increasing heat-exchanger area can increase the heat-transfer rate when the overall heat-transfer coefficient and mean temperature difference remain unchanged.",
      "answer": true,
      "explanation": "常見估算式 Q̇ = UAΔTₗₘ；在 U 與平均溫差固定時，增加 A 會提高熱傳率。",
      "misconception": "真實設計中增加面積可能伴隨壓降、污垢、成本與操作條件變化，需要整體評估。",
      "keywords": [
        "heat exchanger",
        "area"
      ],
      "order": 2029
    },
    {
      "id": "S030",
      "category": "heat",
      "lesson": "heat",
      "difficulty": 2,
      "statement": "Convection occurs only in solids and never in fluids.",
      "answer": false,
      "explanation": "對流與流體的整體運動有關，典型發生在液體與氣體中；固體內的主要熱傳機制通常是傳導。",
      "misconception": "真實設備中的熱傳可能同時包含流體側對流、壁面傳導與輻射。",
      "keywords": [
        "convection",
        "mechanism"
      ],
      "order": 2030
    },
    {
      "id": "S031",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 1,
      "statement": "Molecular diffusion can occur even when there is no bulk fluid motion.",
      "answer": true,
      "explanation": "分子隨機運動會造成成分淨傳遞，因此在靜止流體中也可能因濃度差而發生擴散。",
      "misconception": "整體流動會造成對流傳質，但不是分子擴散的必要條件。",
      "keywords": [
        "diffusion",
        "mass transfer"
      ],
      "order": 2031
    },
    {
      "id": "S032",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 1,
      "statement": "Mole fraction and mass fraction are interchangeable for every mixture.",
      "answer": false,
      "explanation": "兩者分別以莫耳數與質量為分母；不同成分的分子量通常使兩者數值不同。",
      "misconception": "做物料衡算前要先確認題目指定的是質量基準或莫耳基準。",
      "keywords": [
        "mole fraction",
        "mass fraction"
      ],
      "order": 2032
    },
    {
      "id": "S033",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 2,
      "statement": "For a fixed diffusivity and geometry, a larger concentration gradient generally produces a larger magnitude of diffusive flux.",
      "answer": true,
      "explanation": "依簡化 Fick 定律，擴散通量大小與濃度梯度大小成正比。",
      "misconception": "要比較通量，還需確認擴散係數、方向、幾何與邊界條件是否固定。",
      "keywords": [
        "Fick law",
        "concentration gradient"
      ],
      "order": 2033
    },
    {
      "id": "S034",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 2,
      "statement": "Distillation separates components primarily by differences in volatility and vapor–liquid equilibrium.",
      "answer": true,
      "explanation": "蒸餾利用成分在氣相與液相間分配的差異，揮發性與氣液平衡是核心。",
      "misconception": "蒸餾不是單純依密度分層；若揮發性差異很小，分離可能更困難。",
      "keywords": [
        "distillation",
        "volatility"
      ],
      "order": 2034
    },
    {
      "id": "S035",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 2,
      "statement": "Gas absorption is primarily a process in which a gas-phase component transfers into a liquid solvent.",
      "answer": true,
      "explanation": "吸收促使氣體中的目標成分進入液相，常藉由溶解度、化學反應或兩者共同提供分離效果。",
      "misconception": "吸收與蒸餾的主要驅動及設備目的不同，不應視為同一程序。",
      "keywords": [
        "absorption",
        "separation"
      ],
      "order": 2035
    },
    {
      "id": "S036",
      "category": "mass",
      "lesson": "mass",
      "difficulty": 2,
      "statement": "A concentration gradient has no effect on diffusive mass transfer.",
      "answer": false,
      "explanation": "濃度梯度正是分子擴散的常見驅動力之一；在其他條件固定時，梯度愈大通常會造成較大的擴散通量。",
      "misconception": "即使沒有整體流動，仍可能因濃度梯度而有淨擴散。",
      "keywords": [
        "diffusion",
        "driving force"
      ],
      "order": 2036
    },
    {
      "id": "S037",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "statement": "The reaction order in a rate law must always equal the stoichiometric coefficient in the balanced equation.",
      "answer": false,
      "explanation": "反應級數通常需由實驗或機理推導確定，不能只從總反應式的化學計量係數直接讀出；單一步驟基元反應是需特別判斷的情況。",
      "misconception": "配平反應式主要描述物料關係，不足以單獨決定一般反應的速率式。",
      "keywords": [
        "reaction order",
        "rate law"
      ],
      "order": 2037
    },
    {
      "id": "S038",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "statement": "For many reactions, the rate constant increases with temperature over a normal operating range.",
      "answer": true,
      "explanation": "許多反應符合 Arrhenius 趨勢，溫度上升會使具有足夠能量的分子比例增加，反應速率常數通常上升。",
      "misconception": "這不是能涵蓋所有複雜製程觀察的絕對規則；副反應、失活與傳質限制都可能影響量測結果。",
      "keywords": [
        "Arrhenius",
        "temperature"
      ],
      "order": 2038
    },
    {
      "id": "S039",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "statement": "A feedback controller adjusts its action using measurements of the process output.",
      "answer": true,
      "explanation": "回授控制將測量值與設定值比較，根據偏差調節操縱變數。",
      "misconception": "回授的效果取決於感測器、控制器、致動器與製程動態，並不保證任何情況下都穩定。",
      "keywords": [
        "feedback control",
        "setpoint"
      ],
      "order": 2039
    },
    {
      "id": "S040",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "statement": "Process hazard identification should be carried out only after an accident occurs.",
      "answer": false,
      "explanation": "危害辨識與風險評估應在設計、變更與操作前持續進行，以預防事故，而不是只在事故後執行。",
      "misconception": "事故調查可帶來改進，但不能取代事前預防與例行安全管理。",
      "keywords": [
        "process safety",
        "hazard identification"
      ],
      "order": 2040
    },
    {
      "id": "S041",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "statement": "A safety interlock may be designed to move equipment toward a safer state when a specified hazardous condition occurs.",
      "answer": true,
      "explanation": "聯鎖可在預先定義的條件下觸發安全動作，例如停止進料或進入核定的安全狀態；具體行為要依系統設計與操作程序。",
      "misconception": "聯鎖不是可以任意旁路的便利功能，操作、測試與隔離都需遵守正式管理程序。",
      "keywords": [
        "interlock",
        "safety"
      ],
      "order": 2041
    },
    {
      "id": "S042",
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "statement": "A pressure-relief device may be isolated during normal operation whenever it is inconvenient.",
      "answer": false,
      "explanation": "壓力釋放裝置是重要的壓力保護層，不能因不方便就任意隔離。任何測試、維護或隔離都必須符合核准程序與適用規範。",
      "misconception": "若保護功能需要維修，必須由合格人員依管理程序評估風險與替代防護，而不是自行停用。",
      "keywords": [
        "pressure relief",
        "process safety"
      ],
      "order": 2042
    },
    {
      "id": "Q001",
      "originalNo": 1,
      "order": 1,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 7 頁",
      "slideDeck": "ChE_01",
      "page": 7,
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The core curriculum of chemical engineering includes not only chemical reactions but also thermodynamics, fluid mechanics, heat and mass transfer, and separation processes.",
      "answer": true,
      "explanation": "Chemical engineering studies the design and operation of processes. Its core toolkit includes thermodynamics, transport phenomena, reaction engineering, and separations in addition to chemistry.",
      "misconception": "It is incorrect to reduce chemical engineering to reaction chemistry alone; transport, energy, and separation limitations often determine whether a process works at scale.",
      "keywords": [
        "fundamentals",
        "第一講：化工概論與產業",
        "Q1"
      ],
      "knowledgeLinks": [
        "fundamentals"
      ],
      "label": "原題 1"
    },
    {
      "id": "Q002",
      "originalNo": 2,
      "order": 2,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 7 頁",
      "slideDeck": "ChE_01",
      "page": 7,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Thermodynamics is mainly used to determine how fast a chemical reaction proceeds.",
      "answer": false,
      "explanation": "Thermodynamics addresses feasibility, equilibrium, and energy limits. Reaction kinetics describes how fast a reaction proceeds.",
      "misconception": "The statement confuses thermodynamic driving force and equilibrium with kinetics. A thermodynamically feasible reaction can still be extremely slow.",
      "keywords": [
        "thermodynamics",
        "第一講：化工概論與產業",
        "Q2"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 2"
    },
    {
      "id": "Q003",
      "originalNo": 3,
      "order": 3,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 7 頁",
      "slideDeck": "ChE_01",
      "page": 7,
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Even when a chemical reaction is thermodynamically feasible, its actual rate may be extremely slow.",
      "answer": true,
      "explanation": "Feasibility and rate are different questions. Thermodynamics indicates whether a process is favored under stated conditions; kinetics determines its timescale.",
      "misconception": "A favorable free-energy change does not guarantee a rapid reaction. Activation barriers and transport limitations can make it slow.",
      "keywords": [
        "fundamentals",
        "第一講：化工概論與產業",
        "Q3"
      ],
      "knowledgeLinks": [
        "fundamentals"
      ],
      "label": "原題 3"
    },
    {
      "id": "Q004",
      "originalNo": 4,
      "order": 4,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 7 頁",
      "slideDeck": "ChE_01",
      "page": 7,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Fluid mechanics and heat and mass transfer are relevant only to the petrochemical industry and have no direct connection to semiconductor manufacturing.",
      "answer": false,
      "explanation": "Semiconductor fabs rely on fluid delivery, gas flow, heat management, diffusion, cleaning, deposition, and etching, so transport phenomena are directly relevant.",
      "misconception": "These subjects are not restricted to petrochemicals; they help control chemicals, gases, heat, and contamination in semiconductor processes.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q4"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 4"
    },
    {
      "id": "Q005",
      "originalNo": 5,
      "order": 5,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 8 頁",
      "slideDeck": "ChE_01",
      "page": 8,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Modern chemical engineering industries include semiconductors, biotechnology, and functional materials in addition to traditional petrochemicals.",
      "answer": true,
      "explanation": "The lecture’s industry timeline includes fertilizers, textiles, plastics, petrochemicals, specialty materials, semiconductors, biotechnology, nanomaterials, AI, and net-zero-related developments.",
      "misconception": "Chemical engineering is broader than traditional oil refining and petrochemicals.",
      "keywords": [
        "industry",
        "第一講：化工概論與產業",
        "Q5"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 5"
    },
    {
      "id": "Q006",
      "originalNo": 6,
      "order": 6,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 9 頁",
      "slideDeck": "ChE_01",
      "page": 9,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "A modern semiconductor supplier generally only delivers products that meet specifications and does not need to participate in customers’ process development.",
      "answer": false,
      "explanation": "The lecture describes a shift toward process integration, technical partnership, supplier co-development, continuous improvement, and equipment-chamber matching.",
      "misconception": "Supplier relationships can extend beyond purchasing and delivery to joint troubleshooting and process development.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q6"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 6"
    },
    {
      "id": "Q007",
      "originalNo": 7,
      "order": 7,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 10 頁",
      "slideDeck": "ChE_01",
      "page": 10,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Growth in the AI-server industry can also increase demand for electricity, cooling, and specialty process chemicals.",
      "answer": true,
      "explanation": "The lecture uses AI servers to illustrate links among hardware sales, facility utilities, cooling, semiconductor manufacturing, specialty gases, and ESG concerns.",
      "misconception": "A server supply chain is not limited to the server hardware itself; its manufacturing and operation require substantial supporting utilities and materials.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q7"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 7"
    },
    {
      "id": "Q008",
      "originalNo": 8,
      "order": 8,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 13 頁",
      "slideDeck": "ChE_01",
      "page": 13,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The combustion rate of charcoal is determined entirely by the chemical reaction rate and is unrelated to oxygen transport.",
      "answer": false,
      "explanation": "Combustion can be limited by chemical kinetics, oxygen transport, or both. Improving oxygen supply may increase the rate when transport is limiting.",
      "misconception": "The overall rate is not always controlled by intrinsic reaction kinetics; delivery of oxygen to the reacting surface can be rate-limiting.",
      "keywords": [
        "reaction",
        "第一講：化工概論與產業",
        "Q8"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 8"
    },
    {
      "id": "Q009",
      "originalNo": 9,
      "order": 9,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 13 頁",
      "slideDeck": "ChE_01",
      "page": 13,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Increasing oxygen supply and mass-transfer rates can accelerate combustion when oxygen transport is the limiting step.",
      "answer": true,
      "explanation": "When oxygen delivery limits combustion, enhancing gas transport to the reaction zone can increase the observed rate.",
      "misconception": "More oxygen does not automatically remove every limitation, but transport-limited combustion can respond to improved oxygen delivery.",
      "keywords": [
        "reaction",
        "第一講：化工概論與產業",
        "Q9"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 9"
    },
    {
      "id": "Q010",
      "originalNo": 10,
      "order": 10,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 14 頁",
      "slideDeck": "ChE_01",
      "page": 14,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Two batteries storing the same amount of energy must have the same average power even if they release that energy over different time intervals.",
      "answer": false,
      "explanation": "Average power is energy transferred divided by elapsed time, P_avg = E/Δt. The same energy released in a shorter time corresponds to higher average power.",
      "misconception": "Energy is an amount; power is an energy-transfer rate. Equal energy does not imply equal power unless the relevant time intervals are equal.",
      "keywords": [
        "energy",
        "第一講：化工概論與產業",
        "Q10"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 10"
    },
    {
      "id": "Q011",
      "originalNo": 11,
      "order": 11,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 14 頁",
      "slideDeck": "ChE_01",
      "page": 14,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "type": "true_false",
      "statement": "An energy amount of 100 kWh is approximately equal to 360 MJ.",
      "answer": true,
      "explanation": "One kWh equals 3.6 MJ, so 100 kWh = 360 MJ.",
      "misconception": "Do not confuse kW, a unit of power, with kWh, a unit of energy.",
      "keywords": [
        "energy",
        "第一講：化工概論與產業",
        "Q11"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 11"
    },
    {
      "id": "Q012",
      "originalNo": 12,
      "order": 12,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 14 頁",
      "slideDeck": "ChE_01",
      "page": 14,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Battery thermal runaway can be analyzed by considering stored electrical energy alone, without considering heat generation, heat transfer, or heat removal.",
      "answer": false,
      "explanation": "Thermal runaway is a coupled electrochemical and thermal phenomenon. Heat generation, heat transfer, cooling, and temperature-dependent reactions matter.",
      "misconception": "Stored electrical energy alone does not describe the thermal dynamics or the balance between heat generation and removal.",
      "keywords": [
        "energy",
        "第一講：化工概論與產業",
        "Q12"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 12"
    },
    {
      "id": "Q013",
      "originalNo": 13,
      "order": 13,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 15 頁",
      "slideDeck": "ChE_01",
      "page": 15,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The Haber–Bosch ammonia process must balance reaction rate against equilibrium conversion.",
      "answer": true,
      "explanation": "The synthesis reaction is exothermic and gas-mole-reducing. Higher temperature often improves rate but reduces equilibrium conversion, so operating conditions involve trade-offs.",
      "misconception": "Maximizing rate alone or equilibrium conversion alone is not sufficient; the process must balance kinetics, thermodynamics, and economics.",
      "keywords": [
        "reaction",
        "第一講：化工概論與產業",
        "Q13"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 13"
    },
    {
      "id": "Q014",
      "originalNo": 14,
      "order": 14,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 16 頁",
      "slideDeck": "ChE_01",
      "page": 16,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "An ammonia synthesis plant requires only a chemical reactor; gas separation, compression, and heat-exchange equipment are unnecessary.",
      "answer": false,
      "explanation": "Industrial ammonia synthesis includes feed conditioning and compression, catalytic reaction, heat recovery, cooling/condensation, product separation, and recycle.",
      "misconception": "A reaction vessel by itself is not a complete industrial process. Separation and recycle are essential to recover ammonia and reuse unreacted gases.",
      "keywords": [
        "industry",
        "第一講：化工概論與產業",
        "Q14"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 14"
    },
    {
      "id": "Q015",
      "originalNo": 15,
      "order": 15,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 19 頁",
      "slideDeck": "ChE_01",
      "page": 19,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Producing high-purity silicon can involve converting silicon into a chemical compound that can be purified before silicon is recovered.",
      "answer": true,
      "explanation": "The lecture describes chemical routes that convert silicon-containing feed into a purifiable compound, followed by purification and deposition to obtain high-purity silicon.",
      "misconception": "High-purity silicon is not generally obtained merely by mechanically cleaning metallurgical-grade silicon; chemical conversion enables separation from impurities.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q15"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 15"
    },
    {
      "id": "Q016",
      "originalNo": 16,
      "order": 16,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 18 頁",
      "slideDeck": "ChE_01",
      "page": 18,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Metallurgical-grade silicon, at roughly 99.9% purity, directly meets the purity requirements of all advanced semiconductor processes.",
      "answer": false,
      "explanation": "Semiconductor applications require much higher purity than typical metallurgical-grade silicon. Additional chemical purification is needed.",
      "misconception": "A purity of 99.9% still leaves about one part in a thousand as impurities, far too high for many semiconductor applications.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q16"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 16"
    },
    {
      "id": "Q017",
      "originalNo": 17,
      "order": 17,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 19 頁",
      "slideDeck": "ChE_01",
      "page": 19,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Trichlorosilane can be purified by distillation and then used in producing high-purity silicon.",
      "answer": true,
      "explanation": "The lecture presents a chemical-purification route involving trichlorosilane, separation/purification, and subsequent silicon deposition.",
      "misconception": "Distillation is not limited to beverage alcohol; it is an important industrial separation method for suitable chemical mixtures.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q17"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 17"
    },
    {
      "id": "Q018",
      "originalNo": 18,
      "order": 18,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 20 頁",
      "slideDeck": "ChE_01",
      "page": 20,
      "category": "mass",
      "lesson": "mass",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Distillation is suitable only for alcoholic beverages and cannot be used to purify semiconductor materials.",
      "answer": false,
      "explanation": "Distillation separates components using vapor–liquid equilibrium and relative volatility. It is used broadly in chemical and high-purity material production.",
      "misconception": "Its application is not limited to beverages; the method is useful wherever volatility differences enable separation.",
      "keywords": [
        "mass",
        "第一講：化工概論與產業",
        "Q18"
      ],
      "knowledgeLinks": [
        "mass"
      ],
      "label": "原題 18"
    },
    {
      "id": "Q019",
      "originalNo": 19,
      "order": 19,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 21 頁",
      "slideDeck": "ChE_01",
      "page": 21,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Taiwan’s chemical industry has developed through multiple stages, including fertilizers, textiles, plastics, petrochemicals, and specialty materials.",
      "answer": true,
      "explanation": "The lecture’s timeline shows a broad industrial progression from fertilizer to textiles/plastics/rubber, petrochemicals, specialty materials, semiconductors, biotechnology, and newer technology sectors.",
      "misconception": "The development of Taiwan’s chemical industry is not a single-industry history; the slide places it in a series of overlapping sectors.",
      "keywords": [
        "industry",
        "第一講：化工概論與產業",
        "Q19"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 19"
    },
    {
      "id": "Q020",
      "originalNo": 20,
      "order": 20,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 22 頁",
      "slideDeck": "ChE_01",
      "page": 22,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The diameter of a human hair is about 50 nm, which is comparable to the feature size of an advanced transistor.",
      "answer": false,
      "explanation": "A typical human hair is on the order of tens of micrometres, such as about 50 μm, not 50 nm. A micrometre is 1,000 times a nanometre.",
      "misconception": "The statement confuses micrometres with nanometres. A 50 μm hair is about 50,000 nm across.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q20"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 20"
    },
    {
      "id": "Q022",
      "originalNo": 22,
      "order": 22,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 25 頁",
      "slideDeck": "ChE_01",
      "page": 25,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Moore’s law states that the physical size of an individual transistor must double every 18 months.",
      "answer": false,
      "explanation": "The lecture describes Moore’s law as a trend in the number of transistors on a microchip doubling on a timescale such as 18 months; it is not a rule that a single transistor must grow in size.",
      "misconception": "The claim reverses and misstates the trend. Moore’s law concerns transistor count/density trends, not an individual transistor becoming larger.",
      "keywords": [
        "semiconductor",
        "第一講：化工概論與產業",
        "Q22"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 22"
    },
    {
      "id": "Q023",
      "originalNo": 23,
      "order": 23,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 28 頁",
      "slideDeck": "ChE_01",
      "page": 28,
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Product quality and process throughput are distinct, important design objectives in chemical engineering.",
      "answer": true,
      "explanation": "A process must meet product specifications while achieving a suitable production rate or throughput. These are related but separate performance measures.",
      "misconception": "A high-quality product does not automatically imply adequate capacity, and high throughput alone does not guarantee product quality.",
      "keywords": [
        "fundamentals",
        "第一講：化工概論與產業",
        "Q23"
      ],
      "knowledgeLinks": [
        "fundamentals"
      ],
      "label": "原題 23"
    },
    {
      "id": "Q024",
      "originalNo": 24,
      "order": 24,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 28 頁",
      "slideDeck": "ChE_01",
      "page": 28,
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "type": "true_false",
      "statement": "If a chemical product has sufficiently high quality, production cost, safety, and environmental sustainability do not need to be considered.",
      "answer": false,
      "explanation": "Chemical process design must consider quality, cost, throughput, safety, environmental impact, and sustainability together.",
      "misconception": "Quality is only one design objective. A costly, unsafe, or environmentally unacceptable process is not satisfactory merely because its product meets specifications.",
      "keywords": [
        "fundamentals",
        "第一講：化工概論與產業",
        "Q24"
      ],
      "knowledgeLinks": [
        "fundamentals"
      ],
      "label": "原題 24"
    },
    {
      "id": "Q025",
      "originalNo": 25,
      "order": 25,
      "sourceType": "original-bank",
      "sourceFile": "ChE_01",
      "lecture": "第一講：化工概論與產業",
      "sourceRef": "ChE_01 · 第 28 頁",
      "slideDeck": "ChE_01",
      "page": 28,
      "category": "fundamentals",
      "lesson": "fundamentals",
      "difficulty": 1,
      "type": "true_false",
      "statement": "In chemical process design, a faster reaction or production rate is not necessarily better in every situation.",
      "answer": true,
      "explanation": "Higher rates can require more energy, create greater heat-removal demands, increase side reactions, or compromise safety and quality. The best operating point balances several objectives.",
      "misconception": "The fastest possible rate is not automatically the best engineering outcome; cost, selectivity, controllability, and safe heat removal also matter.",
      "keywords": [
        "fundamentals",
        "第一講：化工概論與產業",
        "Q25"
      ],
      "knowledgeLinks": [
        "fundamentals"
      ],
      "label": "原題 25"
    },
    {
      "id": "Q029",
      "originalNo": 29,
      "order": 29,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 5 頁",
      "slideDeck": "ChE_02",
      "page": 5,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Moore’s law is a fundamental physical law derived from conservation of energy.",
      "answer": false,
      "explanation": "Moore’s law is an empirical industry observation/trend about transistor counts, not a thermodynamic law derived from energy conservation.",
      "misconception": "The fact that a trend is widely cited does not make it a fundamental conservation law.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q29"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 29"
    },
    {
      "id": "Q030",
      "originalNo": 30,
      "order": 30,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 11 頁",
      "slideDeck": "ChE_02",
      "page": 11,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If both the length and width of a device feature are reduced to 0.7 of their original values, its area becomes approximately half of the original area.",
      "answer": true,
      "explanation": "Area scales as length × width. If both dimensions scale by 0.7, the area factor is 0.7² = 0.49, approximately one-half.",
      "misconception": "Linear dimensions and area scale differently. The area is multiplied by the square of the linear scale factor.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q30"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 30"
    },
    {
      "id": "Q031",
      "originalNo": 31,
      "order": 31,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 11 頁",
      "slideDeck": "ChE_02",
      "page": 11,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If each of 100 sequential manufacturing steps has a 90% success probability, the overall probability of success is still 90%.",
      "answer": false,
      "explanation": "Assuming independent step yields of 0.90, the all-steps success probability is 0.90^100, approximately 0.0000266, or 0.00266%.",
      "misconception": "Sequential yields multiply; they do not remain equal to the yield of a single step. The independence assumption is needed for the simple product.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q31"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 31"
    },
    {
      "id": "Q032",
      "originalNo": 32,
      "order": 32,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 17 頁",
      "slideDeck": "ChE_02",
      "page": 17,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Semiconductor fabrication requires strict particle-contamination control because defects can reduce yield.",
      "answer": true,
      "explanation": "Particles can create defects during lithography, deposition, etching, or other steps, causing some devices to fail specifications and lowering yield.",
      "misconception": "Cleanroom controls are not mainly about appearance; microscopic contamination can affect device dimensions and electrical performance.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q32"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 32"
    },
    {
      "id": "Q033",
      "originalNo": 33,
      "order": 33,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 17 頁",
      "slideDeck": "ChE_02",
      "page": 17,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The main purpose of a HEPA filter is to increase the electrical conductivity of the wafer surface.",
      "answer": false,
      "explanation": "HEPA filters remove airborne particles to help control contamination in clean environments. They do not directly improve the wafer’s electronic conductivity.",
      "misconception": "Air filtration is a contamination-control measure, not a wafer doping or conductivity-enhancement process.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q33"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 33"
    },
    {
      "id": "Q034",
      "originalNo": 34,
      "order": 34,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 8 頁",
      "slideDeck": "ChE_02",
      "page": 8,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Thin-film deposition, lithography, etching, and photoresist stripping can form a repeating patterning sequence in semiconductor fabrication.",
      "answer": true,
      "explanation": "The lecture’s fabrication flow includes film deposition, photoresist coating, lithography/exposure, etching, and resist stripping; these steps may be repeated over many layers.",
      "misconception": "The patterning flow is a sequence of complementary operations. Removing photoresist is distinct from etching the underlying target film.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q34"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 34"
    },
    {
      "id": "Q035",
      "originalNo": 35,
      "order": 35,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 8 頁",
      "slideDeck": "ChE_02",
      "page": 8,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "After exposure, the exposed regions of a positive photoresist usually become less soluble in the developer.",
      "answer": false,
      "explanation": "For a positive photoresist, exposure generally makes exposed regions more soluble in the developer, so they can be removed.",
      "misconception": "The statement describes the opposite of positive-resist behavior; negative resist generally shows the opposite solubility pattern.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q35"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 35"
    },
    {
      "id": "Q036",
      "originalNo": 36,
      "order": 36,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 8 頁",
      "slideDeck": "ChE_02",
      "page": 8,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Semiconductor etching can be classified into wet etching and dry etching.",
      "answer": true,
      "explanation": "Wet etching uses liquid chemical solutions; dry etching commonly uses plasma or reactive gases. Choice depends on material, selectivity, profile, and process integration.",
      "misconception": "Wet and dry etching are recognized process categories, although each contains many different chemistries and techniques.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q36"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 36"
    },
    {
      "id": "Q037",
      "originalNo": 37,
      "order": 37,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 14 頁",
      "slideDeck": "ChE_02",
      "page": 14,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "FEOL mainly forms metal interconnect wiring, whereas BEOL mainly forms the transistors.",
      "answer": false,
      "explanation": "Front-end-of-line (FEOL) primarily forms active devices such as transistors. Back-end-of-line (BEOL) forms interconnects and related dielectric structures.",
      "misconception": "The statement reverses the usual distinction between active-device formation and interconnect fabrication.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q37"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 37"
    },
    {
      "id": "Q038",
      "originalNo": 38,
      "order": 38,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 15 頁",
      "slideDeck": "ChE_02",
      "page": 15,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The name of an advanced semiconductor process node does not necessarily equal the physical size of a particular structure on the chip.",
      "answer": true,
      "explanation": "Modern node names are technology-generation labels and do not map directly to one universally defined physical feature dimension.",
      "misconception": "A node label should not be interpreted as the exact width of every transistor or wire on the chip.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q38"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 38"
    },
    {
      "id": "Q039",
      "originalNo": 39,
      "order": 39,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 24 頁",
      "slideDeck": "ChE_02",
      "page": 24,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The wavelength used by extreme ultraviolet (EUV) lithography is approximately 193 nm.",
      "answer": false,
      "explanation": "EUV lithography uses light at approximately 13.5 nm. A wavelength around 193 nm is associated with ArF deep-ultraviolet lithography.",
      "misconception": "The statement confuses EUV with 193-nm DUV lithography.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q39"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 39"
    },
    {
      "id": "Q040",
      "originalNo": 40,
      "order": 40,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 24 頁",
      "slideDeck": "ChE_02",
      "page": 24,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The development of semiconductor lithography has included a progression from mercury-lamp sources toward laser-based sources and EUV.",
      "answer": true,
      "explanation": "The lecture presents the evolution of lithography light sources and the increasing need for shorter wavelengths to pattern smaller features.",
      "misconception": "Lithography has not relied on a single unchanged light source; wavelength and source technology have evolved.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q40"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 40"
    },
    {
      "id": "Q042",
      "originalNo": 42,
      "order": 42,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 25 頁",
      "slideDeck": "ChE_02",
      "page": 25,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Different coefficients of thermal expansion among materials are one reason semiconductor manufacturing requires precise temperature control.",
      "answer": true,
      "explanation": "Different materials expand by different amounts as temperature changes, which can affect alignment, stress, dimensions, and process uniformity.",
      "misconception": "Thermal control is not solely about preventing overheating; temperature-dependent dimensional changes and material behavior also matter.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q42"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 42"
    },
    {
      "id": "Q043",
      "originalNo": 43,
      "order": 43,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 27 頁",
      "slideDeck": "ChE_02",
      "page": 27,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Copper interconnects and traditional aluminum interconnects use exactly the same patterning method and require no changes to the process sequence.",
      "answer": false,
      "explanation": "Copper and aluminum have different process-integration requirements. Copper damascene processing commonly patterns dielectric trenches/vias and fills them with copper, followed by planarization.",
      "misconception": "Material properties and integration constraints can change the process flow; copper is not simply substituted into every aluminum process step.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q43"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 43"
    },
    {
      "id": "Q044",
      "originalNo": 44,
      "order": 44,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 29 頁",
      "slideDeck": "ChE_02",
      "page": 29,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Chemical mechanical planarization (CMP) combines chemical action with mechanical polishing and can planarize wafer surfaces.",
      "answer": true,
      "explanation": "CMP uses chemical reactions and mechanical abrasion to remove material and improve surface planarity, which is important for multilayer processing.",
      "misconception": "CMP is not purely a chemical etch or purely mechanical sanding; both contributions are integral to its operation.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q44"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 44"
    },
    {
      "id": "Q045",
      "originalNo": 45,
      "order": 45,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 28 頁",
      "slideDeck": "ChE_02",
      "page": 28,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "A rougher wafer surface necessarily makes the subsequent lithography process easier to focus.",
      "answer": false,
      "explanation": "Surface topography can reduce the usable focus window and complicate lithography. Planarization is often needed for reliable patterning across multiple layers.",
      "misconception": "Greater roughness is not inherently beneficial; height variations can create focus and patterning problems.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q45"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 45"
    },
    {
      "id": "Q046",
      "originalNo": 46,
      "order": 46,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 35 頁",
      "slideDeck": "ChE_02",
      "page": 35,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The semiconductor industry includes IC design, wafer fabrication, packaging and testing, and suppliers of materials and equipment.",
      "answer": true,
      "explanation": "The industry is a value chain of specialized firms and functions rather than only wafer manufacturing.",
      "misconception": "A complete chip ecosystem includes upstream suppliers and downstream packaging/testing in addition to design and fabrication.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q46"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 46"
    },
    {
      "id": "Q047",
      "originalNo": 47,
      "order": 47,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 38 頁",
      "slideDeck": "ChE_02",
      "page": 38,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The primary business of a wafer foundry is designing branded mobile phones, and it is unrelated to IC manufacturing.",
      "answer": false,
      "explanation": "A foundry provides semiconductor manufacturing services, usually fabricating designs supplied by customers. Mobile-phone product design and branding are separate activities.",
      "misconception": "Foundries are directly related to IC manufacturing; they are not defined by selling branded consumer devices.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q47"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 47"
    },
    {
      "id": "Q048",
      "originalNo": 48,
      "order": 48,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 38 頁",
      "slideDeck": "ChE_02",
      "page": 38,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Companies across the semiconductor supply chain can both compete with one another and cooperate.",
      "answer": true,
      "explanation": "Firms can compete for business while collaborating on qualification, co-development, supply continuity, and process integration.",
      "misconception": "Competition and cooperation are not mutually exclusive in a complex supplier ecosystem.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q48"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 48"
    },
    {
      "id": "Q049",
      "originalNo": 49,
      "order": 49,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 41 頁",
      "slideDeck": "ChE_02",
      "page": 41,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The “More than Moore” concept refers only to continued transistor miniaturization and excludes functional integration and advanced packaging.",
      "answer": false,
      "explanation": "More-than-Moore approaches emphasize adding functions, heterogeneous integration, and packaging innovations beyond simple transistor scaling.",
      "misconception": "More-than-Moore is specifically broader than continued geometric scaling alone.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q49"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 49"
    },
    {
      "id": "Q050",
      "originalNo": 50,
      "order": 50,
      "sourceType": "original-bank",
      "sourceFile": "ChE_02",
      "lecture": "第二講：半導體產業與製程",
      "sourceRef": "ChE_02 · 第 42 頁",
      "slideDeck": "ChE_02",
      "page": 42,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 1,
      "type": "true_false",
      "statement": "CoWoS, InFO, and SoIC are examples of advanced packaging technologies discussed in the lecture.",
      "answer": true,
      "explanation": "The lecture identifies these as advanced packaging approaches, reflecting the growing role of integration at the package/system level.",
      "misconception": "These names refer to packaging/integration technologies, not ordinary semiconductor lithography wavelengths or single transistor dimensions.",
      "keywords": [
        "semiconductor",
        "第二講：半導體產業與製程",
        "Q50"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 50"
    },
    {
      "id": "Q051",
      "originalNo": 51,
      "order": 51,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 5 頁",
      "slideDeck": "ChE_03",
      "page": 5,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Chemical process design should consider production rate and cost as well as throughput, quality, safety, and sustainability.",
      "answer": true,
      "explanation": "The lecture compares process decisions with trade-offs and explicitly emphasizes factors beyond speed and expense, including safety and sustainability.",
      "misconception": "Optimizing only one metric can create unacceptable trade-offs in other process requirements.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q51"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 51"
    },
    {
      "id": "Q052",
      "originalNo": 52,
      "order": 52,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 6 頁",
      "slideDeck": "ChE_03",
      "page": 6,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Once penicillin was discovered, it could immediately be produced in unlimited quantities at low cost.",
      "answer": false,
      "explanation": "The lecture’s timeline shows that large-scale penicillin production required years of process development and faced fermentation, oxygen supply, agitation, reactor-design, and temperature-control challenges.",
      "misconception": "Discovery of a useful product does not automatically solve scale-up, yield, sterility, oxygen-transfer, and cost problems.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q52"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 52"
    },
    {
      "id": "Q053",
      "originalNo": 53,
      "order": 53,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 7 頁",
      "slideDeck": "ChE_03",
      "page": 7,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Industrial-scale penicillin production had to address oxygen supply in the fermentation vessel.",
      "answer": true,
      "explanation": "The lecture lists oxygen provision as a key challenge in mass production. In aerobic fermentation, oxygen-transfer capability can constrain biological productivity.",
      "misconception": "Fermentation scale-up is not just about adding more broth; gas–liquid transfer and mixing can determine performance.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q53"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 53"
    },
    {
      "id": "Q054",
      "originalNo": 54,
      "order": 54,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 7 頁",
      "slideDeck": "ChE_03",
      "page": 7,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "type": "true_false",
      "statement": "In fermentation, faster agitation is always better, so agitation intensity never needs to be considered as a design trade-off.",
      "answer": false,
      "explanation": "Agitation must balance mixing and oxygen transfer against power consumption, shear sensitivity, heat generation, and equipment limits.",
      "misconception": "Excessive agitation can increase cost and potentially damage sensitive cells or create other process problems; the optimum is context-dependent.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q54"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 54"
    },
    {
      "id": "Q055",
      "originalNo": 55,
      "order": 55,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 8 頁",
      "slideDeck": "ChE_03",
      "page": 8,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Reactor design may need to account for materials, agitation power, gas inlet design, monitoring, and temperature control.",
      "answer": true,
      "explanation": "These items affect compatibility, mass transfer, mixing, operability, and safe control of the reaction environment.",
      "misconception": "A reactor is more than a vessel that contains chemistry; it is an integrated piece of process equipment.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q55"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 55"
    },
    {
      "id": "Q056",
      "originalNo": 56,
      "order": 56,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 8 頁",
      "slideDeck": "ChE_03",
      "page": 8,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "An exothermic reactor only needs continuous heating and does not need equipment to remove heat.",
      "answer": false,
      "explanation": "An exothermic reaction releases heat, so the process may require cooling or heat removal to maintain the target temperature and prevent overheating.",
      "misconception": "Adding heat alone can worsen temperature rise in an exothermic system. Heat generation and removal must be balanced.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q56"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 56"
    },
    {
      "id": "Q057",
      "originalNo": 57,
      "order": 57,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 9 頁",
      "slideDeck": "ChE_03",
      "page": 9,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The core reaction in the Haber–Bosch process combines nitrogen and hydrogen to produce ammonia.",
      "answer": true,
      "explanation": "The overall synthesis reaction is N₂ + 3H₂ ⇌ 2NH₃, commonly carried out with a catalyst at elevated pressure and temperature.",
      "misconception": "The feed gases are nitrogen and hydrogen; ammonia is the product, not an input.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q57"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 57"
    },
    {
      "id": "Q058",
      "originalNo": 58,
      "order": 58,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 9 頁",
      "slideDeck": "ChE_03",
      "page": 9,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Because ammonia synthesis is exothermic, increasing temperature must improve both the reaction rate and the equilibrium conversion.",
      "answer": false,
      "explanation": "Higher temperature often increases reaction rates, but for an exothermic equilibrium it shifts equilibrium toward reactants and lowers equilibrium ammonia conversion.",
      "misconception": "Kinetic and equilibrium effects can oppose one another: a faster reaction does not necessarily give a higher equilibrium yield.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q58"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 58"
    },
    {
      "id": "Q059",
      "originalNo": 59,
      "order": 59,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 9 頁",
      "slideDeck": "ChE_03",
      "page": 9,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Catalyst selection is an important consideration in industrial ammonia synthesis.",
      "answer": true,
      "explanation": "The Haber–Bosch process relies on a catalyst to make the reaction rate practical at industrial conditions. Catalyst activity, stability, cost, and compatibility matter.",
      "misconception": "A catalyst cannot change the equilibrium constant, but it is still central to achieving a useful reaction rate.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q59"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 59"
    },
    {
      "id": "Q060",
      "originalNo": 60,
      "order": 60,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 10 頁",
      "slideDeck": "ChE_03",
      "page": 10,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Green hydrogen is primarily hydrogen produced by coal gasification.",
      "answer": false,
      "explanation": "In common color terminology, green hydrogen is produced using renewable electricity for water electrolysis. Coal-based production is not green hydrogen.",
      "misconception": "Hydrogen color labels are associated with production pathways and emissions; coal gasification belongs to a different pathway.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q60"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 60"
    },
    {
      "id": "Q061",
      "originalNo": 61,
      "order": 61,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 10 頁",
      "slideDeck": "ChE_03",
      "page": 10,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Blue hydrogen usually refers to hydrogen made from fossil fuels together with carbon capture and storage or related carbon-management measures.",
      "answer": true,
      "explanation": "This is the common course-level distinction for blue hydrogen, although the actual emissions depend on capture rate, upstream methane leakage, and system boundaries.",
      "misconception": "Blue hydrogen is not defined simply by the hydrogen molecule; the production pathway and carbon management distinguish it.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q61"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 61"
    },
    {
      "id": "Q062",
      "originalNo": 62,
      "order": 62,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 10 頁",
      "slideDeck": "ChE_03",
      "page": 10,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Pink hydrogen is produced by using solar-generated electricity to electrolyze water.",
      "answer": false,
      "explanation": "Pink hydrogen typically refers to hydrogen made using nuclear-generated electricity for electrolysis. Solar-powered electrolysis is generally classified as green hydrogen.",
      "misconception": "The statement mixes the energy source associated with pink hydrogen with that of green hydrogen; terminology can vary, but this is the conventional distinction used here.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q62"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 62"
    },
    {
      "id": "Q063",
      "originalNo": 63,
      "order": 63,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 12 頁",
      "slideDeck": "ChE_03",
      "page": 12,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "An ammonia plant can separate ammonia from unreacted gases by cooling the stream and condensing ammonia.",
      "answer": true,
      "explanation": "Ammonia can be condensed at suitable conditions while much of the unreacted nitrogen and hydrogen remains gaseous, allowing product separation and gas recycle.",
      "misconception": "The separation system does not have to discard all unreacted feed; condensation can recover product and enable recycle.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q63"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 63"
    },
    {
      "id": "Q064",
      "originalNo": 64,
      "order": 64,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 11 頁",
      "slideDeck": "ChE_03",
      "page": 11,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A catalyst can change the equilibrium constant of ammonia synthesis and make the equilibrium conversion exceed the thermodynamic limit.",
      "answer": false,
      "explanation": "At a fixed temperature, a catalyst changes the rates of forward and reverse reactions, not the equilibrium constant. It cannot move the equilibrium composition beyond the thermodynamic constraint.",
      "misconception": "Catalysts help the system approach equilibrium faster; they do not alter equilibrium thermodynamics.",
      "keywords": [
        "reaction",
        "第三講：傳統化工與供應鏈",
        "Q64"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "原題 64"
    },
    {
      "id": "Q067",
      "originalNo": 67,
      "order": 67,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 14 頁",
      "slideDeck": "ChE_03",
      "page": 14,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "A petrochemical supply chain can be organized into upstream basic feedstocks, intermediate materials, and downstream products.",
      "answer": true,
      "explanation": "This is a common high-level supply-chain classification: basic chemicals/feedstocks are converted into intermediates, which are then used in final or downstream products.",
      "misconception": "The chain is more structured than a single direct conversion from crude oil to finished consumer goods.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q67"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 67"
    },
    {
      "id": "Q068",
      "originalNo": 68,
      "order": 68,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 16 頁",
      "slideDeck": "ChE_03",
      "page": 16,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Ethylene is used only as a fuel for combustion and cannot serve as a feedstock for plastic materials.",
      "answer": false,
      "explanation": "Ethylene is a major petrochemical building block and can be polymerized to produce polyethylene, among many other downstream chemicals.",
      "misconception": "Ethylene is not merely a fuel; its reactive double bond makes it an important chemical feedstock.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q68"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 68"
    },
    {
      "id": "Q069",
      "originalNo": 69,
      "order": 69,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 16 頁",
      "slideDeck": "ChE_03",
      "page": 16,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Polyethylene (PE) is one of the important downstream products made from ethylene.",
      "answer": true,
      "explanation": "Ethylene polymerization produces polyethylene, an important commodity plastic.",
      "misconception": "PE is not the monomer used to make ethylene; it is a polymer made from ethylene units.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q69"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 69"
    },
    {
      "id": "Q070",
      "originalNo": 70,
      "order": 70,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 18 頁",
      "slideDeck": "ChE_03",
      "page": 18,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The main monomer of PVC is propylene, so PVC is a polypropylene product.",
      "answer": false,
      "explanation": "PVC is poly(vinyl chloride), made from vinyl chloride monomer. Polypropylene is produced from propylene.",
      "misconception": "The names and monomers differ: vinyl chloride leads to PVC; propylene leads to PP.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q70"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 70"
    },
    {
      "id": "Q071",
      "originalNo": 71,
      "order": 71,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 19 頁",
      "slideDeck": "ChE_03",
      "page": 19,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Ethane in shale gas can be used as a feedstock to produce ethylene.",
      "answer": true,
      "explanation": "Ethane can be converted to ethylene, commonly through steam cracking, and ethylene is an important petrochemical feedstock.",
      "misconception": "Ethane need not be polymerized directly to polyethylene; it can first be converted to ethylene.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q71"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 71"
    },
    {
      "id": "Q072",
      "originalNo": 72,
      "order": 72,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 19 頁",
      "slideDeck": "ChE_03",
      "page": 19,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Methane, ethane, and propane in shale gas can all be polymerized directly into polyethylene.",
      "answer": false,
      "explanation": "Polyethylene is produced by polymerizing ethylene. Ethane and other hydrocarbons may be converted into olefins first; methane is not directly polymerized into PE under ordinary industrial polymerization routes.",
      "misconception": "The feed molecules are not all interchangeable polymerization monomers. PE’s monomer is ethylene.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q72"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 72"
    },
    {
      "id": "Q073",
      "originalNo": 73,
      "order": 73,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 20 頁",
      "slideDeck": "ChE_03",
      "page": 20,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The chlor-alkali industry uses salt as an important feedstock and can produce chlorine and sodium hydroxide.",
      "answer": true,
      "explanation": "Electrolysis of brine is a core chlor-alkali route producing chlorine and sodium hydroxide, with hydrogen also commonly formed.",
      "misconception": "Salt is not just a minor additive; brine is the feedstock for a major industrial electrochemical process.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q73"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 73"
    },
    {
      "id": "Q074",
      "originalNo": 74,
      "order": 74,
      "sourceType": "original-bank",
      "sourceFile": "ChE_03",
      "lecture": "第三講：傳統化工與供應鏈",
      "sourceRef": "ChE_03 · 第 20 頁",
      "slideDeck": "ChE_03",
      "page": 20,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "For electronic-grade chemicals, knowing the chemical name is sufficient; purity and impurity control are unimportant.",
      "answer": false,
      "explanation": "Semiconductor processes are highly sensitive to trace contaminants, so electronic-grade materials require strict purity specifications and impurity control.",
      "misconception": "A material with the right nominal identity may still be unsuitable if trace impurities exceed process limits.",
      "keywords": [
        "industry",
        "第三講：傳統化工與供應鏈",
        "Q74"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 74"
    },
    {
      "id": "Q076",
      "originalNo": 76,
      "order": 76,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 15 頁",
      "slideDeck": "ChE_04",
      "page": 15,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "type": "true_false",
      "statement": "The conservation of energy requires that energy in a properly defined closed system cannot be created from nothing or disappear.",
      "answer": true,
      "explanation": "The first law states conservation of energy. For a closed system, changes in stored energy are accounted for by heat and work crossing the boundary, using a consistent sign convention.",
      "misconception": "Energy can change form or cross a system boundary, but it is not created or destroyed in the first-law accounting.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q76"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 76"
    },
    {
      "id": "Q077",
      "originalNo": 77,
      "order": 77,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 9 頁",
      "slideDeck": "ChE_04",
      "page": 9,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "One kilowatt-hour is equal to 1,000 joules.",
      "answer": false,
      "explanation": "1 kWh = 1,000 W × 3,600 s = 3.6 × 10⁶ J = 3.6 MJ.",
      "misconception": "The prefix kilo applies to watts, and an hour is 3,600 seconds; kWh is much larger than 1,000 J.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q77"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 77"
    },
    {
      "id": "Q078",
      "originalNo": 78,
      "order": 78,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 9 頁",
      "slideDeck": "ChE_04",
      "page": 9,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "type": "true_false",
      "statement": "One watt is equal to one joule per second.",
      "answer": true,
      "explanation": "Power is the rate of energy transfer, so 1 W = 1 J/s.",
      "misconception": "A joule is energy while a watt is energy per unit time; they are not interchangeable.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q78"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 78"
    },
    {
      "id": "Q079",
      "originalNo": 79,
      "order": 79,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 9 頁",
      "slideDeck": "ChE_04",
      "page": 9,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Power and energy are the same physical quantity, so 100 W represents 100 J.",
      "answer": false,
      "explanation": "A watt is a joule per second. To obtain energy, power must be integrated over time; for constant power, E = PΔt.",
      "misconception": "100 W does not specify an energy amount unless the operating time is known.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q79"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 79"
    },
    {
      "id": "Q080",
      "originalNo": 80,
      "order": 80,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 9 頁",
      "slideDeck": "ChE_04",
      "page": 9,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 1,
      "type": "true_false",
      "statement": "At a voltage of 10 V and a current of 2 A, electrical power is 20 W when P = VI applies.",
      "answer": true,
      "explanation": "Using P = VI gives 10 V × 2 A = 20 VA, or 20 W for the stated applicable conditions.",
      "misconception": "Voltage and current must be multiplied with consistent units; the given values do not yield 12 W or 20 J.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q80"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 80"
    },
    {
      "id": "Q081",
      "originalNo": 81,
      "order": 81,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 11 頁",
      "slideDeck": "ChE_04",
      "page": 11,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A battery containing 53 kJ delivers the same average power whether it releases its energy in 10 seconds or over an entire day.",
      "answer": false,
      "explanation": "Average power is E/Δt. Releasing 53 kJ in 10 s corresponds to 5.3 kW on average, while spreading it over 24 h gives a much smaller average power.",
      "misconception": "Equal total energy does not imply equal power when the discharge duration differs.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q81"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 81"
    },
    {
      "id": "Q083",
      "originalNo": 83,
      "order": 83,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 12 頁",
      "slideDeck": "ChE_04",
      "page": 12,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "According to the lecture’s comparison, a gasoline Camry consumes less energy per kilometre than the Tesla battery energy delivered per kilometre.",
      "answer": false,
      "explanation": "The slide estimates about 2.26 MJ/km for the gasoline car and 0.6 MJ/km for the EV battery, so the gasoline-car fuel energy per kilometre is greater in that comparison.",
      "misconception": "The numerical values in the lecture point in the opposite direction. The comparison is based on different energy-input boundaries, however, so it does not by itself establish full primary-energy efficiency.",
      "keywords": [
        "energy",
        "第四講：質能平衡與熱力學",
        "Q83"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 83"
    },
    {
      "id": "Q084",
      "originalNo": 84,
      "order": 84,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 14 頁",
      "slideDeck": "ChE_04",
      "page": 14,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Not all of the chemical energy released by gasoline in an engine becomes useful work at the wheels.",
      "answer": true,
      "explanation": "A real engine rejects heat and has mechanical, pumping, exhaust, and other losses. Useful wheel work is only part of the fuel’s chemical energy.",
      "misconception": "Combustion does not convert all fuel energy into useful mechanical output; practical efficiency is below 100%.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q84"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 84"
    },
    {
      "id": "Q085",
      "originalNo": 85,
      "order": 85,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 19 頁",
      "slideDeck": "ChE_04",
      "page": 19,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The first law of thermodynamics alone explains why heat does not spontaneously flow from a colder body to a hotter body.",
      "answer": false,
      "explanation": "Energy conservation alone does not specify the preferred direction of spontaneous processes. The second law/entropy balance gives the directionality constraint.",
      "misconception": "The first law accounts for energy amounts, while the second law constrains process direction and irreversibility.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q85"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 85"
    },
    {
      "id": "Q087",
      "originalNo": 87,
      "order": 87,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 20 頁",
      "slideDeck": "ChE_04",
      "page": 20,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 1,
      "type": "true_false",
      "statement": "Heat can spontaneously and continuously flow from a low-temperature environment to a high-temperature environment without any external work.",
      "answer": false,
      "explanation": "Spontaneous net heat transfer is from higher temperature to lower temperature. A refrigerator or heat pump can move heat from cold to hot only with work input.",
      "misconception": "Moving heat uphill in temperature requires a driven process; it does not occur spontaneously without work.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q87"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 87"
    },
    {
      "id": "Q088",
      "originalNo": 88,
      "order": 88,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 20 頁",
      "slideDeck": "ChE_04",
      "page": 20,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A cyclic heat engine cannot convert all the heat absorbed from a single thermal reservoir into net work.",
      "answer": true,
      "explanation": "This is the Kelvin–Planck statement of the second law. A cyclic engine cannot take heat from one reservoir and convert it completely into work with no other effect.",
      "misconception": "The first law alone might allow an energy balance, but the second law rules out 100% conversion of single-reservoir heat into cycle work.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q88"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 88"
    },
    {
      "id": "Q090",
      "originalNo": 90,
      "order": 90,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 23 頁",
      "slideDeck": "ChE_04",
      "page": 23,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "With the cold-reservoir temperature fixed, increasing the hot-reservoir temperature increases the maximum Carnot heat-engine efficiency.",
      "answer": true,
      "explanation": "For an ideal heat engine, η_C = 1 − T_L/T_H, with absolute temperatures. At fixed T_L, increasing T_H increases the efficiency.",
      "misconception": "The hot-side temperature contributes through the ratio T_L/T_H; temperatures must be in kelvin for the formula.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q90"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 90"
    },
    {
      "id": "Q091",
      "originalNo": 91,
      "order": 91,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 24 頁",
      "slideDeck": "ChE_04",
      "page": 24,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The coefficient of performance (COP) of a refrigerator is the useful heat rejected to the hot side divided by the heat removed from the cold side.",
      "answer": false,
      "explanation": "For a refrigerator, COP_R = Q̇_L/Ẇ_in. For a heat pump, COP_HP = Q̇_H/Ẇ_in. The statement does not give the refrigerator COP definition.",
      "misconception": "Both devices move heat, but their useful output differs: cooling for a refrigerator and heating for a heat pump.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q91"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 91"
    },
    {
      "id": "Q092",
      "originalNo": 92,
      "order": 92,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 24 頁",
      "slideDeck": "ChE_04",
      "page": 24,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The coefficient of performance of a heat pump is the heat-transfer rate delivered to the hot side divided by the input power.",
      "answer": true,
      "explanation": "COP_HP = Q̇_H/Ẇ_in. Since the heat pump also transfers energy from the low-temperature source, COP can exceed one without violating energy conservation.",
      "misconception": "COP is not the same as thermal efficiency; its numerator is the useful heat delivered, which can include heat drawn from the environment.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q92"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 92"
    },
    {
      "id": "Q093",
      "originalNo": 93,
      "order": 93,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 24 頁",
      "slideDeck": "ChE_04",
      "page": 24,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The COP of a refrigerator or a heat pump can never exceed 1 under any circumstances.",
      "answer": false,
      "explanation": "A refrigerator’s COP is Q̇_L/Ẇ_in and a heat pump’s is Q̇_H/Ẇ_in; either can exceed 1 because the device transfers heat rather than converting all input work into heat output.",
      "misconception": "COP is a performance ratio with a different interpretation from an energy-conversion efficiency, so it is not generally limited to one.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q93"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 93"
    },
    {
      "id": "Q095",
      "originalNo": 95,
      "order": 95,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 24 頁",
      "slideDeck": "ChE_04",
      "page": 24,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Temperatures in Carnot-efficiency and COP formulas can be entered directly in degrees Celsius without conversion.",
      "answer": false,
      "explanation": "Thermodynamic temperature ratios require absolute temperature in kelvin. Convert Celsius via T(K) = T(°C) + 273.15.",
      "misconception": "Celsius zero is arbitrary and ratios of Celsius readings do not represent thermodynamic temperature ratios.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q95"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 95"
    },
    {
      "id": "Q096",
      "originalNo": 96,
      "order": 96,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 31 頁",
      "slideDeck": "ChE_04",
      "page": 31,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Because water’s boiling point depends on pressure, water can boil below 100°C under suitable conditions.",
      "answer": true,
      "explanation": "At lower pressure, the saturation temperature of water is lower. Water can boil below 100°C when its vapor pressure matches the surrounding pressure.",
      "misconception": "100°C is the normal boiling point at about 1 atm, not a universal boiling temperature for all pressures.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q96"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 96"
    },
    {
      "id": "Q097",
      "originalNo": 97,
      "order": 97,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 31 頁",
      "slideDeck": "ChE_04",
      "page": 31,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Near water’s triple point, water can exist only as a gas; solid and liquid water cannot coexist there.",
      "answer": false,
      "explanation": "At the triple point, solid, liquid, and vapor phases coexist in equilibrium at a specific pressure and temperature.",
      "misconception": "The triple point is defined by three-phase coexistence, not by a gas-only state.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q97"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 97"
    },
    {
      "id": "Q098",
      "originalNo": 98,
      "order": 98,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 32 頁",
      "slideDeck": "ChE_04",
      "page": 32,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Carbon dioxide can exist as a supercritical fluid when both its temperature and pressure are above the critical values.",
      "answer": true,
      "explanation": "Above the critical temperature and critical pressure, there is no ordinary liquid–gas phase boundary and CO₂ is in the supercritical region.",
      "misconception": "Being above only one of the critical conditions is not sufficient to identify the supercritical state.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q98"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 98"
    },
    {
      "id": "Q099",
      "originalNo": 99,
      "order": 99,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 32 頁",
      "slideDeck": "ChE_04",
      "page": 32,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If pressure is increased enough, any pure substance above its critical temperature must undergo a conventional gas–liquid phase transition.",
      "answer": false,
      "explanation": "Above the critical temperature there is no conventional liquid–gas phase boundary, so compression alone does not produce the usual first-order gas–liquid transition.",
      "misconception": "The critical temperature limits the existence of a distinct liquid–gas coexistence line; above it, properties change continuously as pressure varies.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q99"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 99"
    },
    {
      "id": "Q100",
      "originalNo": 100,
      "order": 100,
      "sourceType": "original-bank",
      "sourceFile": "ChE_04",
      "lecture": "第四講：質能平衡與熱力學",
      "sourceRef": "ChE_04 · 第 34 頁",
      "slideDeck": "ChE_04",
      "page": 34,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Azeotropic behavior in the ethanol–water system can limit separation by ordinary distillation.",
      "answer": true,
      "explanation": "At an azeotrope, vapor and liquid have the same composition, so ordinary fractional distillation cannot cross the azeotropic composition at the same pressure.",
      "misconception": "Distillation is not guaranteed to produce arbitrarily pure components; vapor–liquid equilibrium can impose a separation limit.",
      "keywords": [
        "thermodynamics",
        "第四講：質能平衡與熱力學",
        "Q100"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 100"
    },
    {
      "id": "Q101",
      "originalNo": 101,
      "order": 101,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱力學與能量",
      "sourceRef": "2026 Midterm Sample Problems · 第 1、4 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": "1、4",
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Mass and energy obey conservation laws, whereas entropy is not generally a conserved quantity.",
      "answer": true,
      "explanation": "Mass and energy have conservation balances. Entropy balance includes entropy transfer and generation; irreversible processes generate entropy, so entropy is not generally conserved.",
      "misconception": "Entropy should not be treated like a universally conserved amount. For an isolated system, total entropy can increase and is constant only in the ideal reversible limit.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱力學與能量",
        "Q101"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 101"
    },
    {
      "id": "Q102",
      "originalNo": 102,
      "order": 102,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱力學與能量",
      "sourceRef": "2026 Midterm Sample Problems · 第 1 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 1,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "In a thermally insulated room, a 500 W computer running at full power must heat the room more slowly than a 500 W electric heater.",
      "answer": false,
      "explanation": "If both consume 500 W continuously and essentially all their electrical input ultimately becomes heat inside the same insulated room, their total heat input rates are approximately equal. Local temperature distribution can differ.",
      "misconception": "Device labels do not change the energy balance: the computer’s electrical energy also dissipates as heat within the room, neglecting energy exported from it.",
      "keywords": [
        "energy",
        "期中考延伸：熱力學與能量",
        "Q102"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 102"
    },
    {
      "id": "Q104",
      "originalNo": 104,
      "order": 104,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：能源與運輸",
      "sourceRef": "2026 Midterm Sample Problems · 第 1 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 1,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Mounting a wind turbine on a moving car can generate extra electricity without increasing the load on the engine.",
      "answer": false,
      "explanation": "The turbine extracts energy from airflow and therefore adds drag/load. The engine must supply additional energy to maintain motion, so it is not a free energy source.",
      "misconception": "Energy generated by a turbine on the car comes from the vehicle’s motion or engine, not from a cost-free external source.",
      "keywords": [
        "energy",
        "期中考延伸：能源與運輸",
        "Q104"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 104"
    },
    {
      "id": "Q105",
      "originalNo": 105,
      "order": 105,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱機與冷凍",
      "sourceRef": "2026 Midterm Sample Problems · 第 1 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 1,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "For a power plant with the cold reservoir fixed at 30°C, raising the hot reservoir from 500°C to 600°C increases the maximum possible Carnot efficiency.",
      "answer": true,
      "explanation": "Carnot efficiency is 1 − T_L/T_H with both temperatures in kelvin. With T_L fixed, a higher T_H raises the ideal maximum efficiency.",
      "misconception": "The calculation requires absolute temperatures and concerns the theoretical limit, not a guarantee of the same increase in real plant efficiency.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱機與冷凍",
        "Q105"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 105"
    },
    {
      "id": "Q107",
      "originalNo": 107,
      "order": 107,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：能源與運輸",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A 100 kWh battery that enables a vehicle to travel 600 km corresponds to an average battery energy use of approximately 0.6 MJ/km.",
      "answer": true,
      "explanation": "100 kWh = 360 MJ; dividing by 600 km gives 0.6 MJ/km.",
      "misconception": "The unit conversion is essential: one kWh is 3.6 MJ, not 3.6 kJ.",
      "keywords": [
        "energy",
        "期中考延伸：能源與運輸",
        "Q107"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 107"
    },
    {
      "id": "Q108",
      "originalNo": 108,
      "order": 108,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：能源與運輸",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A gasoline car using 2.26 MJ of fuel energy per kilometre and an EV using 0.6 MJ of battery energy per kilometre is sufficient evidence, by itself, that the EV has higher overall efficiency from primary energy to the wheels.",
      "answer": false,
      "explanation": "The two figures use different energy boundaries: fuel chemical energy in the gasoline case and battery energy in the EV case. Upstream generation, refining, charging, and conversion losses are not included consistently.",
      "misconception": "A comparison at different system boundaries cannot by itself prove full well-to-wheel or primary-energy efficiency.",
      "keywords": [
        "energy",
        "期中考延伸：能源與運輸",
        "Q108"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 108"
    },
    {
      "id": "Q109",
      "originalNo": 109,
      "order": 109,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：能源與運輸",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If an EV receives 50 kWh of energy in 15 minutes, its average charging power is 200 kW when losses are neglected.",
      "answer": true,
      "explanation": "Fifteen minutes is 0.25 h, so the average power is 50 kWh / 0.25 h = 200 kW.",
      "misconception": "Power is energy divided by elapsed time. Using 15 as hours or treating kWh as kW gives the wrong result.",
      "keywords": [
        "energy",
        "期中考延伸：能源與運輸",
        "Q109"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 109"
    },
    {
      "id": "Q111",
      "originalNo": 111,
      "order": 111,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱力學與能量",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "At ambient temperature and pressure, graphite is thermodynamically more stable than diamond, yet diamond can persist for a long time because conversion to graphite is kinetically slow.",
      "answer": true,
      "explanation": "The lecture’s carbon phase-diagram example distinguishes thermodynamic stability from kinetics. A large activation barrier can make the transformation extremely slow.",
      "misconception": "A metastable material does not have to transform immediately. Thermodynamic favorability does not specify the reaction timescale.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱力學與能量",
        "Q111"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 111"
    },
    {
      "id": "Q112",
      "originalNo": 112,
      "order": 112,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱力學與能量",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If a material is thermodynamically unstable, it must disappear within a few seconds.",
      "answer": false,
      "explanation": "Thermodynamic instability describes the relative free-energy state under specified conditions, not the rate of conversion. Kinetic barriers can preserve metastable states for years or longer.",
      "misconception": "The statement confuses thermodynamics with kinetics; a favorable transformation can be practically unobservable over a short time.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱力學與能量",
        "Q112"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 112"
    },
    {
      "id": "Q113",
      "originalNo": 113,
      "order": 113,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱機與冷凍",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A heat pump can deliver more heat to hot water than the electrical energy it consumes without violating energy conservation.",
      "answer": true,
      "explanation": "The heat delivered equals input work plus heat drawn from the low-temperature environment, Q_H = Q_L + W_in for the idealized cycle energy balance.",
      "misconception": "A COP above one does not mean energy is created; the unit transfers environmental heat in addition to using electrical work.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱機與冷凍",
        "Q113"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 113"
    },
    {
      "id": "Q114",
      "originalNo": 114,
      "order": 114,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱機與冷凍",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "A water-mist fan cools mainly through evaporation, so it is generally less effective in very humid air.",
      "answer": true,
      "explanation": "Evaporation requires latent heat and can cool air, but high relative humidity reduces the air’s capacity to accept additional water vapor and limits evaporation.",
      "misconception": "The mist fan’s main effect is not refrigeration by a compressor; its effectiveness depends on humidity and ventilation conditions.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱機與冷凍",
        "Q114"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 114"
    },
    {
      "id": "Q115",
      "originalNo": 115,
      "order": 115,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱機與冷凍",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "In a perfectly sealed, insulated room with no heat escaping, a water-mist fan can continuously reduce the total thermal energy of the room.",
      "answer": false,
      "explanation": "Evaporation redistributes energy between sensible and latent forms, while the fan adds electrical energy that eventually becomes heat. Without energy leaving the defined room system, its total energy cannot continuously decrease.",
      "misconception": "A local cooling sensation does not prove that total room energy is being removed. Humidity may rise while electrical input adds energy.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱機與冷凍",
        "Q115"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 115"
    },
    {
      "id": "Q117",
      "originalNo": 117,
      "order": 117,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：熱機與冷凍",
      "sourceRef": "2026 Midterm Sample Problems · 第 2 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 2,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 2,
      "type": "true_false",
      "statement": "For a refrigerator, the rate of heat removed from the cold object can be greater than the compressor’s input power.",
      "answer": true,
      "explanation": "The refrigerator COP is Q̇_L/Ẇ_in and may exceed one because the machine uses work to move heat from the cold region to the warm region.",
      "misconception": "The refrigerator does not create heat-removal capacity solely from input work; it transfers additional heat from the cooled space.",
      "keywords": [
        "thermodynamics",
        "期中考延伸：熱機與冷凍",
        "Q117"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "原題 117"
    },
    {
      "id": "Q120",
      "originalNo": 120,
      "order": 120,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：單位與計算",
      "sourceRef": "2026 Midterm Sample Problems · 第 3 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 3,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 2,
      "type": "true_false",
      "statement": "The gas constant R = 8.314 J/(mol·K) is approximately 1.99 cal/(mol·K).",
      "answer": true,
      "explanation": "Using 1 cal ≈ 4.184 J gives R ≈ 8.314/4.184 = 1.987 cal/(mol·K).",
      "misconception": "The conversion factor divides joules by joules per calorie; multiplying by 4.184 would reverse the conversion.",
      "keywords": [
        "energy",
        "期中考延伸：單位與計算",
        "Q120"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "原題 120"
    },
    {
      "id": "Q122",
      "originalNo": 122,
      "order": 122,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：化工與半導體製程",
      "sourceRef": "2026 Midterm Sample Problems · 第 4 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 4,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Steam methane reforming of natural gas is one source of hydrogen for conventional industrial ammonia production.",
      "answer": true,
      "explanation": "The Haber–Bosch reaction requires hydrogen and nitrogen. Industrial hydrogen has commonly been supplied by reforming natural gas, with further gas processing as required.",
      "misconception": "Ammonia synthesis does not generate all of its hydrogen in the reactor; hydrogen is prepared upstream and supplied with nitrogen.",
      "keywords": [
        "industry",
        "期中考延伸：化工與半導體製程",
        "Q122"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "原題 122"
    },
    {
      "id": "Q124",
      "originalNo": 124,
      "order": 124,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：化工與半導體製程",
      "sourceRef": "2026 Midterm Sample Problems · 第 4 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 4,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "If deposited thin films are extremely uniform in thickness, chemical mechanical planarization (CMP) is never needed in complex multilayer interconnect fabrication.",
      "answer": false,
      "explanation": "CMP removes topography and creates planarity across layers. Uniform deposited thickness alone does not guarantee a flat surface over underlying patterned structures.",
      "misconception": "Thickness uniformity and surface planarity are related but distinct; CMP can still be needed to control topography.",
      "keywords": [
        "semiconductor",
        "期中考延伸：化工與半導體製程",
        "Q124"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 124"
    },
    {
      "id": "Q125",
      "originalNo": 125,
      "order": 125,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：化工與半導體製程",
      "sourceRef": "2026 Midterm Sample Problems · 第 4 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 4,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Silicon purification can involve forming trichlorosilane through a chemical reaction, purifying it by separation, and then depositing high-purity silicon.",
      "answer": true,
      "explanation": "This is the chemical purification route described in the course materials: volatile silicon compounds can be separated from impurities and then decomposed/deposited to recover high-purity silicon.",
      "misconception": "The route is not simply direct melting of metallurgical silicon; chemical conversion and purification stages enable much higher purity.",
      "keywords": [
        "semiconductor",
        "期中考延伸：化工與半導體製程",
        "Q125"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 125"
    },
    {
      "id": "Q127",
      "originalNo": 127,
      "order": 127,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：化工與半導體製程",
      "sourceRef": "2026 Midterm Sample Problems · 第 5 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 5,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Moving from 10 nm to 7 nm or 3 nm process nodes means every deposition, etching, and cleaning step must use a completely different physical principle.",
      "answer": false,
      "explanation": "Scaling generally requires tighter process control, new materials, patterning strategies, and process integration, but the basic categories of deposition, etching, cleaning, and lithography remain.",
      "misconception": "A smaller node does not imply that all unit operations abandon their fundamental physical principles.",
      "keywords": [
        "semiconductor",
        "期中考延伸：化工與半導體製程",
        "Q127"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 127"
    },
    {
      "id": "Q128",
      "originalNo": 128,
      "order": 128,
      "sourceType": "original-bank",
      "sourceFile": "2026 Midterm Sample Problems",
      "lecture": "期中考延伸：化工與半導體製程",
      "sourceRef": "2026 Midterm Sample Problems · 第 5 頁",
      "slideDeck": "2026_Midterm_SampleProblems",
      "page": 5,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 2,
      "type": "true_false",
      "statement": "Processor clock frequencies cannot increase without limit, partly because of power-density and heat-dissipation constraints.",
      "answer": true,
      "explanation": "Higher frequency and switching activity can raise power consumption and heat generation. Thermal limits, leakage, reliability, and energy efficiency constrain scaling.",
      "misconception": "Clock rate is limited by more than the ability to manufacture smaller features; power and heat removal are important constraints.",
      "keywords": [
        "semiconductor",
        "期中考延伸：化工與半導體製程",
        "Q128"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "原題 128"
    },
    {
      "id": "M001",
      "originalNo": null,
      "order": 1001,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A device transfers 180 kJ of energy in 60 s. Its average power is 3 kW.",
      "answer": true,
      "explanation": "Average power is energy divided by time: 180 kJ / 60 s = 3 kJ/s = 3 kW.",
      "misconception": "Do not divide by the number of minutes or confuse kJ with kW; power is energy per unit time.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M001"
    },
    {
      "id": "M002",
      "originalNo": null,
      "order": 1002,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A 2.0 kW heater operates for 30 minutes and consumes 2.0 kWh of energy.",
      "answer": false,
      "explanation": "Energy is power multiplied by time: 2.0 kW × 0.5 h = 1.0 kWh.",
      "misconception": "The power rating is not the energy consumed; the operating duration must be included.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M002"
    },
    {
      "id": "M003",
      "originalNo": null,
      "order": 1003,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "At 25°C and 1 atm, 1.00 mol of an ideal gas occupies approximately 24.5 L.",
      "answer": true,
      "explanation": "Using PV = nRT at 298.15 K and 1 atm gives about 24.5 L/mol. The result depends on the stated temperature and pressure.",
      "misconception": "The molar volume is not the same at all temperatures and pressures; specify the gas model and conditions.",
      "keywords": [
        "energy",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M003"
    },
    {
      "id": "M004",
      "originalNo": null,
      "order": 1004,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "For an ideal gas, the numerical value of the gas constant is 8.314 when expressed in both J/(mol·K) and cal/(mol·K).",
      "answer": false,
      "explanation": "R is about 8.314 J/(mol·K), or about 1.987 cal/(mol·K). The numerical value changes with the energy unit.",
      "misconception": "Unit conversion must change the numerical value consistently; joules and calories are not identical.",
      "keywords": [
        "energy",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M004"
    },
    {
      "id": "M005",
      "originalNo": null,
      "order": 1005,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "If a gas receives 890 kJ/mol of combustion energy, the amount is approximately 213 kcal/mol.",
      "answer": true,
      "explanation": "Using 1 kcal = 4.184 kJ gives 890/4.184 ≈ 212.7 kcal/mol.",
      "misconception": "To convert kJ to kcal, divide by 4.184 kJ/kcal rather than multiplying by the same number.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M005"
    },
    {
      "id": "M006",
      "originalNo": null,
      "order": 1006,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "An electrical load drawing 20 kW for 15 minutes consumes 5 kWh of energy.",
      "answer": true,
      "explanation": "Fifteen minutes is 0.25 h; E = PΔt = 20 kW × 0.25 h = 5 kWh.",
      "misconception": "The result is energy, not power; use hours when power is specified in kW.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M006"
    },
    {
      "id": "M007",
      "originalNo": null,
      "order": 1007,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A reversible heat engine operating between 500°C and 30°C has a Carnot efficiency of about 48%.",
      "answer": false,
      "explanation": "Convert to kelvin: T_H ≈ 773.15 K and T_L ≈ 303.15 K. η_C = 1 − T_L/T_H ≈ 0.608, or about 61%, so 48% is incorrect.",
      "misconception": "Using the Celsius values directly in 1 − T_L/T_H gives an invalid result. The Carnot formula requires absolute temperatures in kelvin.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M007"
    },
    {
      "id": "M008",
      "originalNo": null,
      "order": 1008,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A reversible heat engine operating between 500°C and 30°C has a maximum efficiency of about 61%.",
      "answer": true,
      "explanation": "Converting to kelvin gives T_H ≈ 773.15 K and T_L ≈ 303.15 K, so η_C = 1 − 303.15/773.15 ≈ 0.608.",
      "misconception": "Celsius temperatures must not be inserted directly into the Carnot ratio.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M008"
    },
    {
      "id": "M009",
      "originalNo": null,
      "order": 1009,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A refrigerator removes 2.4 kW of heat from a cold space while consuming 0.8 kW of work input. Its COP is 3.",
      "answer": true,
      "explanation": "COP_R = Q̇_L/Ẇ_in = 2.4/0.8 = 3. COP is a ratio of useful heat removal to input power.",
      "misconception": "Use heat removed from the cold space for refrigerator COP, not heat rejected to the hot environment.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M009"
    },
    {
      "id": "M010",
      "originalNo": null,
      "order": 1010,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A heat pump supplies 4 kW of heat while using 1 kW of electrical power, so it must violate energy conservation.",
      "answer": false,
      "explanation": "COP_HP = Q̇_H/Ẇ_in = 4. The additional 3 kW is heat drawn from the low-temperature environment; the energy balance is Q̇_H = Q̇_L + Ẇ_in.",
      "misconception": "A COP greater than one does not mean energy is created. The machine transfers ambient heat using electrical work.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M010"
    },
    {
      "id": "M011",
      "originalNo": null,
      "order": 1011,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "For a refrigerator, if the heat rejected is 5 kW and work input is 1 kW, the heat removed from the cold space is 4 kW at steady state.",
      "answer": true,
      "explanation": "For a cyclic refrigerator, the energy balance gives Q̇_H = Q̇_L + Ẇ_in, so Q̇_L = 5 − 1 = 4 kW.",
      "misconception": "Remember that heat rejected equals heat removed plus work input, not the other way around.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M011"
    },
    {
      "id": "M012",
      "originalNo": null,
      "order": 1012,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A thermal reservoir at 280 K can spontaneously transfer heat to a reservoir at 320 K without work, provided the first law is satisfied.",
      "answer": false,
      "explanation": "The first law alone is insufficient to determine direction. The second law rules out spontaneous net heat transfer from lower to higher temperature without an external driving effect.",
      "misconception": "Energy conservation may balance quantities but does not permit every direction of transfer.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M012"
    },
    {
      "id": "M013",
      "originalNo": null,
      "order": 1013,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "At fixed cold-reservoir temperature, raising the hot-reservoir temperature improves the ideal Carnot efficiency but does not guarantee the same improvement for a real plant.",
      "answer": true,
      "explanation": "Carnot efficiency rises as T_H rises at fixed T_L. Real plants also depend on component efficiency, pressure losses, heat transfer, and other irreversibilities.",
      "misconception": "The Carnot result is an upper bound, not a direct prediction of actual plant performance.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M013"
    },
    {
      "id": "M014",
      "originalNo": null,
      "order": 1014,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Above the critical temperature of a pure substance, increasing pressure can still produce a conventional liquid–vapor phase boundary.",
      "answer": false,
      "explanation": "Above the critical temperature, the liquid–vapor coexistence boundary ends. The fluid may become denser, but no conventional first-order gas–liquid transition occurs.",
      "misconception": "Crossing a property threshold above the critical point does not recreate the usual liquid–vapor coexistence line.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M014"
    },
    {
      "id": "M015",
      "originalNo": null,
      "order": 1015,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "At the triple point of a pure substance, three phases coexist in equilibrium at one specific pressure and temperature.",
      "answer": true,
      "explanation": "The triple point is the unique pressure–temperature condition at which solid, liquid, and vapor coexist in equilibrium.",
      "misconception": "A triple point is not a broad range; it is a specific equilibrium condition for a given pure substance.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M015"
    },
    {
      "id": "M016",
      "originalNo": null,
      "order": 1016,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A material with a lower Gibbs free energy under given conditions must transform into that state immediately.",
      "answer": false,
      "explanation": "Thermodynamics identifies the more stable state, but kinetics and activation barriers determine how quickly transformation occurs.",
      "misconception": "Diamond persisting despite graphite being more stable at ambient conditions is a course example of kinetic metastability.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M016"
    },
    {
      "id": "M017",
      "originalNo": null,
      "order": 1017,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "If the single-step yield of each of 8 independent process steps is 95%, the overall yield is approximately 66%.",
      "answer": true,
      "explanation": "The overall yield is 0.95^8 ≈ 0.663, or about 66%, assuming each step’s yield is independent and serial.",
      "misconception": "Do not average the step yields; multiply the fractional yields through the sequence.",
      "keywords": [
        "industry",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M017"
    },
    {
      "id": "M018",
      "originalNo": null,
      "order": 1018,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A process containing 20 sequential steps, each with a 99% yield, has an overall yield of exactly 99%.",
      "answer": false,
      "explanation": "Assuming independent serial yields, overall yield is 0.99^20 ≈ 81.8%, below 99%.",
      "misconception": "Even high per-step yields compound into a substantially lower overall yield when many steps are required.",
      "keywords": [
        "industry",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M018"
    },
    {
      "id": "M019",
      "originalNo": null,
      "order": 1019,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "In a steady-state ammonia loop, condensing ammonia can help remove product while unreacted nitrogen and hydrogen are recycled.",
      "answer": true,
      "explanation": "Cooling and condensation separate ammonia from much of the unreacted gas mixture; recycle improves raw-material utilization.",
      "misconception": "A synthesis loop is not typically a single-pass system that discards all unreacted nitrogen and hydrogen.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M019"
    },
    {
      "id": "M020",
      "originalNo": null,
      "order": 1020,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 3,
      "type": "true_false",
      "statement": "For an exothermic reversible reaction, raising temperature can increase the reaction rate while decreasing the equilibrium product yield.",
      "answer": true,
      "explanation": "Temperature can increase kinetic rate constants while shifting exothermic equilibrium toward reactants, illustrating the kinetics–thermodynamics trade-off.",
      "misconception": "Faster forward kinetics do not guarantee a higher equilibrium conversion.",
      "keywords": [
        "reaction",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "補充題 M020"
    },
    {
      "id": "M021",
      "originalNo": null,
      "order": 1021,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A catalyst increases the equilibrium constant by lowering the activation energy of only the forward reaction.",
      "answer": false,
      "explanation": "A catalyst lowers kinetic barriers for forward and reverse paths and accelerates approach to equilibrium without changing the equilibrium constant at a fixed temperature.",
      "misconception": "The catalyst does not selectively rewrite thermodynamic equilibrium; it affects kinetics.",
      "keywords": [
        "reaction",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "補充題 M021"
    },
    {
      "id": "M022",
      "originalNo": null,
      "order": 1022,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Doubling the impeller speed in a fermentation reactor always doubles oxygen transfer and product formation.",
      "answer": false,
      "explanation": "Agitation, gas dispersion, oxygen transfer, power consumption, shear, and biological response are coupled nonlinearly; doubling speed does not guarantee a proportional output increase.",
      "misconception": "Scale-up performance is not generally linear in impeller speed, and excessive agitation may be harmful or uneconomical.",
      "keywords": [
        "reaction",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "補充題 M022"
    },
    {
      "id": "M023",
      "originalNo": null,
      "order": 1023,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "reaction",
      "lesson": "reaction",
      "difficulty": 3,
      "type": "true_false",
      "statement": "If heat is generated in an exothermic reactor faster than it can be removed, reactor temperature can rise and create an operational hazard.",
      "answer": true,
      "explanation": "A net heat accumulation raises temperature; because reaction rates may increase with temperature, the process can become more difficult to control.",
      "misconception": "The key comparison is heat generation versus heat removal, not merely whether the reactor has a heater.",
      "keywords": [
        "reaction",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "reaction"
      ],
      "label": "補充題 M023"
    },
    {
      "id": "M024",
      "originalNo": null,
      "order": 1024,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A process flow with 100 independent steps each at 99.5% yield has an overall yield of approximately 61%.",
      "answer": true,
      "explanation": "The combined yield is 0.995^100 ≈ 0.606, or about 61%, under the independence assumption.",
      "misconception": "The per-step yield cannot be used as the overall yield when all steps must succeed.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M024"
    },
    {
      "id": "M025",
      "originalNo": null,
      "order": 1025,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Reducing both dimensions of a rectangular feature to 70% of their original values reduces its area by 30%.",
      "answer": false,
      "explanation": "The area becomes 0.7 × 0.7 = 0.49 of the original, a reduction of about 51%, not 30%.",
      "misconception": "Area reduction is nonlinear in the linear scale factor when both dimensions change.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M025"
    },
    {
      "id": "M026",
      "originalNo": null,
      "order": 1026,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A 193 nm lithography wavelength is associated with ArF deep-ultraviolet exposure, whereas EUV lithography operates near 13.5 nm.",
      "answer": true,
      "explanation": "These wavelengths distinguish two important lithography regimes mentioned in semiconductor manufacturing.",
      "misconception": "The process names should not be interchanged: 193 nm is DUV ArF; approximately 13.5 nm is EUV.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M026"
    },
    {
      "id": "M027",
      "originalNo": null,
      "order": 1027,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A uniform film thickness guarantees that every point on a patterned wafer is perfectly planar.",
      "answer": false,
      "explanation": "Film thickness uniformity does not remove underlying topography. Planarity may require CMP or other integration strategies.",
      "misconception": "Uniform thickness and a globally flat surface are distinct geometrical properties.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M027"
    },
    {
      "id": "M028",
      "originalNo": null,
      "order": 1028,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A foundry generally manufactures integrated circuits according to customers’ designs rather than defining its business as selling branded phones.",
      "answer": true,
      "explanation": "Foundries specialize in manufacturing, while system companies and fabless firms may design products and brands. Real firms can span multiple activities, but the stated distinction is the basic model.",
      "misconception": "A foundry’s defining role is fabrication service, not consumer-device branding.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M028"
    },
    {
      "id": "M029",
      "originalNo": null,
      "order": 1029,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Positive photoresist is typically removed from exposed regions after development.",
      "answer": true,
      "explanation": "Exposure increases the developer solubility of positive photoresist, so exposed regions are removed during development.",
      "misconception": "This is the defining contrast to negative resist, in which exposure typically makes regions less soluble.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M029"
    },
    {
      "id": "M030",
      "originalNo": null,
      "order": 1030,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "An advanced process-node label always specifies the exact physical gate length of every transistor made with that process.",
      "answer": false,
      "explanation": "Node labels are technology-generation names and do not necessarily match a single physical dimension across all structures.",
      "misconception": "A node name is not an exact, universal metrology specification for every device feature.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M030"
    },
    {
      "id": "M031",
      "originalNo": null,
      "order": 1031,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Ethane can be cracked to produce ethylene, which can then be polymerized to make polyethylene.",
      "answer": true,
      "explanation": "The route is ethane → ethylene → polyethylene, connecting gas feedstocks to a major commodity polymer.",
      "misconception": "Ethane is an upstream feedstock; ethylene is the monomer used for polyethylene production.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M031"
    },
    {
      "id": "M032",
      "originalNo": null,
      "order": 1032,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Because PVC and polypropylene are both plastics, they have the same monomer and repeat-unit chemistry.",
      "answer": false,
      "explanation": "PVC is based on vinyl chloride, while polypropylene is based on propylene. Their polymer structures and properties differ.",
      "misconception": "A shared broad product class does not mean the polymers have the same monomer or repeat unit.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M032"
    },
    {
      "id": "M033",
      "originalNo": null,
      "order": 1033,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "The production color assigned to hydrogen is a label for its production pathway, not a different chemical identity of the H₂ molecule.",
      "answer": true,
      "explanation": "Hydrogen made via different pathways is still molecular H₂; color terms distinguish production sources and usually imply different emissions profiles.",
      "misconception": "Hydrogen color categories are pathway descriptors, not different molecular species.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M033"
    },
    {
      "id": "M034",
      "originalNo": null,
      "order": 1034,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A 500 W computer and a 500 W heater operating in the same insulated room for the same duration add approximately the same total electrical energy to the room if all input energy ultimately dissipates there.",
      "answer": true,
      "explanation": "Both consume E = PΔt. For the same power and duration, the electrical energy input is equal, although temperature distribution and transient behavior may differ.",
      "misconception": "The room’s total energy balance depends on the energy entering and leaving the system, not on the device label.",
      "keywords": [
        "energy",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M034"
    },
    {
      "id": "M035",
      "originalNo": null,
      "order": 1035,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A mist-spray fan can maintain a lower total energy in a sealed adiabatic room indefinitely because evaporation destroys heat.",
      "answer": false,
      "explanation": "Evaporation changes the partition between sensible and latent energy; it does not destroy energy. A fan also adds electrical energy, and no energy leaves the defined insulated room.",
      "misconception": "Cooling of one local air stream does not imply a reduction in total energy of the entire closed room.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M035"
    },
    {
      "id": "M036",
      "originalNo": null,
      "order": 1036,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A supercharger that adds 300 km of EV range in 15 minutes can be compared with household appliances only after estimating the energy added and dividing by 0.25 hours.",
      "answer": true,
      "explanation": "Average charging power requires the battery energy or range-to-energy conversion over 0.25 h. The sample PDF uses this rate-based comparison with typical appliances.",
      "misconception": "Range alone is not a power unit; charging energy and time or a stated vehicle energy-use rate are needed.",
      "keywords": [
        "energy",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M036"
    },
    {
      "id": "M037",
      "originalNo": null,
      "order": 1037,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A supplier co-development program may involve continuous process improvement and matching equipment chambers to a customer’s process.",
      "answer": true,
      "explanation": "The ChE_01 lecture identifies supplier co-development, continuous improvement programs, and equipment chamber matching as modern supplier relationships.",
      "misconception": "The supplier’s work may extend beyond delivery of a qualified product.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M037"
    },
    {
      "id": "M038",
      "originalNo": null,
      "order": 1038,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "If electricity costs NTD 5 per kWh, one NTD buys 5 kWh of electricity.",
      "answer": false,
      "explanation": "At NTD 5/kWh, one NTD purchases 1/5 kWh = 0.2 kWh, before considering other charges.",
      "misconception": "The rate is cost per energy, so divide the payment amount by the price per kWh.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M038"
    },
    {
      "id": "M039",
      "originalNo": null,
      "order": 1039,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "energy",
      "lesson": "energy",
      "difficulty": 3,
      "type": "true_false",
      "statement": "If 1 kWh of electrical energy is fully converted to heat, it corresponds to approximately 860 kcal.",
      "answer": true,
      "explanation": "1 kWh = 3.6 MJ; dividing by 4.184 kJ/kcal gives about 860 kcal.",
      "misconception": "Do not treat 1 kWh as 1,000 J or confuse the watt power unit with an energy amount.",
      "keywords": [
        "energy",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "energy"
      ],
      "label": "補充題 M039"
    },
    {
      "id": "M040",
      "originalNo": null,
      "order": 1040,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A heat pump with a COP of 4 delivers 4 kW of heat per 1 kW of input power, with the remaining 3 kW drawn from the low-temperature source in steady operation.",
      "answer": true,
      "explanation": "For steady operation, Q̇_H = Q̇_L + Ẇ_in. If COP_HP = 4 and input is 1 kW, Q̇_H = 4 kW and Q̇_L = 3 kW.",
      "misconception": "COP above one is consistent with energy conservation because heat is transferred from another reservoir.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M040"
    },
    {
      "id": "M041",
      "originalNo": null,
      "order": 1041,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "thermodynamics",
      "lesson": "thermodynamics",
      "difficulty": 3,
      "type": "true_false",
      "statement": "At a fixed hot-reservoir temperature, lowering the cold-reservoir temperature increases the maximum Carnot efficiency.",
      "answer": true,
      "explanation": "η_C = 1 − T_L/T_H. Lowering T_L while keeping T_H fixed increases the ideal efficiency, using kelvin temperatures.",
      "misconception": "The temperature ratio must use absolute temperatures, and an ideal limit is not necessarily the actual efficiency.",
      "keywords": [
        "thermodynamics",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "thermodynamics"
      ],
      "label": "補充題 M041"
    },
    {
      "id": "M042",
      "originalNo": null,
      "order": 1042,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Increasing the pressure in ammonia synthesis can be beneficial to equilibrium because the reaction converts four moles of gaseous reactants into two moles of gaseous product.",
      "answer": true,
      "explanation": "N₂ + 3H₂ ⇌ 2NH₃ reduces the total gas stoichiometric moles from four to two, so increased pressure favors ammonia at equilibrium under the usual ideal-gas qualitative argument.",
      "misconception": "This does not mean pressure can be raised without cost; compression energy, equipment limits, catalyst performance, and safety also matter.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M042"
    },
    {
      "id": "M043",
      "originalNo": null,
      "order": 1043,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "industry",
      "lesson": "industry",
      "difficulty": 3,
      "type": "true_false",
      "statement": "A process is automatically sustainable if its product sells at a high price, regardless of waste generation, safety, or energy use.",
      "answer": false,
      "explanation": "Sustainability is multi-dimensional and includes environmental burden, safety, resource use, and economic viability. Market price alone is not enough.",
      "misconception": "Economic value does not remove environmental, safety, and resource constraints.",
      "keywords": [
        "industry",
        "midterm-style",
        "concept"
      ],
      "knowledgeLinks": [
        "industry"
      ],
      "label": "補充題 M043"
    },
    {
      "id": "M044",
      "originalNo": null,
      "order": 1044,
      "sourceType": "midterm-style-practice",
      "sourceFile": "由 ChE_01–04 與 2026 Midterm Sample Problems 自編的補充練習",
      "lecture": "期中考風格補充題",
      "sourceRef": "依 ChE_01–04 與期中範例自編",
      "slideDeck": "derived",
      "page": null,
      "category": "semiconductor",
      "lesson": "semiconductor",
      "difficulty": 3,
      "type": "true_false",
      "statement": "Tighter particle control can improve semiconductor yield, but it does not eliminate the need to control temperature, chemistry, and process uniformity.",
      "answer": true,
      "explanation": "Particles are one source of defects; thermal conditions, reaction chemistry, film uniformity, etch profile, and many other parameters also affect yield.",
      "misconception": "A cleanroom is one part of process control, not a substitute for control of every other manufacturing variable.",
      "keywords": [
        "semiconductor",
        "midterm-style",
        "calculation"
      ],
      "knowledgeLinks": [
        "semiconductor"
      ],
      "label": "補充題 M044"
    }
  ]
};
