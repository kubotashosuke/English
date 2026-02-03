// quizData
const quizData = [
    // Unit 6
    { unit: 6, jp: "猫は犬よりずっと自立している。", prefix: "Cats", answer: "are much more independent than", suffix: "dogs." },
    { unit: 6, jp: "猫は犬ほど注目を浴びたいわけではない。", prefix: "Cats are not", answer: "as interested in getting attention", suffix: "as dogs." },
    { unit: 6, jp: "自立心が強いので、犬よりも猫の方が世話がしやすい。", prefix: "Because they are more independent, it is", answer: "easier to look after a cat than", suffix: "a dog." },
    
    // Unit 7
    { unit: 7, jp: "このケースは、医師がこれまで見た中で最も難しいものの一つであった。", prefix: "This case", answer: "was one of the hardest", suffix: "the doctor had ever seen." },
    { unit: 7, jp: "この新しい治療法は、私が今まで受けた中で最も成功した。", prefix: "This new treatment was", answer: "the most successful I've ever received", suffix: "." },
    { unit: 7, jp: "彼は最も有名な催眠術師である。", prefix: "He is the", answer: "most famous hypnotist of all", suffix: "." },

    // Unit 8
    { unit: 8, jp: "この星は、アマチュア天文家のグループによって発見された。", prefix: "The", answer: "star was discovered by a group", suffix: "of amateur astronomers." },
    { unit: 8, jp: "どこから電波信号が来ているかは知られていない。", prefix: "It", answer: "is not known where the", suffix: "radio signals are coming from." },
    { unit: 8, jp: "騒音公害の問題は、私たちの努力にもかかわらず、解決されていない。", prefix: "The problem of noise", answer: "pollution has not been solved despite", suffix: "all of our efforts." },

    // Unit 9
    { unit: 9, jp: "UFOの正体を知るために調査が開始された。", prefix: "An investigation was opened in", answer: "order to understand what UFOs", suffix: "are." },
    { unit: 9, jp: "チームは、実際に起こったことを確認するために録画を見た。", prefix: "The team watched the recording so", answer: "that they could see what", suffix: "really happened." },
    { unit: 9, jp: "パイロットは、航空機を操縦する能力を高めるために、厳しい訓練を受けた。", prefix: "The pilots trained hard so", answer: "as to increase their ability", suffix: "to fly the aircraft." },

    // Unit 10
    { unit: 10, jp: "土壌が少ないので、失敗しないようにしなければならない。", prefix: "Since the soil is so scarce, we must", answer: "try to avoid making mistakes", suffix: "." },
    { unit: 10, jp: "栄養不足の土壌にもかかわらず、研究者たちは成功した。", prefix: "The researchers managed", answer: "to succeed despite the soil lacking", suffix: "nutrients." },
    { unit: 10, jp: "そのまま実験を継続することにした。", prefix: "We", answer: "decided to continue carrying out", suffix: "the experiment." },

    // Unit 11
    { unit: 11, jp: "アミノ酸は、隕石によって地球にもたらされた可能性が高い。", prefix: "It", answer: "is likely that amino acids were", suffix: "brought to Earth by a meteorite." },
    { unit: 11, jp: "このサンプルを分析すれば、きっと面白い結果が得られるに違いない。", prefix: "The analysis of the sample", answer: "was sure to bring some interesting", suffix: "results." },
    { unit: 11, jp: "ミッションが成功しない可能性もある。", prefix: "There", answer: "is a possibility that the mission", suffix: "will not succeed." }
];

// state variables
let questionStates = [];
let isChecked = false;
let currentUnit = 6;

const quizContainer = document.getElementById('quizContainer');
const submitArea = document.getElementById('submitArea');
const scoreSection = document.getElementById('scoreSection');
const unitSelect = document.getElementById('unitSelect');

// shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// loadUnit
function loadUnit(unitId) {
    isChecked = false;
    currentUnit = unitId;

    scoreSection.style.display = 'none';
    submitArea.style.display = 'flex';
    quizContainer.innerHTML = '';

    let targetData = [];
    if (unitId === 'review') {
        targetData = JSON.parse(JSON.stringify(quizData));
    } else {
        targetData = quizData.filter(q => q.unit === parseInt(unitId));
        targetData = JSON.parse(JSON.stringify(targetData));
    }

    const questions = shuffle(targetData);

    questionStates = questions.map(q => {
        return {
            originalQ: q,
            pool: shuffle(q.answer.split(' ')),
            selected: []
        };
    });

    renderAllQuestions();
}

