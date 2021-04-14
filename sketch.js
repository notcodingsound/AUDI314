
var synth;

function setup() {
  noCanvas();
  synth = new p5.PolySynth();
  var midiNoteNumber = 70;
  var freq = midiToFreq(midiNoteNumber); // Convert MIDI note to frequency
  // Play note number 70 with velocity 1, starting now, for a duration of 1s
  synth.play(freq, 1.0, 0, 1);
}
