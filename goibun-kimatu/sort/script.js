// --- 全テストデータ ---
const allTests = {
    test2: [
        { id: 215, type: 'scramble', part: 'B', prefix: "Were", suffix: "disposal site, this area would be an ideal place to live.", words: ["it", "the", "not", "for", "garbage"], ans: "it not for the garbage", jp: "もしゴミ処理場がなければ、この地域は住むのに理想的な場所だろうに。" },
        { id: 216, type: 'scramble', part: 'B', prefix: "You must", suffix: "of the road when you ride a bike.", words: ["keep", "left", "the", "side", "to"], ans: "keep to the left side", jp: "自転車に乗る時は、道路の左側を通行しなければならない。" },
        { id: 217, type: 'scramble', part: 'B', prefix: "A hip hop dance contest", suffix: "of the park right now.", words: ["held", "is", "in the", "being", "middle"], ans: "is being held in the middle", jp: "今、公園の中央でヒップホップダンスコンテストが開催されている。" },
        { id: 218, type: 'scramble', part: 'B', prefix: "Why", suffix: "the road work in front of Anan Station?", words: ["about", "you", "tell", "didn't", "me"], ans: "didn't you tell me about", jp: "なぜ阿南駅前の道路工事について教えてくれなかったの？" },
        { id: 219, type: 'scramble', part: 'B', prefix: "The", suffix: "because more and more elderly people use public facilities.", words: ["increasing", "number", "of", "is", "railings"], ans: "number of railings is increasing", jp: "より多くの高齢者が公共施設を利用するため、手すりの数が増えている。" },
        { id: 220, type: 'scramble', part: 'B', prefix: "Dead", suffix: "materials and are collected on the third Friday every month.", words: ["are", "categorized", "hazardous", "batteries", "as"], ans: "batteries are categorized as hazardous", jp: "使用済み乾電池は有害ごみに分類され、毎月第3金曜日に回収される。" },
        { id: 221, type: 'scramble', part: 'B', prefix: "All incoming emails will", suffix: "Junko while Mr. Ogawa is away on business until November 18.", words: ["of", "taken", "by", "be", "care"], ans: "be taken care of by", jp: "小川氏が出張で不在の間、すべての受信メールは順子によって処理される。" },
        { id: 222, type: 'scramble', part: 'B', prefix: "I don't mind", suffix: "the elevator. We should stop using elevators all the time.", words: ["using", "instead", "of", "the stairs", "riding"], ans: "using the stairs instead of riding", jp: "エレベーターに乗る代わりに階段を使うのは構わない。" }
    ],
    test3: [
        { id: 317, type: 'scramble', part: 'B', prefix: "Minobayashi Station", suffix: "and many students take a train there.", words: ["is", "to", "close", "located", "my college"], ans: "is located close to my college", jp: "箕林駅は私の大学の近くにあり、多くの学生がそこへ電車で行きます。" },
        { id: 318, type: 'scramble', part: 'B', prefix: "The office copy machine has", suffix: "almost a week.", words: ["of", "for", "out", "order", "been"], ans: "been out of order for", jp: "オフィスのコピー機はほぼ1週間故障しています。" },
        { id: 319, type: 'scramble', part: 'B', prefix: "We are going to be", suffix: "Monday, but we can meet you Monday afternoon.", words: ["up", "on", "all", "tied", "morning"], ans: "tied up all morning on", jp: "月曜日の午前中はずっと予定が埋まっていますが、午後なら会えます。" },
        { id: 320, type: 'scramble', part: 'B', prefix: "My husband and I are", suffix: "in history. You want to become a math teacher, don't you?", words: ["you want to", "get", "why", "wondering", "a degree"], ans: "wondering why you want to get a degree", jp: "夫と私は、あなたがなぜ歴史の学位を取りたいのか不思議に思っています。" },
        { id: 321, type: 'scramble', part: 'B', prefix: "TV commercials are an old type of advertisement. We have to use social media like Instagram if we", suffix: ".", words: ["to", "want", "young", "attract", "consumers"], ans: "want to attract young consumers", jp: "若い消費者を惹きつけたいなら、Instagramのようなソーシャルメディアを使わなければなりません。" },
        { id: 322, type: 'scramble', part: 'B', prefix: "I was told that some of the employees are", suffix: ".", words: ["each", "other", "having", "understanding", "a difficult time"], ans: "having a difficult time understanding each other", jp: "従業員の中にはお互いを理解するのに苦労している人がいると聞きました。" },
        { id: 323, type: 'scramble', part: 'B', prefix: "Could you tell us", suffix: "meeting this morning?", words: ["in", "you", "what", "discussed", "the urgent"], ans: "what you discussed in the urgent", jp: "今朝の緊急会議で何を話し合ったのか教えていただけますか？" }
    ],
    test4: [
        { id: 421, type: 'scramble', part: 'B', prefix: "We'd like to buy this house. It seems to", suffix: "to live with the children.", words: ["we", "have", "need", "that", "everything"], ans: "have everything that we need", jp: "私たちはこの家を買いたいです。ここには子供たちと暮らすために必要なものがすべて揃っているようです。" },
        { id: 422, type: 'scramble', part: 'B', prefix: "I must know", suffix: ".", words: ["is", "if", "within", "the rent", "my budget"], ans: "if the rent is within my budget", jp: "家賃が私の予算内かどうか知らなければなりません。" },
        { id: 423, type: 'scramble', part: 'B', prefix: "[", suffix: "] been renovated.", words: ["has", "our", "just", "spacious", "living room"], ans: "Our spacious living room has just", jp: "私たちの広々としたリビングルームは改装されたばかりです。" },
        { id: 424, type: 'scramble', part: 'B', prefix: "An", suffix: "] when we want to sell something.", words: ["an", "is", "tool", "indispensable", "advertisement"], ans: "advertisement is an indispensable tool", jp: "広告は、物を売りたい時に不可欠なツールです。" },
        { id: 425, type: 'scramble', part: 'B', prefix: "Only", suffix: "] for an interview.", words: ["be", "will", "selected", "contacted", "candidates"], ans: "selected candidates will be contacted", jp: "選ばれた候補者のみ、面接の連絡が行われます。" }
    ]
};

