// データ定義: 各Unitの単語と日本語訳
const wordData = {
    6: [
        { en: "personality", jp: "性格" },
        { en: "behavior", jp: "行動" },
        { en: "tend to", jp: "～する傾向にある" },
        { en: "loyal", jp: "忠実な" },
        { en: "owner", jp: "飼い主" },
        { en: "independent", jp: "自立した" },
        { en: "feed", jp: "餌をやる" },
        { en: "please", jp: "喜ばせる" },
        { en: "affectionate", jp: "愛情深い" },
        { en: "hostile", jp: "敵意のある" },
        { en: "improve", jp: "改善させる、向上させる" },
        { en: "relation", jp: "関係" },
        { en: "feline", jp: "ネコ科の" },
        { en: "companion", jp: "仲間、相棒" },
        { en: "study", jp: "研究" },
        { en: "perhaps", jp: "多分、おそらく" },
        { en: "disappointing", jp: "がっかりする" },
        { en: "prefer", jp: "好む" },
        { en: "sensitive", jp: "敏感な" },
        { en: "stroke", jp: "なでる" },
        { en: "stomach", jp: "胃、おなか" },
        { en: "tail", jp: "しっぽ" },
        { en: "tolerate", jp: "我慢する、耐える" },
        { en: "chin", jp: "あご" },
        { en: "behind", jp: "～の後ろの" },
        { en: "publish", jp: "出版する" },
        { en: "varying", jp: "色々な、さまざまな" },
        { en: "degree", jp: "程度" },
        { en: "opportunity", jp: "機会" },
        { en: "record", jp: "記録する" },
        { en: "evaluate", jp: "評価する" },
        { en: "initiate", jp: "始める" },
        { en: "contact", jp: "接触" },
        { en: "tendency", jp: "傾向" },
        { en: "interaction", jp: "相互作用" },
        { en: "occur", jp: "起こる" },
        { en: "valuable", jp: "貴重な" },
        { en: "lesson", jp: "教訓" },
        { en: "attention", jp: "注意、注目" },
        { en: "solution", jp: "解決策" }
    ],
    7: [
        { en: "magician", jp: "魔術師、手品師" },
        { en: "hypnotize", jp: "催眠をかける" },
        { en: "audience", jp: "観客、聴衆" },
        { en: "embarrassing", jp: "恥ずかしい、気まずい" },
        { en: "hypnosis", jp: "催眠、催眠状態" },
        { en: "phenomenon", jp: "現象、事象" },
        { en: "popularize", jp: "普及させた、有名にした" },
        { en: "term", jp: "用語、言葉" },
        { en: "refer to", jp: "～を指している、～に言及している" },
        { en: "concentrated", jp: "集中した、凝縮した" },
        { en: "conscious", jp: "意識している、意識のある" },
        { en: "anxiety", jp: "不安、心配" },
        { en: "phobia", jp: "恐怖症" },
        { en: "depression", jp: "うつ病、抑うつ状態" },
        { en: "patient", jp: "患者" },
        { en: "conduct", jp: "行う、実施する" },
        { en: "susceptible", jp: "影響を受けやすい" },
        { en: "vary", jp: "さまざまである、異なる" },
        { en: "particular", jp: "特定の、具体的な" },
        { en: "detail", jp: "詳細、細部" },
        { en: "physical", jp: "物理的な、身体の" },
        { en: "surrounding", jp: "周囲の環境、周辺" },
        { en: "conjure", jp: "（心の中に）呼び起こす" },
        { en: "precisely", jp: "正確に、きちんと" },
        { en: "disconnected", jp: "切断された、つながりがない" },
        { en: "responsible", jp: "責任がある、担当する" },
        { en: "self-reflection", jp: "自己反省、自己省察" },
        { en: "allow", jp: "許す、可能にする" },
        { en: "calm", jp: "落ち着かせる、静める" },
        { en: "inhibition", jp: "抑制、遠慮" },
        { en: "undergo", jp: "手術を受ける" },
        { en: "surgery", jp: "手術" },
        { en: "anesthesia", jp: "麻酔" },
        { en: "produce", jp: "生み出す、引き起こす" },
        { en: "claim", jp: "主張する、断言する" },
        { en: "contrary to", jp: "～とは逆に、～に反して" },
        { en: "morally", jp: "道徳的に、倫理的に" },
        { en: "describe", jp: "描写する、説明する" },
        { en: "ill-effect", jp: "悪影響、有害な影響" },
        { en: "except", jp: "～を除いて" }
    ],
    8: [
        { en: "amazing", jp: "驚くべき、すばらしい" },
        { en: "alien", jp: "異星人、外国の" },
        { en: "civilization", jp: "文明" },
        { en: "organization", jp: "組織" },
        { en: "intelligent", jp: "知能のある、賢い" },
        { en: "extraterrestrial", jp: "地球外の" },
        { en: "collaboration", jp: "協力、共同作業" },
        { en: "analyze", jp: "分析する" },
        { en: "aim", jp: "目的、目標" },
        { en: "indicate", jp: "示す、指し示す" },
        { en: "sort", jp: "分類する、整理する" },
        { en: "unfortunately", jp: "残念ながら" },
        { en: "evidence", jp: "証拠" },
        { en: "ordinary", jp: "普通の、平凡な" },
        { en: "contribute", jp: "貢献する" },
        { en: "astronomy", jp: "天文学" },
        { en: "perhaps", jp: "おそらく" },
        { en: "for instance", jp: "例えば" },
        { en: "pollution", jp: "汚染" },
        { en: "participant", jp: "参加者" },
        { en: "observation", jp: "観察、観測" },
        { en: "identify", jp: "識別する、見分ける" },
        { en: "constellation", jp: "星座" },
        { en: "compare", jp: "比較する" },
        { en: "raise", jp: "上げる、提起する" },
        { en: "awareness", jp: "意識、認識" },
        { en: "noise", jp: "騒音、雑音" },
        { en: "wildlife", jp: "野生生物" },
        { en: "diversity", jp: "多様性" },
        { en: "conservation", jp: "保護、保存" },
        { en: "meanwhile", jp: "一方で、その間に" },
        { en: "mental", jp: "心の、精神の" },
        { en: "dementia", jp: "認知症" },
        { en: "significant", jp: "重要な" },
        { en: "discovery", jp: "発見" },
        { en: "similar", jp: "似ている" },
        { en: "object", jp: "物体、対象" },
        { en: "appear", jp: "現れる" },
        { en: "consider", jp: "～を考慮する" },
        { en: "certainly", jp: "確かに、間違いなく" }
    ],
    9: [
        { en: "saucer-shaped", jp: "皿の形をした" },
        { en: "hover", jp: "浮遊する" },
        { en: "incredible", jp: "信じられない" },
        { en: "unidentified", jp: "未確認の" },
        { en: "fascinated", jp: "魅了された" },
        { en: "decade", jp: "10年間" },
        { en: "absolutely", jp: "絶対に" },
        { en: "exist", jp: "存在する" },
        { en: "exclamation", jp: "感嘆" },
        { en: "spot", jp: "見つける、見られる" },
        { en: "agility", jp: "敏捷さ、すばやさ" },
        { en: "manage", jp: "うまくやる、何とかする" },
        { en: "tear", jp: "引き裂く" },
        { en: "dive", jp: "飛び込む" },
        { en: "observe", jp: "観察する" },
        { en: "by no means", jp: "決して～でない" },
        { en: "military", jp: "軍事の、軍隊" },
        { en: "seriously", jp: "真剣に" },
        { en: "inspire", jp: "刺激する、触発する" },
        { en: "investigation", jp: "調査" },
        { en: "government", jp: "政府" },
        { en: "whether", jp: "～かどうか" },
        { en: "lie", jp: "うそをつく" },
        { en: "explanation", jp: "説明" },
        { en: "weapon", jp: "武器" },
        { en: "hypersonic", jp: "極超音速の" },
        { en: "capable", jp: "～する能力がある" },
        { en: "belong to", jp: "属する" },
        { en: "originate", jp: "起源とする、生じる" },
        { en: "outer", jp: "外側の" },
        { en: "rule out", jp: "除外する" },
        { en: "possess", jp: "所有する" },
        { en: "advanced", jp: "進歩した、高度な" },
        { en: "witness", jp: "目撃する" },
        { en: "extraterrestrial", jp: "地球外生命体" },
        { en: "dismiss", jp: "退ける、無視する" },
        { en: "possibility", jp: "可能性" },
        { en: "improve", jp: "改善する" },
        { en: "definition", jp: "定義" },
        { en: "invasion", jp: "侵略" }
    ],
    10: [
        { en: "probably", jp: "おそらく" },
        { en: "colonize", jp: "植民地化する、住みつく" },
        { en: "solar system", jp: "太陽系" },
        { en: "inhospitable", jp: "過酷な、住みにくい" },
        { en: "launch", jp: "開始する、打ち上げる" },
        { en: "soil", jp: "土、土壌" },
        { en: "huge", jp: "非常に大きな" },
        { en: "challenge", jp: "課題、困難" },
        { en: "extremely", jp: "非常に" },
        { en: "scarce", jp: "乏しい、貴重な" },
        { en: "available", jp: "利用可能な、手に入る" },
        { en: "demand", jp: "需要" },
        { en: "various", jp: "さまざまな" },
        { en: "gain", jp: "得る、獲得する" },
        { en: "divide", jp: "分ける" },
        { en: "incredibly", jp: "信じられないほど、とても" },
        { en: "harsh", jp: "厳しい、過酷な" },
        { en: "consist", jp: "成り立つ、構成される" },
        { en: "fine", jp: "細かい、きめの細かい" },
        { en: "forge", jp: "作り出す、形成する" },
        { en: "surface", jp: "表面" },
        { en: "contain", jp: "含む" },
        { en: "nitrogen", jp: "窒素" },
        { en: "phosphorus", jp: "リン" },
        { en: "nutrient", jp: "栄養素" },
        { en: "simply put", jp: "簡単に言えば" },
        { en: "nightmare", jp: "悪夢、最悪の事態" },
        { en: "colleague", jp: "同僚" },
        { en: "tiny", jp: "とても小さい" },
        { en: "volcanic", jp: "火山の" },
        { en: "substance", jp: "物質" },
        { en: "mimic", jp: "模倣する、まねる" },
        { en: "sprout", jp: "芽を出す、発芽する" },
        { en: "terrestrial", jp: "地球上の" },
        { en: "organism", jp: "生物" },
        { en: "lunar", jp: "月の" },
        { en: "expose", jp: "さらす" },
        { en: "genetically", jp: "遺伝子的に" },
        { en: "suitable", jp: "適した" }
    ],
    11: [
        { en: "spacecraft", jp: "宇宙船" },
        { en: "launch", jp: "打ち上げる" },
        { en: "site", jp: "場所、用地" },
        { en: "asteroid", jp: "小惑星" },
        { en: "orbit", jp: "軌道" },
        { en: "analysis", jp: "分析" },
        { en: "generate", jp: "生み出す、発生させる" },
        { en: "incredibly", jp: "信じられないほど" },
        { en: "form", jp: "形成する" },
        { en: "precise", jp: "正確な" },
        { en: "rotate", jp: "回転する" },
        { en: "hold one's breath", jp: "息をのむ" },
        { en: "guide", jp: "導く、操縦する" },
        { en: "craft", jp: "船、乗り物" },
        { en: "deploy", jp: "展開する" },
        { en: "rover", jp: "探査車" },
        { en: "accomplish", jp: "達成する" },
        { en: "immediately", jp: "ただちに" },
        { en: "chemical", jp: "化学的な" },
        { en: "composition", jp: "組成" },
        { en: "somewhat", jp: "いくぶん、やや" },
        { en: "previously", jp: "以前に" },
        { en: "rely on", jp: "頼る" },
        { en: "meteorite", jp: "隕石" },
        { en: "primitive", jp: "原始的な" },
        { en: "closer", jp: "より近い" },
        { en: "material", jp: "物質" },
        { en: "discovery", jp: "発見" },
        { en: "amino acid", jp: "アミノ酸" },
        { en: "protein", jp: "タンパク質" },
        { en: "organism", jp: "生物" },
        { en: "speculate", jp: "推測する" },
        { en: "exist", jp: "存在する" },
        { en: "atmosphere", jp: "大気" },
        { en: "astrobiologist", jp: "宇宙生物学者" },
        { en: "discover", jp: "発見する" },
        { en: "offer", jp: "提供する" },
        { en: "incredible", jp: "信じられない" },
        { en: "whole", jp: "全ての、完全な" },
        { en: "crash", jp: "衝突する" }
    ]
};

