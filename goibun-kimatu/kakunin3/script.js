// 問題データ (確認テスト③)
const quizData = [
    // --- Part A: ( )に入る語句を選んでください ---
    {
        id: 1, type: 'choice', part: 'A',
        q: "( ) to the recent survey, children don't play in a park as often as before.",
        options: ["Due", "According", "In order", "Owing"],
        ans: "According",
        jp: "最近の調査によると、子供たちは以前ほど頻繁に公園で遊ばなくなっている。"
    },
    {
        id: 2, type: 'choice', part: 'A',
        q: "I didn't push you ( ) purpose. It was an accident!",
        options: ["for", "from", "about", "on"],
        ans: "on",
        jp: "わざと（on purpose）あなたを押したわけではありません。事故（偶然）でした！"
    },
    {
        id: 3, type: 'choice', part: 'A',
        q: "Your apartment is nice. Is the ( ) expensive? How much do you pay every month?",
        options: ["admission", "fare", "rent", "tuition"],
        ans: "rent",
        jp: "素敵なアパートですね。家賃（rent）は高いですか？毎月いくら払っていますか？"
    },
    {
        id: 4, type: 'choice', part: 'A',
        q: "Please text me ( ) maiko_ogasawara453@gmail.com.",
        options: ["for", "in", "on", "at"],
        ans: "at",
        jp: "maiko_ogasawara453@gmail.com に（at）メールしてください。"
    },
    {
        id: 5, type: 'choice', part: 'A',
        q: "My father makes very good ( ) Indian curry.",
        options: ["guradual", "authentic", "vacant", "tentative"],
        ans: "authentic",
        jp: "私の父はとても美味しい本格的な（authentic）インドカレーを作ります。"
    },
    {
        id: 6, type: 'choice', part: 'A',
        q: "My friend's room was a ( )! Her shoes were on the floor and the kitchen sink was filled with dirty plates and cups.",
        options: ["mess", "venue", "request", "reduction"],
        ans: "mess",
        jp: "友人の部屋は散らかっていた（a mess）！靴は床にあり、キッチンのシンクは汚れた皿やカップでいっぱいだった。"
    },
    {
        id: 7, type: 'choice', part: 'A',
        q: "Communication is crucial and ( ) to build a strong relationship with your coworkers.",
        options: ["indispensable", "incombustible", "identical", "unusual"],
        ans: "indispensable",
        jp: "同僚との強い関係を築くために、コミュニケーションは極めて重要で不可欠（indispensable）です。"
    },
    {
        id: 8, type: 'choice', part: 'A',
        q: "There was a ( ) of documents on my supervisor's desk this morning.",
        options: ["kind", "stack", "sheet", "piece"],
        ans: "stack",
        jp: "今朝、上司の机の上に書類の山（stack）があった。"
    },
    {
        id: 9, type: 'choice', part: 'A',
        q: "We should arrive at Shinagawa Station a little early to ( ) a seat on Shinkansen.",
        options: ["secure", "sit", "expand", "achieve"],
        ans: "secure",
        jp: "新幹線の席を確保する（secure）ために、少し早めに品川駅に到着すべきです。"
    },
    {
        id: 10, type: 'choice', part: 'A',
        q: "My boss got really angry when I forgot to ( ) a map to the email.",
        options: ["saturate", "attach", "interview", "book"],
        ans: "attach",
        jp: "メールに地図を添付する（attach）のを忘れたとき、上司は本当に怒った。"
    },
    {
        id: 11, type: 'choice', part: 'A',
        q: "Panasonic is one of the top Japanese electric ( ) makers.",
        options: ["appliance", "budget", "complex", "region"],
        ans: "appliance",
        jp: "パナソニックは日本のトップ家電（electric appliance）メーカーの一つです。"
    },
    {
        id: 12, type: 'choice', part: 'A',
        q: "Teamwork is highly ( ) in Japanese companies.",
        options: ["reasoned", "paid", "valued", "bothered"],
        ans: "valued",
        jp: "日本の企業ではチームワークが高く評価されて（valued）います。"
    },
    {
        id: 13, type: 'choice', part: 'A',
        q: "The man ( ) talked to me in the bank wasn't very polite.",
        options: ["who", "whose", "whom", "which"],
        ans: "who",
        jp: "銀行で私に話しかけてきた男性（The man who...）はあまり礼儀正しくなかった。"
    },
    {
        id: 14, type: 'choice', part: 'A',
        q: "I'm looking for an old book ( ) cover was torn. Have you seen it?",
        options: ["who", "whose", "whom", "which"],
        ans: "whose",
        jp: "表紙が破れた（whose cover...）古い本を探しています。見ませんでしたか？"
    },
    {
        id: 15, type: 'choice', part: 'A',
        q: "I attended a seminar yesterday, ( ) was not at all interesting.",
        options: ["who", "whose", "which", "that"],
        ans: "which",
        jp: "昨日セミナーに参加したが、それは（, which）全く面白くなかった。"
    },
    {
        id: 16, type: 'choice', part: 'A',
        q: "A: What's on today's ( )?\nB: We have to make a decision about the budget for next fiscal year.",
        options: ["newspaper", "menu", "agenda", "revenue"],
        ans: "agenda",
        jp: "A: 今日の議題（agenda）は何ですか？\nB: 来年度の予算について決定を下さなければなりません。"
    },

    // --- Part B: [ ]内に入る語句を並べ替えて、正しい文章を完成させてください ---
    {
        id: 17, type: 'scramble', part: 'B',
        prefix: "Minobayashi Station", suffix: "and many students take a train there.",
        words: ["is", "to", "close", "located", "my college"],
        ans: "is located close to my college",
        jp: "箕林駅は私の大学の近くにあり（is located close to...）、多くの学生がそこへ電車で行きます。"
    },
    {
        id: 18, type: 'scramble', part: 'B',
        prefix: "The office copy machine has", suffix: "almost a week.",
        words: ["of", "for", "out", "order", "been"],
        ans: "been out of order for",
        jp: "オフィスのコピー機はほぼ1週間故障しています（has been out of order）。"
    },
    {
        id: 19, type: 'scramble', part: 'B',
        prefix: "We are going to be", suffix: "Monday, but we can meet you Monday afternoon.",
        words: ["up", "on", "all", "tied", "morning"],
        ans: "tied up all morning on",
        jp: "月曜日の午前中はずっと予定が埋まっています（tied up）が、月曜日の午後ならお会いできます。"
    },
    {
        id: 20, type: 'scramble', part: 'B',
        prefix: "My husband and I are", suffix: "in history. You want to become a math teacher, don't you?",
        words: ["you want to", "get", "why", "wondering", "a degree"],
        ans: "wondering why you want to get a degree",
        jp: "夫と私は、あなたがなぜ歴史の学位を取りたいのか不思議に思っています。あなたは数学の先生になりたいのですよね？"
    },
    {
        id: 21, type: 'scramble', part: 'B',
        prefix: "TV commercials are an old type of advertisement. We have to use social media like Instagram if we", suffix: ".",
        words: ["to", "want", "young", "attract", "consumers"],
        ans: "want to attract young consumers",
        jp: "テレビCMは古いタイプの広告です。若い消費者を惹きつけたいなら、Instagramのようなソーシャルメディアを使わなければなりません。"
    },
    {
        id: 22, type: 'scramble', part: 'B',
        prefix: "I was told that some of the employees are", suffix: ".",
        words: ["each", "other", "having", "understanding", "a difficult time"],
        ans: "having a difficult time understanding each other",
        jp: "従業員の中にはお互いを理解するのに苦労している（having a difficult time...）人がいると聞きました。"
    },
    {
        id: 23, type: 'scramble', part: 'B',
        prefix: "Could you tell us", suffix: "meeting this morning?",
        words: ["in", "you", "what", "discussed", "the urgent"],
        ans: "what you discussed in the urgent",
        jp: "今朝の緊急会議で何を話し合ったのか教えていただけますか？"
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
            renderChoiceQuestion(card, q);
        } else {
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
    // 改行が含まれる場合に対応
    const formattedQ = q.q.replace(/\n/g, '<br>').replace('( )', '<span style="border-bottom:2px solid #3498db; padding:0 10px; color:#3498db; font-weight:bold;">( ? )</span>');
    qText.innerHTML = `Q${q.id}. ${formattedQ}`;
    card.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-group';

    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        
        if (userAnswers[q.id] === opt) {
            btn.classList.add('selected');
        }

        btn.onclick = () => {
            if (isChecked) return;
            userAnswers[q.id] = opt;
            renderQuestions();
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

    if (!userAnswers[q.id]) {
        userAnswers[q.id] = {
            selected: [],
            pool: [...q.words].sort(() => Math.random() - 0.5)
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
        resultDiv.style.display = 'block';

        let isCorrect = false;
        let userAnsText = "";

        if (q.type === 'choice') {
            userAnsText = userAnswers[q.id] || "(未回答)";
            isCorrect = (userAnsText === q.ans);
        } else {
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