// ==========================================
// 1. データ定義
// ==========================================

// 並び替えデータ
const reorderData = [
    { correct: "Although the cells were dead , scientists could still read their DNA .", translation: "細胞は死んでいたが、科学者たちはDNAを読み取ることができた。" },
    { correct: "Cloning a mammoth might be possible , but should we try to do it ?", translation: "マンモスのクローンを作ることは可能かもしれないが、それをやってみるべきか？" },
    { correct: "It would be exciting to bring back mammoths , despite the risks of doing so .", translation: "マンモスを復活させるのは、リスクがあるとしてもワクワクする。" },
    { correct: "Mammals are endotherms , so they can be active regardless of the weather .", translation: "哺乳類は内温動物なので、天候に左右されずに活動することができる。" },
    { correct: "Large mammals have to eat almost constantly , leading to the generation of heat from digestion .", translation: "大型の哺乳類は、ほぼ絶え間なく食べ続けなければならないので、消化による熱が発生する。" },
    { correct: "Too much heat is dangerous with the result that mammals cannot grow too large .", translation: "熱を持ちすぎると命にかかわるので、哺乳類はあまり大きくなれない。" },
    { correct: "We cannot ignore the environment problems which result from our consumption of meat .", translation: "食肉の消費によって引き起こされる環境問題を無視することはできない。" },
    { correct: "Due to advances in technology , cultured meat has become a reality .", translation: "技術の進歩により、培養肉が現実のものとなってきた。" },
    { correct: "We must find a solution soon , since deforestation is proceeding so rapidly .", translation: "森林破壊が急速に進んでいるので、早急に解決策を見出さなければならない。" },
    { correct: "The land under Manila is still sinking , whereas Tokyo has managed to solve the problem .", translation: "マニラの地下は今も沈下しているが、東京は何とか問題を解決している。" },
    { correct: "In spite of all our efforts , we have not made progress on this issue .", translation: "この問題については、私たちの努力にもかかわらず進展がない。" },
    { correct: "It will be difficult to solve global warming . However , we must not give up .", translation: "地球温暖化の解決は難しいだろう。しかし、あきらめてはいけない。" },
    { correct: "If the app functions well , it could help to improve the lives of deaf people .", translation: "このアプリがうまく機能すれば、聴覚障害をもつ人々の生活向上に貢献できるかもしれない。" },
    { correct: "The invention won't be useful unless it is cheap enough for people to buy it easily .", translation: "この発明は、人々が簡単に買えるほど安くなれば、役に立たない。" },
    { correct: "As long as we don't hit any new problems , we should be able to release the product next year .", translation: "新たな問題にぶつからない限り、来年には製品を発売できるはずだ。" }
];