// renderAllQuestions
function renderAllQuestions() {
    quizContainer.innerHTML = '';
    
    questionStates.forEach((state, index) => {
        const q = state.originalQ;
        
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${index}`;

        // Japanese Text
        const jpText = document.createElement('div');
        jpText.className = 'jp-text';
        if (isChecked) {
            jpText.textContent = `Q${index + 1}. ${q.jp}`;
            jpText.style.display = 'block';
        } else {
            jpText.style.display = 'none';
        }
        card.appendChild(jpText);

        // Prefix
        if (q.prefix) {
            const prefixDiv = document.createElement('div');
            prefixDiv.className = 'prefix-text';
            prefixDiv.textContent = q.prefix; // "..." を削除
            card.appendChild(prefixDiv);
        }

        // Answer Zone
        const answerZone = document.createElement('div');
        answerZone.className = `answer-zone ${isChecked ? 'locked' : ''}`;
        
        state.selected.forEach((word, wordIndex) => {
            const tile = createTile(word, () => {
                if (!isChecked) deselectWord(index, wordIndex);
            });
            answerZone.appendChild(tile);
        });
        card.appendChild(answerZone);

        // Suffix
        if (q.suffix) {
            const suffixDiv = document.createElement('div');
            suffixDiv.className = 'suffix-text';
            suffixDiv.textContent = q.suffix; // "..." を削除
            card.appendChild(suffixDiv);
        }

        // Word Pool
        if (!isChecked) {
            const poolZone = document.createElement('div');
            poolZone.className = 'word-pool';
            state.pool.forEach((word, wordIndex) => {
                const tile = createTile(word, () => selectWord(index, wordIndex));
                poolZone.appendChild(tile);
            });
            card.appendChild(poolZone);
        }

        // Result Feedback
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-feedback';
        resultDiv.style.display = 'none';
        resultDiv.id = `result-${index}`;
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

// createTile
function createTile(text, onClick) {
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.textContent = text;
    tile.onclick = onClick;
    return tile;
}

// selectWord
function selectWord(qIndex, poolWordIndex) {
    const state = questionStates[qIndex];
    const word = state.pool[poolWordIndex];
    
    state.pool.splice(poolWordIndex, 1);
    state.selected.push(word);
    
    renderAllQuestions();
}

// deselectWord
function deselectWord(qIndex, ansWordIndex) {
    const state = questionStates[qIndex];
    const word = state.selected[ansWordIndex];
    
    state.selected.splice(ansWordIndex, 1);
    state.pool.push(word);
    
    renderAllQuestions();
}

// checkAllAnswers
function checkAllAnswers() {
    isChecked = true;
    let correctCount = 0;
    const total = questionStates.length;

    renderAllQuestions();

    questionStates.forEach((state, index) => {
        const card = document.getElementById(`card-${index}`);
        const resultDiv = document.getElementById(`result-${index}`);
        const userSentence = state.selected.join(' ');
        const correctSentence = state.originalQ.answer;

        const isCorrect = (userSentence === correctSentence);
        if (isCorrect) correctCount++;

        card.classList.add(isCorrect ? 'result-correct' : 'result-wrong');

        resultDiv.style.display = 'block';
        if (isCorrect) {
            resultDiv.innerHTML = `<span class="ans-correct">✅ Correct!</span>`;
        } else {
            resultDiv.innerHTML = `
                <div>❌ <span class="label">Your Answer:</span> <span class="ans-wrong">${userSentence || "(No Answer)"}</span></div>
                <div style="margin-top:5px;">✅ <span class="label">Correct:</span> <span class="ans-correct">${state.originalQ.prefix} ${correctSentence} ${state.originalQ.suffix}</span></div>
            `;
        }
    });

    scoreSection.style.display = 'block';
    scoreSection.innerHTML = `
        <div class="final-score">Score: ${correctCount} / ${total}</div>
        <div>
            <button class="primary-btn" onclick="loadUnit(currentUnit)">Retry Unit</button>
        </div>
    `;

    submitArea.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

unitSelect.addEventListener('change', (e) => {
    loadUnit(e.target.value);
});

loadUnit(6);