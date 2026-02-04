// --- 全テストデータ (解説付き) ---
const allTests = {
    test2: [
        { 
            id: 201, type: 'choice', part: 'A', 
            q: "If the library ( ) more fashion magazines, I would go there more often.", 
            options: ["had", "has", "were", "is"], 
            ans: "had", 
            jp: "もし図書館にもっとファッション雑誌があれば、もっと頻繁に行くのに。",
            explanation: "If S had ... (仮定法過去：もし～なら)"
        },
        { 
            id: 202, type: 'choice', part: 'A', 
            q: "I wish my office ( ) larger! It is too small.", 
            options: ["is", "has", "had", "were"], 
            ans: "were", 
            jp: "私のオフィスがもっと広ければいいのに！狭すぎる。",
            explanation: "I wish S were ... (～ならいいのに)"
        },
        { 
            id: 203, type: 'choice', part: 'A', 
            q: "But ( ) your help, I wouldn't have done such a great job!", 
            options: ["on", "from", "without", "for"], 
            ans: "for", 
            jp: "あなたの助けがなければ、こんないい仕事はできなかったでしょう！",
            explanation: "But for ～ (～がなければ)"
        },
        { 
            id: 204, type: 'choice', part: 'A', 
            q: "Young mothers can share the problems of ( ) children when they see each other in the park.", 
            options: ["growing", "bringing", "raising", "increasing"], 
            ans: "raising", 
            jp: "若い母親たちは公園で会う時、子育ての問題を共有できる。",
            explanation: "raising children (子育て)"
        },
        { 
            id: 205, type: 'choice', part: 'A', 
            q: "You see many ( ) selling exotic foods from all over the world.", 
            options: ["flower vases", "discount rates", "food stalls", "kitchen cars"], 
            ans: "food stalls", 
            jp: "世界中の珍しい食べ物を売っている多くの屋台を見かけます。",
            explanation: "food stalls (屋台)"
        },
        { 
            id: 206, type: 'choice', part: 'A', 
            q: "Flower pots were ( ) on top of each other in front of the door.", 
            options: ["stacked", "referred", "equipped", "done"], 
            ans: "stacked", 
            jp: "植木鉢がドアの前で互いに積み重ねられていた。",
            explanation: "be stacked (積み重ねられている)"
        },
        { 
            id: 207, type: 'choice', part: 'A', 
            q: "Tokyo is known ( ) its nightlife, shopping, entertainment and excellent public transportation.", 
            options: ["for", "about", "to", "by"], 
            ans: "for", 
            jp: "東京はナイトライフ、買い物、娯楽、そして素晴らしい公共交通機関で知られている。",
            explanation: "be known for ～ (～で知られている)"
        },
        { 
            id: 208, type: 'choice', part: 'A', 
            q: "I'm not ( ) of the traveller, but my parents have been to so many places.", 
            options: ["much", "any", "many", "either"], 
            ans: "much", 
            jp: "私はあまり旅行家ではないが、両親はとても多くの場所に行ったことがある。",
            explanation: "not much of a ～ (たいした～ではない)"
        },
        { 
            id: 209, type: 'choice', part: 'A', 
            q: "From the ( ) of paid leave, we can say that European region is ahead of most countries in Aisa.", 
            options: ["supplier", "opinion", "viewpoint", "retrospect"], 
            ans: "viewpoint", 
            jp: "有給休暇の観点から見ると、ヨーロッパ地域はアジアのほとんどの国より進んでいると言える。",
            explanation: "from the viewpoint of ～ (～の観点から)"
        },
        { 
            id: 210, type: 'choice', part: 'A', 
            q: "We want to go to Hawaii for Christmas, but major hotels in Hawaii have already been fully ( ).", 
            options: ["delivered", "appointed", "booked", "stayed"], 
            ans: "booked", 
            jp: "クリスマスにハワイに行きたいが、主要ホテルはすでに予約でいっぱいだ。",
            explanation: "fully booked (予約で満室)"
        },
        { 
            id: 211, type: 'choice', part: 'A', 
            q: "Gals refer ( ) young girls in Japan.", 
            options: ["into", "of", "to", "with"], 
            ans: "to", 
            jp: "「ギャル」は日本の若い女の子を指す。",
            explanation: "refer to ～ (～を指す)"
        },
        { 
            id: 212, type: 'choice', part: 'A', 
            q: "All these measures will go ( ) effect in two weeks on July 1.", 
            options: ["to", "into", "of", "with"], 
            ans: "into", 
            jp: "これらすべての措置は、2週間後の7月1日に施行される。",
            explanation: "go into effect (施行される)"
        },
        { 
            id: 213, type: 'choice', part: 'A', 
            q: "I helped my parents to dispose ( ) old furniture.", 
            options: ["into", "with", "of", "to"], 
            ans: "of", 
            jp: "私は両親が古い家具を処分するのを手伝った。",
            explanation: "dispose of ～ (～を処分する)"
        },
        { 
            id: 214, type: 'choice', part: 'A', 
            q: "The extremely hot days last summer have a lot to do ( ) global warming.", 
            options: ["to", "of", "into", "with"], 
            ans: "with", 
            jp: "昨夏の猛暑日は地球温暖化と大いに関係がある。",
            explanation: "have a lot to do with ～ (～と大いに関係がある)"
        }
    ],
    test3: [
        { 
            id: 301, type: 'choice', part: 'A', 
            q: "( ) to the recent survey, children don't play in a park as often as before.", 
            options: ["Due", "According", "In order", "Owing"], 
            ans: "According", 
            jp: "最近の調査によると、子供たちは以前ほど頻繁に公園で遊ばなくなっている。",
            explanation: "According to ～ (～によると)"
        },
        { 
            id: 302, type: 'choice', part: 'A', 
            q: "I didn't push you ( ) purpose. It was an accident!", 
            options: ["for", "from", "about", "on"], 
            ans: "on", 
            jp: "わざとあなたを押したわけではありません。事故でした！",
            explanation: "on purpose (わざと)"
        },
        { 
            id: 303, type: 'choice', part: 'A', 
            q: "Your apartment is nice. Is the ( ) expensive? How much do you pay every month?", 
            options: ["admission", "fare", "rent", "tuition"], 
            ans: "rent", 
            jp: "素敵なアパートですね。家賃は高いですか？",
            explanation: "rent (家賃)"
        },
        { 
            id: 304, type: 'choice', part: 'A', 
            q: "Please text me ( ) maiko_ogasawara453@gmail.com.", 
            options: ["for", "in", "on", "at"], 
            ans: "at", 
            jp: "maiko_ogasawara453@gmail.com にメールしてください。",
            explanation: "at + email address (メールアドレスの前にat)"
        },
        { 
            id: 305, type: 'choice', part: 'A', 
            q: "My father makes very good ( ) Indian curry.", 
            options: ["guradual", "authentic", "vacant", "tentative"], 
            ans: "authentic", 
            jp: "私の父はとても美味しい本格的なインドカレーを作ります。",
            explanation: "authentic (本格的な/本物の)"
        },
        { 
            id: 306, type: 'choice', part: 'A', 
            q: "My friend's room was a ( )! Her shoes were on the floor and the kitchen sink was filled with dirty plates and cups.", 
            options: ["mess", "venue", "request", "reduction"], 
            ans: "mess", 
            jp: "友人の部屋は散らかっていた！",
            explanation: "be a mess (散らかっている)"
        },
        { 
            id: 307, type: 'choice', part: 'A', 
            q: "Communication is crucial and ( ) to build a strong relationship with your coworkers.", 
            options: ["indispensable", "incombustible", "identical", "unusual"], 
            ans: "indispensable", 
            jp: "同僚との強い関係を築くために、コミュニケーションは不可欠です。",
            explanation: "indispensable (不可欠な)"
        },
        { 
            id: 308, type: 'choice', part: 'A', 
            q: "There was a ( ) of documents on my supervisor's desk this morning.", 
            options: ["kind", "stack", "sheet", "piece"], 
            ans: "stack", 
            jp: "今朝、上司の机の上に書類の山があった。",
            explanation: "a stack of ～ (～の山/積み重ね)"
        },
        { 
            id: 309, type: 'choice', part: 'A', 
            q: "We should arrive at Shinagawa Station a little early to ( ) a seat on Shinkansen.", 
            options: ["secure", "sit", "expand", "achieve"], 
            ans: "secure", 
            jp: "新幹線の席を確保するために、少し早めに品川駅に到着すべきです。",
            explanation: "secure a seat (席を確保する)"
        },
        { 
            id: 310, type: 'choice', part: 'A', 
            q: "My boss got really angry when I forgot to ( ) a map to the email.", 
            options: ["saturate", "attach", "interview", "book"], 
            ans: "attach", 
            jp: "メールに地図を添付するのを忘れたとき、上司は本当に怒った。",
            explanation: "attach A to B (AをBに添付する)"
        },
        { 
            id: 311, type: 'choice', part: 'A', 
            q: "Panasonic is one of the top Japanese electric ( ) makers.", 
            options: ["appliance", "budget", "complex", "region"], 
            ans: "appliance", 
            jp: "パナソニックは日本のトップ家電メーカーの一つです。",
            explanation: "electric appliance (家電)"
        },
        { 
            id: 312, type: 'choice', part: 'A', 
            q: "Teamwork is highly ( ) in Japanese companies.", 
            options: ["reasoned", "paid", "valued", "bothered"], 
            ans: "valued", 
            jp: "日本の企業ではチームワークが高く評価されています。",
            explanation: "be highly valued (高く評価される)"
        },
        { 
            id: 313, type: 'choice', part: 'A', 
            q: "The man ( ) talked to me in the bank wasn't very polite.", 
            options: ["who", "whose", "whom", "which"], 
            ans: "who", 
            jp: "銀行で私に話しかけてきた男性はあまり礼儀正しくなかった。",
            explanation: "The man who ... (主格の関係代名詞)"
        },
        { 
            id: 314, type: 'choice', part: 'A', 
            q: "I'm looking for an old book ( ) cover was torn. Have you seen it?", 
            options: ["who", "whose", "whom", "which"], 
            ans: "whose", 
            jp: "表紙が破れた古い本を探しています。",
            explanation: "book whose cover ... (所有格の関係代名詞)"
        },
        { 
            id: 315, type: 'choice', part: 'A', 
            q: "I attended a seminar yesterday, ( ) was not at all interesting.", 
            options: ["who", "whose", "which", "that"], 
            ans: "which", 
            jp: "昨日セミナーに参加したが、それは全く面白くなかった。",
            explanation: ", which ... (非制限用法)"
        },
        { 
            id: 316, type: 'choice', part: 'A', 
            q: "A: What's on today's ( )?\nB: We have to make a decision about the budget for next fiscal year.", 
            options: ["newspaper", "menu", "agenda", "revenue"], 
            ans: "agenda", 
            jp: "A: 今日の議題は何ですか？",
            explanation: "agenda (議題/協議事項)"
        }
    ],
    test4: [
        { 
            id: 401, type: 'choice', part: 'A', 
            q: "My sister is studying to get a master's ( ) in IT technology.", 
            options: ["degree", "qualification", "reference", "CV"], 
            ans: "degree", 
            jp: "姉はIT技術の修士号を取得するために勉強しています。",
            explanation: "master's degree (修士号)"
        },
        { 
            id: 402, type: 'choice', part: 'A', 
            q: "My classmate is going to cook ( ) Indian curry for us this weekend.", 
            options: ["optimistic", "authentic", "combustible", "potential"], 
            ans: "authentic", 
            jp: "クラスメートが週末に本格的なインドカレーを作ってくれる予定です。",
            explanation: "authentic (本格的な)"
        },
        { 
            id: 403, type: 'choice', part: 'A', 
            q: "The only thing ( ) bothers me is that I couldn't find any information about the rent.", 
            options: ["what", "who", "that", "when"], 
            ans: "that", 
            jp: "私を悩ませている唯一のことは、家賃に関する情報が見つからなかったことです。",
            explanation: "The only thing that ... (～する唯一のこと)"
        },
        { 
            id: 404, type: 'choice', part: 'A', 
            q: "The rent is $780 per month including ( ).", 
            options: ["salaries", "utilities", "measures", "facilities"], 
            ans: "utilities", 
            jp: "家賃は光熱費込みで月額780ドルです。",
            explanation: "utilities (光熱費/公共料金)"
        },
        { 
            id: 405, type: 'choice', part: 'A', 
            q: "My son forgot his hat ( ) purpose because he didn't want to wear it.", 
            options: ["at", "in", "on", "of"], 
            ans: "on", 
            jp: "息子は帽子をかぶりたくなかったので、わざと帽子を忘れました。",
            explanation: "on purpose (わざと)"
        },
        { 
            id: 406, type: 'choice', part: 'A', 
            q: "We estimate that our ( ) will increase around 10 %.", 
            options: ["inquiry", "destination", "tendency", "revenue"], 
            ans: "revenue", 
            jp: "私たちの収益は約10％増加すると予測しています。",
            explanation: "revenue (収益)"
        },
        { 
            id: 407, type: 'choice', part: 'A', 
            q: "Before we begin a new ( ) year, we would like to hear employees' ideas and suggestions.", 
            options: ["annual", "fiscal", "vinyl", "physical"], 
            ans: "fiscal", 
            jp: "新しい会計年度が始まる前に、従業員のアイデアや提案を聞きたいです。",
            explanation: "fiscal year (会計年度)"
        },
        { 
            id: 408, type: 'choice', part: 'A', 
            q: "For my children, ( ) are both interested in karate, it's pity there is no karate class.", 
            options: ["that", "who", "whose", "whom"], 
            ans: "who", 
            jp: "空手に興味を持っている子供たちにとって、空手教室がないのは残念だ。",
            explanation: ", who ... (非制限用法)"
        },
        { 
            id: 409, type: 'choice', part: 'A', 
            q: "You have to ( ) your resume to your email.", 
            options: ["attract", "attach", "attack", "attend"], 
            ans: "attach", 
            jp: "メールに履歴書を添付しなければなりません。",
            explanation: "attach (添付する)"
        },
        { 
            id: 410, type: 'choice', part: 'A', 
            q: "We are well ( ) that the fitness industry market is already saturated.", 
            options: ["awesome", "afraid", "careful", "aware"], 
            ans: "aware", 
            jp: "フィットネス業界の市場がすでに飽和状態であることは十分承知しています。",
            explanation: "be well aware (十分承知している)"
        },
        { 
            id: 411, type: 'choice', part: 'A', 
            q: "This book gives a lot of useful advice to ( ) entrepreneurs.", 
            options: ["novice", "hazardous", "identical", "transparent"], 
            ans: "novice", 
            jp: "この本は初心者の起業家に多くの役立つアドバイスを与えてくれます。",
            explanation: "novice (初心者の)"
        },
        { 
            id: 412, type: 'choice', part: 'A', 
            q: "There was ( ) audience at the concert because the band wasn't famous at all.", 
            options: ["a small", "a little", "many", "a few"], 
            ans: "a small", 
            jp: "そのバンドは全く有名ではなかったため、コンサートの観客は少なかった。",
            explanation: "a small audience (少ない観客)"
        },
        { 
            id: 413, type: 'choice', part: 'A', 
            q: "Tokushima Newspaper includes so many ( ) ads.", 
            options: ["classical", "classic", "classified", "classiy"], 
            ans: "classified", 
            jp: "徳島新聞には非常に多くの案内広告が掲載されています。",
            explanation: "classified ads (案内広告)"
        },
        { 
            id: 414, type: 'choice', part: 'A', 
            q: "IT companies are popular with job-hunting students because they offer ( ) salary.", 
            options: ["stack", "dispensable", "competitive", "effective"], 
            ans: "competitive", 
            jp: "IT企業は高い（競争力のある）給与を提示するため、就活生に人気があります。",
            explanation: "competitive salary (高い給与)"
        },
        { 
            id: 415, type: 'choice', part: 'A', 
            q: "We have openings for ( ) and experienced translators.", 
            options: ["qualified", "related", "replaced", "cluttered"], 
            ans: "qualified", 
            jp: "資格のある経験豊富な翻訳者を募集しています。",
            explanation: "qualified (資格のある)"
        },
        { 
            id: 416, type: 'choice', part: 'A', 
            q: "Our ( ) package includes extended summer and winter holidays but it doesn't include flexible working hours.", 
            options: ["production", "shipping", "benefits", "paid holiday"], 
            ans: "benefits", 
            jp: "私たちの福利厚生には長期休暇が含まれていますが、フレックスタイム制は含まれていません。",
            explanation: "benefits package (福利厚生)"
        },
        { 
            id: 417, type: 'choice', part: 'A', 
            q: "( ) experience in marketing is preferred, but no candidates have the experience.", 
            options: ["Prior", "Implicit", "Trained", "Comparing"], 
            ans: "Prior", 
            jp: "マーケティングの事前経験が望ましいですが、その経験を持つ候補者はいません。",
            explanation: "prior experience (事前経験)"
        },
        { 
            id: 418, type: 'choice', part: 'A', 
            q: "Using social media is the most efficient ( ) of advertisement.", 
            options: ["means", "mean", "meaning", "meanness"], 
            ans: "means", 
            jp: "ソーシャルメディアを使うことは、最も効率的な広告手段です。",
            explanation: "means (手段)"
        },
        { 
            id: 419, type: 'choice', part: 'A', 
            q: "I told you the wrong phone number but it wasn't ( ).", 
            options: ["intentional", "international", "commercial", "classical"], 
            ans: "intentional", 
            jp: "間違った電話番号を教えてしまいましたが、意図的ではありませんでした。",
            explanation: "intentional (意図的な)"
        },
        { 
            id: 420, type: 'choice', part: 'A', 
            q: "The bedroom has a single bed and a dresser as ( ) as a TV.", 
            options: ["good", "well", "many", "much"], 
            ans: "well", 
            jp: "寝室にはシングルベッドとドレッサー、そしてテレビもあります。",
            explanation: "A as well as B (BだけでなくAも)"
        }
    ]
};