// 穴埋めデータ (文脈)
const fillinData = [
    { question: "This is a ___ environment so everybody must wear gloves and masks.", answer: "sterile", translation: "これは滅菌された環境なので、全員が手袋とマスクを着用しなければならない。" },
    { question: "The global ___ of meat is rising year after year.", answer: "consumption", translation: "世界の肉の消費量は年々増加している。" },
    { question: "The meat industry is responsible for the ___ of the Amazon.", answer: "deforestation", translation: "食肉産業はアマゾンの森林破壊の原因となっている。" },
    { question: "Wash your hands regularly to prevent the spread of ___.", answer: "bacteria", translation: "バクテリアの拡散を防ぐために定期的に手を洗いなさい。" },
    { question: "It is not only carbon dioxide ___ that cause global warming but also methane.", answer: "emissions", translation: "地球温暖化を引き起こすのは二酸化炭素の排出だけでなく、メタンも同様である。" },
    { question: "The fragile ___ of the rainforest must be protected.", answer: "ecosystem", translation: "熱帯雨林の脆弱な生態系は保護されなければならない。" },
    { question: "Although it is hard to notice, animals on Earth continue to ___.", answer: "evolve", translation: "気づくのは難しいが、地球上の動物は進化し続けている。" },
    { question: "Some animals eat stones to help with ___.", answer: "digestion", translation: "いくつかの動物は消化を助けるために石を食べる。" },
    { question: "The largest ___ in the world today is the saltwater crocodile.", answer: "reptile", translation: "今日世界で最も大きな爬虫類はイリエワニである。" },
    { question: "Body heat is essential to a mammal's survival, but too much can be ___.", answer: "fatal", translation: "体温は哺乳類の生存に不可欠だが、高すぎると致命的になりうる。" },
    { question: "The new robot should ___ us to increase the speed of our production.", answer: "enable", translation: "新しいロボットは、私たちが生産速度を上げることを可能にするはずだ。" },
    { question: "We must ___ some new ideas to expand our business.", answer: "come up with", translation: "私たちはビジネスを拡大するためにいくつかの新しいアイデアを思いつかなければならない。" },
    { question: "We have added an extra ___ to our app.", answer: "function", translation: "私たちはアプリに追加の機能を加えた。" },
    { question: "To solve the problem, we must first ___ what caused it.", answer: "identify", translation: "問題を解決するには、まず何がそれを引き起こしたのかを特定しなければならない。" },
    { question: "There is too much ___ in our society.", answer: "inequality", translation: "私たちの社会にはあまりにも多くの不平等がある。" },
    { question: "Every ___ in the human body carries DNA.", answer: "cell", translation: "人体のすべての細胞はDNAを持っている。" },
    { question: "Many species face ___ due to climate change.", answer: "extinction", translation: "多くの種が気候変動のために絶滅に直面している。" },
    { question: "Can we find a suitable ___ for wooly mammoths?", answer: "habitat", translation: "私たちはケナガマンモスのための適切な生息地を見つけることができるだろうか？" },
    { question: "Stone Age humans had very ___ tools.", answer: "primitive", translation: "石器時代の人類は非常に原始的な道具を持っていた。" },
    { question: "We have to ___ the rainforest for future generations.", answer: "preserve", translation: "私たちは将来の世代のために熱帯雨林を保存しなければならない。" },
    { question: "Global warming will ___ the Earth in many ways.", answer: "affect", translation: "地球温暖化は多くの点で地球に影響を与えるだろう。" },
    { question: "That moving object in the night sky is a ___.", answer: "satellite", translation: "夜空のあの動く物体は衛星である。" },
    { question: "The ___ of the human race may depend on the actions we take.", answer: "survival", translation: "人類の生存は私たちがとる行動にかかっているかもしれない。" },
    { question: "The government introduced a new ___ to clean the water supply.", answer: "regulation", translation: "政府は給水を浄化するための新しい規制を導入した。" },
    { question: "We cannot ___ any more minerals from this area.", answer: "extract", translation: "私たちはこの地域からこれ以上鉱物を抽出することはできない。" }
];

// 定義問題データ
const definitionData = [
    { question: "animals kept on a farm like cows or pigs", answer: "livestock", translation: "家畜" },
    { question: "the using or eating of something", answer: "consumption", translation: "消費" },
    { question: "the cutting of trees in a forest", answer: "deforestation", translation: "森林破壊" },
    { question: "sending out gas or heat into the air", answer: "emissions", translation: "排出" },
    { question: "completely clean without any bacteria", answer: "sterile", translation: "殺菌された" },
    { question: "very small living things that sometimes cause disease", answer: "bacteria", translation: "バクテリア" },
    { question: "to make something happen faster", answer: "accelerate", translation: "加速させる" },
    { question: "to be likely to cause harm or damage", answer: "threaten", translation: "脅かす" },
    { question: "continuing to live after a dangerous situation", answer: "survival", translation: "生存" },
    { question: "an object in space used to receive and send signals", answer: "satellite", translation: "衛星" },
    { question: "to sink or go lower", answer: "subside", translation: "低下する・沈む" },
    { question: "a rule or law", answer: "regulation", translation: "規則・規制" },
    { question: "to take something out", answer: "extract", translation: "抽出する" },
    { question: "to influence, have an effect on", answer: "affect", translation: "影響を与える" },
    { question: "staying at the same level", answer: "constant", translation: "一定の" },
    { question: "an animal such as a crocodile or snake", answer: "reptile", translation: "爬虫類" },
    { question: "all living things within an environment", answer: "ecosystem", translation: "生態系" },
    { question: "an animal that eats only plants", answer: "herbivore", translation: "草食動物" },
    { question: "the process of breaking down food in the stomach", answer: "digestion", translation: "消化" },
    { question: "deadly, causing death", answer: "fatal", translation: "致命的な" },
    { question: "to develop gradually over a long time", answer: "evolve", translation: "進化する" },
    { question: "to take part in a race or competition", answer: "compete", translation: "競争する" },
    { question: "to think of a new idea", answer: "come up with", translation: "思いつく" },
    { question: "when things are not fair for everyone", answer: "inequality", translation: "不平等" },
    { question: "to find a particular thing or person in a group", answer: "identify", translation: "特定する" },
    { question: "to allow, make possible", answer: "enable", translation: "可能にする" },
    { question: "a period when you are made to wait", answer: "delay", translation: "遅延" },
    { question: "the purpose of an object or device", answer: "function", translation: "機能" },
    { question: "when an animal no longer exists on Earth", answer: "extinction", translation: "絶滅" },
    { question: "related to early humans", answer: "primitive", translation: "原始的な" },
    { question: "a small section of DNA", answer: "gene", translation: "遺伝子" },
    { question: "to prevent something being damaged", answer: "preserve", translation: "保存する" },
    { question: "the smallest living part of an animal or plant", answer: "cell", translation: "細胞" },
    { question: "a type of animal in danger of dying out", answer: "endangered species", translation: "絶滅危惧種" },
    { question: "the natural environment for an animal or plant", answer: "habitat", translation: "生息地" }
];


