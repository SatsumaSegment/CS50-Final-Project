// Get keys
const white_keys = document.querySelectorAll('.white-key');
const black_keys = document.querySelectorAll('.black-key');

// Change synth sound to user's selection
function changeSynth() {
    let synth_type = document.getElementById('synth-type').value;
    if (synth_type === 'pluck')
    {
        if (x === 1){
            synth1 = new Tone.PluckSynth().connect(fx1);
        }
        else{
            synth1 = new Tone.PluckSynth().toDestination();
        }
    }
    else if (synth_type === 'mono')
    {
        if (x === 1){
            synth1 = new Tone.MonoSynth().connect(fx1);
        }
        else{
            synth1 = new Tone.MonoSynth().toDestination();
        }
    }
    else if (synth_type === 'fm')
    {
        if (x === 1){
            synth1 = new Tone.FMSynth().connect(fx1);
        }
        else{
            synth1 = new Tone.FMSynth().toDestination();
        }
    }
};

// Change synth effect to user's selection
let effect = document.getElementById('effect-type').value;
let x = 0;
function changeEffect() {
    effect = document.getElementById('effect-type').value;
    if (x === 1){
        synth1.disconnect(fx1);
        x = 0;
    }
    if (effect === 'distortion')
    {
        x = 1;
        fx1 = new Tone.Distortion().toDestination();
        synth1.connect(fx1);
    }
    else if (effect === 'reverb')
    {
        x = 1;
        fx1 = new Tone.Reverb().toDestination();
        synth1.connect(fx1);
    }
    else if (effect === 'delay')
    {
        x = 1;
        fx1 = new Tone.PingPongDelay().toDestination();
        synth1.connect(fx1);
    }
    else if (effect === 'none')
    {
        synth1.toDestination();
    }
};

// Listen for key presses and play coressponding notes
let note;
window.addEventListener('keydown', function (event) {
    if (event.key === 'a'){
        note = white_keys[0].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[0].style.backgroundColor = 'grey'
    }
    else if (event.key === 's'){
        note = white_keys[1].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[1].style.backgroundColor = 'grey'
    }
    else if (event.key === 'd'){
        note = white_keys[2].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[2].style.backgroundColor = 'grey'
    }
    else if (event.key === 'f'){
        note = white_keys[3].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[3].style.backgroundColor = 'grey'
    }
    else if (event.key === 'g'){
        note = white_keys[4].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[4].style.backgroundColor = 'grey'
    }
    else if (event.key === 'h'){
        note = white_keys[5].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[5].style.backgroundColor = 'grey'
    }
    else if (event.key === 'j'){
        note = white_keys[6].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        white_keys[6].style.backgroundColor = 'grey'
    }
    else if (event.key === 'w'){
        note = black_keys[0].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        black_keys[0].style.backgroundColor = '#202020'
    }
    else if (event.key === 'e'){
        note = black_keys[1].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        black_keys[1].style.backgroundColor = '#202020'
    }
    else if (event.key === 't'){
        note = black_keys[2].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        black_keys[2].style.backgroundColor = '#202020'
    }
    else if (event.key === 'y'){
        note = black_keys[3].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        black_keys[3].style.backgroundColor = '#202020'
    }
    else if (event.key === 'u'){
        note = black_keys[4].getAttribute('value');
        synth1.triggerAttackRelease(note, '8n', Tone.now());
        black_keys[4].style.backgroundColor = '#202020'
    }
});

// Reset the key styles after key press
window.addEventListener('keyup', function (event) {
    if (event.key === 'a'){
        white_keys[0].style.backgroundColor = 'white';
    }
    else if (event.key === 's'){
        white_keys[1].style.backgroundColor = 'white';
    }
    else if (event.key === 'd'){
        white_keys[2].style.backgroundColor = 'white';
    }
    else if (event.key === 'f'){
        white_keys[3].style.backgroundColor = 'white';
    }
    else if (event.key === 'g'){
        white_keys[4].style.backgroundColor = 'white';
    }
    else if (event.key === 'h'){
        white_keys[5].style.backgroundColor = 'white';
    }
    else if (event.key === 'j'){
        white_keys[6].style.backgroundColor = 'white';
    }
    else if (event.key === 'w'){
        black_keys[0].style.backgroundColor = 'black';
    }
    else if (event.key === 'e'){
        black_keys[1].style.backgroundColor = 'black';
    }
    else if (event.key === 't'){
        black_keys[2].style.backgroundColor = 'black';
    }
    else if (event.key === 'y'){
        black_keys[3].style.backgroundColor = 'black';
    }
    else if (event.key === 'u'){
        black_keys[4].style.backgroundColor = 'black';
    }
});

