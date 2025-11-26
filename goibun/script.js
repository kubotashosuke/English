// ==========================================
// 1. データ定義
// ==========================================

// --- 4択問題データ ---
const choiceQuizData = [
    { id: 1, question: "The preparations for the party was such ( ) work that all the staff at the restaurant felt relieved when it was finally over.", choices: ["exhaust", "exhaustion", "exhausting", "exhausted"], answer: 2, translation: "そのパーティーの準備はとても骨の折れる仕事だったので、ようやく終わったとき、レストランのスタッフ全員がほっとした。" },
    { id: 2, question: "My father always orders a special menu ( ) advance because he cannot eat certain food.", choices: ["on", "in", "for", "of"], answer: 1, translation: "父は特定の食べ物が食べられないので、いつも事前に特別メニューを注文する。" },
    { id: 3, question: "We feel ( ) we were in an aquarium in this restaurant.", choices: ["in spite of", "what", "when", "as if"], answer: 3, translation: "このレストランにいると、まるで水族館にいるような気分になる。" },
    { id: 4, question: "We got our TV at K’s Denki, which is one of the big home ( ) stores.", choices: ["delivery", "appliance", "conference", "variety"], answer: 1, translation: "私たちはテレビをケーズデンキで買った。そこは大きな家電量販店の一つだ。" },
    { id: 5, question: "When you ask for a ( ), you probably have to show the receipt.", choices: ["refund", "description", "handout", "assistance"], answer: 0, translation: "払い戻しを求めるときは、おそらくレシートを見せる必要があるだろう。" },
    { id: 6, question: "At this supermarket, they ( ) only food. We cannot buy batteries.", choices: ["look for", "fill out", "carry", "purchase"], answer: 2, translation: "このスーパーでは食品しか扱っていない。電池は買えない。" },
    { id: 7, question: "My mother met my father at college. She said it was love at first ( ).", choices: ["moment", "sight", "site", "day"], answer: 1, translation: "母は父と大学で出会った。彼女は一目惚れだったと言っている。" },
    { id: 8, question: "DMV stands for dual mode ( ). DMV can be used as a bus or a train.", choices: ["vote", "vehicle", "victory", "volunteer"], answer: 1, translation: "DMVはデュアル・モード・ビークルの略だ。DMVはバスとしても電車としても使える。" },
    { id: 9, question: "When we wanted to sit down inside, I asked the server politely but in ( ).", choices: ["vain", "details", "depth", "case"], answer: 0, translation: "中で座りたかったので店員に丁寧に頼んだが、無駄だった（席はなかった）。" },
    { id: 10, question: "I have made a ( ) reservation for three nights at Clement Hotel.", choices: ["creative", "sensitive", "tentative", "positive"], answer: 2, translation: "クレメントホテルに3泊の仮予約を入れた。" },
    { id: 11, question: "We still have a couple of problems to ( ) out before we start the new course.", choices: ["turn", "sort", "put", "take"], answer: 1, translation: "新しいコースを始める前に、整理すべき問題がまだいくつかある。" },
    { id: 12, question: "Rose is known ( ) a member of Black Pink.", choices: ["as", "for", "to", "by"], answer: 0, translation: "ロゼはブラックピンクのメンバーとして知られている。" },
    { id: 13, question: "According to a recent ( ), over 70% people use online shopping.", choices: ["survey", "membership", "voucher", "owner"], answer: 0, translation: "最近の調査によると、70%以上の人がオンラインショッピングを利用している。" },
    { id: 14, question: "It is about time children ( ) to bed.", choices: ["will go", "should go", "go", "went"], answer: 3, translation: "子供たちはもう寝る時間だ。" },
    { id: 15, question: "The ( ) for a single room is $160 per night plus tax.", choices: ["vacancy", "accommodation", "venue", "rate"], answer: 3, translation: "シングルルームの料金は一泊160ドル＋税だ。" },
    { id: 16, question: "I must ( ) my resume at home. I searched in my bag but couldn't find it.", choices: ["leave", "be leaving", "be left", "have left"], answer: 3, translation: "家に履歴書を忘れたに違いない。鞄の中を探したが、見つからなかった。" },
    { id: 17, question: "In an individual interview, recruiters observe their personality ( ).", choices: ["opening", "questionnaire", "traits", "employment"], answer: 2, translation: "個人面接では、採用担当者は彼らの性格的特徴を観察する。" },
    { id: 18, question: "Mayuko Nishida is most likely to be a successful ( ) for the position.", choices: ["applicant", "physical work", "event", "market"], answer: 0, translation: "西田真由子は、その職の応募者として最も成功する可能性が高い。" },
    { id: 19, question: "A tall woman was standing ( ) her arms folded.", choices: ["up", "with", "on", "of"], answer: 1, translation: "背の高い女性が腕組みをして立っていた。" },
    { id: 20, question: "I didn't ( ) up for the company trip. I don't really like travelling with other people.", choices: ["get", "register", "apply", "sign"], answer: 3, translation: "私は社員旅行に申し込まなかった。他人と旅行するのはあまり好きではない。" },
    { id: 21, question: "Please ( ) yourself to cookies on the table.", choices: ["help", "consider", "serve", "eat"], answer: 0, translation: "テーブルのクッキーをご自由にどうぞ。" },
    { id: 22, question: "We are going to have pizza ( ) because we won't have time to cook dinner.", choices: ["deliver", "to deliver", "delivering", "delivered"], answer: 3, translation: "夕食を作る時間がないので、ピザを配達してもらうつもりだ。" },
    { id: 23, question: "Debbie is ( ) for transportation. She has to book a bus by tonight.", choices: ["impossible", "responsible", "available", "able"], answer: 1, translation: "デビーは交通機関の担当だ。彼女は今夜までにバスを予約しなければならない。" },
    { id: 24, question: "Rob often talks too much and doesn't let people talk. My boss told him not to ( ) our discussion.", choices: ["distract", "gain", "reimburse", "launch"], answer: 0, translation: "ロブはよく喋りすぎて他人に喋らせない。上司は彼に議論を妨げないよう言った。" },
    { id: 25, question: "Cultural differences cause trouble when people do business ( ).", choices: ["domestically", "global", "foreign", "internationally"], answer: 3, translation: "国際的にビジネスを行う際、文化の違いがトラブルの原因になる。" },
    { id: 26, question: "Asian people should try harder to make their message ( ) and clear by using more words.", choices: ["implicit", "explicit", "fluent", "multiple"], answer: 1, translation: "アジア人はもっと多くの言葉を使って、メッセージを明確ではっきりとさせるよう努力すべきだ。" },
    { id: 27, question: "The price was higher than we ( ), so we decided not to place an order.", choices: ["expected", "have expected", "have been expecting", "had expected"], answer: 3, translation: "価格が私たちが予想していたよりも高かったので、注文しないことに決めた。" }
];