// ==========================================
// 2. アプリロジック
// ==========================================

let currentMode = ''; 
let currentQuestions = [];
let userAnswers = []; 
let globalChoiceMap = []; 

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
// モード開始
// ---------------------------------
function startMode(mode) {
    currentMode = mode;
    menuScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // ★修正: エラーの原因だった initQ を initQuiz に修正
    initQuiz();
}

function goMenu() {
    quizScreen.classList.add('hidden');
    globalChoicePanel.classList.add('hidden'); 
    menuScreen.classList.remove('hidden');
}

function retryQuiz() {
    initQuiz();
}

// ---------------------------------
// クイズ初期化
// ---------------------------------
function initQuiz() {
    resultSummary.classList.add('hidden');
    gradeBtn.classList.remove('hidden');
    gradeBtn.textContent = "採点する";
    retryBtn.classList.add('hidden');
    window.scrollTo(0, 0);

    globalChoicePanel.classList.add('hidden');
    reorderSettings.classList.add('hidden'); // 一旦隠す
    quizList.classList.remove('quiz-with-translation'); // クラスリセット

    if (currentMode === 'reorder') {
        // 並び替えモード
        currentQuestions = shuffle([...reorderData]);
        userAnswers = currentQuestions.map(() => []);
        currentQuestions.forEach(q => {
            q.words = q.correct.split(' ');
            q.shuffledWords = shuffle([...q.words]);
        });
        
        // 設定スイッチを表示
        reorderSettings.classList.remove('hidden');
        
        // チェックボックスの状態を反映
        if (showTransCheck.checked) {
            quizList.classList.add('quiz-with-translation');
        }
        
    } 
    else if (currentMode === 'fillin') {
        currentQuestions = shuffle([...fillinData]);
        setupFooterMode(currentQuestions);
    }
    else if (currentMode === 'definition') {
        currentQuestions = shuffle([...definitionData]);
        setupFooterMode(currentQuestions);
    }

    renderList();
}

// ★追加: チェックボックスの切り替え監視
if (showTransCheck) {
    showTransCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            quizList.classList.add('quiz-with-translation');
        } else {
            quizList.classList.remove('quiz-with-translation');
        }
    });
}

// フッター選択肢のセットアップ
function setupFooterMode(questionSet) {
    userAnswers = questionSet.map(() => "");
    const allChoices = new Set();
    questionSet.forEach(q => allChoices.add(q.answer));
    
    const choiceArr = Array.from(allChoices).sort((a, b) => a.localeCompare(b));
    
    globalChoiceMap = choiceArr.map((word, index) => ({
        id: index + 1,
        word: word
    }));

    globalChoicePanel.classList.remove('hidden');
    renderFooterChoices();
}

// フッター描画
function renderFooterChoices() {
    globalChoiceList.innerHTML = '';
    globalChoiceMap.forEach(item => {
        const div = document.createElement('div');
        div.className = 'footer-choice-item';
        div.innerHTML = `<span class="footer-choice-num">${item.id}</span>${item.word}`;
        globalChoiceList.appendChild(div);
    });
}