let currentQuestions = [];
let questionStates = {};
let isChecked = false;

const testSelect = document.getElementById('testSelect');
const quizContainer = document.getElementById('quizContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function loadData() {
    isChecked = false;
    questionStates = {}; 
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    
    const testId = testSelect.value;
    
    let sourceData = [];
    if (testId === 'review') {
        const t2 = allTests.test2.filter(q => q.part === targetPart);
        const t3 = allTests.test3.filter(q => q.part === targetPart);
        const t4 = allTests.test4.filter(q => q.part === targetPart);
        sourceData = [...t2, ...t3, ...t4];
    } else {
        sourceData = allTests[testId] ? allTests[testId].filter(q => q.part === targetPart) : [];
    }

    currentQuestions = shuffle(JSON.parse(JSON.stringify(sourceData)));

    currentQuestions.forEach(q => {
        if (targetPart === 'B') {
            questionStates[q.id] = {
                pool: shuffle([...q.words]),
                selected: []
            };
        }
    });

    renderQuestions();
}

function renderQuestions() {
    quizContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${q.id}`;

        if (targetPart === 'B') {
            renderScrambleQuestion(card, q);
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-feedback';
        resultDiv.id = `result-${q.id}`;
        resultDiv.style.display = 'none';
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

function renderScrambleQuestion(card, q) {
    const qText = document.createElement('div');
    qText.className = 'q-text';
    
    let displayPrefix = q.prefix;
    if (displayPrefix === '[') displayPrefix = '';
    
    let displaySuffix = q.suffix;
    if (displaySuffix.startsWith(']')) displaySuffix = displaySuffix.substring(1);

    qText.innerHTML = `Q. ${displayPrefix} <span style="border-bottom:2px solid #3498db; padding:0 10px; color:#3498db; font-weight:bold;">( ? )</span> ${displaySuffix}`;
    card.appendChild(qText);

    const state = questionStates[q.id];

    // 解答ゾーン
    const zone = document.createElement('div');
    zone.className = 'scramble-zone';
    state.selected.forEach((word, idx) => {
        const tile = createTile(word, () => {
            if (isChecked) return;
            state.selected.splice(idx, 1);
            state.pool.push(word);
            renderQuestions();
        });
        zone.appendChild(tile);
    });
    card.appendChild(zone);

    // 選択肢プール
    const pool = document.createElement('div');
    pool.className = 'word-pool';
    state.pool.forEach((word, idx) => {
        const tile = createTile(word, () => {
            if (isChecked) return;
            state.pool.splice(idx, 1);
            state.selected.push(word);
            renderQuestions();
        });
        pool.appendChild(tile);
    });
    card.appendChild(pool);
}

function createTile(text, onClick) {
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.textContent = text;
    tile.onclick = onClick;
    return tile;
}

function checkAnswers() {
    isChecked = true;
    let correctCount = 0;
    const total = currentQuestions.length;

    renderQuestions();

    currentQuestions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const resultDiv = document.getElementById(`result-${q.id}`);
        const state = questionStates[q.id];
        resultDiv.style.display = 'block';

        let isCorrect = false;
        let userAnsText = "";

        if (targetPart === 'B') {
            userAnsText = state.selected.join(' ');
            isCorrect = (userAnsText === q.ans);
            if (userAnsText === "") userAnsText = "(未回答)";
        }

        let feedbackHtml = "";
        if (isCorrect) {
            correctCount++;
            card.classList.add('result-correct');
            feedbackHtml = `<div class="ans-correct">✅ Correct!</div>`;
        } else {
            card.classList.add('result-wrong');
            feedbackHtml = `
                <div>❌ Your Answer: <span class="ans-wrong">${userAnsText}</span></div>
                <div style="margin-top:5px;">✅ Correct: <span class="correct-text">${q.ans}</span></div>
            `;
        }
        feedbackHtml += `<div class="jp-translation"><span style="font-weight:bold; color:#555;">[訳]</span> ${q.jp}</div>`;
        resultDiv.innerHTML = feedbackHtml;
    });

    const scoreText = `Score: ${correctCount} / ${total}`;
    scoreSection.innerHTML = `
        <div class="final-score">${scoreText}</div>
        <div>
            <button class="primary-btn" onclick="loadData()">Retry (New Random)</button>
        </div>
    `;
    scoreSection.style.display = 'block';
    submitArea.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

testSelect.addEventListener('change', loadData);
loadData();