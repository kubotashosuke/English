// Data definition
const quizData = {
    6: {
        words: [
            {id: 1, en: "loyal", jp: "忠実な"},
            {id: 2, en: "hostile", jp: "敵意のある"},
            {id: 3, en: "feline", jp: "ネコ科の"},
            {id: 4, en: "stroke", jp: "撫でる"},
            {id: 5, en: "evaluate", jp: "評価する"},
            {id: 6, en: "initiate", jp: "開始する"},
            {id: 7, en: "interaction", jp: "交流"}
        ],
        defs: [
            {text: "to start or begin", correctId: 6, jp: "始める、開始する"},
            {text: "always supporting", correctId: 1, jp: "常に支持している"},
            {text: "to consider how good something is", correctId: 5, jp: "何かがどれくらい良いか考える"},
            {text: "connected with cats", correctId: 3, jp: "猫に関連した"},
            {text: "talking or acting with someone", correctId: 7, jp: "誰かと話したり行動したりすること"},
            {text: "to gently move your hand over a surface", correctId: 4, jp: "表面を優しく手でなでる"},
            {text: "aggressive or unfriendly", correctId: 2, jp: "攻撃的または非友好的な"}
        ]
    },
    7: {
        words: [
            {id: 1, en: "phenomenon", jp: "現象"},
            {id: 2, en: "conscious", jp: "意識がある"},
            {id: 3, en: "anxiety", jp: "不安"},
            {id: 4, en: "surgery", jp: "手術"},
            {id: 5, en: "anesthesia", jp: "麻酔"},
            {id: 6, en: "morally", jp: "道徳的に"},
            {id: 7, en: "ill-effect", jp: "悪影響"}
        ],
        defs: [
            {text: "relating to beliefs about right and wrong", correctId: 6, jp: "善悪の信念に関連する"},
            {text: "an event in nature or society", correctId: 1, jp: "自然や社会での出来事"},
            {text: "medical treatment that involves cutting into the body", correctId: 4, jp: "体を切ることを伴う医療処置"},
            {text: "worry or fear", correctId: 3, jp: "心配や恐怖"},
            {text: "a negative or bad result", correctId: 7, jp: "否定的または悪い結果"},
            {text: "using a drug so the patient feels no pain", correctId: 5, jp: "患者が痛みを感じないように薬を使うこと"},
            {text: "awake and able to notice things", correctId: 2, jp: "起きていて物事に気づくことができる"}
        ]
    },
    8: {
        words: [
            {id: 1, en: "civilization", jp: "文明"},
            {id: 2, en: "collaboration", jp: "協力"},
            {id: 3, en: "contribute", jp: "貢献する"},
            {id: 4, en: "astronomy", jp: "天文学"},
            {id: 5, en: "pollution", jp: "汚染"},
            {id: 6, en: "diversity", jp: "多様性"},
            {id: 7, en: "conservation", jp: "保護"}
        ],
        defs: [
            {text: "to provide help with something", correctId: 3, jp: "何かに助けを提供する"},
            {text: "many kinds of different people or things", correctId: 6, jp: "多くの種類の異なる人々や物"},
            {text: "the study of space and stars", correctId: 4, jp: "宇宙や星の研究"},
            {text: "the protection of wildlife and nature", correctId: 7, jp: "野生生物や自然の保護"},
            {text: "working together", correctId: 2, jp: "共に働くこと"},
            {text: "damage caused to water, air etc. by harmful substances", correctId: 5, jp: "有害物質によって水や空気に引き起こされる損害"},
            {text: "an advanced society", correctId: 1, jp: "高度な社会"}
        ]
    },
    9: {
        words: [
            {id: 1, en: "fleet", jp: "艦隊・全車両"},
            {id: 2, en: "exclamation", jp: "叫び・感嘆"},
            {id: 3, en: "agility", jp: "機敏さ"},
            {id: 4, en: "observe", jp: "観察する"},
            {id: 5, en: "capable of", jp: "〜の能力がある"},
            {id: 6, en: "rule out", jp: "除外する"},
            {id: 7, en: "definition", jp: "定義"}
        ],
        defs: [
            {text: "the ability to move quickly", correctId: 3, jp: "素早く動く能力"},
            {text: "to see or notice something", correctId: 4, jp: "何かを見たり気づいたりすること"},
            {text: "to decide something is not possible", correctId: 6, jp: "何かが不可能だと判断すること"},
            {text: "words spoken suddenly to express an emotion", correctId: 2, jp: "感情を表現するために突然発せられる言葉"},
            {text: "the meaning of a word in a dictionary", correctId: 7, jp: "辞書における単語の意味"},
            {text: "having the skill to do something", correctId: 5, jp: "何かをする技術を持っていること"},
            {text: "a group (of ships)", correctId: 1, jp: "（船などの）グループ"}
        ]
    },
    10: {
        words: [
            {id: 1, en: "colonize", jp: "植民地化する"},
            {id: 2, en: "solar system", jp: "太陽系"},
            {id: 3, en: "soil", jp: "土壌"},
            {id: 4, en: "scarce", jp: "乏しい"},
            {id: 5, en: "mimic", jp: "模倣する"},
            {id: 6, en: "sprout", jp: "芽吹く"},
            {id: 7, en: "alter", jp: "変える"}
        ],
        defs: [
            {text: "the layer of earth plants grow in", correctId: 3, jp: "植物が育つ土の層"},
            {text: "to begin to produce leaves from a seed", correctId: 6, jp: "種から葉を出し始めること"},
            {text: "to send people to live in another country or planet", correctId: 1, jp: "他の国や惑星に住むために人々を送ること"},
            {text: "to copy or simulate", correctId: 5, jp: "コピーまたはシミュレートすること"},
            {text: "rare or available in only small amounts", correctId: 4, jp: "稀であるか、少量しか入手できない"},
            {text: "to change or adjust", correctId: 7, jp: "変えるまたは調整すること"},
            {text: "the sun and planets including Earth", correctId: 2, jp: "地球を含む太陽と惑星"}
        ]
    },
    11: {
        words: [
            {id: 1, en: "launch", jp: "打ち上げる"},
            {id: 2, en: "asteroid", jp: "小惑星"},
            {id: 3, en: "orbit", jp: "軌道を回る"},
            {id: 4, en: "generate", jp: "生み出す"},
            {id: 5, en: "precise", jp: "正確な"},
            {id: 6, en: "accomplish", jp: "成し遂げる"},
            {id: 7, en: "meteorite", jp: "隕石"}
        ],
        defs: [
            {text: "a large rock circling the Sun", correctId: 2, jp: "太陽を周回する大きな岩"},
            {text: "exact and accurate", correctId: 5, jp: "正確で精密な"},
            {text: "a rock that hits the Earth from space", correctId: 7, jp: "宇宙から地球に衝突する岩"},
            {text: "to produce or create", correctId: 4, jp: "生産または創造すること"},
            {text: "to send a spacecraft into the sky", correctId: 1, jp: "宇宙船を空に送ること"},
            {text: "to achieve a goal", correctId: 6, jp: "目標を達成すること"},
            {text: "to move around a planet or star", correctId: 3, jp: "惑星や星の周りを動くこと"}
        ]
    }
};