// --- 並び替え問題データ ---
const reorderData = [
    { id: 1, prefix: "I don't", suffix: ".", correctPart: "mean to blame the manager", translation: "私はマネージャーを責めるつもりはありません。" },
    { id: 2, prefix: "It was", suffix: "at that popular restaurant.", correctPart: "quite difficult to reserve a seat", translation: "あの人気レストランでは、席を予約するのはかなり難しかった。" },
    { id: 5, prefix: "", suffix: "if you go to London by bus.", correctPart: "It takes twice as long as", translation: "バスでロンドンに行くと2倍の時間がかかる。" },
    
    { id: 29, prefix: "I read the instruction carefully", suffix: ".", correctPart: "not to miss important information", translation: "重要な情報を見逃さないように、説明書を注意深く読んだ。" },
    { id: 31, prefix: "I need those", suffix: "morning.", correctPart: "documents first thing in the", translation: "朝一番にそれらの書類が必要です。" },
    { id: 33, prefix: "It", suffix: "if you go to London by bus.", correctPart: "takes twice as long as", translation: "バスでロンドンに行くと2倍の時間がかかる。" },
    { id: 35, prefix: "They usually accept", suffix: "free of charge.", correctPart: "reservation changes", translation: "彼らは通常、無料で予約の変更を受け付けている。" },
    { id: 37, prefix: "An old woman was hit by a truck when she was", suffix: ".", correctPart: "getting out of the taxi", translation: "年配の女性がタクシーから降りようとしたときにトラックにはねられた。" },
    { id: 39, prefix: "Many guitars are displayed", suffix: "guitar workshop.", correctPart: "in rows at the annual", translation: "毎年のギターワークショップでは、多くのギターが一列に並べて展示される。" },
    { id: 41, prefix: "As", suffix: ", you can get bonus twice a year.", correctPart: "is mentioned on the contract", translation: "契約書に記載されているように、年に2回ボーナスをもらえる。" },
    { id: 43, prefix: "The", suffix: "weeks of the invoice date.", correctPart: "payment is due within two", translation: "支払いは請求書の日付から2週間以内に行わなければならない。" },
    { id: 45, prefix: "Asian people are often trained", suffix: ".", correctPart: "to read between the lines", translation: "アジア人は行間を読むように訓練されていることが多い。" },
    { id: 47, prefix: "All the", suffix: "free Wi-Fi.", correctPart: "rooms are equipped with", translation: "すべての部屋に無料Wi-Fiが完備されている。" },
    { id: 49, prefix: "The hotel is a 10-minute", suffix: ".", correctPart: "walk from the concert venue", translation: "そのホテルはコンサート会場から徒歩10分だ。" },
    { id: 51, prefix: "I don't know how to get to Anan Station. I'm", suffix: ".", correctPart: "quite a stranger here myself", translation: "阿南駅への行き方はわかりません。私自身、ここは全く不案内なのです。" },
    { id: 53, prefix: "The employees couldn't get", suffix: "President for a week.", correctPart: "in touch with their Vice", translation: "従業員たちは1週間、副社長と連絡が取れなかった。" },
    { id: 55, prefix: "The supplier's quote was", suffix: ".", correctPart: "a little over the budget", translation: "サプライヤーの見積もりは予算を少しオーバーしていた。" },
    { id: 57, prefix: "A business person was talking about some", suffix: "mobile phone in the hotel lobby.", correctPart: "new marketing strategies on the", translation: "あるビジネスマンがホテルのロビーで、携帯電話で新しいマーケティング戦略について話していた。" },
    { id: 59, prefix: "Our house is over 30 years old, so we are", suffix: "and living room.", correctPart: "thinking of renovating our kitchen", translation: "家が築30年を超えているので、キッチンとリビングのリフォームを考えている。" }
];

