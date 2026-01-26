// 全30問のデータ（Unit 6 - 11）
const allData = [
    // Unit 6
    { id: 1,  word: "evaluate",     jp_word: "評価する", sentence: "We need to ( ) our performance so far.", jp_sentence: "私たちはこれまでの業績を評価する必要がある。" },
    { id: 2,  word: "loyal",        jp_word: "忠実な", sentence: "He has been a ( ) customer of ours for many years.", jp_sentence: "彼は長年、私たちの忠実な顧客だ。" },
    { id: 3,  word: "interaction",  jp_word: "交流", sentence: "It will be interesting to observe the ( ) between the two animals.", jp_sentence: "その2匹の動物の間の交流を観察するのは興味深いだろう。" },
    { id: 4,  word: "hostile",      jp_word: "敵意のある", sentence: "The hairs standing up on the animal's back signaled its ( ) attitude.", jp_sentence: "背中の毛が逆立っているのは、その動物の敵対的な態度を示していた。" },
    { id: 5,  word: "stroke",       jp_word: "撫でる", sentence: "This material feels so smooth when you ( ) it.", jp_sentence: "この素材は撫でるととても滑らかに感じる。" },
    
    // Unit 7
    { id: 6,  word: "anxiety",      jp_word: "不安", sentence: "The patient decided to try hypnosis to treat her ( ).", jp_sentence: "その患者は不安を治療するために催眠術を試すことにした。" },
    { id: 7,  word: "phenomenon",   jp_word: "現象", sentence: "We do not fully understand this ( ) yet.", jp_sentence: "私たちはまだこの現象を完全に理解していない。" },
    { id: 8,  word: "ill-effects",  jp_word: "悪影響", sentence: "You shouldn't suffer any ( ) after the treatment.", jp_sentence: "治療後、悪影響には苦しまないはずだ。" },
    { id: 9,  word: "conscious",    jp_word: "意識がある", sentence: "He was ( ) of what was happening but didn't feel any pain.", jp_sentence: "彼は何が起きているか意識はあったが、痛みは感じなかった。" },
    { id: 10, word: "surgery",      jp_word: "手術", sentence: "The doctor explained to the patient what would happen during the ( ).", jp_sentence: "医師は手術中に何が起こるかを患者に説明した。" },
    
    // Unit 8
    { id: 11, word: "contribute",   jp_word: "貢献する", sentence: "I hope to ( ) to this new research project.", jp_sentence: "私はこの新しい研究プロジェクトに貢献したいと願っている。" },
    { id: 12, word: "diversity",    jp_word: "多様性", sentence: "The ( ) of people in our organization helps to generate new ideas.", jp_sentence: "我々の組織の人々の多様性が、新しいアイデアを生み出すのに役立っている。" },
    { id: 13, word: "civilization", jp_word: "文明", sentence: "Researchers were delighted to find evidence of an ancient ( ).", jp_sentence: "研究者たちは古代文明の証拠を見つけて大喜びした。" },
    { id: 14, word: "pollution",    jp_word: "汚染", sentence: "We must work hard to reduce the problem of ( ) in our cities.", jp_sentence: "私たちは都市の汚染問題を減らすために懸命に働かなければならない。" },
    { id: 15, word: "astronomy",    jp_word: "天文学", sentence: "Ever since she was a child, she was interested in ( ).", jp_sentence: "彼女は子供の頃からずっと天文学に興味を持っていた。" },

    // Unit 9
    { id: 16, word: "rule out",     jp_word: "除外する", sentence: "The evidence shows we must ( ) that explanation.", jp_sentence: "証拠はその説明を除外しなければならないことを示している。" },
    { id: 17, word: "exclamation",  jp_word: "叫び・感嘆", sentence: "The man's shocked ( ) was heard throughout the building.", jp_sentence: "その男の驚いた叫び声が建物中に響き渡った。" },
    { id: 18, word: "agility",      jp_word: "機敏さ", sentence: "The ( ) of the aircraft was amazing.", jp_sentence: "その航空機の機敏さは驚くべきものだった。" },
    { id: 19, word: "definition",   jp_word: "定義", sentence: "What is the exact ( ) of the term?", jp_sentence: "その用語の正確な定義は何ですか？" },
    { id: 20, word: "observe",      jp_word: "観察する", sentence: "The cameras allow us to ( ) what's happening remotely.", jp_sentence: "カメラのおかげで、何が起きているか遠隔で観察できる。" },

    // Unit 10
    { id: 21, word: "alter",        jp_word: "変える", sentence: "We will need to ( ) our conclusions in light of this new data.", jp_sentence: "この新しいデータに照らして、結論を変更する必要があるだろう。" },
    { id: 22, word: "scarce",       jp_word: "乏しい", sentence: "The mineral was so ( ) that its value increased every year.", jp_sentence: "その鉱物は非常に希少だったため、その価値は年々上昇した。" },
    { id: 23, word: "soil",         jp_word: "土壌", sentence: "The ( ) in this area is not rich enough to support many plants.", jp_sentence: "この地域の土壌は、多くの植物を育てるほど豊かではない。" },
    { id: 24, word: "solar system", jp_word: "太陽系", sentence: "We have still explored only a small part of our ( ).", jp_sentence: "私たちはまだ太陽系のほんの一部しか探査していない。" },
    { id: 25, word: "colonize",     jp_word: "植民地化する", sentence: "To ( ) space would be one of humanity's greatest achievements.", jp_sentence: "宇宙を植民地化することは、人類の最大の偉業の一つになるだろう。" },

    // Unit 11
    { id: 26, word: "precise",      jp_word: "正確な", sentence: "The machine made a very ( ) cut in the metal.", jp_sentence: "機械は金属に非常に正確な切断を行った。" },
    { id: 27, word: "meteorite",    jp_word: "隕石", sentence: "Everybody looked up to see a ( ) flash across the sky.", jp_sentence: "誰もが空を横切って光る隕石を見るために見上げた。" },
    { id: 28, word: "orbit",        jp_word: "軌道", sentence: "The ( ) of Earth around the Sun takes one year.", jp_sentence: "地球が太陽の周りを回る軌道は1年かかる。" },
    { id: 29, word: "launch",       jp_word: "打ち上げ", sentence: "JAXA made a successful ( ) of the new rocket.", jp_sentence: "JAXAは新しいロケットの打ち上げに成功した。" },
    { id: 30, word: "accomplish",   jp_word: "成し遂げる", sentence: "We managed to ( ) all our goals for the mission.", jp_sentence: "私たちはミッションのすべての目標をなんとか成し遂げた。" }
];

