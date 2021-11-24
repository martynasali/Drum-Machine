var context = new AudioContext();

function playKick(when) {
    var oscillator = context.createOscillator();
    var gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.frequency.setValueAtTime(150, when);
    gain.gain.setValueAtTime(1, when);
    oscillator.frequency.exponentialRampToValueAtTime(0.001, when + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, when + 0.5);

    oscillator.start(when);
    oscillator.stop(when + 0.5);
}

for (var i = 0; i < 16; i++) {
    playKick(i * 0.5); // Sounds fine with multiplier set to 1
}

// https://jsfiddle.net/mo8hjb34/2/