// --- 変数とDOM要素の定義 ---

let currentQuestions = [];
let activeQuestionIndex = null;
let userAnswers = {}; // { questionIndex: "selectedWord" }
let isChecked = false;
let currentUnit = 6;

const unitSelect = document.getElementById('unitSelect');
const quizContainer = document.getElementById('quizContainer');
const choicesContainer = document.getElementById('choicesContainer');
const scoreSection = document.getElementById('scoreSection');
const submitArea = document.getElementById('submitArea');
const footerChoices = document.getElementById('footerChoices');

// --- ユーティリティ関数 ---

// 配列をシャッフルする
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- メインロジック ---

// Unitを読み込み、ランダムに10問選出する
function loadUnit(unitId) {
    isChecked = false;
    currentUnit = unitId;
    userAnswers = {};
    activeQuestionIndex = null;
    
    // 画面リセット
    scoreSection.style.display = 'none';
    submitArea.style.display = 'block';
    footerChoices.classList.remove('hidden');

    let sourceList = [];

    if (unitId === 'review') {
        // 全Unitのデータを結合
        Object.values(wordData).forEach(list => {
            sourceList = sourceList.concat(list);
        });
    } else {
        // 指定Unitのデータを使用
        const target = wordData[unitId];
        if (target) {
            sourceList = [...target];
        }
    }

    // ランダムにシャッフルして先頭10件を取得
    // (データが10件未満の場合は全件)
    const shuffled = shuffle([...sourceList]);
    const selected = shuffled.slice(0, 10);

    // 今回の出題用にIDを割り振る (0〜9)
    currentQuestions = selected.map((item, index) => ({
        id: index,
        en: item.en,
        jp: item.jp
    }));
    
    renderQuestions();
    renderChoices();
}

