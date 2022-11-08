// Add "pads" to sequencer element, adding column, row and value
const SynthSequencer = document.querySelector(".sequencer#synth-sequencer");
let SynthCol = 0;
let SynthRow = 0;
let SynthVal = "";
for (let i = 0; i < (12*16); i++)
{
    if (SynthRow === 0){
        SynthVal = "B4";
    }
    else if (SynthRow === 1){
        SynthVal = "A#4";
    }
    else if (SynthRow === 2){
        SynthVal = "A4";
    }
    else if (SynthRow === 3){
        SynthVal = "G#4";
    }
    else if (SynthRow === 4){
        SynthVal = "G4";
    }
    else if (SynthRow === 5){
        SynthVal = "F#4";
    }
    else if (SynthRow === 6){
        SynthVal = "F4";
    }
    else if (SynthRow === 7){
        SynthVal = "E4";
    }
    else if (SynthRow === 8){
        SynthVal = "D#4";
    }
    else if (SynthRow === 9){
        SynthVal = "D4";
    }
    else if (SynthRow === 10){
        SynthVal = "C#4";
    }
    else if (SynthRow === 11){
        SynthVal = "C4";
    }
    SynthSequencer.innerHTML += `<div class='synth-pad' data-col='${SynthCol}' data-row='${SynthRow}' value='${SynthVal}' onclick='SynthPadClick(this)'></div>`;
    SynthCol++;
    if (SynthCol === 16)
    {
        SynthCol = 0;
        SynthRow++;
    }
};

// Add or take color on clicked pads
function SynthPadClick(synth_pad) {
    if (synth_pad.style.backgroundColor !== '')
    {
        synth_pad.style.opacity = 0.1;
        synth_pad.style.backgroundColor = '';
    }
    else if (synth_pad.dataset.row === '0' || synth_pad.dataset.row === '6')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#E59866';
    }
    else if (synth_pad.dataset.row === '1' || synth_pad.dataset.row === '7')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#C39BD3';
    }
    else if (synth_pad.dataset.row === '2' || synth_pad.dataset.row === '8')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#F7DC6F';
    }
    else if (synth_pad.dataset.row === '3' || synth_pad.dataset.row === '9')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#58D68D';
    }
    else if (synth_pad.dataset.row === '4' || synth_pad.dataset.row === '10')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#A569BD';
    }
    else if (synth_pad.dataset.row === '5' || synth_pad.dataset.row === '11')
    {
        synth_pad.style.opacity = 1;
        synth_pad.style.backgroundColor = '#7DF9FF';
    }
};

// Get tempo
const synth_tempo_slider = document.getElementById("synth-tempo");
const synth_tempo_display = document.getElementById("synth-tempo-display");

// Update tempo when bar is dragged
synth_tempo_display.innerHTML = synth_tempo_slider.value;
let synth_tempo_val = 500;
function changeSynthTempo(slider) {
    synth_tempo_display.innerHTML = slider.value;
    synth_tempo_val = 60000 / slider.value;
};

// Play sequencer at given tempo
// Play highlighted notes in the sequencer
let playing_synth_sequencer = false;
function playSynthSequencer() {
    if (playing_synth_sequencer){
        return;
    }
    console.log("playing sequencer");
    Tone.start();
    const synth_play_bar = document.querySelector(".play-bar#synth-sequencer");
    const synth_pad = document.querySelectorAll(".synth-pad");
    synth_play_bar.style.backgroundColor = "red";
    let synth_counter = 0;
    let synth_distance = 0;
    let synth_play_bar_col = 0;
    synth_play_bar.setAttribute("data-col", synth_play_bar_col);
    let synth_pad_list = document.querySelectorAll(`.synth-pad[data-col='${synth_play_bar.dataset.col}']`);

    // Create synths
    let synth_synths = [];
    for (let i = 0; i < 12; i++)
    {
        synth_synths[i] = new Tone.FMSynth().toDestination();
    }

    window.synth_play_sequence = setInterval(function () {moveSynthBar(); stopSynth();}, synth_tempo_val);
    playing_synth_sequencer = true;

    // Move the sequencer bar
    function moveSynthBar() {
        if (synth_counter === 0)
        {
            synth_play_bar.style.marginLeft = synth_distance + "%";
            synth_counter++;
        }
        if (synth_counter <= 15)
        {
            synth_distance += 6.25;
            synth_play_bar.style.marginLeft = synth_distance + "%";
            synth_play_bar_col++;
            synth_play_bar.setAttribute("data-col", synth_play_bar_col);
            synth_counter++;
        }
        else
        {
            synth_distance = 0;
            synth_play_bar.style.marginLeft = synth_distance + "%"
            synth_play_bar_col = 0;
            synth_play_bar.setAttribute("data-col", synth_play_bar_col);
            synth_counter = 0;
        }

        playSynthSequencerNote();
    };

    // Play any notes the bar is touching
    function playSynthSequencerNote() {
        if (synth_pad_list) // If pad is on the same column as the play bar...
        {
            for (let i = 0; i <= 11; i++)
            {
                if (synth_pad_list[i].style.backgroundColor !== '') // ...and pad is coloured
                {
                    let synth_pad_note = synth_pad_list[i].getAttribute('value');
                    synth_synths[i].triggerAttackRelease(synth_pad_note, '8n', Tone.now());
                }
            }
            synth_pad_list = document.querySelectorAll(`.synth-pad[data-col='${synth_play_bar.dataset.col}']`);
        }
    };

    function stopSynth() {
        document.querySelector('.stop#synth-sequencer').onclick = function () {
            clearInterval(synth_play_sequence);
            synth_distance = 0;
            synth_play_bar.style.marginLeft = synth_distance + "%"
            synth_play_bar_col = 0;
            synth_play_bar.setAttribute("data-col", synth_play_bar_col);
            synth_counter = 0;
            playing_synth_sequencer = false;
        };
    };
};