// --- グローバル変数と状態管理 ---
let currentQuestions = [];
let questionStates = {}; // IDごとの状態
let isChecked = false;

const testSelect = document.getElementById('testSelect');
const quizContainer = document.getElementById('quizContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');

// 配列シャッフル関数
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// データのロードと初期化
function loadData() {
    isChecked = false;
    questionStates = {}; 
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    
    const testId = testSelect.value;
    // targetPart は HTML側で <script>const targetPart = 'A';</script> と定義されている前提
    
    let sourceData = [];
    if (testId === 'review') {
        // 全テスト統合 (Part Aのみ)
        const t2 = allTests.test2.filter(q => q.part === targetPart);
        const t3 = allTests.test3.filter(q => q.part === targetPart);
        const t4 = allTests.test4.filter(q => q.part === targetPart);
        sourceData = [...t2, ...t3, ...t4];
    } else {
        sourceData = allTests[testId].filter(q => q.part === targetPart);
    }

    // 問題順をシャッフル
    currentQuestions = shuffle(JSON.parse(JSON.stringify(sourceData)));

    // 各問題の選択肢をシャッフルして保存
    currentQuestions.forEach(q => {
        questionStates[q.id] = {
            shuffledOptions: shuffle(q.options),
            selected: null
        };
    });

    renderQuestions();
}