// --- 穴埋め問題データ ---
const fillinPrepData = [
    { id: 1, question: "I saw many students ___ in Ms. Ogasawara's English class.", answer: "texting", translation: "小笠原先生の英語の授業で、多くの生徒がテキストメッセージを送っているのを見かけた。" },
    { id: 2, question: "Rose is ___ as a member of Black Pink.", answer: "known", translation: "ロゼはBlack Pinkのメンバーとして知られている。" },
    { id: 3, question: "My teammates said to me \"Let's keep our fingers ___\".", answer: "crossed", translation: "チームメイトは私に「幸運を祈ろう」と言った。" },
    { id: 4, question: "We are thinking of ___ our kitchen and bathroom.", answer: "renovating", translation: "私たちはキッチンとバスルームのリフォームを考えている。" },
    { id: 5, question: "Beck's online shop offers all kinds of items ___ from a set of hammer and nails to a full camping set.", answer: "ranging", translation: "ベックのオンラインショップでは、ハンマーと釘のセットからフルキャンプセットまで、あらゆる種類の商品を取り扱っている。" },
    { id: 6, question: "I'm going to have pizza ___ from Pizza Hut tonight.", answer: "delivered", translation: "今夜、ピザハットからピザを配達してもらう予定だ。" },
    { id: 7, question: "You always come up ___ a creative idea.", answer: "with", translation: "あなたはいつも素晴らしいアイデアを思いつく。" },
    { id: 8, question: "Rose is known ___ a big hit song \"APT\".", answer: "for", translation: "ロゼはヒット曲「APT」で知られている。（原因・理由）" },
    { id: 9, question: "The payment is due ___ two weeks of the invoice date.", answer: "within", translation: "支払いは請求書の日付から2週間以内に行わなければならない。" },
    { id: 10, question: "The concert site was 20-minute walk ___ Shinagawa Station.", answer: "from", translation: "コンサート会場は品川駅から徒歩20分の距離だった。" },
    { id: 11, question: "I have to go to the post office ___ Morgan Street this afternoon.", answer: "on", translation: "今日の午後、モーガン通りにある郵便局に行かなければならない。" },
    { id: 12, question: "I didn't mean ___ blame you. I just wanted to talk to you.", answer: "to", translation: "あなたを責めるつもりはなかった。ただあなたと話したかっただけだ。" }
];


// ==========================================
// 2. アプリロジック
// ==========================================

let currentMode = ''; 
let currentQuestions = [];
let userAnswers = []; 
let globalChoiceMap = []; 
let feedbackCache = []; 

