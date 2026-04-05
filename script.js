// --- 第8課 データを2つのグループに分けます ---
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
        { id: 22, kanji: "たかい", furigana: "たかい", options: ["贵、高", "便宜、低", "新", "長"], correctAnswer: "贵、高" },
        { id: 23, kanji: "やすい", furigana: "やすい", options: ["便宜", "贵", "容易", "有趣"], correctAnswer: "便宜" },
        { id: 24, kanji: "ひくい", furigana: "ひくい", options: ["低", "高", "短", "小"], correctAnswer: "低" },
        { id: 25, kanji: "おもしろい", furigana: "おもしろい", options: ["有趣", "好玩", "美味", "忙"], correctAnswer: "有趣" },
        { id: 26, kanji: "おいしい", furigana: "おいしい", options: ["美味、好吃", "难吃", "甜", "辣"], correctAnswer: "美味、好吃" },
        { id: 27, kanji: "いそがしい", furigana: "いそがしい", options: ["忙碌", "有空", "快乐", "累"], correctAnswer: "忙碌" },
        { id: 28, kanji: "たのしい", furigana: "たのしい", options: ["快乐、愉快", "忙碌", "有趣", "好"], correctAnswer: "快乐、愉快" },
        { id: 29, kanji: "しろい", furigana: "しろい", options: ["白色", "黑色", "红色", "蓝色"], correctAnswer: "白色" },
        { id: 30, kanji: "くろい", furigana: "くろい", options: ["黑色", "白色", "蓝色", "红色"], correctAnswer: "黑色" },
        { id: 31, kanji: "あかい", furigana: "あかい", options: ["红色", "蓝色", "白色", "黑色"], correctAnswer: "红色" },
        { id: 32, kanji: "あおい", furigana: "あおい", options: ["蓝色", "红色", "白色", "黑色"], correctAnswer: "蓝色" }
    ],
    others: [
        { id: 1, kanji: "さくら", furigana: "さくら", options: ["樱花", "梅花", "桃花", "菊花"], correctAnswer: "樱花" },
        { id: 2, kanji: "やま", furigana: "やま", options: ["山", "川", "海", "空"], correctAnswer: "山" },
        { id: 3, kanji: "まち", furigana: "まち", options: ["城镇、街道", "村庄", "家", "学校"], correctAnswer: "城镇、街道" },
        { id: 4, kanji: "たべもの", furigana: "たべもの", options: ["食物", "饮料", "礼物", "东西"], correctAnswer: "食物" },
        { id: 5, kanji: "ところ", furigana: "ところ", options: ["场所、地方", "宿舍", "餐厅", "学校"], correctAnswer: "场所、地方" },
        { id: 6, kanji: "りょう", furigana: "りょう", options: ["宿舍", "場所", "餐厅", "家"], correctAnswer: "宿舍" },
        { id: 7, kanji: "レストラン", furigana: "レストラン", options: ["餐厅", "咖啡馆", "超市", "宿舍"], correctAnswer: "餐厅" },
        { id: 8, kanji: "せいかつ", furigana: "せいかつ", options: ["生活", "工作", "学習", "旅行"], correctAnswer: "生活" },
        { id: 9, kanji: "[お]しごと", furigana: "しごと", options: ["工作、职业", "生活", "趣味", "运动"], correctAnswer: "工作、职业" },
        { id: 10, kanji: "どう", furigana: "どう", options: ["怎么样", "什么样的", "哪个", "为什么"], correctAnswer: "怎么样" },
        { id: 11, kanji: "どんな〜", furigana: "どんな", options: ["什么样的", "怎么样", "哪个", "谁の"], correctAnswer: "什么样的" },
        { id: 12, kanji: "とても", furigana: "とても", options: ["非常、很", "不怎么", "稍微", "总是"], correctAnswer: "非常、很" },
        { id: 13, kanji: "あまり", furigana: "あまり", options: ["不怎么（与否定连用）", "非常", "总是", "有时候"], correctAnswer: "不怎么（与否定连用）" },
        { id: 14, kanji: "そして", furigana: "そして", options: ["しかも・それから", "但是", "所以", "因为"], correctAnswer: "しかも・それから" },
        { id: 15, kanji: "〜が、〜", furigana: "〜が、〜", options: ["〜，但是〜", "〜，しかも〜", "〜，だから〜", "〜，それから〜"], correctAnswer: "〜，但是〜" },
        { id: 16, kanji: "お元気ですか", furigana: "おげんきですか", options: ["你好吗？", "再见", "对不起", "谢谢"], correctAnswer: "你好吗？" },
        { id: 17, kanji: "そうですね", furigana: "そうですね", options: ["是啊（赞同）", "不是", "不知道", "为什么"], correctAnswer: "是啊（赞同）" },
        { id: 18, kanji: "もう一杯いかがですか", furigana: "いかがですか", options: ["再来一杯怎么样？", "好久不见", "我不吃了", "请進"], correctAnswer: "再来一杯怎么样？" },
        { id: 19, kanji: "いいえ、けっこうです", furigana: "けっけうです", options: ["不，不用了", "是的，请", "好的", "没关系"], correctAnswer: "不，不用了" },
        { id: 20, kanji: "そろそろ失礼します", furigana: "しつれいします", options: ["我该告辞了", "初次见面", "谢谢", "请多关照"], correctAnswer: "我该告辞了" },
        { id: 21, kanji: "いいえ", furigana: "いいえ", options: ["不、没什么", "是的", "请", "谢谢"], correctAnswer: "不、没什么" },
        { id: 22, kanji: "またいらっしゃってください", furigana: "いらっしゃってください", options: ["欢迎下次再来", "请進", "请慢用", "告辞了"], correctAnswer: "欢迎下次再来" }
    ]
};

