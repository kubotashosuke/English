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
let activeQuestionIndex = null;
let userAnswers = {}; // Map definition index -> word ID

const unitSelect = document.getElementById('unitSelect');
const quizContainer = document.getElementById('quizContainer');
const choicesContainer = document.getElementById('choicesContainer');
const resultContainer = document.getElementById('resultContainer');
const submitArea = document.getElementById('submitArea');

// Utility: Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadUnit(unitId) {
    currentUnit = unitId;
    userAnswers = {};
    activeQuestionIndex = null;
    resultContainer.style.display = 'none';
    submitArea.style.display = 'block';

    // Get data
    const data = quizData[unitId];
    // Clone definitions to shuffle
    currentDefs = JSON.parse(JSON.stringify(data.defs));
    shuffle(currentDefs);

    renderQuestions();
    renderChoices(data.words);
}

function renderQuestions() {
    quizContainer.innerHTML = '';
    currentDefs.forEach((def, index) => {
        const card = document.createElement('div');
        card.className = `question-card ${activeQuestionIndex === index ? 'active' : ''}`;
        card.onclick = (e) => setActiveQuestion(index, e);

        const defText = document.createElement('div');
        defText.className = 'def-text';
        defText.textContent = `Q${index + 1}. ${def.text}`;

        const answerBox = document.createElement('div');
        answerBox.className = 'answer-box';
        
        const selectedWordId = userAnswers[index];
        if (selectedWordId) {
            const wordObj = quizData[currentUnit].words.find(w => w.id === selectedWordId);
            answerBox.textContent = `${wordObj.id}. ${wordObj.en}`;
            answerBox.classList.add('filled');
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
        btn.id = `choice-${word.id}`; // Add ID to find it later
        btn.textContent = `${word.id}. ${word.en}`;
        btn.onclick = () => selectChoice(word.id);
        choicesContainer.appendChild(btn);
    });
    updateChoiceVisuals();
}

// 選択済みの単語を視覚的に薄くする関数
function updateChoiceVisuals() {
    // 全てのボタンの used クラスを一度リセット
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(btn => btn.classList.remove('used'));

    // 使われている回答を取得
    const usedWordIds = Object.values(userAnswers);

    usedWordIds.forEach(wordId => {
        const targetBtn = document.getElementById(`choice-${wordId}`);
        if (targetBtn) {
            targetBtn.classList.add('used');
        }
    });
}

function setActiveQuestion(index, e) {
    activeQuestionIndex = index;
    renderQuestions();
}

function selectChoice(wordId) {
    if (activeQuestionIndex === null) {
        // If no question selected, auto-select first unfilled or first
        const firstUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : 0;
    }
    
    userAnswers[activeQuestionIndex] = wordId;
    
    // Auto advance to next unfilled question
    const nextUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i] && i > activeQuestionIndex);
    if (nextUnfilled !== -1) {
        activeQuestionIndex = nextUnfilled;
    } else {
        // Try wrapping around
        const firstUnfilled = currentDefs.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : activeQuestionIndex;
    }

    renderQuestions();
    updateChoiceVisuals(); // 選択後に見た目を更新
}

function checkAnswers() {
    const total = currentDefs.length;
    // 「全て答えていないと進めない」制限を削除しました

    let correctCount = 0;
    let mistakesHtml = '';

    currentDefs.forEach((def, index) => {
        const userWordId = userAnswers[index];
        const isCorrect = userWordId === def.correctId;

        if (isCorrect) {
            correctCount++;
        } else {
            const correctWordObj = quizData[currentUnit].words.find(w => w.id === def.correctId);
            let userWordText = "No Answer";
            
            if (userWordId) {
                const userWordObj = quizData[currentUnit].words.find(w => w.id === userWordId);
                userWordText = userWordObj.en;
            }
            
            mistakesHtml += `
                <div class="mistake-card">
                    <div class="mistake-header">Q${index + 1}: ${def.text}</div>
                    <div class="mistake-detail"><span class="label">定義の意味:</span> ${def.jp}</div>
                    <div class="mistake-detail"><span class="label">正解:</span> ${correctWordObj.en} (${correctWordObj.jp})</div>
                    <div class="mistake-detail" style="color:#666; font-size:0.9em; margin-top:5px;">(You chose: ${userWordText})</div>
                </div>
            `;
        }
    });

    const scoreText = `Score: ${correctCount} / ${total}`;
    
    resultContainer.innerHTML = `
        <div class="score-display">${scoreText}</div>
        ${correctCount === total ? '<div style="text-align:center; color:green; font-weight:bold;">Perfect! All correct.</div>' : '<h3>Review Mistakes:</h3>' + mistakesHtml}
        <div style="text-align:center; margin-top:30px;">
            <button class="primary-btn" onclick="loadUnit(currentUnit)">Retry Unit</button>
        </div>
    `;

    submitArea.style.display = 'none';
    resultContainer.style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

// Init
unitSelect.addEventListener('change', (e) => loadUnit(parseInt(e.target.value)));
loadUnit(6);