let currentUnit = 6;
let currentDefs = [];
let currentWordList = []; // 現在のUnit(または全復習)で使用する単語リスト
let activeQuestionIndex = null;
let userAnswers = {}; // Map definition index -> word ID
let isChecked = false; // 解答済みフラグ

const unitSelect = document.getElementById('unitSelect');
const quizContainer = document.getElementById('quizContainer');
const choicesContainer = document.getElementById('choicesContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');
const footerChoices = document.getElementById('footerChoices');

// Utility: Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 復習用にデータを結合する関数
function getReviewData() {
    let combinedWords = [];
    let combinedDefs = [];
    let globalIdCounter = 1;

    // 全Unitのデータをループ
    Object.keys(quizData).forEach(key => {
        const unitData = quizData[key];
        const idMap = {}; // ローカルID -> グローバルIDの変換マップ

        // 単語のIDを振り直して登録
        unitData.words.forEach(w => {
            const newId = globalIdCounter++;
            idMap[w.id] = newId;
            combinedWords.push({
                id: newId,
                en: w.en,
                jp: w.jp
            });
        });

        // 定義の正解IDも新しいIDに変換して登録
        unitData.defs.forEach(d => {
            combinedDefs.push({
                text: d.text,
                correctId: idMap[d.correctId],
                jp: d.jp
            });
        });
    });

    return { words: combinedWords, defs: combinedDefs };
}

function loadUnit(unitId) {
    currentUnit = unitId;
    userAnswers = {};
    activeQuestionIndex = null;
    isChecked = false;
    
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    footerChoices.classList.remove('hidden');

    if (unitId === 'review') {
        // 全復習モード
        const reviewData = getReviewData();
        currentWordList = reviewData.words;
        currentDefs = JSON.parse(JSON.stringify(reviewData.defs));
        shuffle(currentDefs);
        renderQuestions();
        renderChoices(currentWordList);
    } else {
        // 通常Unitモード
        const data = quizData[unitId];
        currentWordList = data.words;
        currentDefs = JSON.parse(JSON.stringify(data.defs));
        shuffle(currentDefs);
        renderQuestions();
        renderChoices(currentWordList);
    }
}