// 描画処理
function renderQuestions() {
    quizContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${q.id}`;

        renderChoiceQuestion(card, q);

        // 結果表示エリア
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-feedback';
        resultDiv.id = `result-${q.id}`;
        resultDiv.style.display = 'none';
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

// Part A 描画
function renderChoiceQuestion(card, q) {
    const qText = document.createElement('div');
    qText.className = 'q-text';
    const formattedQ = q.q.replace(/\n/g, '<br>').replace('( )', '<span style="border-bottom:2px solid #3498db; padding:0 10px; color:#3498db; font-weight:bold;">( ? )</span>');
    qText.innerHTML = `Q. ${formattedQ}`;
    card.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-group';

    // 状態からシャッフル済みの選択肢を取得
    const state = questionStates[q.id];

    state.shuffledOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        
        if (state.selected === opt) {
            btn.classList.add('selected');
        }

        btn.onclick = () => {
            if (isChecked) return;
            state.selected = opt;
            renderQuestions(); // 再描画
        };
        optionsDiv.appendChild(btn);
    });
    card.appendChild(optionsDiv);
}

// 答え合わせ
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
        let userAnsText = state.selected || "(未回答)";
        isCorrect = (userAnsText === q.ans);

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
        
        // 解説・和訳の表示
        feedbackHtml += `
            <div class="jp-translation">
                <div style="margin-bottom:5px;">${q.jp}</div>
                <div style="color:#2e7d32; font-size:0.95em;"> ${q.explanation || "（解説なし）"}</div>
            </div>`;
            
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