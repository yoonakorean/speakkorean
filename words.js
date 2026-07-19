/**
 * 韓語學習系統官方專用題庫 (words.js)
 * 包含單元一、二、三的單字、量詞規則、對應句型與變形邏輯
 */

// 1. 定義單元二固有數詞與量詞的特殊變形規則
const NumberTransformRules = {
    "하나": "한",
    "둘": "두",
    "셋": "세",
    "넷": "네"
};

// 2. 定義所有單字專屬的量詞庫 (嚴格遵守韓文量詞語法)
const UnitQuantifiers = {
    // 單元一單字
    "짐": "개", "볼펜": "자루", "담요": "장", "휴지": "개", "시계": "개",
    "지우개": "개", "컴퓨터": "대", "라면": "봉지", "콜라": "병", "지갑": "개",
    "커피": "잔", "메뉴": "개", "우산": "개",
    // 單元二單字
    "손님": "명", "정장": "벌", "케이크": "조각", "양말": "켤레", "맥주": "병",
    "잡지": "권", "여권": "권", "핸드폰": "대", "옷": "벌", "가방": "개",
    // 單元三單字
    "반찬": "접시", "홍차": "잔", "빵": "개"
};

// 3. 核心題庫陣列 (讓主程式 index.html 讀取)
window.globalWordsPool = [
    // ==========================================
    // 【單元一】
    // ==========================================
    { text: "짐", chinese: "行李", type: "word", unit: 1 },
    { text: "볼펜", chinese: "原子筆", type: "word", unit: 1 },
    { text: "담요", chinese: "毛毯", type: "word", unit: 1 },
    { text: "휴지", chinese: "衛生紙", type: "word", unit: 1 },
    { text: "시계", chinese: "時鐘", type: "word", unit: 1 },
    { text: "지우개", chinese: "橡皮擦", type: "word", unit: 1 },
    { text: "컴퓨터", chinese: "電腦", type: "word", unit: 1 },
    { text: "라면", chinese: "泡麵", type: "word", unit: 1 },
    { text: "콜라", chinese: "可樂", type: "word", unit: 1 },
    { text: "지갑", chinese: "皮夾", type: "word", unit: 1 },
    { text: "커피", chinese: "咖啡", type: "word", unit: 1 },
    { text: "메뉴", chinese: "菜單", type: "word", unit: 1 },
    { text: "우산", chinese: "雨傘", type: "word", unit: 1 },

    // ==========================================
    // 【單元二 - 數字組】(特化分類：確保四選一只有數字相互干擾)
    // ==========================================
    { text: "하나", chinese: "一", type: "number_pure", unit: 2 },
    { text: "둘", chinese: "二", type: "number_pure", unit: 2 },
    { text: "셋", chinese: "三", type: "number_pure", unit: 2 },
    { text: "넷", chinese: "四", type: "number_pure", unit: 2 },
    { text: "다섯", chinese: "五", type: "number_pure", unit: 2 },
    { text: "여섯", chinese: "六", type: "number_pure", unit: 2 },
    { text: "일곱", chinese: "七", type: "number_pure", unit: 2 },
    { text: "여덟", chinese: "八", type: "number_pure", unit: 2 },
    { text: "아홉", chinese: "九", type: "number_pure", unit: 2 },
    { text: "열", chinese: "十", type: "number_pure", unit: 2 },

    // ==========================================
    // 【單元二 - 名詞組】
    // ==========================================
    { text: "손님", chinese: "客人", type: "word", unit: 2 },
    { text: "정장", chinese: "西裝", type: "word", unit: 2 },
    { text: "케이크", chinese: "蛋糕", type: "word", unit: 2 },
    { text: "양말", chinese: "襪子", type: "word", unit: 2 },
    { text: "맥주", chinese: "啤酒", type: "word", unit: 2 },
    { text: "잡지", chinese: "雜誌", type: "word", unit: 2 },
    { text: "여권", chinese: "護照", type: "word", unit: 2 },
    { text: "핸드폰", chinese: "手機", type: "word", unit: 2 },
    { text: "옷", chinese: "衣服", type: "word", unit: 2 },
    { text: "가방", chinese: "包包", type: "word", unit: 2 },

    // ==========================================
    // 【單元三】
    // ==========================================
    { text: "반찬", chinese: "小菜", type: "word", unit: 3 },
    { text: "홍차", chinese: "紅茶", type: "word", unit: 3 },
    { text: "빵", chinese: "麵包", type: "word", unit: 3 }
];

// 4. 自動化生成函數：擴充主程式動態合成文法句型的能力
function generateDatabase() {
    return window.globalWordsPool;
}
