let currentAudio = null;

// playAudio
function playAudio(audioSrc) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (audioSrc) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play().catch(e => console.error(e));
    }
}

// toggleVision
const visionIcons = document.querySelectorAll('.toggle-vision');
visionIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const row = e.currentTarget.closest('.english-row');
        const textElement = row.querySelector('.english-text');
        textElement.classList.toggle('hidden');
    });
});

// setupAudio
const audioIcons = document.querySelectorAll('.play-audio');
audioIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const audioSrc = e.currentTarget.getAttribute('data-audio');
        playAudio(audioSrc);
    });
});

// tooltipToggle
const tooltipWords = document.querySelectorAll('.word-with-tooltip');
tooltipWords.forEach(word => {
    word.addEventListener('click', (e) => {
        // クリックイベントが親要素（body等）に伝わってすぐに閉じられるのを防ぐ
        e.stopPropagation();
        
        // 既に開いている別の吹き出しをすべて閉じる
        tooltipWords.forEach(w => {
            if (w !== word) w.classList.remove('active');
        });
        
        // クリックした単語の吹き出しを表示・非表示切り替え
        word.classList.toggle('active');
    });
});

// closeTooltipOnBodyClick
// 画面のどこか別の場所をクリックしたら、すべての吹き出しを閉じる
document.addEventListener('click', () => {
    tooltipWords.forEach(word => word.classList.remove('active'));
});