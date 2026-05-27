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

// toggleVision (目のアイコンをクリックした時の処理)
const visionIcons = document.querySelectorAll('.toggle-vision');
visionIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // クリックしたアイコンの親要素をたどって、対応する英文テキストを取得
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

// tooltipToggleForMobile (スマホなど、ホバーが効きにくい環境用の処理)
const tooltipWords = document.querySelectorAll('.word-with-tooltip');
tooltipWords.forEach(word => {
    word.addEventListener('click', (e) => {
        e.stopPropagation();
        tooltipWords.forEach(w => {
            if (w !== word) w.classList.remove('active');
        });
        word.classList.toggle('active');
    });
});

// closeTooltipOnBodyClick
document.addEventListener('click', () => {
    tooltipWords.forEach(word => word.classList.remove('active'));
});