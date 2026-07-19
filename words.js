/**
 * 韓語學習系統官方專用題庫 (words.js)
 * 包含單元一、二、三的單字、量詞規則、對應句型與變形邏輯
 */

// 定義單元二固有數詞與量詞的特殊變形規則
const NumberTransformRules = {
    "하나": "한",
    "둘": "두",
    "셋": "세",
    "넷": "네"
};

// 定義所有單字專屬的量詞庫與中文意思 (嚴格遵守韓文量詞語法)
const UnitQuantifiers = {
    // 單元一單字
    "짐": { ko: "개", zh: "個" },
    "볼펜": { ko: "자루", zh: "支" },
    "담요": { ko: "장", zh: "張" },
    "휴지": { ko: "개", zh: "個" },
    "시계": { ko: "개", zh: "個" },
    "지우개": { ko: "개", zh: "個" },
    "컴퓨ター": { ko: "대", zh: "台" }, // 修正可能存在的舊資料拼音
    "컴퓨터": { ko: "대", zh: "台" },
    "라면": { ko: "봉지", zh: "包" },
    "콜라": { ko: "병", zh: "瓶" },
    "지갑": { ko: "개", zh: "個" },
    "커피": { ko: "잔", zh: "杯" },
    "메뉴": { ko: "개", zh: "個" },
    "우산": { ko: "개", zh: "個" },
    // 單元二單字
    "손님": { ko: "명", zh: "位" },
    "정장": { ko: "벌", zh: "套" },
    "케이크": { ko: "조각", zh: "塊" },
    "양말": { ko: "켤레", zh: "雙" },
    "맥주": { ko: "병", zh: "瓶" },
    "잡지": { ko: "권", zh: "本" },
    "여권": { ko: "권", zh: "本" },
    "핸드폰": { ko: "대", zh: "台" },
    "옷": { ko: "벌", zh: "件" },
    "가방": { ko: "개", zh: "個" },
    // 單元三單字
    "반찬": { ko: "접시", zh: "盤" },
    "홍차": { ko: "잔", zh: "杯" },
    "빵": { ko: "개", zh: "個" }
};

// 核心題庫陣列 (讓主程式 index.html 讀取)
window.globalWordsPool = [
    // ==========================================
    // 【單元一】
    // ==========================================
    { text: "짐", chinese: "行李", type: "word", unit: 1 },
    { text: "볼펜", chinese: "原子筆", type: "word", unit: 1 },
    { text: "담요", chinese: "毛毯", type: "word", unit: 1 },
    { text: "휴지", chinese: "衛生紙", type: "word", unit: 1 },
    { text: "시계", chinese: "時鐘", type: "word", unit: 1 },
    { text: "지우개", chinese: "橡配擦", type: "word", unit: 1 },
    { text: "컴퓨터", chinese: "電腦", type: "word", unit: 1 },
    { text: "라면", chinese: "泡麵", type: "word", unit: 1 },
    { text: "콜라", chinese: "可樂", type: "word", unit: 1 },
    { text: "지갑", chinese: "皮夾", type: "word", unit: 1 },
    { text: "커피", chinese: "咖啡", type: "word", unit: 1 },
    { text: "메뉴", chinese: "菜單", type: "word", unit: 1 },
    { text: "우산", chinese: "雨傘", type: "word", unit: 1 },

    // ==========================================
    // 【單元二 - 數字組】
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

function generateDatabase() {
    return window.globalWordsPool;
}
