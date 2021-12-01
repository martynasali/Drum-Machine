import * as Tone from 'tone'


export default function oscillator (song, bpm)
{
const phaser = new Tone.Phaser({
	frequency: 15,
	octaves: 5,
	baseFrequency: 1000
}).toDestination();

           const synth = new Tone.MembraneSynth({
  pitchDecay:0.05,
  octaves: 4,
  oscillator : {
    type :"fmsine",
    phase: 140,
    modulationType: "sine",
    modulationIndex:0.8,
    partials: [1] //1,0.1,0.01,0.01
  },
  envelope :{
    attack:0.01,
    decay :0.74,
    sustain: 0.71,
    release: 0.05,
    attackCurve :"exponential"
  }
}).toDestination();

const seq = new Tone.Sequence((time, note) => {
	synth.triggerAttackRelease(note, 0.3, time);
	// subdivisions are given as subarrays
}, song).start(0);
Tone.Transport.bpm.value = bpm;
Tone.Transport.start();


}