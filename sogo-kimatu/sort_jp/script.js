// 問題データ
const quizData = [
    // Unit 6
    { unit: 6, jp: "猫は犬よりずっと自立している。", prefix: "", answer: "cats are much more independent than dogs" },
    { unit: 6, jp: "猫は犬ほど注目を浴びたいわけではない。", prefix: "", answer: "cats are not as interested in getting attention as dogs" },
    { unit: 6, jp: "自立心が強いので、犬よりも猫の方が世話がしやすい。", prefix: "Because they are more independent, ", answer: "it is easier to look after a cat than a dog" },
    
    // Unit 7
    { unit: 7, jp: "このケースは、医師がこれまで見た中で最も難しいものの一つであった。", prefix: "", answer: "this case was one of the hardest the doctor had ever seen" },
    { unit: 7, jp: "この新しい治療法は、私が今まで受けた中で最も成功した。", prefix: "", answer: "this new treatment was the most successful I've ever received" },
    { unit: 7, jp: "彼は最も有名な催眠術師である。", prefix: "", answer: "he is the most famous hypnotist of all" },

    // Unit 8
    { unit: 8, jp: "この星は、アマチュア天文家のグループによって発見された。", prefix: "", answer: "the star was discovered by a group of amateur astronomers" },
    { unit: 8, jp: "どこから電波信号が来ているかは知られていない。", prefix: "", answer: "it is not known where the radio signals are coming from" },
    { unit: 8, jp: "騒音公害の問題は、私たちの努力にもかかわらず、解決されていない。", prefix: "", answer: "the problem of noise pollution has not been solved despite all of our efforts" },

    // Unit 9
    { unit: 9, jp: "UFOの正体を知るために調査が開始された。", prefix: "", answer: "an investigation was opened in order to understand what UFOs are" },
    { unit: 9, jp: "チームは、実際に起こったことを確認するために録画を見た。", prefix: "", answer: "the team watched the recording so that they could see what really happened" },
    { unit: 9, jp: "パイロットは、航空機を操縦する能力を高めるために、厳しい訓練を受けた。", prefix: "", answer: "the pilots trained hard so as to increase their ability to fly the aircraft" },

    // Unit 10
    { unit: 10, jp: "土壌が少ないので、失敗しないようにしなければならない。", prefix: "Since the soil is so scarce, ", answer: "we must try to avoid making mistakes" },
    { unit: 10, jp: "栄養不足の土壌にもかかわらず、研究者たちは成功した。", prefix: "", answer: "the researchers managed to succeed despite the soil lacking nutrients" },
    { unit: 10, jp: "そのまま実験を継続することにした。", prefix: "", answer: "we decided to continue carrying out the experiment" },

    // Unit 11
    { unit: 11, jp: "アミノ酸は、隕石によって地球にもたらされた可能性が高い。", prefix: "", answer: "it is likely that amino acids were brought to Earth by a meteorite" },
    { unit: 11, jp: "このサンプルを分析すれば、きっと面白い結果が得られるに違いない。", prefix: "", answer: "the analysis of the sample was sure to bring some interesting results" },
    { unit: 11, jp: "ミッションが成功しない可能性もある。", prefix: "", answer: "there is a possibility that the mission will not succeed" }
];

// 各問題の状態を保持する配列
// { pool: ['word', ...], selected: ['word', ...] }
let questionStates = [];
let isChecked = false;
let currentUnit = 6;

const quizContainer = document.getElementById('quizContainer');
const submitArea = document.getElementById('submitArea');
const scoreSection = document.getElementById('scoreSection');
const unitSelect = document.getElementById('unitSelect');

// 配列シャッフル
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ユニット読み込み関数
function loadUnit(unitId) {
    isChecked = false;
    currentUnit = unitId;

    // UIリセット
    scoreSection.style.display = 'none';
    submitArea.style.display = 'flex';
    quizContainer.innerHTML = '';

    // データのフィルタリング
    let targetData = [];
    if (unitId === 'review') {
        // 全問（ディープコピー）
        targetData = JSON.parse(JSON.stringify(quizData));
    } else {
        // 指定Unitのみ
        targetData = quizData.filter(q => q.unit === parseInt(unitId));
        // ディープコピー
        targetData = JSON.parse(JSON.stringify(targetData));
    }

    // 問題の順番をシャッフル
    const questions = shuffle(targetData);

    // 状態の初期化
    questionStates = questions.map(q => {
        return {
            originalQ: q,
            // 正解文を単語に分解してシャッフルしてプールに入れる
            // ★変更点: toLowerCase() を削除し、データの大文字小文字をそのまま使用
            pool: shuffle(q.answer.split(' ')),
            selected: []
        };
    });

    renderAllQuestions();
}