// --- グローバル変数 ---
let currentGroupName = localStorage.getItem('selectedGroup') || 'adjectives';
let quizData = [...quizDataGroups[currentGroupName]];
let score = 0; 
let currentIndex = 0;
let selectedOption = null;
let state = 'answering';
let missedQuestions = []; 
let originalTotalQuestions = 0;

const elements = {
    progressBar: document.getElementById('progress-bar'),
    quizArea: document.getElementById('quiz-area'),
    resultsArea: document.getElementById('results-area'),
    kanji: document.getElementById('kanji'),
    furigana: document.getElementById('furigana'),
    optionsGrid: document.getElementById('options-grid'),
    actionBtn: document.getElementById('action-btn'),
    footer: document.getElementById('footer'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackCorrectAnswer: document.getElementById('feedback-correct-answer'),
    audioBtn: document.getElementById('audio-btn')
};

// --- 音声関連 ---
let audioCtx = null;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function speakText(text, lang = 'zh-CN') {
    if (!text) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    if (lang.includes('ja')) utterance.rate = 0.85; // 日本語は少しゆっくり

    const voices = window.speechSynthesis.getVoices();
    let targetVoice = voices.find(v => v.lang === lang && (v.name.includes('Google') || v.name.includes('Premium')));
    if (!targetVoice) targetVoice = voices.find(v => v.lang.includes(lang));
    if (targetVoice) utterance.voice = targetVoice;
    window.speechSynthesis.speak(utterance);
}

// --- クイズロジック ---
function renderQuestion() {
    const question = quizData[currentIndex];
    const progress = ((currentIndex + 1) / quizData.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    elements.kanji.textContent = question.kanji;
    elements.furigana.textContent = question.furigana;
    elements.optionsGrid.innerHTML = '';
    selectedOption = null;
    resetFooter();

    // 出題時に自動読み上げ
    speakText(question.furigana, 'ja-JP');

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            if (state !== 'answering') return;
            initAudio();
            Array.from(elements.optionsGrid.children).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedOption = opt;
            elements.actionBtn.disabled = false;
            speakText(opt, 'zh-CN'); // 選択肢（中国語）読み上げ
        });
        elements.optionsGrid.appendChild(btn);
    });
    state = 'answering';
}

