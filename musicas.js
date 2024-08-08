const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const nextButton = document.getElementById('nextButton');
const stopButton = document.getElementById('stopButton');

const playlist = ['travis.mp3', 'million.mp3', 'flow.mp3', 'beat.mp3'];
let currentTrack = 0;

// Carrega a faixa atual
function loadTrack(trackIndex) {
    audioPlayer.src = playlist[trackIndex];
    audioPlayer.load(); // Recarrega o áudio
}

// Toca a música
function playTrack() {
    audioPlayer.play();
}

// Pausa a música
function pauseTrack() {
    audioPlayer.pause();
}

// Para a música e reseta o tempo
function stopTrack() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

// Avança para a próxima música
function playNextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    playTrack();
}

// Configurações iniciais
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
nextButton.addEventListener('click', playNextTrack);
stopButton.addEventListener('click', stopTrack);
loadTrack(currentTrack);
﻿
