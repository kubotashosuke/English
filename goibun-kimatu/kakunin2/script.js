// 問題データ
const quizData = [
    // --- Part A: 正しいものを選び文章を完成させて下さい ---
    {
        id: 1, type: 'choice', part: 'A',
        q: "If the library ( ) more fashion magazines, I would go there more often.",
        options: ["had", "has", "were", "is"],
        ans: "had",
        jp: "もし図書館にもっとファッション雑誌があれば、もっと頻繁に行くのに。"
    },
    {
        id: 2, type: 'choice', part: 'A',
        q: "I wish my office ( ) larger! It is too small.",
        options: ["is", "has", "had", "were"],
        ans: "were",
        jp: "私のオフィスがもっと広ければいいのに！狭すぎる。"
    },
    {
        id: 3, type: 'choice', part: 'A',
        q: "But ( ) your help, I wouldn't have done such a great job!",
        options: ["on", "from", "without", "for"],
        ans: "for",
        jp: "あなたの助けがなければ（But for = Without）、こんないい仕事はできなかったでしょう！"
    },
    {
        id: 4, type: 'choice', part: 'A',
        q: "Young mothers can share the problems of ( ) children when they see each other in the park.",
        options: ["growing", "bringing", "raising", "increasing"],
        ans: "raising",
        jp: "若い母親たちは公園で会う時、子育て（raising children）の問題を共有できる。"
    },
    {
        id: 5, type: 'choice', part: 'A',
        q: "You see many ( ) selling exotic foods from all over the world.",
        options: ["flower vases", "discount rates", "food stalls", "kitchen cars"],
        ans: "food stalls",
        jp: "世界中の珍しい食べ物を売っている多くの屋台（food stalls）を見かけます。"
    },
    {
        id: 6, type: 'choice', part: 'A',
        q: "Flower pots were ( ) on top of each other in front of the door.",
        options: ["stacked", "referred", "equipped", "done"],
        ans: "stacked",
        jp: "植木鉢がドアの前で互いに積み重ねられて（stacked）いた。"
    },
    {
        id: 7, type: 'choice', part: 'A',
        q: "Tokyo is known ( ) its nightlife, shopping, entertainment and excellent public transportation.",
        options: ["for", "about", "to", "by"],
        ans: "for",
        jp: "東京はナイトライフ、買い物、娯楽、そして素晴らしい公共交通機関で知られている（be known for ～）。"
    },
    {
        id: 8, type: 'choice', part: 'A',
        q: "I'm not ( ) of the traveller, but my parents have been to so many places.",
        options: ["much", "any", "many", "either"],
        ans: "much",
        jp: "私はあまり旅行家ではない（旅行好きではない）が、両親はとても多くの場所に行ったことがある。"
    },
    {
        id: 9, type: 'choice', part: 'A',
        q: "From the ( ) of paid leave, we can say that European region is ahead of most countries in Aisa.",
        options: ["supplier", "opinion", "viewpoint", "retrospect"],
        ans: "viewpoint",
        jp: "有給休暇の観点（viewpoint）から見ると、ヨーロッパ地域はアジアのほとんどの国より進んでいると言える。"
    },
    {
        id: 10, type: 'choice', part: 'A',
        q: "We want to go to Hawaii for Christmas, but major hotels in Hawaii have already been fully ( ).",
        options: ["delivered", "appointed", "booked", "stayed"],
        ans: "booked",
        jp: "クリスマスにハワイに行きたいが、ハワイの主要ホテルはすでに予約でいっぱい（fully booked）だ。"
    },
    {
        id: 11, type: 'choice', part: 'A',
        q: "Gals refer ( ) young girls in Japan.",
        options: ["into", "of", "to", "with"],
        ans: "to",
        jp: "「ギャル」は日本の若い女の子を指す（refer to）。"
    },
    {
        id: 12, type: 'choice', part: 'A',
        q: "All these measures will go ( ) effect in two weeks on July 1.",
        options: ["to", "into", "of", "with"],
        ans: "into",
        jp: "これらすべての措置は、2週間後の7月1日に施行される（go into effect）。"
    },
    {
        id: 13, type: 'choice', part: 'A',
        q: "I helped my parents to dispose ( ) old furniture.",
        options: ["into", "with", "of", "to"],
        ans: "of",
        jp: "私は両親が古い家具を処分する（dispose of）のを手伝った。"
    },
    {
        id: 14, type: 'choice', part: 'A',
        q: "The extremely hot days last summer have a lot to do ( ) global warming.",
        options: ["to", "of", "into", "with"],
        ans: "with",
        jp: "昨夏の猛暑日は地球温暖化と大いに関係がある（have a lot to do with）。"
    },

    // --- Part B: 与えられた語句を並べ替えて文章を完成させて下さい ---
    {
        id: 15, type: 'scramble', part: 'B',
        prefix: "Were", suffix: "disposal site, this area would be an ideal place to live.",
        words: ["it", "the", "not", "for", "garbage"],
        ans: "it not for the garbage",
        jp: "もしゴミ処理場がなければ、この地域は住むのに理想的な場所だろうに。"
    },
    {
        id: 16, type: 'scramble', part: 'B',
        prefix: "You must", suffix: "of the road when you ride a bike.",
        words: ["keep", "left", "the", "side", "to"],
        ans: "keep to the left side",
        jp: "自転車に乗る時は、道路の左側を通行しなければならない。"
    },
    {
        id: 17, type: 'scramble', part: 'B',
        prefix: "A hip hop dance contest", suffix: "of the park right now.",
        words: ["held", "is", "in the", "being", "middle"],
        ans: "is being held in the middle",
        jp: "今、公園の中央でヒップホップダンスコンテストが開催されている。"
    },
    {
        id: 18, type: 'scramble', part: 'B',
        prefix: "Why", suffix: "the road work in front of Anan Station?",
        words: ["about", "you", "tell", "didn't", "me"],
        ans: "didn't you tell me about",
        jp: "なぜ阿南駅前の道路工事について教えてくれなかったの？"
    },
    {
        id: 19, type: 'scramble', part: 'B',
        prefix: "The", suffix: "because more and more elderly people use public facilities.",
        words: ["increasing", "number", "of", "is", "railings"],
        ans: "number of railings is increasing",
        jp: "より多くの高齢者が公共施設を利用するため、手すりの数が増えている。"
    },
    {
        id: 20, type: 'scramble', part: 'B',
        prefix: "Dead", suffix: "materials and are collected on the third Friday every month.",
        words: ["are", "categorized", "hazardous", "batteries", "as"],
        ans: "batteries are categorized as hazardous",
        jp: "使用済み乾電池は有害ごみに分類され、毎月第3金曜日に回収される。"
    },
    {
        id: 21, type: 'scramble', part: 'B',
        prefix: "All incoming emails will", suffix: "Junko while Mr. Ogawa is away on business until November 18.",
        words: ["of", "taken", "by", "be", "care"],
        ans: "be taken care of by",
        jp: "小川氏が11月18日まで出張で不在の間、すべての受信メールは順子によって処理される。"
    },
    {
        id: 22, type: 'scramble', part: 'B',
        prefix: "I don't mind", suffix: "the elevator. We should stop using elevators all the time.",
        words: ["using", "instead", "of", "the stairs", "riding"],
        ans: "using the stairs instead of riding",
        jp: "エレベーターに乗る代わりに階段を使うのは構わない。私たちは常にエレベーターを使うのをやめるべきだ。"
    }
];