function updateFooterUsage() {
    const usedNumbers = new Set();
    userAnswers.forEach(ans => {
        if (ans) {
            const num = parseInt(ans, 10);
            if (!isNaN(num)) usedNumbers.add(num);
        }
    });

    const footerItems = document.querySelectorAll('.footer-choice-item');
    footerItems.forEach(item => {
        const numSpan = item.querySelector('.footer-choice-num');
        if (numSpan) {
            const id = parseInt(numSpan.textContent, 10);
            if (usedNumbers.has(id)) {
                item.classList.add('used');
            } else {
                item.classList.remove('used');
            }
        }
    });
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
        header.textContent = `Q${index + 1}.`;
        card.appendChild(header);

        // --- 並び替え ---
        if (currentMode === 'reorder') {
            
            // ★常に和訳要素を作っておく（CSSで表示制御）
            const hintDiv = document.createElement('div');
            hintDiv.className = 'hint-translation';
            hintDiv.textContent = q.translation;
            card.appendChild(hintDiv);

            const answerBox = document.createElement('div');
            answerBox.className = 'answer-box';
            userAnswers[index].forEach((word, wIdx) => {
                const chip = createChip(word, () => removeReorderWord(index, wIdx));
                answerBox.appendChild(chip);
            });
            card.appendChild(answerBox);

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
        
        // --- 穴埋め OR 定義 ---
        else {
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'fillin-sentence';

            if (currentMode === 'fillin') {
                const parts = q.question.split('___');
                if (parts.length === 2) {
                    sentenceDiv.appendChild(document.createTextNode(parts[0]));
                    sentenceDiv.appendChild(createInput(index));
                    sentenceDiv.appendChild(document.createTextNode(parts[1]));
                } else {
                    sentenceDiv.textContent = q.question;
                }
            } else {
                sentenceDiv.textContent = q.question;
                const arrow = document.createElement('span');
                arrow.innerHTML = '<br>➡ ';
                arrow.style.color = '#3498db';
                arrow.style.fontWeight = 'bold';
                sentenceDiv.appendChild(arrow);
                sentenceDiv.appendChild(createInput(index));
            }
            card.appendChild(sentenceDiv);
        }

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-area hidden';
        feedbackDiv.id = `feedback-${index}`;
        card.appendChild(feedbackDiv);

        quizList.appendChild(card);
    });

    if (currentMode !== 'reorder') {
        updateFooterUsage();
    }
}

function createInput(index) {
    const input = document.createElement('input');
    input.type = 'tel';
    input.className = 'fillin-input';
    input.placeholder = '#';
    input.value = userAnswers[index] || "";
    input.oninput = (e) => {
        userAnswers[index] = e.target.value;
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
// 採点処理
// ---------------------------------
function gradeAll() {
    let score = 0;
    let total = currentQuestions.length;

    currentQuestions.forEach((q, index) => {
        let isCorrect = false;
        let userAnswerDisplay = "";

        if (currentMode === 'reorder') {
            userAnswerDisplay = userAnswers[index].join(' ');
            isCorrect = (userAnswerDisplay === q.correct);
        } else {
            const inputNum = parseInt(userAnswers[index], 10);
            const selectedItem = globalChoiceMap.find(item => item.id === inputNum);
            const selectedWord = selectedItem ? selectedItem.word : null;

            isCorrect = (selectedWord === q.answer);
            userAnswerDisplay = selectedWord ? `${inputNum} (${selectedWord})` : (userAnswers[index] || "（未回答）");
        }
        
        if (isCorrect) score++;

        const feedbackDiv = document.getElementById(`feedback-${index}`);
        let correctDisplay = "";
        
        if (currentMode === 'reorder') {
            correctDisplay = q.correct;
        } else if (currentMode === 'fillin') {
            correctDisplay = q.question.replace('___', `[ ${q.answer} ]`);
        } else {
            correctDisplay = `${q.answer} （${q.translation}）`;
        }

        if (currentMode !== 'reorder') {
            const correctItem = globalChoiceMap.find(item => item.word === q.answer);
            if (correctItem) {
                correctDisplay += ` <br><span style="font-size:0.9rem; color:#555;">(正解の番号: <strong>${correctItem.id}</strong>)</span>`;
            }
        }

        feedbackDiv.innerHTML = `
            <span class="result-mark ${isCorrect ? 'correct-mark' : 'wrong-mark'}">
                ${isCorrect ? '〇 正解' : '✕ 不正解'}
            </span>
            ${!isCorrect ? '<br><strong>あなたの回答:</strong> ' + userAnswerDisplay : ''}
            <div class="correct-sentence">正解: ${correctDisplay}</div>
            ${currentMode === 'reorder' || currentMode === 'fillin' ? `<div class="translation">${q.translation}</div>` : ''}
        `;
        feedbackDiv.classList.remove('hidden');

        const card = document.getElementById(`q-card-${index}`);
        card.style.backgroundColor = isCorrect ? '#f0fff4' : '#fff5f5';
    });

    gradeBtn.textContent = "再採点する";
    retryBtn.classList.remove('hidden');
    resultSummary.classList.remove('hidden');
    document.getElementById('total-score').textContent = score;
    document.getElementById('max-score').textContent = total;
}