function renderAllQuestions() {
    quizContainer.innerHTML = '';
    
    questionStates.forEach((state, index) => {
        const q = state.originalQ;
        
        // カード生成
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${index}`;

        // 問題文
        const jpText = document.createElement('div');
        jpText.className = 'jp-text';
        jpText.textContent = `Q${index + 1}. ${q.jp}`;
        card.appendChild(jpText);

        // プレフィックス
        if (q.prefix) {
            const prefixDiv = document.createElement('div');
            prefixDiv.className = 'prefix-text';
            prefixDiv.textContent = q.prefix + "...";
            card.appendChild(prefixDiv);
        }

        // 解答エリア
        const answerZone = document.createElement('div');
        answerZone.className = `answer-zone ${isChecked ? 'locked' : ''}`;
        
        state.selected.forEach((word, wordIndex) => {
            const tile = createTile(word, () => {
                if (!isChecked) deselectWord(index, wordIndex);
            });
            answerZone.appendChild(tile);
        });
        card.appendChild(answerZone);

        // 選択肢エリア (Word Pool)
        if (!isChecked) {
            const poolZone = document.createElement('div');
            poolZone.className = 'word-pool';
            state.pool.forEach((word, wordIndex) => {
                const tile = createTile(word, () => selectWord(index, wordIndex));
                poolZone.appendChild(tile);
            });
            card.appendChild(poolZone);
        }

        // 結果表示用エリア（初期は空）
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-feedback';
        resultDiv.style.display = 'none';
        resultDiv.id = `result-${index}`;
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

// 単語タイル生成ヘルパー
function createTile(text, onClick) {
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.textContent = text;
    tile.onclick = onClick;
    return tile;
}

// 単語を選択（プール -> 解答）
function selectWord(qIndex, poolWordIndex) {
    const state = questionStates[qIndex];
    const word = state.pool[poolWordIndex];
    
    state.pool.splice(poolWordIndex, 1);
    state.selected.push(word);
    
    renderAllQuestions();
}

// 単語を戻す（解答 -> プール）
function deselectWord(qIndex, ansWordIndex) {
    const state = questionStates[qIndex];
    const word = state.selected[ansWordIndex];
    
    state.selected.splice(ansWordIndex, 1);
    state.pool.push(word);
    
    renderAllQuestions();
}

function checkAllAnswers() {
    isChecked = true;
    let correctCount = 0;
    const total = questionStates.length;

    renderAllQuestions();

    questionStates.forEach((state, index) => {
        const card = document.getElementById(`card-${index}`);
        const resultDiv = document.getElementById(`result-${index}`);
        const userSentence = state.selected.join(' ');
        
        // ★変更点: toLowerCase() を削除し、そのまま比較
        const correctSentence = state.originalQ.answer;

        const isCorrect = (userSentence === correctSentence);
        if (isCorrect) correctCount++;

        // カードの色変更
        card.classList.add(isCorrect ? 'result-correct' : 'result-wrong');

        // 結果メッセージ表示
        resultDiv.style.display = 'block';
        if (isCorrect) {
            resultDiv.innerHTML = `<span class="ans-correct">✅ Correct!</span>`;
        } else {
            resultDiv.innerHTML = `
                <div>❌ <span class="label">Your Answer:</span> <span class="ans-wrong" style="text-decoration:none;">${userSentence || "(No Answer)"}</span></div>
                <div style="margin-top:5px;">✅ <span class="label">Correct:</span> <span class="ans-correct">${state.originalQ.prefix || ""}${correctSentence}</span></div>
            `;
        }
    });

    // スコア表示
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

// イベントリスナー設定
unitSelect.addEventListener('change', (e) => {
    loadUnit(e.target.value);
});

// 初期ロード (Unit 6)
loadUnit(6);