const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizList = document.getElementById('quiz-list');
const gradeBtn = document.getElementById('grade-btn');
const retryBtn = document.getElementById('retry-btn');
const resultSummary = document.getElementById('result-summary');
const globalChoicePanel = document.getElementById('global-choice-panel');
const globalChoiceList = document.getElementById('global-choice-list');
const reorderSettings = document.getElementById('reorder-settings');
const showTransCheck = document.getElementById('show-trans-check');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ---------------------------------
// モード開始と初期化
// ---------------------------------
function startMode(mode) {
    currentMode = mode;
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    initQuiz();
}

function goMenu() {
    quizScreen.classList.add('hidden');
    if (globalChoicePanel) globalChoicePanel.classList.add('hidden'); 
    menuScreen.classList.remove('hidden');
}

function retryQuiz() {
    initQuiz();
}

function initQuiz() {
    resultSummary.classList.add('hidden');
    gradeBtn.classList.remove('hidden');
    gradeBtn.textContent = "採点する";
    retryBtn.classList.add('hidden');
    window.scrollTo(0, 0);

    if (globalChoicePanel) globalChoicePanel.classList.add('hidden');
    if (reorderSettings) reorderSettings.classList.remove('hidden'); 
    quizList.classList.remove('quiz-with-translation');

    if (currentMode === 'choice') {
        currentQuestions = shuffle([...choiceQuizData]);
        userAnswers = currentQuestions.map(() => null); 
        if (showTransCheck && showTransCheck.checked) {
            quizList.classList.add('quiz-with-translation');
        }
    }
    else if (currentMode === 'reorder') {
        currentQuestions = shuffle([...reorderData]);
        userAnswers = currentQuestions.map(() => []);
        currentQuestions.forEach(q => {
            q.words = q.correctPart.split(' ');
            q.shuffledWords = shuffle([...q.words]);
        });
        if (showTransCheck && showTransCheck.checked) {
            quizList.classList.add('quiz-with-translation');
        }
    } 
    else if (currentMode === 'fillin_prep') {
        currentQuestions = shuffle([...fillinPrepData]);
        userAnswers = currentQuestions.map(() => ""); 
        setupFillinPrepMode(currentQuestions);
        if (reorderSettings) reorderSettings.classList.add('hidden'); 
    }

    feedbackCache = currentQuestions.map(() => null);
    
    renderList();
}

if (showTransCheck) {
    showTransCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            quizList.classList.add('quiz-with-translation');
        } else {
            quizList.classList.remove('quiz-with-translation');
        }
    });
}

// ---------------------------------
// 穴埋め選択肢設定
// ---------------------------------
function setupFillinPrepMode(questionSet) {
    const allChoices = new Set();
    questionSet.forEach(q => allChoices.add(q.answer));
    
    const choiceArr = Array.from(allChoices).sort((a, b) => a.localeCompare(b));
    
    globalChoiceMap = choiceArr.map((word, index) => ({
        id: index + 1,
        word: word
    }));

    if (globalChoicePanel) globalChoicePanel.classList.remove('hidden');
    renderFooterChoices();
}

function renderFooterChoices() {
    if (globalChoiceList) {
        globalChoiceList.innerHTML = '';
        globalChoiceMap.forEach(item => {
            const div = document.createElement('div');
            div.className = 'footer-choice-item';
            div.innerHTML = `<span class="footer-choice-num">${item.id}</span>${item.word}`;
            globalChoiceList.appendChild(div);
        });
    }
}

function updateFooterUsage() {
    const inputElements = quizList.querySelectorAll('.fillin-input');
    inputElements.forEach((input, index) => {
        userAnswers[index] = input.value.trim().toLowerCase();
    });
}


// ---------------------------------
// UI部品
// ---------------------------------
function createInput(index) {
    const input = document.createElement('input');
    input.type = 'text'; 
    input.className = 'fillin-input';
    input.placeholder = "";
    input.value = userAnswers[index] || "";
    input.oninput = (e) => {
        userAnswers[index] = e.target.value.trim().toLowerCase();
        updateFooterUsage();
    };
    return input;
}

function createChip(text, onClick) {
    const chip = document.createElement('span');
    chip.className = 'word-chip';
    chip.textContent = text;
    if (onClick) chip.onclick = onClick;
    return chip;
}