let shuffledQuestions = [];
let activeQuestionIndex = null;
let userAnswers = {}; // Map: questionIndex -> wordID
let isChecked = false; // 解答済みフラグ

const quizContainer = document.getElementById('quizContainer');
const choicesContainer = document.getElementById('choicesContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');
const footerChoices = document.getElementById('footerChoices');

// シャッフル関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function init() {
    isChecked = false;
    userAnswers = {};
    activeQuestionIndex = null;
    shuffledQuestions = JSON.parse(JSON.stringify(allData));
    shuffle(shuffledQuestions);
    
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    footerChoices.classList.remove('hidden');
    
    renderQuestions();
    renderChoices();
}

function renderQuestions() {
    quizContainer.innerHTML = '';
    
    shuffledQuestions.forEach((q, index) => {
        // カード作成
        const card = document.createElement('div');
        // 解答済みならクリックイベントを削除、そうでなければ付与
        if (!isChecked) {
            card.className = `question-card ${activeQuestionIndex === index ? 'active' : ''}`;
            card.onclick = () => setActiveQuestion(index);
        } else {
            // 解答後は結果表示用のクラス追加（中身はcheckAnswersで制御するが枠用）
            card.className = 'question-card';
        }

        // --- 文の構築 ---
        const parts = q.sentence.split('( )');
        
        // 前半
        const textSpan1 = document.createElement('span');
        textSpan1.textContent = parts[0];

        // 空欄部分
        const blankSpan = document.createElement('span');
        blankSpan.className = 'blank-slot';
        
        const answerId = userAnswers[index];
        if (answerId) {
            const answerData = allData.find(d => d.id === answerId);
            blankSpan.textContent = answerData.word;
            blankSpan.classList.add('filled');
        } else {
            blankSpan.textContent = "_____";
        }

        // 後半
        const textSpan2 = document.createElement('span');
        textSpan2.textContent = parts[1];

        const sentenceDiv = document.createElement('div');
        sentenceDiv.className = 'sentence-text';
        sentenceDiv.appendChild(textSpan1);
        sentenceDiv.appendChild(blankSpan);
        sentenceDiv.appendChild(textSpan2);

        card.appendChild(sentenceDiv);
        quizContainer.appendChild(card);
    });
}