function checkAnswer() {
    const question = quizData[currentIndex];
    const isCorrect = selectedOption === question.correctAnswer;
    const feedbackImg = document.getElementById('feedback-img'); 

    state = 'feedback';
    elements.feedbackContainer.classList.remove('hidden');
    elements.actionBtn.textContent = '继续'; 
    Array.from(elements.optionsGrid.children).forEach(btn => btn.classList.add('disabled'));

    if (isCorrect) {
        score++;
        elements.footer.classList.add('correct');
        elements.feedbackTitle.textContent = '太棒了！';
        elements.feedbackCorrectAnswer.classList.add('hidden');
        if (feedbackImg) feedbackImg.src = 'images/correct.png';
        new Audio('sounds/correct.mp3').play().catch(() => {});
    } else {
        missedQuestions.push(question);
        elements.footer.classList.add('incorrect');
        elements.feedbackTitle.textContent = '不正确。';
        elements.feedbackCorrectAnswer.querySelector('span').textContent = question.correctAnswer;
        elements.feedbackCorrectAnswer.classList.remove('hidden');
        if (feedbackImg) feedbackImg.src = 'images/incorrect.png';
        new Audio('sounds/wrong.mp3').play().catch(() => {});
    }
}

function handleAction() {
    if (state === 'answering') {
        checkAnswer();
    } else if (state === 'feedback') {
        currentIndex++;
        const BREAK_POINT = Math.floor(originalTotalQuestions / 2);
        if (quizData.length === originalTotalQuestions && currentIndex === BREAK_POINT) {
            showBreakScreen();
            return;
        }
        if (currentIndex < quizData.length) {
            renderQuestion();
        } else {
            showFinalResult();
        }
    } else if (state === 'break') {
        renderQuestion();
    }
}

function showBreakScreen() {
    state = 'break';
    elements.optionsGrid.innerHTML = ''; 
    elements.kanji.textContent = "休憩時間";
    elements.furigana.textContent = "加油！加油！";
    const feedbackImg = document.getElementById('feedback-img');
    if (feedbackImg) feedbackImg.src = 'images/break.png';
    elements.feedbackTitle.textContent = "おつかれさま！ちょっとひと休み。";
    elements.actionBtn.textContent = '再開する';
}

function showFinalResult() {
    state = 'finished';
    elements.optionsGrid.innerHTML = '';
    elements.kanji.textContent = "🎉 学習完了！";
    elements.furigana.textContent = `正解数: ${score} / ${quizData.length}`;
    
    const nextGroup = (currentGroupName === 'adjectives') ? 'others' : 'adjectives';
    const nextLabel = (currentGroupName === 'adjectives') ? '名詞・副詞・会話' : '形容詞';

    elements.feedbackTitle.innerHTML = `
        お疲れ様でした！<br>
        <button class="action-btn" style="margin-top:20px; background:#58cc02; border-bottom: 4px solid #46a302;" onclick="swapRange('${nextGroup}')">
            次は「${nextLabel}」に挑戦
        </button>
    `;
    
    if (missedQuestions.length > 0) {
        elements.actionBtn.textContent = `間違えた ${missedQuestions.length} 問を解き直す`;
        elements.actionBtn.onclick = () => retryMissedQuestions();
    } else {
        elements.actionBtn.textContent = 'もう一度最初から';
        elements.actionBtn.onclick = () => location.reload();
    }
}

window.swapRange = function(group) {
    localStorage.setItem('selectedGroup', group);
    location.reload();
}

function retryMissedQuestions() {
    quizData = [...missedQuestions];
    missedQuestions = []; 
    currentIndex = 0;
    score = 0;
    renderQuestion();
    elements.actionBtn.onclick = null; 
}

function resetFooter() {
    elements.footer.classList.remove('correct', 'incorrect');
    elements.feedbackContainer.classList.add('hidden');
    elements.actionBtn.textContent = '检查';
    elements.actionBtn.disabled = true;
}

function init() {
    originalTotalQuestions = quizData.length;
    quizData.sort(() => Math.random() - 0.5); 
    renderQuestion();

    elements.actionBtn.addEventListener('click', handleAction);

    // ✕ボタンの修正
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            if (confirm('最初に戻りますか？')) {
                localStorage.removeItem('selectedGroup');
                location.reload(); 
            }
        };
    }

    elements.audioBtn.addEventListener('click', () => {
        initAudio();
        const text = (state === 'break') ? "加油！加油！" : quizData[currentIndex].furigana;
        speakText(text, 'ja-JP');
    });
}

document.addEventListener('DOMContentLoaded', init);