function updateChoiceSelection(container, clickedBtn) {
    const allBtns = container.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.classList.remove('selected'));
    clickedBtn.classList.add('selected');
}

function addReorderWord(qIdx, word) {
    userAnswers[qIdx].push(word);
    renderOneCard(qIdx);
}
function removeReorderWord(qIdx, wIdx) {
    userAnswers[qIdx].splice(wIdx, 1);
    renderOneCard(qIdx);
}
function renderOneCard(index) {
    renderList();
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

        const header = document.createElement('div');
        header.className = 'question-header';
        header.textContent = `Q${q.id || (index + 1)}.`;
        card.appendChild(header);

        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-translation';
        hintDiv.textContent = q.translation;
        card.appendChild(hintDiv);

        // --- 4択問題 ---
        if (currentMode === 'choice') {
            const qText = document.createElement('div');
            qText.className = 'fillin-sentence';
            qText.innerHTML = q.question.replace('(', ' <span style="color:#3498db; font-weight:bold;">(</span> ').replace(')', ' <span style="color:#3498db; font-weight:bold;">)</span> ');
            card.appendChild(qText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options-grid';
            
            q.choices.forEach((choice, choiceIdx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = choice;
                
                if (userAnswers[index] === choiceIdx) {
                    btn.classList.add('selected');
                }

                btn.onclick = () => {
                    userAnswers[index] = choiceIdx;
                    updateChoiceSelection(optionsDiv, btn);
                };
                
                optionsDiv.appendChild(btn);
            });
            card.appendChild(optionsDiv);
        }
        // --- 並び替え問題 ---
        else if (currentMode === 'reorder') {
            const sentenceContainer = document.createElement('div');
            sentenceContainer.className = 'fillin-sentence';
            
            const prefixText = q.prefix.trim();
            const suffixText = q.suffix.trim();

            sentenceContainer.appendChild(document.createTextNode(prefixText));
            
            const answerBox = document.createElement('div');
            answerBox.className = 'answer-box';
            userAnswers[index].forEach((word, wIdx) => {
                const chip = createChip(word, () => removeReorderWord(index, wIdx));
                answerBox.appendChild(chip);
            });
            sentenceContainer.appendChild(answerBox);
            
            sentenceContainer.appendChild(document.createTextNode(suffixText));
            card.appendChild(sentenceContainer);


            const wordBank = document.createElement('div');
            wordBank.className = 'word-bank';
            const usedMap = {};
            userAnswers[index].forEach(w => usedMap[w] = (usedMap[w]||0)+1);

            q.shuffledWords.forEach(word => {
                const chip = createChip(word, null);
                if (usedMap[word] && usedMap[word] > 0) {
                    chip.classList.add('selected');
                    usedMap[word]--;
                } else {
                    chip.onclick = () => addReorderWord(index, word);
                }
                wordBank.appendChild(chip);
            });
            card.appendChild(wordBank);
        }
        // --- 穴埋め問題 (前置詞など) ---
        else if (currentMode === 'fillin_prep') {
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'fillin-sentence';

            const parts = q.question.split('___');
            if (parts.length === 2) {
                sentenceDiv.appendChild(document.createTextNode(parts[0]));
                sentenceDiv.appendChild(createInput(index));
                sentenceDiv.appendChild(document.createTextNode(parts[1]));
            } else {
                sentenceDiv.textContent = q.question;
            }
            card.appendChild(sentenceDiv);
        }

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-area hidden';
        feedbackDiv.id = `feedback-${index}`;
        
        if (feedbackCache[index]) {
            feedbackDiv.innerHTML = feedbackCache[index];
            feedbackDiv.classList.remove('hidden');
            const isCorrect = feedbackCache[index].includes('correct-mark');
            card.style.backgroundColor = isCorrect ? '#f0fff4' : '#fff5f5';

            // 採点済みの場合、入力/選択を無効化
            if (currentMode === 'choice') {
                card.querySelectorAll('.option-btn').forEach(btn => btn.classList.add('disabled'));
            } else if (currentMode === 'reorder') {
                card.querySelectorAll('.word-chip').forEach(chip => chip.onclick = null);
            } else if (currentMode === 'fillin_prep') {
                const inputEl = card.querySelector('.fillin-input');
                if (inputEl) inputEl.setAttribute('disabled', 'true');
            }
        }
        
        card.appendChild(feedbackDiv);
        quizList.appendChild(card);
    });
}


