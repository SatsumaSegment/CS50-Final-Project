// Create an audio node
let audio = new Audio();
audio.src = "";

// Get user file upload
function getFile(filename) {
    file = filename.files[0];
    url = window.URL.createObjectURL(file);
    audio.src = url;
};

const container = document.getElementById("container");
const canvas = document.getElementById("visual");

// Set canvas mode to 2d
const c = canvas.getContext("2d");

// When user clicks container, play file
container.addEventListener('click', function () {
    // Create an audio context to get raw data from audio
    const audio_context = new window.AudioContext();
    audio.play();
    let audio_source = audio_context.createMediaElementSource(audio);
    let analyser = audio_context.createAnalyser();
    // Connect an analyser node to the audio source
    audio_source.connect(analyser);
    analyser.connect(audio_context.destination);

    // Set the FFT (Fast Fourier Transform) size of the analyser
    analyser.fftSize = 256;
    // Get the frequency bin count (half of FFT size) to determine the buffer length
    const buffer_length = analyser.frequencyBinCount;

    // Create a new uint8 array the size of 'buffer_length'
    const data = new Uint8Array(buffer_length);
    // Variable for bar width; half the canvas size divided by 'buffer_length'
    const bar_width = canvas.width / buffer_length / 2;

    // RGB variables
    let red;
    let green;
    let blue;
    let bar; // Use 'bar' to draw bars across the canvas

    // Draw the visualizer to the canvas
    function drawVisual() {
        bar = 0; // Reset 'bar'
        c.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        analyser.getByteFrequencyData(data); // Get frequency data of current audio byte

        let rotate = document.getElementById('rotate').checked
        if (rotate)
        {
            // Loop the bars
            for (let i = 0; i < buffer_length; i++)
            {
                // Get RGB and effect values from sliders
                let red_val = document.getElementById('red').value;
                let green_val = document.getElementById('green').value;
                let blue_val = document.getElementById('blue').value;

                let effect = document.getElementById('effect').value;

                let red_effect = document.getElementById('red-effect').checked;
                let green_effect = document.getElementById('green-effect').checked;
                let blue_effect = document.getElementById('blue-effect').checked;

                bar_height = data[i] / 3.2; // Set the bar height to 'data' array's ith value

                // rotate bars from center of canvas
                c.save();
                c.translate(canvas.width / 2, canvas.height / 2);

                c.rotate(i * 6 * Math.PI / 180);

                // Add effect
                if (effect > 0)
                {
                    effect = bar_height / 2 - (effect * 2) + i;
                    console.log(bar_height);
                }

                // Set RGB values to the canvas fillStyle with effect (if applied)
                red = red_val;
                if (bar_height / 2 > 15 && bar_height / 2 < 20 && red_effect)
                {
                    red = red_val - effect;
                }
                else
                {
                    red = red_val;
                }
                green = green_val;
                if (bar_height / 2 > 20 && green_effect)
                {
                    green = green_val - effect;
                }
                else
                {
                    green = green_val;
                }
                blue = blue_val;
                if (bar_height / 2 < 15 || bar_height / 2 > 25 && blue_effect)
                {
                    blue = blue_val - effect;
                }
                else
                {
                    blue = blue_val;
                }
                c.fillStyle = `rgb(${red}, ${green}, ${blue})`;

                // Draw rectangles on the canvas
                c.fillRect(0, 0, bar_width, bar_height);
                c.fillRect(0, 0, -bar_width, -bar_height);
                bar += bar_width; // Increment 'bar' to draw along the canvas

                c.restore();
            }
        }
        else
        {
            // Loop the bars
            for (let i = 0; i < buffer_length; i++)
            {
                // Get RGB and "spread" values from sliders
                let red_val = document.getElementById('red').value;
                let green_val = document.getElementById('green').value;
                let blue_val = document.getElementById('blue').value;

                let effect = document.getElementById('effect').value;

                let red_effect = document.getElementById('red-effect').checked;
                let green_effect = document.getElementById('green-effect').checked;
                let blue_effect = document.getElementById('blue-effect').checked;

                bar_height = data[i] / 2; // Set the bar height to 'data' array's ith value

                if (effect > 0)
                {
                    effect = bar_height / 2 - (effect * 2) + i;
                    console.log(bar_height);
                }

                // Set RGB values to the canvas fillStyle
                red = red_val;
                if (bar_height / 2 > 15 && bar_height / 2 < 20 && red_effect)
                {
                    red = red_val - effect;
                }
                else
                {
                    red = red_val;
                }
                green = green_val;
                if (bar_height / 2 > 20 && green_effect)
                {
                    green = green_val - effect;
                }
                else
                {
                    green = green_val;
                }
                blue = blue_val;
                if (bar_height / 2 < 15 || bar_height / 2 > 25 && blue_effect)
                {
                    blue = blue_val - effect;
                }
                else
                {
                    blue = blue_val;
                }
                c.fillStyle = `rgb(${red}, ${green}, ${blue})`;

                // Draw rectangles on the canvas
                c.fillRect(canvas.width / 2 - bar_width - bar, canvas.height - bar_height, bar_width, bar_height);
                c.fillRect(canvas.width / 2 + bar, canvas.height - bar_height, bar_width, bar_height);
                bar += bar_width; // Increment 'bar' to draw along the canvas
            }
        }
        requestAnimationFrame(drawVisual);
    };

    drawVisual();
});