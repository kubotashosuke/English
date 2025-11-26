// ==========================================
// 問題データ (全28問)
// ==========================================
const quizData = [
    // --- IMG_8696.jpg (No.1 - 12) ---
    {
        id: 1,
        question: "The preparations for the party was such ( ) work that all the staff at the restaurant felt relieved when it was finally over.",
        choices: ["exhaust", "exhaustion", "exhausting", "exhausted"],
        answer: 2, // exhausting
        translation: "そのパーティーの準備はとても骨の折れる仕事だったので、ようやく終わったとき、レストランのスタッフ全員がほっとした。"
    },
    {
        id: 2,
        question: "My father always orders a special menu ( ) advance because he cannot eat certain food.",
        choices: ["on", "in", "for", "of"],
        answer: 1, // in
        translation: "父は特定の食べ物が食べられないので、いつも事前に特別メニューを注文する。"
    },
    {
        id: 3,
        question: "We feel ( ) we were in an aquarium in this restaurant.",
        choices: ["in spite of", "what", "when", "as if"],
        answer: 3, // as if
        translation: "このレストランにいると、まるで水族館にいるような気分になる。"
    },
    {
        id: 4,
        question: "We got our TV at K’s Denki, which is one of the big home ( ) stores.",
        choices: ["delivery", "appliance", "conference", "variety"],
        answer: 1, // appliance
        translation: "私たちはテレビをケーズデンキで買った。そこは大きな家電量販店の一つだ。"
    },
    {
        id: 5,
        question: "When you ask for a ( ), you probably have to show the receipt.",
        choices: ["refund", "description", "handout", "assistance"],
        answer: 0, // refund
        translation: "払い戻しを求めるときは、おそらくレシートを見せる必要があるだろう。"
    },
    {
        id: 6,
        question: "At this supermarket, they ( ) only food. We cannot buy batteries.",
        choices: ["look for", "fill out", "carry", "purchase"],
        answer: 2, // carry
        translation: "このスーパーでは食品しか扱っていない。電池は買えない。"
    },
    {
        id: 7,
        question: "My mother met my father at college. She said it was love at first ( ).",
        choices: ["moment", "sight", "site", "day"],
        answer: 1, // sight
        translation: "母は父と大学で出会った。彼女は一目惚れだったと言っている。"
    },
    {
        id: 8,
        question: "DMV stands for dual mode ( ). DMV can be used as a bus or a train.",
        choices: ["vote", "vehicle", "victory", "volunteer"],
        answer: 1, // vehicle
        translation: "DMVはデュアル・モード・ビークルの略だ。DMVはバスとしても電車としても使える。"
    },
    {
        id: 9,
        question: "Towels are placed side ( ) side.",
        choices: ["by", "to", "of", "in"],
        answer: 0, // by
        translation: "タオルが横に並んで置かれている。"
    },
    {
        id: 10,
        question: "When we wanted to sit down inside, I asked the server politely but in ( ).",
        choices: ["vain", "details", "depth", "case"],
        answer: 0, // vain
        translation: "中で座りたかったので店員に丁寧に頼んだが、無駄だった（席はなかった）。"
    },
    {
        id: 11,
        question: "I have made a ( ) reservation for three nights at Clement Hotel.",
        choices: ["creative", "sensitive", "tentative", "positive"],
        answer: 2, // tentative
        translation: "クレメントホテルに3泊の仮予約を入れた。"
    },
    {
        id: 12,
        question: "We still have a couple of problems to ( ) out before we start the new course.",
        choices: ["turn", "sort", "put", "take"],
        answer: 1, // sort
        translation: "新しいコースを始める前に、整理すべき問題がまだいくつかある。"
    },

    // --- IMG_8697.jpg (No.13 - 28) ---
    {
        id: 13,
        question: "Rose is known ( ) a member of Black Pink.",
        choices: ["as", "for", "to", "by"],
        answer: 0, // as
        translation: "ロゼはブラックピンクのメンバーとして知られている。"
    },
    {
        id: 14,
        question: "According to a recent ( ), over 70% people use online shopping.",
        choices: ["survey", "membership", "voucher", "owner"],
        answer: 0, // survey
        translation: "最近の調査によると、70%以上の人がオンラインショッピングを利用している。"
    },
    {
        id: 15,
        question: "It is about time children ( ) to bed.",
        choices: ["have gone", "will go", "go", "went"],
        answer: 3, // went
        translation: "子供たちはもう寝る時間だ。"
    },
    {
        id: 16,
        question: "The ( ) for a single room is $160 per night plus tax.",
        choices: ["vacancy", "accommodation", "venue", "rate"],
        answer: 3, // rate
        translation: "シングルルームの料金は一泊160ドル＋税だ。"
    },
    {
        id: 17,
        question: "I must ( ) my resume at home. I searched in my bag but couldn't find it.",
        choices: ["leave", "be leaving", "be left", "have left"],
        answer: 3, // have left
        translation: "家に履歴書を忘れたに違いない。鞄の中を探したが、見つからなかった。"
    },
    {
        id: 18,
        question: "In an individual interview, recruiters observe their personality ( ).",
        choices: ["opening", "questionnaire", "traits", "employment"],
        answer: 2, // traits
        translation: "個人面接では、採用担当者は彼らの性格的特徴を観察する。"
    },
    {
        id: 19,
        question: "David is most likely to be a successful ( ) for the position.",
        choices: ["applicant", "physical work", "event", "market"],
        answer: 0, // applicant
        translation: "西田麻友子はその職の応募者として合格する可能性が最も高い。"
    },
    {
        id: 20,
        question: "A tall woman was standing ( ) her arms folded.",
        choices: ["up", "with", "on", "of"],
        answer: 1, // with
        translation: "背の高い女性が腕組みをして立っていた。"
    },
    {
        id: 21,
        question: "We are thinking of ( ) up for the office Halloween party.",
        choices: ["registering", "signing", "getting", "applying"],
        answer: 1, // signing
        translation: "私たちはオフィスのハロウィンパーティーに申し込もうと考えている。"
    },
    {
        id: 22,
        question: "Please ( ) yourself to cookies on the table.",
        choices: ["help", "consider", "serve", "eat"],
        answer: 0, // help
        translation: "テーブルのクッキーをご自由にどうぞ。"
    },
    {
        id: 23,
        question: "We are going to have pizza ( ) because we won't have time to cook dinner.",
        choices: ["deliver", "to deliver", "delivering", "delivered"],
        answer: 3, // delivered
        translation: "夕食を作る時間がないので、ピザを配達してもらうつもりだ。"
    },
    {
        id: 24,
        question: "Debbie is ( ) for transportation. She has to book a bus by tonight.",
        choices: ["impossible", "responsible", "available", "able"],
        answer: 1, // responsible
        translation: "デビーは交通機関の担当だ。彼女は今夜までにバスを予約しなければならない。"
    },
    {
        id: 25,
        question: "Rob often talks too much and doesn't let people talk. My boss told him not to ( ) our discussion.",
        choices: ["distract", "gain", "reimburse", "launch"],
        answer: 0, // distract
        translation: "ロブはよく喋りすぎて他人に喋らせない。上司は彼に議論を妨げないよう言った。"
    },
    {
        id: 26,
        question: "Cultural differences cause trouble when people do business ( ).",
        choices: ["domestically", "global", "foreign", "internationally"],
        answer: 3, // internationally
        translation: "国際的にビジネスを行う際、文化の違いがトラブルの原因になる。"
    },
    {
        id: 27,
        question: "Asian people should try harder to make their message ( ) and clear by using more words.",
        choices: ["implicit", "explicit", "fluent", "multiple"],
        answer: 1, // explicit
        translation: "アジア人はもっと多くの言葉を使って、メッセージを明確ではっきりとさせるよう努力すべきだ。"
    },
    {
        id: 28,
        question: "The price was higher than we ( ), so we decided not to place an order.",
        choices: ["expected", "have expected", "have been expecting", "had expected"],
        answer: 3, // had expected
        translation: "価格が私たちが予想していたよりも高かったので、注文しないことに決めた。"
    }
];