// ---------------------------------
// 採点処理
// ---------------------------------
function gradeAll() {
    let score = 0;
    let total = currentQuestions.length;

    currentQuestions.forEach((q, index) => {
        let isCorrect = false;
        let userAnswerDisplay = "";
        let correctDisplay = "";
        let translationDisplay = `<div class="translation">${q.translation}</div>`;
        let card = document.getElementById(`q-card-${index}`);
        let userAnswerHTML = ''; 

        if (currentMode === 'choice') {
            const userChoiceIdx = userAnswers[index];
            isCorrect = (userChoiceIdx === q.answer);
            userAnswerDisplay = (userChoiceIdx !== null) ? q.choices[userChoiceIdx] : "（未回答）";
            correctDisplay = `<div class="correct-sentence">正解: ${q.choices[q.answer]}</div>`;
            
            const buttons = card.querySelectorAll('.option-btn');
            buttons.forEach((btn, btnIdx) => {
                btn.classList.remove('selected');
                btn.classList.remove('correct', 'wrong');
                if (btnIdx === q.answer) btn.classList.add('correct');
                if (!isCorrect && btnIdx === userChoiceIdx) btn.classList.add('wrong');
                btn.classList.add('disabled');
            });
        }
        else if (currentMode === 'reorder') {
            userAnswerDisplay = userAnswers[index].join(' ');
            isCorrect = (userAnswerDisplay === q.correctPart);
            
            const prefixText = q.prefix.trim();
            const suffixText = q.suffix.trim();
            
            // 正解の完成文
            const fullCorrect = prefixText + ' ' + 
                                `<span style="color:#27ae60; font-weight:bold;">${q.correctPart}</span>` + 
                                ' ' + suffixText;
            
            if (!isCorrect && userAnswerDisplay) {
                userAnswerHTML = `<div class="correct-sentence" style="color:#e74c3c; font-weight: bold;">【あなたの回答】空欄部分: ${userAnswerDisplay}</div>`;
            }

            correctDisplay = `
                <div class="correct-sentence" style="margin-top: ${userAnswerHTML ? '10px' : '0'};">【正解】空欄部分: ${q.correctPart}</div>
                <div class="correct-sentence" style="color:#2c3e50; font-size:1rem; font-weight:normal;">完成文: ${fullCorrect.replace(/\s+/g, ' ')}</div>
            `;
            translationDisplay = `<div class="translation">${q.translation}</div>`;

            // 並び替えチップを無効化
            card.querySelectorAll('.word-chip').forEach(chip => chip.onclick = null);
        }
        else if (currentMode === 'fillin_prep') {
            const userAnswerText = userAnswers[index];
            const correctWord = q.answer.toLowerCase();
            
            isCorrect = (userAnswerText === correctWord);
            userAnswerDisplay = userAnswerText || "（未回答）";
            
            correctDisplay = `<div class="correct-sentence">正解: ${q.answer}</div>`;
            
            // 入力欄を無効化
            const inputEl = card.querySelector('.fillin-input');
            if (inputEl) {
                inputEl.setAttribute('disabled', 'true');
                
                if (!isCorrect) {
                     inputEl.style.color = '#e74c3c';
                     inputEl.style.fontWeight = 'bold';
                } else {
                     inputEl.style.color = '#27ae60';
                     inputEl.style.fontWeight = 'bold';
                }
            }
        }

        if (isCorrect) score++;

        // フィードバックHTML生成
        const feedbackHTML = `
            <span class="result-mark ${isCorrect ? 'correct-mark' : 'wrong-mark'}">
                ${isCorrect ? '〇 正解' : '✕ 不正解'}
            </span>
            ${userAnswerHTML || (!isCorrect && currentMode !== 'reorder' ? `<strong>あなたの回答:</strong> ${userAnswerDisplay}<br>` : '')}
            ${correctDisplay}
            ${translationDisplay}
        `;

        feedbackCache[index] = feedbackHTML;

        const feedbackDiv = document.getElementById(`feedback-${index}`);
        feedbackDiv.innerHTML = feedbackHTML;
        feedbackDiv.classList.remove('hidden');

        card.style.backgroundColor = isCorrect ? '#f0fff4' : '#fff5f5';
    });

    gradeBtn.textContent = "再採点する";
    retryBtn.classList.remove('hidden');
    resultSummary.classList.remove('hidden');
    document.getElementById('total-score').textContent = score;
    document.getElementById('max-score').textContent = total;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}