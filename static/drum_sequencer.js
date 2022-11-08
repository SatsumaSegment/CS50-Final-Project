
// Add "pads" to sequencer element, adding column, row, value and duration
const sequencer = document.querySelector(".sequencer#drum-sequencer");
let col = 0;
let row = 0;
let val = "";
let dur = "";
for (let i = 0; i < (5*16); i++)
{
    if (row === 0){
        val = "C4";
        dur = "4n";
    }
    else if (row === 1){
        val = "C4";
        dur = "8n";
    }
    else if (row === 2){
        val = "C6";
        dur = "32n";
    }
    else if (row === 3){
        val = "";
        dur = "4n";
    }
    else {
        val = "C2";
        dur = "8n";
    }
    sequencer.innerHTML += `<div class='pad' data-col='${col}' data-row='${row}' data-duration='${dur}' value='${val}' onclick='padClick(this)'></div>`;
    col++;
    if (col === 16)
    {
        col = 0;
        row++;
    }
};

// Add or take color on clicked pads
function padClick(pad) {
    if (pad.style.backgroundColor !== '')
    {
        pad.style.opacity = 0.1;
        pad.style.backgroundColor = '';
    }
    else if (pad.dataset.row === '0')
    {
        pad.style.opacity = 1;
        pad.style.backgroundColor = '#E59866';
    }
    else if (pad.dataset.row === '1')
    {
        pad.style.opacity = 1;
        pad.style.backgroundColor = '#C39BD3';
    }
    else if (pad.dataset.row === '2')
    {
        pad.style.opacity = 1;
        pad.style.backgroundColor = '#F7DC6F';
    }
    else if (pad.dataset.row === '3')
    {
        pad.style.opacity = 1;
        pad.style.backgroundColor = '#58D68D';
    }
    else if (pad.dataset.row === '4')
    {
        pad.style.opacity = 1;
        pad.style.backgroundColor = '#A569BD';
    }
};

// Get tempo
const tempo_slider = document.getElementById("drum-tempo");
const tempo_display = document.getElementById("drum-tempo-display");

// Update tempo when bar is dragged
tempo_display.innerHTML = tempo_slider.value;
let tempo_val = 500;
function changeTempo(slider) {
    tempo_display.innerHTML = slider.value;
    tempo_val = 60000 / slider.value;
};

// Play sequencer at given tempo
// Play highlighted notes in the sequencer
let playing_drum_sequencer = false
function playSequencer() {
    if (playing_drum_sequencer){
        return;
    }
    console.log("playing sequencer");
    Tone.start();
    const play_bar = document.querySelector(".play-bar#drum-sequencer");
    const pad = document.querySelectorAll(".pad");
    play_bar.style.backgroundColor = "red";
    let counter = 0;
    let distance = 0;
    let play_bar_col = 0;
    play_bar.setAttribute("data-col", play_bar_col);
    let pad_list = document.querySelectorAll(`.pad[data-col='${play_bar.dataset.col}']`);

    // Create synths
    const kick = new Tone.MembraneSynth().toDestination();
    const tom = new Tone.MembraneSynth().toDestination();
    const snare = new Tone.NoiseSynth().toDestination();
    const hat = new Tone.MetalSynth().toDestination();
    const crash = new Tone.MetalSynth().toDestination();

    let synths = [crash, tom, hat, snare, kick];

    window.play_sequence = setInterval(function () {moveBar(); stop();}, tempo_val);
    playing_drum_sequencer = true;

    // Move the sequencer bar
    function moveBar() {
        if (counter === 0)
        {
            play_bar.style.marginLeft = distance + "%";
            counter++;
        }
        if (counter <= 15)
        {
            distance += 6.25;
            play_bar.style.marginLeft = distance + "%";
            play_bar_col++;
            play_bar.setAttribute("data-col", play_bar_col);
            counter++;
        }
        else
        {
            distance = 0;
            play_bar.style.marginLeft = distance + "%"
            play_bar_col = 0;
            play_bar.setAttribute("data-col", play_bar_col);
            counter = 0;
        }

        playSequencerNote();
    };

    // Play any notes the bar is touching
    function playSequencerNote() {
        if (pad_list) // If pad is on the same column as the play bar...
        {
            for (let i = 0; i <= 4; i++)
            {
                if (pad_list[i].style.backgroundColor !== '') // ...and pad is coloured
                {
                    let pad_note = pad_list[i].getAttribute('value');
                    let pad_dur = pad_list[i].dataset.duration;
                    if (synths[i] === snare)
                    {
                        synths[i].triggerAttackRelease(pad_dur, Tone.now());
                    }
                    else
                    {
                        synths[i].triggerAttackRelease(pad_note, pad_dur, Tone.now());
                    }
                }
            }
           pad_list = document.querySelectorAll(`.pad[data-col='${play_bar.dataset.col}']`);
        }
    };

    function stop() {
        document.querySelector('.stop#drum-sequencer').onclick = function () {
            clearInterval(play_sequence);
            distance = 0;
            play_bar.style.marginLeft = distance + "%"
            play_bar_col = 0;
            play_bar.setAttribute("data-col", play_bar_col);
            counter = 0;
            playing_drum_sequencer = false;
        };
    };
};