import * as Tone from 'tone'

let switc = true






export function oscillator (synth, song, bpm)
{
    
   let  synths = new Tone.MembraneSynth(synth).toDestination();
    
    let seq = new Tone.Sequence((time, note) => {
        synths.triggerAttackRelease(note, 0.3, time);
        // subdivisions are given as subarrays
    }, song).start(0);
    console.log(synths);
    Tone.Transport.bpm.value = bpm;
    
    function labas() {
        
        console.log("labas");
    }
    
}

export function create () {
    
}

export function stop ()
{ Tone.Transport.start();
    
    // Tone.Transport.stop();
    // seq.sequence.stop();
    // Tone.Transport.clear();
    // Tone.context.close()
    // Tone.Transport.stop();
    // Tone.Transport.clear();
    
}