// ==========================================
// 2. アプリロジック
// ==========================================

let currentQuestions = [];
let userAnswers = []; // 選択した回答（インデックス）を保持
let feedbackCache = []; // 採点結果のキャッシュ

const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizList = document.getElementById('quiz-list');
const gradeBtn = document.getElementById('grade-btn');
const retryBtn = document.getElementById('retry-btn');
const resultSummary = document.getElementById('result-summary');
const totalScoreEl = document.getElementById('total-score');
const maxScoreEl = document.getElementById('max-score');

// シャッフル関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ---------------------------------
// 開始処理
// ---------------------------------
function startQuiz() {
    // 全問をシャッフルしてセット
    currentQuestions = shuffle([...quizData]);
    // 回答配列の初期化 (nullで埋める)
    userAnswers = currentQuestions.map(() => null);
    // キャッシュ初期化
    feedbackCache = currentQuestions.map(() => null);

    // 画面切り替え
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultSummary.classList.add('hidden');
    gradeBtn.classList.remove('hidden');
    gradeBtn.textContent = "採点する";
    retryBtn.classList.add('hidden');

    // リスト描画
    renderList();
    
    // ページトップへ
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------------------------
// リスト描画
// ---------------------------------
function renderList() {
    quizList.innerHTML = ''; 

    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q-card-${index}`;

        // ヘッダー
        const header = document.createElement('div');
        header.className = 'question-header';
        header.textContent = `Q${index + 1}.`;
        card.appendChild(header);

        // 問題文
        const qText = document.createElement('div');
        qText.className = 'question-text';
        // ( ) を見やすく装飾
        qText.innerHTML = q.question.replace('(', '<span style="color:#3498db; font-weight:bold;">(</span>').replace(')', '<span style="color:#3498db; font-weight:bold;">)</span>');
        card.appendChild(qText);

        // 選択肢ボタンエリア
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-grid';
        
        q.choices.forEach((choice, choiceIdx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = choice;
            
            // 選択済みなら色付け
            if (userAnswers[index] === choiceIdx) {
                btn.classList.add('selected');
            }

            // クリックイベント
            btn.onclick = () => {
                // 回答を保存
                userAnswers[index] = choiceIdx;
                // UI更新
                updateSelection(optionsDiv, btn);
            };
            
            optionsDiv.appendChild(btn);
        });
        card.appendChild(optionsDiv);

        // 採点結果エリア
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-area hidden';
        feedbackDiv.id = `feedback-${index}`;
        
        // キャッシュがあれば表示（再採点後など）
        if (feedbackCache[index]) {
            feedbackDiv.innerHTML = feedbackCache[index];
            feedbackDiv.classList.remove('hidden');
        }
        
        card.appendChild(feedbackDiv);
        quizList.appendChild(card);
    });
}

// ボタン選択時の見た目更新（DOM操作のみで軽量化）
function updateSelection(container, clickedBtn) {
    const allBtns = container.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.classList.remove('selected'));
    clickedBtn.classList.add('selected');
}

// ---------------------------------
// 採点処理
// ---------------------------------
function gradeAll() {
    let score = 0;
    let total = currentQuestions.length;

    currentQuestions.forEach((q, index) => {
        const userChoiceIdx = userAnswers[index];
        const isCorrect = (userChoiceIdx === q.answer);
        
        if (isCorrect) score++;

        // 選択肢ボタンに正解/不正解クラスを付与
        const card = document.getElementById(`q-card-${index}`);
        const buttons = card.querySelectorAll('.option-btn');
        
        buttons.forEach((btn, btnIdx) => {
            // 一旦クラスリセット
            btn.classList.remove('correct', 'wrong');
            
            // 正解のボタンには常に correct クラス（緑色）
            if (btnIdx === q.answer) {
                btn.classList.add('correct');
            }
            // 間違って選んだボタンには wrong クラス（赤色）
            if (!isCorrect && btnIdx === userChoiceIdx) {
                btn.classList.add('wrong');
            }
        });

        // フィードバックHTML生成
        const userChoiceText = (userChoiceIdx !== null) ? q.choices[userChoiceIdx] : "（未回答）";
        const feedbackHTML = `
            <span class="result-mark ${isCorrect ? 'correct-mark' : 'wrong-mark'}">
                ${isCorrect ? '〇 正解' : '✕ 不正解'}
            </span>
            ${!isCorrect ? '<br><strong>あなたの回答:</strong> ' + userChoiceText : ''}
            <div class="correct-sentence">正解: ${q.choices[q.answer]}</div>
            <div class="translation">${q.translation}</div>
        `;

        // キャッシュ保存
        feedbackCache[index] = feedbackHTML;

        // 表示
        const feedbackDiv = document.getElementById(`feedback-${index}`);
        feedbackDiv.innerHTML = feedbackHTML;
        feedbackDiv.classList.remove('hidden');

        // カード全体の背景色変更
        card.style.backgroundColor = isCorrect ? '#f0fff4' : '#fff5f5';
    });

    // ボタン切り替え
    gradeBtn.textContent = "再採点する";
    retryBtn.classList.remove('hidden');

    // スコア表示
    totalScoreEl.textContent = score;
    maxScoreEl.textContent = total;
    resultSummary.classList.remove('hidden');

    // 一番上へスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retryQuiz() {
    startQuiz();
}

function goMenu() {
    quizScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
}