// 問題（日本語）を表示
function renderQuestions() {
    quizContainer.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        
        // 未回答時はクリック可能、回答後はロック
        if (!isChecked) {
            card.className = `question-card ${activeQuestionIndex === index ? 'active' : ''}`;
            card.onclick = () => setActiveQuestion(index);
        } else {
            card.className = 'question-card';
        }

        // 日本語文
        const jpDiv = document.createElement('div');
        jpDiv.className = 'jp-text';
        jpDiv.textContent = `Q${index + 1}. ${q.jp}`;

        // 解答欄
        const answerBox = document.createElement('div');
        answerBox.className = 'answer-box';
        
        const selectedWord = userAnswers[index];
        if (selectedWord) {
            answerBox.textContent = selectedWord;
            answerBox.classList.add('filled');
        } else {
            answerBox.textContent = "(下のリストから選択)";
        }

        card.appendChild(jpDiv);
        card.appendChild(answerBox);

        // 結果表示エリア（初期は非表示）
        const resultDiv = document.createElement('div');
        resultDiv.id = `result-${index}`;
        resultDiv.className = 'result-feedback';
        resultDiv.style.display = 'none';
        card.appendChild(resultDiv);

        quizContainer.appendChild(card);
    });
}

// 選択肢（英単語）を表示
function renderChoices() {
    choicesContainer.innerHTML = '';
    
    // 正解の単語リストを取得してシャッフル
    // currentQuestionsの順番とは関係なく並べる
    const wordList = currentQuestions.map(q => q.en);
    // 画面表示用にシャッフル（答えがバレないように）
    // ただし、毎回シャッフルすると選ぶたびに場所が変わって使いにくいので、
    // 選択肢の並び順はロード時に一度決めても良いですが、
    // ここではシンプルに「現在の問題セットに含まれる単語」を毎回再描画します。
    // (選択済みかどうかを反映するため)
    
    // 選択肢の順序を固定したい場合は、loadUnitでchoiceListを作っておくのがベターですが、
    // ここでは簡易的に「毎回シャッフル」ではなく「ID順などで固定」または「単純に表示」します。
    // 今回は「シャッフルされた状態」で見せたいので、関数内でシャッフルします。
    // ※注意: renderChoicesが呼ばれるたびに並びが変わると押しにくいので、
    // 本来は変数に保持すべきですが、今回は簡易実装として「選択操作のたびには並び替えない」
    // ように工夫するか、あるいは毎回変わることを許容するか。
    // 下記では「ロード時に決めた順序」を維持する仕組みがないため、
    // ユーザー体験向上のため、あえて「アルファベット順」で表示して固定します。
    
    const displayChoices = [...wordList].sort(); 

    displayChoices.forEach(word => {
        const btn = document.createElement('div');
        btn.className = 'choice-btn';
        btn.textContent = word;
        
        // すでにどこかの回答に使われているかチェック
        const isUsed = Object.values(userAnswers).includes(word);
        if (isUsed) {
            btn.classList.add('used');
        }

        if (!isChecked) {
            btn.onclick = () => selectChoice(word);
        }
        choicesContainer.appendChild(btn);
    });
}

