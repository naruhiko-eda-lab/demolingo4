// データを2つのグループに分けます
const quizDataGroups = {
    adjectives: [
        { id: 1, kanji: "ハンサム[な]", furigana: "ハンサム", options: ["英俊、帅气", "亲切", "有名", "漂亮"], correctAnswer: "英俊、帅气" },
        { id: 2, kanji: "きれい[な]", furigana: "きれい", options: ["漂亮、干净", "安静", "热闹", "方便"], correctAnswer: "漂亮、干净" },
        { id: 3, kanji: "しずか[な]", furigana: "しずか", options: ["安静", "热闹", "亲切", "有名"], correctAnswer: "安静" },
        { id: 4, kanji: "にぎやか[な]", furigana: "にぎやか", options: ["热闹", "安静", "方便", "暇"], correctAnswer: "热闹" },
        { id: 5, kanji: "ゆうめい[な]", furigana: "ゆうめい", options: ["有名", "亲切", "漂亮", "帅气"], correctAnswer: "有名" },
        { id: 6, kanji: "しんせつ[な]", furigana: "しんせつ", options: ["亲切", "健康", "方便", "好"], correctAnswer: "亲切" },
        { id: 7, kanji: "げんき[な]", furigana: "げんき", options: ["健康、有精神", "亲切", "暇", "有名"], correctAnswer: "健康、有精神" },
        { id: 8, kanji: "ひま[な]", furigana: "ひま", options: ["有空、闲暇", "忙碌", "方便", "特別"], correctAnswer: "有空、闲暇" },
        { id: 9, kanji: "べんり[な]", furigana: "べんり", options: ["方便", "便宜", "特別", "漂亮"], correctAnswer: "方便" },
        { id: 10, kanji: "すてき[な]", furigana: "すてき", options: ["极好、极漂亮", "有名", "亲切", "精神"], correctAnswer: "极好、极漂亮" },
        { id: 11, kanji: "おおきい", furigana: "おおきい", options: ["大", "小", "多", "少"], correctAnswer: "大" },
        { id: 12, kanji: "ちいさい", furigana: "ちいさい", options: ["小", "大", "新", "旧"], correctAnswer: "小" },
        { id: 13, kanji: "あたらしい", furigana: "あたらしい", options: ["新", "旧", "好", "坏"], correctAnswer: "新" },
        { id: 14, kanji: "ふるい", furigana: "ふるい", options: ["旧", "新", "坏", "便宜"], correctAnswer: "旧" },
        { id: 15, kanji: "いい（よい）", furigana: "いい", options: ["好", "坏", "贵", "便宜"], correctAnswer: "好" },
        { id: 16, kanji: "わるい", furigana: "わるい", options: ["坏", "好", "难", "容易"], correctAnswer: "坏" },
        { id: 17, kanji: "あつい", furigana: "あつい", options: ["热", "冷", "凉爽", "暖和"], correctAnswer: "热" },
        { id: 18, kanji: "さむい", furigana: "さむい", options: ["冷 (天气)", "热", "凉快", "忙"], correctAnswer: "冷 (天气)" },
        { id: 19, kanji: "つめたい", furigana: "つめたい", options: ["冰、凉 (水、手等)", "冷 (天气)", "热", "辣"], correctAnswer: "冰、凉 (水、手等)" },
        { id: 20, kanji: "むずかしい", furigana: "むずかしい", options: ["难", "容易", "便宜", "贵"], correctAnswer: "难" },
        { id: 21, kanji: "やさしい", furigana: "やさしい", options: ["容易", "难", "低", "忙"], correctAnswer: "容易" },
        { id: 22, kanji: "たかい", furigana: "たかい", options: ["贵、高", "便宜、低", "新", "长"], correctAnswer: "贵、高" },
        { id: 23, kanji: "やすい", furigana: "やすい", options: ["便宜", "贵", "容易", "有趣"], correctAnswer: "便宜" },
        { id: 24, kanji: "ひくい", furigana: "ひくい", options: ["低", "高", "短", "小"], correctAnswer: "低" },
        { id: 25, kanji: "おもしろい", furigana: "おもしろい", options: ["有趣", "好玩", "美味", "忙"], correctAnswer: "有趣" },
        { id: 26, kanji: "おいしい", furigana: "おいしい", options: ["美味、好吃", "难吃", "甜", "辣"], correctAnswer: "美味、好吃" },
        { id: 27, kanji: "いそがしい", furigana: "いそがしい", options: ["忙碌", "有空", "快乐", "累"], correctAnswer: "忙碌" },
        { id: 28, kanji: "たのしい", furigana: "たのしい", options: ["快乐、愉快", "忙碌", "有趣", "好"], correctAnswer: "快乐、愉快" },
        { id: 29, kanji: "しろい", furigana: "しろい", options: ["白色的", "黑色的", "红色的", "蓝色的"], correctAnswer: "白色的" },
        { id: 30, kanji: "くろい", furigana: "くろい", options: ["黑色的", "白色的", "蓝色的", "红色的"], correctAnswer: "黑色的" },
        { id: 31, kanji: "あかい", furigana: "あかい", options: ["红色的", "蓝色的", "白色的", "黑色的"], correctAnswer: "红色的" },
        { id: 32, kanji: "あおい", furigana: "あおい", options: ["蓝色的", "红色的", "白色的", "黑色的"], correctAnswer: "蓝色的" }
    ],
    others: [
        { id: 1, kanji: "さくら", furigana: "さくら", options: ["樱花", "梅花", "桃花", "菊花"], correctAnswer: "樱花" },
        { id: 2, kanji: "やま", furigana: "やま", options: ["山", "川", "海", "空"], correctAnswer: "山" },
        { id: 3, kanji: "まち", furigana: "まち", options: ["城镇、街道", "村庄", "家", "学校"], correctAnswer: "城镇、街道" },
        { id: 4, kanji: "たべもの", furigana: "たべもの", options: ["食物", "饮料", "礼物", "东西"], correctAnswer: "食物" },
        { id: 5, kanji: "ところ", furigana: "ところ", options: ["场所、地方", "宿舍", "餐厅", "学校"], correctAnswer: "场所、地方" },
        { id: 6, kanji: "りょう", furigana: "りょう", options: ["宿舍", "场所", "餐厅", "家"], correctAnswer: "宿舍" },
        { id: 7, kanji: "レストラン", furigana: "レストラン", options: ["餐厅", "咖啡馆", "超市", "宿舍"], correctAnswer: "餐厅" },
        { id: 8, kanji: "せいかつ", furigana: "せいかつ", options: ["生活", "工作", "学习", "旅行"], correctAnswer: "生活" },
        { id: 9, kanji: "[お]しごと", furigana: "しごと", options: ["工作、职业", "生活", "趣味", "运动"], correctAnswer: "工作、职业" },
        { id: 10, kanji: "どう", furigana: "どう", options: ["怎么样", "什么样的", "哪个", "为什么"], correctAnswer: "怎么样" },
        { id: 11, kanji: "どんな〜", furigana: "どんな", options: ["什么样的", "怎么样", "哪个", "谁的"], correctAnswer: "什么样的" },
        { id: 12, kanji: "とても", furigana: "とても", options: ["非常、很", "不怎么", "稍微", "总是"], correctAnswer: "非常、很" },
        { id: 13, kanji: "あまり", furigana: "あまり", options: ["不怎么（与否定连用）", "非常", "总是", "有时候"], correctAnswer: "不怎么（与否定连用）" },
        { id: 14, kanji: "そして", furigana: "そして", options: ["而且、然后", "但是", "所以", "因为"], correctAnswer: "而且、然后" },
        { id: 15, kanji: "〜が、〜", furigana: "〜が、〜", options: ["〜，但是〜", "〜，しかも〜", "〜，だから〜", "〜，それから〜"], correctAnswer: "〜，但是〜" },
        { id: 16, kanji: "お元気ですか", furigana: "おげんきですか", options: ["你好吗？", "再见", "对不起", "谢谢"], correctAnswer: "你好吗？" },
        { id: 17, kanji: "そうですね", furigana: "そうですね", options: ["是啊（表示赞同）", "不是", "不知道", "为什么"], correctAnswer: "加えた贊同" },
        { id: 18, kanji: "もう一杯いかがですか", furigana: "もういっぱい、いかがですか", options: ["再来一杯怎么样？", "好久不见", "我不吃了", "请进"], correctAnswer: "再来一杯怎么样？" },
        { id: 19, kanji: "いいえ、けっこうです", furigana: "いいえ、けっこうです", options: ["不，不用了", "是的，请", "好的", "没关系"], correctAnswer: "不，不用了" },
        { id: 20, kanji: "そろそろ失礼します", furigana: "そろそろ、しつれいします", options: ["我该告辞了", "初次见面", "谢谢", "请多关照"], correctAnswer: "我该告辞了" },
        { id: 21, kanji: "いいえ", furigana: "いいえ", options: ["不、没什么", "是的", "请", "谢谢"], correctAnswer: "不、没什么" },
        { id: 22, kanji: "またいらっしゃってください", furigana: "また、いらっしゃってください", options: ["欢迎下次再来", "请进", "请慢用", "告辞了"], correctAnswer: "欢迎下次再来" }
    ]
};