let currentQuestions = [];
let userAnswers = {}; // Map id -> answer value
let isChecked = false;

const partSelect = document.getElementById('partSelect');
const quizContainer = document.getElementById('quizContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');

function loadPart(part) {
    isChecked = false;
    userAnswers = {};
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    
    if (part === 'all') {
        currentQuestions = JSON.parse(JSON.stringify(quizData));
    } else {
        currentQuestions = quizData.filter(q => q.part === part);
    }

    renderQuestions();
}

function renderQuestions() {
    quizContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${q.id}`;

        if (q.type === 'choice') {
            // Part A: 選択問題
            renderChoiceQuestion(card, q);
        } else {
            // Part B: 並び替え問題
            renderScrambleQuestion(card, q);
        }

        // 結果表示エリア
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-feedback';
        resultDiv.id = `result-${q.id}`;
        resultDiv.style.display = 'none';
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

// --- Part A レンダリング ---
function renderChoiceQuestion(card, q) {
    const qText = document.createElement('div');
    qText.className = 'q-text';
    // 文中の ( ) を視覚的にわかりやすく
    qText.innerHTML = `Q${q.id}. ${q.q.replace('( )', '<span style="border-bottom:2px solid #3498db; padding:0 10px; color:#3498db; font-weight:bold;">( ? )</span>')}`;
    card.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-group';

    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        
        // 選択状態の反映
        if (userAnswers[q.id] === opt) {
            btn.classList.add('selected');
        }

        btn.onclick = () => {
            if (isChecked) return;
            userAnswers[q.id] = opt;
            renderQuestions(); // 再描画して選択状態更新
        };
        optionsDiv.appendChild(btn);
    });
    card.appendChild(optionsDiv);
}

// --- Part B レンダリング ---
function renderScrambleQuestion(card, q) {
    const qText = document.createElement('div');
    qText.className = 'q-text';
    qText.innerHTML = `Q${q.id}. ${q.prefix} [ <span style="color:#3498db; font-size:0.9em;">並び替えてください</span> ] ${q.suffix}`;
    card.appendChild(qText);

    // 内部状態管理（初期化）
    if (!userAnswers[q.id]) {
        userAnswers[q.id] = {
            selected: [],
            pool: [...q.words].sort(() => Math.random() - 0.5) // シャッフル
        };
    }
    const state = userAnswers[q.id];

    // 解答ゾーン
    const zone = document.createElement('div');
    zone.className = 'scramble-zone';
    state.selected.forEach((word, idx) => {
        const tile = createTile(word, () => {
            if (isChecked) return;
            state.selected.splice(idx, 1);
            state.pool.push(word);
            renderQuestions(); // 部分更新より全体更新が簡単
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

    // 画面ロックのため再描画
    renderQuestions();

    currentQuestions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const resultDiv = document.getElementById(`result-${q.id}`);
        resultDiv.style.display = 'block';

        let isCorrect = false;
        let userAnsText = "";

        if (q.type === 'choice') {
            userAnsText = userAnswers[q.id] || "(未回答)";
            isCorrect = (userAnsText === q.ans);
        } else {
            // Scramble
            const state = userAnswers[q.id];
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

        // --- 和訳の追加 ---
        feedbackHtml += `<div class="jp-translation"><span style="font-weight:bold; color:#555;">[訳]</span> ${q.jp}</div>`;
        
        resultDiv.innerHTML = feedbackHtml;
    });

    const scoreText = `Score: ${correctCount} / ${total}`;
    scoreSection.innerHTML = `
        <div class="final-score">${scoreText}</div>
        <div>
            <button class="primary-btn" onclick="location.reload()">Retry</button>
        </div>
    `;
    scoreSection.style.display = 'block';
    submitArea.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init
partSelect.addEventListener('change', (e) => loadPart(e.target.value));
loadPart('A'); // Default Part A