function renderChoices() {
    choicesContainer.innerHTML = '';
    allData.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'choice-btn';
        btn.id = `choice-${item.id}`;
        btn.textContent = item.word;
        // 解答済みならクリックできない
        if (!isChecked) {
            btn.onclick = () => selectChoice(item.id);
        }
        choicesContainer.appendChild(btn);
    });
    updateChoiceVisuals();
}

function updateChoiceVisuals() {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(btn => btn.classList.remove('used'));
    const usedIds = Object.values(userAnswers);
    usedIds.forEach(id => {
        const targetBtn = document.getElementById(`choice-${id}`);
        if (targetBtn) {
            targetBtn.classList.add('used');
        }
    });
}

function setActiveQuestion(index) {
    if (isChecked) return; // 解答後は無効
    activeQuestionIndex = index;
    renderQuestions();
}

function selectChoice(wordId) {
    if (isChecked) return;
    if (activeQuestionIndex === null) {
        const firstUnfilled = shuffledQuestions.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : 0;
    }

    userAnswers[activeQuestionIndex] = wordId;

    const nextUnfilled = shuffledQuestions.findIndex((_, i) => !userAnswers[i] && i > activeQuestionIndex);
    if (nextUnfilled !== -1) {
        activeQuestionIndex = nextUnfilled;
    } else {
        const firstUnfilled = shuffledQuestions.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : activeQuestionIndex;
    }

    renderQuestions();
    updateChoiceVisuals();
}

function checkAnswers() {
    isChecked = true;
    let correctCount = 0;
    const total = shuffledQuestions.length;

    // quizContainerをクリアして、結果表示用に再構築
    quizContainer.innerHTML = '';

    shuffledQuestions.forEach((q, index) => {
        const userAnswerId = userAnswers[index];
        const isCorrect = (userAnswerId === q.id);
        if (isCorrect) correctCount++;

        // カード生成
        const card = document.createElement('div');
        card.className = `question-card ${isCorrect ? 'result-correct' : 'result-wrong'}`;

        // --- 英文のHTML構築（正解・不正解を埋め込み） ---
        const parts = q.sentence.split('( )');
        let answerHtml = '';

        if (isCorrect) {
            // 正解の場合: 文の中に ( 正解 ) を緑で表示
            answerHtml = `<span class="ans-correct">( ${q.word} )</span>`;
        } else {
            // 不正解の場合: 
            // ユーザー回答があれば ( 誤答 → 正解 )、なければ ( No Answer → 正解 )
            let userWord = "No Answer";
            if (userAnswerId) {
                const w = allData.find(d => d.id === userAnswerId);
                userWord = w.word;
            }
            answerHtml = `( <span class="ans-wrong">${userWord}</span> → <span class="ans-correct">${q.word}</span> )`;
        }

        const sentenceDiv = document.createElement('div');
        sentenceDiv.className = 'sentence-text';
        // innerHTMLを使って装飾付きテキストを挿入
        sentenceDiv.innerHTML = parts[0] + answerHtml + parts[1];

        // --- 日本語訳エリア ---
        const transDiv = document.createElement('div');
        transDiv.className = 'translation-area';
        transDiv.innerHTML = `
            <div><span class="label">文の訳:</span> ${q.jp_sentence}</div>
            <div style="margin-top:4px;"><span class="label">単語:</span> <strong>${q.word}</strong> : ${q.jp_word}</div>
        `;

        card.appendChild(sentenceDiv);
        card.appendChild(transDiv);
        quizContainer.appendChild(card);
    });

    // スコア表示
    const scoreText = `Score: ${correctCount} / ${total}`;
    scoreSection.innerHTML = `
        <div class="final-score">${scoreText}</div>
        <div>
            <button class="primary-btn" onclick="location.reload()">Retry All</button>
        </div>
    `;
    scoreSection.style.display = 'block';
    
    // ボタンエリアを消して、選択肢エリアも隠す
    submitArea.style.display = 'none';
    footerChoices.classList.add('hidden');
    
    // スコアへスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 開始
init();