// アクティブな問題を設定
function setActiveQuestion(index) {
    if (isChecked) return;
    activeQuestionIndex = index;
    renderQuestions();
    // 選択肢エリアは再描画しない（スクロール位置維持のため）
}

// 選択肢をクリックしたときの処理
function selectChoice(word) {
    if (isChecked) return;
    
    // アクティブな問題がない場合は、最初の未回答を探してアクティブにする
    if (activeQuestionIndex === null) {
        const firstUnfilled = currentQuestions.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : 0;
    }

    // 回答を保存
    userAnswers[activeQuestionIndex] = word;

    // 自動的に次の未回答へ進む
    const nextUnfilled = currentQuestions.findIndex((_, i) => !userAnswers[i] && i > activeQuestionIndex);
    if (nextUnfilled !== -1) {
        activeQuestionIndex = nextUnfilled;
    } else {
        // 後ろになければ先頭から探す
        const firstUnfilled = currentQuestions.findIndex((_, i) => !userAnswers[i]);
        activeQuestionIndex = firstUnfilled !== -1 ? firstUnfilled : activeQuestionIndex;
    }

    renderQuestions();
    renderChoices();
}

// 答え合わせ
function checkAnswers() {
    isChecked = true;
    let correctCount = 0;
    const total = currentQuestions.length;

    // 画面を確定状態（ロック）として再描画
    renderQuestions();
    renderChoices();

    currentQuestions.forEach((q, index) => {
        const card = quizContainer.children[index];
        const resultDiv = document.getElementById(`result-${index}`);
        const userAns = userAnswers[index];
        
        const isCorrect = (userAns === q.en);
        if (isCorrect) correctCount++;

        // カードの枠色を変更
        card.classList.add(isCorrect ? 'result-correct' : 'result-wrong');

        // 正誤と正解を表示
        resultDiv.style.display = 'block';
        if (isCorrect) {
            resultDiv.innerHTML = `<span class="ans-correct">✅ Correct!</span>`;
        } else {
            resultDiv.innerHTML = `
                <div>❌ <span class="ans-wrong">${userAns || "(未回答)"}</span></div>
                <div style="margin-top:5px;">✅ <span class="ans-correct">${q.en}</span></div>
            `;
        }
    });

    // スコア表示
    scoreSection.innerHTML = `
        <div class="final-score">Score: ${correctCount} / ${total}</div>
        <div>
            <button class="primary-btn" onclick="loadUnit(currentUnit)">Retry (New 10 Questions)</button>
        </div>
    `;
    scoreSection.style.display = 'block';

    submitArea.style.display = 'none';
    footerChoices.classList.add('hidden');

    // 上部へスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 初期化処理 ---

// Unit変更時のイベント
unitSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    // 数値変換できるなら数値、そうでなければ文字列('review')のまま
    loadUnit(val === 'review' ? val : parseInt(val));
});

// 初回ロード (Unit 6)
loadUnit(6);