// Styles for mouse hover
white_keys[0].addEventListener('mouseenter', function () {
    white_keys[0].style.backgroundColor = 'grey';
});
white_keys[0].addEventListener('mouseleave', function () {
    white_keys[0].style.backgroundColor = 'white';
});
white_keys[1].addEventListener('mouseenter', function () {
    white_keys[1].style.backgroundColor = 'grey';
});
white_keys[1].addEventListener('mouseleave', function () {
    white_keys[1].style.backgroundColor = 'white';
});
white_keys[2].addEventListener('mouseenter', function () {
    white_keys[2].style.backgroundColor = 'grey';
});
white_keys[2].addEventListener('mouseleave', function () {
    white_keys[2].style.backgroundColor = 'white';
});
white_keys[3].addEventListener('mouseenter', function () {
    white_keys[3].style.backgroundColor = 'grey';
});
white_keys[3].addEventListener('mouseleave', function () {
    white_keys[3].style.backgroundColor = 'white';
});
white_keys[4].addEventListener('mouseenter', function () {
    white_keys[4].style.backgroundColor = 'grey';
});
white_keys[4].addEventListener('mouseleave', function () {
    white_keys[4].style.backgroundColor = 'white';
});
white_keys[5].addEventListener('mouseenter', function () {
    white_keys[5].style.backgroundColor = 'grey';
});
white_keys[5].addEventListener('mouseleave', function () {
    white_keys[5].style.backgroundColor = 'white';
});
white_keys[6].addEventListener('mouseenter', function () {
    white_keys[6].style.backgroundColor = 'grey';
});
white_keys[6].addEventListener('mouseleave', function () {
    white_keys[6].style.backgroundColor = 'white';
});

black_keys[0].addEventListener('mouseenter', function () {
    black_keys[0].style.backgroundColor = '#202020';
});
black_keys[0].addEventListener('mouseleave', function () {
    black_keys[0].style.backgroundColor = 'black';
});
black_keys[1].addEventListener('mouseenter', function () {
    black_keys[1].style.backgroundColor = '#202020';
});
black_keys[1].addEventListener('mouseleave', function () {
    black_keys[1].style.backgroundColor = 'black';
});
black_keys[2].addEventListener('mouseenter', function () {
    black_keys[2].style.backgroundColor = '#202020';
});
black_keys[2].addEventListener('mouseleave', function () {
    black_keys[2].style.backgroundColor = 'black';
});
black_keys[3].addEventListener('mouseenter', function () {
    black_keys[3].style.backgroundColor = '#202020';
});
black_keys[3].addEventListener('mouseleave', function () {
    black_keys[3].style.backgroundColor = 'black';
});
black_keys[4].addEventListener('mouseenter', function () {
    black_keys[4].style.backgroundColor = '#202020';
});
black_keys[4].addEventListener('mouseleave', function () {
    black_keys[4].style.backgroundColor = 'black';
});

