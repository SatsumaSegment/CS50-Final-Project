
function stopAll() {
    clearInterval(window.play_sequence);
    clearInterval(window.synth_play_sequence);
    playing_drum_sequencer = false;
    playing_synth_sequencer = false;
};

const all_tempo_slider = document.getElementById("universal-tempo");
const all_tempo_display = document.getElementById("universal-tempo-display");

// Update tempo when bar is dragged
all_tempo_display.innerHTML = all_tempo_slider.value;
let all_tempo_val = 500;
function changeTempoAll(slider) {
    all_tempo_display.innerHTML = slider.value;
    all_tempo_val = 60000 / slider.value;
};