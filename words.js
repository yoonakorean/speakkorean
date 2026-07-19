// words.js

// 1. 基礎原始素材
const rawMaterials = {
    1: {
        words: ["짐", "볼펜", "담요", "휴지", "시계", "지우개", "컴퓨터", "라면", "콜라", "지갑", "커피", "메뉴", "우산"],
        sentences: [] 
    },
    2: {
        words: ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "손님", "정장", "맥주", "잡지", "여권", "핸드폰", "옷"],
        sentences: [] 
    },
    3: {
        words: ["반찬", "홍차", "빵"],
        sentences: ["반찬 주세요", "홍차 주세요", "빵 주세요"]
    }
};

// 2. 韓文收音判斷
function hasBatchim(word) {
    const lastChar = word.charCodeAt(word.length - 1);
    if (lastChar < 0xAC00 || lastChar > 0xD7A3) return false;
    return (lastChar - 0xAC00) % 28 !== 0;
}

// 3. 固有數字變體轉換
function getNumAttr(numStr) {
    const mapping = {
        "하나": "한", "둘": "두", "셋": "세", "넷": "네", "다섯": "다섯",
        "여섯": "여섯", "일곱": "일곱", "여덟": "여덟", "아홉": "아홉", "열": "열"
    };
    return mapping[numStr] || numStr;
}

// 4. 動態初始化題庫總庫 (並導出給全球/HTML使用)
function generateDatabase() {
    let db = [];
    let idCounter = 1;

    // --- 單元一 生成 ---
    rawMaterials[1].words.forEach(w => {
        db.push({ id: idCounter++, unit: 1, type: 'word', text: w, learned: false, isFluent: false });
        const particle = hasBatchim(w) ? "이" : "가";
        db.push({ id: idCounter++, unit: 1, type: 'sentence', text: `${w}${particle} 있어요`, learned: false, isFluent: false });
        db.push({ id: idCounter++, unit: 1, type: 'sentence', text: `${w}${particle} 없어요`, learned: false, isFluent: false });
    });

    // --- 單元二 生成 ---
    rawMaterials[2].words.forEach(w => {
        db.push({ id: idCounter++, unit: 2, type: 'word', text: w, learned: false, isFluent: false });
    });
    const unit2Nouns = ["손님", "정장", "맥주", "잡지", "여권", "핸드폰", "옷", "커피", "콜라", "라면"];
    const counters = ["개", "명", "잔", "벌", "병", "마리", "조각", "권", "대", "켤레"];
    const numbers = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열"];
    
    for(let i=0; i<20; i++) {
        const randNoun = unit2Nouns[Math.floor(Math.random() * unit2Nouns.length)];
        const randNum = numbers[Math.floor(Math.random() * numbers.length)];
        const randCounter = counters[Math.floor(Math.random() * counters.length)];
        const combinedText = `${randNoun} ${getNumAttr(randNum)} ${randCounter}`;
        db.push({ id: idCounter++, unit: 2, type: 'sentence', text: combinedText, learned: false, isFluent: false });
    }

    // --- 單元三 生成 ---
    rawMaterials[3].words.forEach(w => {
        db.push({ id: idCounter++, unit: 3, type: 'word', text: w, learned: false, isFluent: false });
    });
    rawMaterials[3].sentences.forEach(s => {
        db.push({ id: idCounter++, unit: 3, type: 'sentence', text: s, learned: false, isFluent: false });
    });

    return db;
}
