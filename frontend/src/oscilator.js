import * as Tone from 'tone'

let switc = true
let synths 
let seq
export function oscillator (synth, song, bpm)
{
    if (switc === true)
    {
        synths = new Tone.MembraneSynth(synth).toDestination();
        seq = new Tone.Sequence((time, note) => {
            synths.triggerAttackRelease(note, 0.3, time);
            // subdivisions are given as subarrays
        }, song).start(0);
    }
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.start();
    if (switc === false)
    {
    synths = false
    seq = false
    switc = true
    }
    
    
}

export function stop ()
{
    
 
    Tone.Transport.stop();
    Tone.Transport.clear();
    
}