// ----------------------------------------------------
// ここから下は「仕組み」の部分です（以前と少し変わります）
// ----------------------------------------------------

let currentGroup = 'adjectives'; // 最初は形容詞を表示
let quizData = [...quizDataGroups[currentGroup]]; 
let currentQuestionIndex = 0;
let score = 0;

// 問題を表示する関数
function showQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('kanji').textContent = question.kanji;
    document.getElementById('furigana').textContent = question.furigana;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

// 答え合わせ
function checkAnswer(selectedOption) {
    const question = quizData[currentQuestionIndex];
    if (selectedOption === question.correctAnswer) {
        score++;
        playCorrectSound();
    } else {
        playWrongSound();
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// プログレスバー更新
function updateProgress() {
    const progress = (currentQuestionIndex / quizData.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

// 結果表示（ここに「切り替えボタン」を追加しています）
function showResult() {
    const nextGroup = (currentGroup === 'adjectives') ? 'others' : 'adjectives';
    const nextLabel = (currentGroup === 'adjectives') ? '名詞・副詞・会話' : '形容詞';

    document.getElementById('quiz-container').innerHTML = `
        <h2>結果発表</h2>
        <p>${quizData.length}問中 ${score}問正解！</p>
        <button onclick="restartQuiz('${currentGroup}')">もう一度（同じ範囲）</button>
        <button onclick="restartQuiz('${nextGroup}')">次は「${nextLabel}」に挑戦！</button>
    `;
}

// クイズを再起動（範囲を選べるようにした）
function restartQuiz(group) {
    currentGroup = group;
    quizData = [...quizDataGroups[currentGroup]];
    currentQuestionIndex = 0;
    score = 0;
    
    // 画面を元のレイアウトに戻す
    document.getElementById('quiz-container').innerHTML = `
        <div class="progress-container"><div id="progress" class="progress"></div></div>
        <div class="quiz-box">
            <div id="furigana" class="furigana"></div>
            <div id="kanji" class="kanji"></div>
            <div id="options" class="options"></div>
        </div>
    `;
    showQuestion();
}

function playCorrectSound() { new Audio('sounds/correct.mp3').play(); }
function playWrongSound() { new Audio('sounds/wrong.mp3').play(); }

// 最初の起動
showQuestion();