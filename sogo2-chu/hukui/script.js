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

// toggleText
const englishTexts = document.querySelectorAll('.english-text');
englishTexts.forEach(text => {
    text.addEventListener('click', () => {
        text.classList.toggle('hidden');
    });
});

// setupAudio
const audioIcons = document.querySelectorAll('.play-audio');
audioIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const audioSrc = icon.getAttribute('data-audio');
        playAudio(audioSrc);
    });
});