function renderQuestions() {
    quizContainer.innerHTML = '';
    currentDefs.forEach((def, index) => {
        const card = document.createElement('div');
        
        if (!isChecked) {
            card.className = `question-card ${activeQuestionIndex === index ? 'active' : ''}`;
            card.onclick = (e) => setActiveQuestion(index, e);
        } else {
            card.className = 'question-card'; 
        }

        const defText = document.createElement('div');
        defText.className = 'def-text';
        defText.textContent = `Q${index + 1}. ${def.text}`;

        const answerBox = document.createElement('div');
        answerBox.className = 'answer-box';
        
        const selectedWordId = userAnswers[index];
        if (selectedWordId) {
            // 現在の単語リストから検索
            const wordObj = currentWordList.find(w => w.id === selectedWordId);
            if (wordObj) {
                answerBox.textContent = `${wordObj.id}. ${wordObj.en}`;
                answerBox.classList.add('filled');
            }
        } else {
            answerBox.textContent = "(Select a word below)";
        }

        card.appendChild(defText);
        card.appendChild(answerBox);
        quizContainer.appendChild(card);
    });
}

function renderChoices(words) {
    choicesContainer.innerHTML = '';
    words.forEach(word => {
        const btn = document.createElement('div');
        btn.className = 'choice-btn';
        btn.id = `choice-${word.id}`; 
        btn.textContent = `${word.id}. ${word.en}`;
        if (!isChecked) {
            btn.onclick = () => selectChoice(word.id);
        }
        choicesContainer.appendChild(btn);
    });
    updateChoiceVisuals();
}

function updateChoiceVisuals() {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(btn => btn.classList.remove('used'));
    const usedWordIds = Object.values(userAnswers);

    usedWordIds.forEach(wordId => {
        const targetBtn = document.getElementById(`choice-${wordId}`);
        if (targetBtn) {
            targetBtn.classList.add('used');
        }
    });
}

function setActiveQuestion(index, e) {
    if (isChecked) return;
    activeQuestionIndex = index;
    renderQuestions();
}

function selectChoice(wordId) {
    if (isChecked) return;

    if (activeQuestionIndex === null) {
        const firstUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : 0;
    }
    
    userAnswers[activeQuestionIndex] = wordId;
    
    const nextUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i] && i > activeQuestionIndex);
    if (nextUnfilled !== -1) {
        activeQuestionIndex = nextUnfilled;
    } else {
        const firstUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : activeQuestionIndex;
    }

    renderQuestions();
    updateChoiceVisuals();
}

function checkAnswers() {
    isChecked = true;
    const total = currentDefs.length;
    let correctCount = 0;

    quizContainer.innerHTML = '';

    currentDefs.forEach((def, index) => {
        const userWordId = userAnswers[index];
        const isCorrect = userWordId === def.correctId;
        // 現在の単語リストから正解を取得
        const correctWordObj = currentWordList.find(w => w.id === def.correctId);

        if (isCorrect) correctCount++;

        const card = document.createElement('div');
        card.className = `question-card ${isCorrect ? 'result-correct' : 'result-wrong'}`;

        const defText = document.createElement('div');
        defText.className = 'def-text';
        defText.textContent = `Q${index + 1}. ${def.text}`;

        const resultDiv = document.createElement('div');
        resultDiv.style.marginTop = '10px';
        resultDiv.style.fontSize = '1rem';

        if (isCorrect) {
            resultDiv.innerHTML = `<span class="ans-correct">✅ ${correctWordObj.en}</span>`;
        } else {
            let userWordText = "No Answer";
            if (userWordId) {
                const userWordObj = currentWordList.find(w => w.id === userWordId);
                if (userWordObj) userWordText = userWordObj.en;
            }
            resultDiv.innerHTML = `❌ <span class="ans-wrong">${userWordText}</span> → <span class="ans-correct">${correctWordObj.en}</span>`;
        }

        const transDiv = document.createElement('div');
        transDiv.className = 'translation-area';
        transDiv.innerHTML = `
            <div><span class="label">定義の訳:</span> ${def.jp}</div>
            <div style="margin-top:4px;"><span class="label">単語:</span> <strong>${correctWordObj.en}</strong> (${correctWordObj.jp})</div>
        `;

        card.appendChild(defText);
        card.appendChild(resultDiv);
        card.appendChild(transDiv);
        quizContainer.appendChild(card);
    });

    const scoreText = `Score: ${correctCount} / ${total}`;
    scoreSection.innerHTML = `
        <div class="final-score">${scoreText}</div>
        <div>
            <button class="primary-btn" onclick="loadUnit(currentUnit)">Retry Unit</button>
        </div>
    `;
    scoreSection.style.display = 'block';

    submitArea.style.display = 'none';
    footerChoices.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init
unitSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    // 数値なら変換、'review'ならそのまま
    loadUnit(val === 'review' ? val : parseInt(val));
});
loadUnit(6);