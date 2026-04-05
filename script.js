let score = 0; 
let currentIndex = 0;
let selectedOption = null;
let state = 'question';
let missedQuestions = []; 
let originalTotalQuestions = 0; // ★最初の問題数を保存する変数

const quizData = [
    { id: 1, kanji: "ハンサム[な]", furigana: "ハンサム", options: ["英俊、帅气", "亲切", "有名", "漂亮"], correctAnswer: "英俊、帅气" },
    { id: 2, kanji: "きれい[な]", furigana: "きれい", options: ["漂亮、干净", "安静", "热闹", "方便"], correctAnswer: "漂亮、干净" },
    { id: 3, kanji: "しずか[な]", furigana: "しずか", options: ["安静", "热闹", "亲切", "有名"], correctAnswer: "安静" },
    { id: 4, kanji: "にぎやか[な]", furigana: "にぎやか", options: ["热闹", "安静", "方便", "暇"], correctAnswer: "热闹" },
    { id: 5, kanji: "ゆうめい[な]", furigana: "ゆうめい", options: ["有名", "亲切", "漂亮", "帅气"], correctAnswer: "有名" },
    { id: 6, kanji: "しんせつ[な]", furigana: "しんせつ", options: ["亲切", "健康", "方便", "好"], correctAnswer: "亲切" },
    { id: 7, kanji: "げんき[な]", furigana: "げんき", options: ["健康、有精神", "亲切", "暇", "有名"], correctAnswer: "健康、有精神" },
    { id: 8, kanji: "ひま[な]", furigana: "ひま", options: ["有空、闲暇", "忙碌", "方便", "特别"], correctAnswer: "有空、闲暇" },
    { id: 9, kanji: "べんり[な]", furigana: "べんり", options: ["方便", "便宜", "特别", "漂亮"], correctAnswer: "方便" },
    { id: 10, kanji: "すてき[な]", furigana: "すてき", options: ["极好、极漂亮", "有名", "亲切", "精神"], correctAnswer: "极好、极漂亮" },
    { id: 11, kanji: "おおきい", furigana: "おおきい", options: ["大", "小", "多", "少"], correctAnswer: "大" },
    { id: 12, kanji: "ちいさい", furigana: "ちいさい", options: ["小", "大", "新", "旧"], correctAnswer: "小" },
    { id: 13, kanji: "あたらしい", furigana: "あたらしい", options: ["新", "旧", "好", "坏"], correctAnswer: "新" },
    { id: 14, kanji: "ふるい", furigana: "ふるい", options: ["旧", "新", "坏", "便宜"], correctAnswer: "旧" },
    { id: 15, kanji: "いい（よい）", furigana: "いい", options: ["好", "坏", "贵", "便宜"], correctAnswer: "好" },
    { id: 16, kanji: "わるい", furigana: "わるい", options: ["坏", "好", "难", "容易"], correctAnswer: "坏" },
    { id: 17, kanji: "あつい", furigana: "あつい", options: ["热", "冷", "凉爽", "暖和"], correctAnswer: "热" },
    { id: 18, kanji: "さむい", furigana: "さむい", options: ["冷", "热", "凉爽", "忙"], correctAnswer: "冷" },
    { id: 19, kanji: "つめたい", furigana: "つめたい", options: ["冰、凉", "冷", "热", "辣"], correctAnswer: "冰、凉" },
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
    { id: 32, kanji: "あおい", furigana: "あおい", options: ["蓝色的", "红色的", "白色的", "黑色的"], correctAnswer: "蓝色的" },
    { id: 33, kanji: "さくら", furigana: "さくら", options: ["樱花", "梅花", "桃花", "菊花"], correctAnswer: "樱花" },
    { id: 34, kanji: "やま", furigana: "やま", options: ["山", "川", "海", "空"], correctAnswer: "山" },
    { id: 35, kanji: "まち", furigana: "まち", options: ["城镇、街道", "村庄", "家", "学校"], correctAnswer: "城镇、街道" },
    { id: 36, kanji: "たべもの", furigana: "たべもの", options: ["食物", "饮料", "礼物", "东西"], correctAnswer: "食物" }
];

// 中間地点の計算（単語を増やしても自動で半分を計算します）
const BREAK_POINT = Math.floor(quizData.length / 2);

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
    if (lang.includes('ja')) utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    let targetVoice = voices.find(v => v.lang === lang && (v.name.includes('Google') || v.name.includes('Premium')));
    if (!targetVoice) targetVoice = voices.find(v => v.lang.includes(lang));
    if (targetVoice) utterance.voice = targetVoice;
    window.speechSynthesis.speak(utterance);
}

