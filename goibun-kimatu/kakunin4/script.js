// 問題データ (確認テスト④)
const quizData = [
    // --- Part A: 正しいものを選び文章を完成させて下さい ---
    {
        id: 1, type: 'choice', part: 'A',
        q: "My sister is studying to get a master's ( ) in IT technology.",
        options: ["degree", "qualification", "reference", "CV"],
        ans: "degree",
        jp: "姉はIT技術の修士号（master's degree）を取得するために勉強しています。"
    },
    {
        id: 2, type: 'choice', part: 'A',
        q: "My classmate is going to cook ( ) Indian curry for us this weekend.",
        options: ["optimistic", "authentic", "combustible", "potential"],
        ans: "authentic",
        jp: "クラスメートが今週末、私たちのために本格的な（authentic）インドカレーを作ってくれる予定です。"
    },
    {
        id: 3, type: 'choice', part: 'A',
        q: "The only thing ( ) bothers me is that I couldn't find any information about the rent.",
        options: ["what", "who", "that", "when"],
        ans: "that",
        jp: "私を悩ませている唯一のこと（The only thing that...）は、家賃に関する情報が全く見つからなかったことです。"
    },
    {
        id: 4, type: 'choice', part: 'A',
        q: "The rent is $780 per month including ( ).",
        options: ["salaries", "utilities", "measures", "facilities"],
        ans: "utilities",
        jp: "家賃は光熱費（utilities）込みで月額780ドルです。"
    },
    {
        id: 5, type: 'choice', part: 'A',
        q: "My son forgot his hat ( ) purpose because he didn't want to wear it.",
        options: ["at", "in", "on", "of"],
        ans: "on",
        jp: "息子は帽子をかぶりたくなかったので、わざと（on purpose）帽子を忘れました。"
    },
    {
        id: 6, type: 'choice', part: 'A',
        q: "We estimate that our ( ) will increase around 10 %.",
        options: ["inquiry", "destination", "tendency", "revenue"],
        ans: "revenue",
        jp: "私たちの収益（revenue）は約10％増加すると予測しています。"
    },
    {
        id: 7, type: 'choice', part: 'A',
        q: "Before we begin a new ( ) year, we would like to hear employees' ideas and suggestions.",
        options: ["annual", "fiscal", "vinyl", "physical"],
        ans: "fiscal",
        jp: "新しい会計年度（fiscal year）が始まる前に、従業員のアイデアや提案を聞きたいです。"
    },
    {
        id: 8, type: 'choice', part: 'A',
        q: "For my children, ( ) are both interested in karate, it's pity there is no karate class.",
        options: ["that", "who", "whose", "whom"],
        ans: "who",
        jp: "空手に興味を持っている（, who are...）子供たちにとって、空手教室がないのは残念だ。"
    },
    {
        id: 9, type: 'choice', part: 'A',
        q: "You have to ( ) your resume to your email.",
        options: ["attract", "attach", "attack", "attend"],
        ans: "attach",
        jp: "メールに履歴書を添付（attach）しなければなりません。"
    },
    {
        id: 10, type: 'choice', part: 'A',
        q: "We are well ( ) that the fitness industry market is already saturated.",
        options: ["awesome", "afraid", "careful", "aware"],
        ans: "aware",
        jp: "フィットネス業界の市場がすでに飽和状態であることは十分承知（well aware）しています。"
    },
    {
        id: 11, type: 'choice', part: 'A',
        q: "This book gives a lot of useful advice to ( ) entrepreneurs.",
        options: ["novice", "hazardous", "identical", "transparent"],
        ans: "novice",
        jp: "この本は初心者の（novice）起業家に多くの役立つアドバイスを与えてくれます。"
    },
    {
        id: 12, type: 'choice', part: 'A',
        q: "There was ( ) audience at the concert because the band wasn't famous at all.",
        options: ["a small", "a little", "many", "a few"],
        ans: "a small",
        jp: "そのバンドは全く有名ではなかったため、コンサートの観客は少なかった（a small audience）。"
    },
    {
        id: 13, type: 'choice', part: 'A',
        q: "Tokushima Newspaper includes so many ( ) ads.",
        options: ["classical", "classic", "classified", "classiy"],
        ans: "classified",
        jp: "徳島新聞には非常に多くの三行広告（classified ads / 案内広告）が掲載されています。"
    },
    {
        id: 14, type: 'choice', part: 'A',
        q: "IT companies are popular with job-hunting students because they offer ( ) salary.",
        options: ["stack", "dispensable", "competitive", "effective"],
        ans: "competitive",
        jp: "IT企業は他社に負けない（高い）給与（competitive salary）を提示するため、就活生に人気があります。"
    },
    {
        id: 15, type: 'choice', part: 'A',
        q: "We have openings for ( ) and experienced translators.",
        options: ["qualified", "related", "replaced", "cluttered"],
        ans: "qualified",
        jp: "資格のある（qualified）経験豊富な翻訳者を募集しています。"
    },
    {
        id: 16, type: 'choice', part: 'A',
        q: "Our ( ) package includes extended summer and winter holidays but it doesn't include flexible working hours.",
        options: ["production", "shipping", "benefits", "paid holiday"],
        ans: "benefits",
        jp: "私たちの福利厚生（benefits）パッケージには、夏期・冬期の長期休暇が含まれていますが、フレックスタイム制は含まれていません。"
    },
    {
        id: 17, type: 'choice', part: 'A',
        q: "( ) experience in marketing is preferred, but no candidates have the experience.",
        options: ["Prior", "Implicit", "Trained", "Comparing"],
        ans: "Prior",
        jp: "マーケティングの事前（Prior）経験が望ましいですが、その経験を持つ候補者はいません。"
    },
    {
        id: 18, type: 'choice', part: 'A',
        q: "Using social media is the most efficient ( ) of advertisement.",
        options: ["means", "mean", "meaning", "meanness"],
        ans: "means",
        jp: "ソーシャルメディアを使うことは、最も効率的な広告手段（means）です。"
    },
    {
        id: 19, type: 'choice', part: 'A',
        q: "I told you the wrong phone number but it wasn't ( ).",
        options: ["intentional", "international", "commercial", "classical"],
        ans: "intentional",
        jp: "間違うた電話番号を教えてしまいましたが、意図的（intentional）ではありませんでした。"
    },
    {
        id: 20, type: 'choice', part: 'A',
        q: "The bedroom has a single bed and a dresser as ( ) as a TV.",
        options: ["good", "well", "many", "much"],
        ans: "well",
        jp: "寝室にはシングルベッドとドレッサー、そしてテレビもあります（as well as）。"
    },

    // --- Part B: 並び替えて文章を完成させて下さい ---
    {
        id: 21, type: 'scramble', part: 'B',
        prefix: "We'd like to buy this house. It seems to", suffix: "to live with the children.",
        words: ["we", "have", "need", "that", "everything"],
        ans: "have everything that we need",
        jp: "私たちはこの家を買いたいです。ここには子供たちと暮らすために必要なものがすべて揃っているようです。"
    },
    {
        id: 22, type: 'scramble', part: 'B',
        prefix: "I must know", suffix: ".",
        words: ["is", "if", "within", "the rent", "my budget"],
        ans: "if the rent is within my budget",
        jp: "家賃が私の予算内かどうか知らなければなりません。"
    },
    {
        id: 23, type: 'scramble', part: 'B',
        prefix: "[", suffix: "] been renovated.",
        words: ["has", "our", "just", "spacious", "living room"],
        ans: "Our spacious living room has just",
        jp: "私たちの広々としたリビングルームは改装されたばかりです。"
    },
    {
        id: 24, type: 'scramble', part: 'B',
        prefix: "An", suffix: "] when we want to sell something.",
        words: ["an", "is", "tool", "indispensable", "advertisement"],
        ans: "advertisement is an indispensable tool",
        jp: "広告は、物を売りたい時に不可欠なツールです。"
    },
    {
        id: 25, type: 'scramble', part: 'B',
        prefix: "Only", suffix: "] for an interview.",
        words: ["be", "will", "selected", "contacted", "candidates"],
        ans: "selected candidates will be contacted",
        jp: "選ばれた候補者のみ、面接の連絡が行われます。"
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
    // プレフィックスの括弧処理（Q23, Q24など）
    let displayPrefix = q.prefix;
    if (displayPrefix === '[') displayPrefix = '';
    
    // サフィックスの括弧処理
    let displaySuffix = q.suffix;
    if (displaySuffix.startsWith(']')) displaySuffix = displaySuffix.substring(1);

    qText.innerHTML = `Q${q.id}. ${displayPrefix} [ <span style="color:#3498db; font-size:0.9em;">並び替えてください</span> ] ${displaySuffix}`;
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