// Listen for clicks and play corresponding notes
white_keys[0].addEventListener('click', function () {
    note = white_keys[0].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[1].addEventListener('click', function () {
    note = white_keys[1].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[2].addEventListener('click', function () {
    note = white_keys[2].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[3].addEventListener('click', function () {
    note = white_keys[3].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[4].addEventListener('click', function () {
    note = white_keys[4].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[5].addEventListener('click', function () {
    note = white_keys[5].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
white_keys[6].addEventListener('click', function () {
    note = white_keys[6].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});

black_keys[0].addEventListener('click', function () {
    note = black_keys[0].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
black_keys[1].addEventListener('click', function () {
    note = black_keys[1].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
black_keys[2].addEventListener('click', function () {
    note = black_keys[2].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
black_keys[3].addEventListener('click', function () {
    note = black_keys[3].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});
black_keys[4].addEventListener('click', function () {
    note = black_keys[4].getAttribute('value');
    synth1.triggerAttackRelease(note, '8n', Tone.now());
});

// Get pads
const drum_pads = document.querySelectorAll('.drum-pad');

// Set kit to user's selection
function changeKit() {
    let kit_type = document.getElementById('kit-type').value;
    if (kit_type === 'kit1')
    {
        console.log("Kit1 Selected")
        // Add an effect
        distortion = new Tone.Distortion(0.4).toDestination();
        reverb = new Tone.Reverb().toDestination();

        // Create kicks
        kit1_kick1 = new Tone.MembraneSynth().toDestination();
        kit1_kick2 = new Tone.MembraneSynth().connect(distortion);
        // Create hats
        kit1_hat1 = new Tone.MetalSynth().toDestination();
        kit1_hat2 = new Tone.MetalSynth().connect(distortion);
        // Create snares
        kit1_snare1 = new Tone.NoiseSynth().toDestination();
        kit1_snare2 = new Tone.NoiseSynth().connect(reverb);
        kit1_snare3 = new Tone.NoiseSynth().connect(distortion);
    }
};

// Listen for click events and play corresponding drums
drum_pads[6].addEventListener('click', function () {
    kit1_kick1.triggerAttackRelease('C1', '8n', Tone.now());
});
drum_pads[7].addEventListener('click', function () {
    kit1_kick1.triggerAttackRelease('C2', '8n', Tone.now());
});
drum_pads[8].addEventListener('click', function () {
    kit1_kick1.triggerAttackRelease('C1', '8n', Tone.now());
    kit1_kick2.triggerAttackRelease('C1', '8n', Tone.now());
});

drum_pads[3].addEventListener('click', function () {
    kit1_snare1.triggerAttackRelease('2n', Tone.now());
});
drum_pads[4].addEventListener('click', function () {
    kit1_snare1.triggerAttackRelease('2n', Tone.now());
    kit1_snare2.triggerAttackRelease('2n', Tone.now());
});
drum_pads[5].addEventListener('click', function () {
    kit1_snare1.triggerAttackRelease('8n', Tone.now());
    kit1_snare3.triggerAttackRelease('2n', Tone.now());
});

drum_pads[0].addEventListener('click', function () {
    kit1_hat1.triggerAttackRelease('C10', '8n', Tone.now());
});
drum_pads[1].addEventListener('click', function () {
    kit1_hat1.triggerAttackRelease('C9', '8n', Tone.now());
});
drum_pads[2].addEventListener('click', function () {
    kit1_hat1.triggerAttackRelease('C9', '8n', Tone.now());
    kit1_hat2.triggerAttackRelease('C10', '8n', Tone.now());
});

// Listen for key presses and play corresponding drums
window.addEventListener('keydown', function (event) {
    if (event.key === '3'){
        kit1_kick1.triggerAttackRelease('C1', '8n', Tone.now());
        kit1_kick2.triggerAttackRelease('C1', '8n', Tone.now());
        drum_pads[8].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '2'){
        kit1_kick1.triggerAttackRelease('C2', '8n', Tone.now());
        drum_pads[7].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '1'){
        kit1_kick1.triggerAttackRelease('C1', '8n', Tone.now());
        drum_pads[6].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '6'){
        kit1_snare1.triggerAttackRelease('8n', Tone.now());
        kit1_snare3.triggerAttackRelease('8n', Tone.now());
        drum_pads[5].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '5'){
        kit1_snare1.triggerAttackRelease('2n', Tone.now());
        kit1_snare2.triggerAttackRelease('2n', Tone.now());
        drum_pads[4].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '4'){
        kit1_snare1.triggerAttackRelease('2n', Tone.now());
        drum_pads[3].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '9'){
        kit1_hat1.triggerAttackRelease('C9', '8n', Tone.now());
        kit1_hat2.triggerAttackRelease('C10', '8n', Tone.now());
        drum_pads[2].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '8'){
        kit1_hat1.triggerAttackRelease('C9', '8n', Tone.now());
        drum_pads[1].style.backgroundColor = '#6FEFF7';
    }
    else if (event.key === '7'){
        kit1_hat1.triggerAttackRelease('C10', '8n', Tone.now());
        drum_pads[0].style.backgroundColor = '#6FEFF7';
    }
});

// Reset the pad styles after key press
window.addEventListener('keyup', function (event) {
    if (event.key === '3'){
        drum_pads[8].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '2'){
        drum_pads[7].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '1'){
        drum_pads[6].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '6'){
        drum_pads[5].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '5'){
        drum_pads[4].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '4'){
        drum_pads[3].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '9'){
        drum_pads[2].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '8'){
        drum_pads[1].style.backgroundColor = '#F7DC6F';
    }
    else if (event.key === '7'){
        drum_pads[0].style.backgroundColor = '#F7DC6F';
    }
});

// Set the hover and click styles for pads
drum_pads[0].addEventListener('mouseenter', function () {
    drum_pads[0].style.backgroundColor = '#FFFC6F';
});
drum_pads[0].addEventListener('click', function () {
    drum_pads[0].style.backgroundColor = '#6FEFF7';
});
drum_pads[0].addEventListener('mouseleave', function () {
    drum_pads[0].style.backgroundColor = '#F7DC6F';
});
drum_pads[1].addEventListener('mouseenter', function () {
    drum_pads[1].style.backgroundColor = '#FFFC6F';
});
drum_pads[1].addEventListener('click', function () {
    drum_pads[1].style.backgroundColor = '#6FEFF7';
});
drum_pads[1].addEventListener('mouseleave', function () {
    drum_pads[1].style.backgroundColor = '#F7DC6F';
});
drum_pads[2].addEventListener('mouseenter', function () {
    drum_pads[2].style.backgroundColor = '#FFFC6F';
});
drum_pads[2].addEventListener('click', function () {
    drum_pads[2].style.backgroundColor = '#6FEFF7';
});
drum_pads[2].addEventListener('mouseleave', function () {
    drum_pads[2].style.backgroundColor = '#F7DC6F';
});
drum_pads[3].addEventListener('mouseenter', function () {
    drum_pads[3].style.backgroundColor = '#FFFC6F';
});
drum_pads[3].addEventListener('click', function () {
    drum_pads[3].style.backgroundColor = '#6FEFF7';
});
drum_pads[3].addEventListener('mouseleave', function () {
    drum_pads[3].style.backgroundColor = '#F7DC6F';
});
drum_pads[4].addEventListener('mouseenter', function () {
    drum_pads[4].style.backgroundColor = '#FFFC6F';
});
drum_pads[4].addEventListener('click', function () {
    drum_pads[4].style.backgroundColor = '#6FEFF7';
});
drum_pads[4].addEventListener('mouseleave', function () {
    drum_pads[4].style.backgroundColor = '#F7DC6F';
});
drum_pads[5].addEventListener('mouseenter', function () {
    drum_pads[5].style.backgroundColor = '#FFFC6F';
});
drum_pads[5].addEventListener('click', function () {
    drum_pads[5].style.backgroundColor = '#6FEFF7';
});
drum_pads[5].addEventListener('mouseleave', function () {
    drum_pads[5].style.backgroundColor = '#F7DC6F';
});
drum_pads[6].addEventListener('mouseenter', function () {
    drum_pads[6].style.backgroundColor = '#FFFC6F';
});
drum_pads[6].addEventListener('click', function () {
    drum_pads[6].style.backgroundColor = '#6FEFF7';
});
drum_pads[6].addEventListener('mouseleave', function () {
    drum_pads[6].style.backgroundColor = '#F7DC6F';
});
drum_pads[7].addEventListener('mouseenter', function () {
    drum_pads[7].style.backgroundColor = '#FFFC6F';
});
drum_pads[7].addEventListener('click', function () {
    drum_pads[7].style.backgroundColor = '#6FEFF7';
});
drum_pads[7].addEventListener('mouseleave', function () {
    drum_pads[7].style.backgroundColor = '#F7DC6F';
});
drum_pads[8].addEventListener('mouseenter', function () {
    drum_pads[8].style.backgroundColor = '#FFFC6F';
});
drum_pads[8].addEventListener('click', function () {
    drum_pads[8].style.backgroundColor = '#6FEFF7';
});
drum_pads[8].addEventListener('mouseleave', function () {
    drum_pads[8].style.backgroundColor = '#F7DC6F';
});