function renderQuestion() {
    const question = quizData[currentIndex];
    
    // ★ 78行目付近：進捗バーを最後まで届くように修正
    const progress = ((currentIndex + 1) / quizData.length) * 100;
    elements.progressBar.style.width = `${progress}%`;

    elements.kanji.textContent = question.kanji;
    elements.furigana.textContent = question.furigana;
    elements.optionsGrid.innerHTML = '';
    selectedOption = null;
    resetFooter();

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
            speakText(opt, 'zh-CN'); 
        });
        elements.optionsGrid.appendChild(btn);
    });
    state = 'answering';
}

function handleBtnClick() {
    initAudio();
    if (state === 'answering') {
        checkAnswer();
    } else {
        handleAction();
    }
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
        playCorrectSound();
    } else {
        missedQuestions.push(question);
        elements.footer.classList.add('incorrect');
        elements.feedbackTitle.textContent = '不正确。';
        elements.feedbackCorrectAnswer.querySelector('span').textContent = question.correctAnswer;
        elements.feedbackCorrectAnswer.classList.remove('hidden');
        if (feedbackImg) feedbackImg.src = 'images/incorrect.png';
        playIncorrectSound();
    }
}

function handleAction() {
    if (state === 'feedback') {
        currentIndex++;
        
        // ★ 休憩判定：全問題数が「最初の数」と同じ、かつ「中間」の時だけ出す（解き直し時は出さない）
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
    elements.kanji.textContent = "休息時間";
    elements.furigana.textContent = "がんばっているね！";
    const feedbackImg = document.getElementById('feedback-img');
    if (feedbackImg) feedbackImg.src = 'images/break.png';
    elements.feedbackTitle.textContent = "おつかれさま！ちょっとひと休み。";
    elements.actionBtn.textContent = '再開する';
}

function showFinalResult() {
    state = 'finished';
    elements.optionsGrid.innerHTML = '';
    elements.kanji.textContent = "🎉 お疲れ様でした！";
    elements.furigana.textContent = `正解数: ${score} / ${quizData.length}`;
    const percent = Math.round((score / quizData.length) * 100);
    elements.feedbackTitle.textContent = `あなたのスコアは ${percent}点 です！`;
    
    if (missedQuestions.length > 0) {
        elements.actionBtn.textContent = `間違えた ${missedQuestions.length} 問を解き直す`;
        elements.actionBtn.onclick = () => retryMissedQuestions();
    } else {
        elements.actionBtn.textContent = '最初から挑戦する';
        elements.actionBtn.onclick = () => location.reload();
    }
    
    elements.feedbackContainer.classList.remove('hidden');
}

function retryMissedQuestions() {
    quizData.splice(0, quizData.length, ...missedQuestions); 
    missedQuestions = []; 
    currentIndex = 0;
    score = 0;
    state = 'question';
    renderQuestion();
    elements.actionBtn.onclick = null; 
}

function playCorrectSound() { new Audio('sounds/correct.mp3').play().catch(() => {}); }
function playIncorrectSound() { new Audio('sounds/incorrect.mp3').play().catch(() => {}); }

function resetFooter() {
    elements.footer.classList.remove('correct', 'incorrect');
    elements.feedbackContainer.classList.add('hidden');
    elements.actionBtn.textContent = '检查';
    elements.actionBtn.disabled = true;
}

function init() {
    // ★ 起動時の問題数を保存
    originalTotalQuestions = quizData.length;
    
    quizData.sort(() => Math.random() - 0.5); 
    currentIndex = 0;
    score = 0;
    missedQuestions = [];
    renderQuestion();

    elements.actionBtn.addEventListener('click', handleBtnClick);

    const closeBtn = document.querySelector('.close-btn') || document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (confirm('最初に戻りますか？')) {
                location.reload(); 
            }
        });
    }

    elements.audioBtn.addEventListener('click', () => {
        initAudio();
        if (state === 'break') {
            speakText("がんばっているね！ちょっとひと休み。", 'ja-JP');
        } else {
            const question = quizData[currentIndex];
            const textToSpeak = question.yomi || question.furigana;
            speakText(textToSpeak, 'ja-JP');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);