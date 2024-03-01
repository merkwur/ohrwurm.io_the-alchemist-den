export const description = {
  Destination: "A single master output which is connected to the AudioDestinationNode (aka your speakers). It provides useful conveniences such as the ability to set the volume and mute the entire application. It also gives you the ability to apply master effects to your application.",
  Gain: "A thin wrapper around the Native Web Audio GainNode. The GainNode is a basic building block of the Web Audio API and is useful for routing audio and adjusting gains.",
  Transport: "Transport for timing musical events. It is not native transport object of Tone.js. Although, it has some similar functions and a little bit more. The each beat can be positionally and length-wise adjustable. 's' stands for stride, which responsible to move beat position by 'tick % s'. 'p' stands for probability, which is designates the probability of playing this beat in a sequence. 'd' stands for duration, which is responsible of how long each note will sustains (it has a same effect with envelope sustain, but can be adjustable for each individual beat.). 'l' is stands for length, which is a length of a sequence. 'sl' stands for stride length, which designates strides end position on the sequence. Also each beat trigger amount can be adjustable with mouse wheel. ",
  AMOscillator: `An amplitude modulated oscillator node. It is implemented with two oscillators, one which modulators the other's amplitude through a gain node.`,
  FMOscillator: `FMOscillator implements a frequency modulation synthesis.`,
  FatOscillator: `FatOscillator is an array of oscillators with detune spread between the oscillators.`,
  LFO: `LFO stands for low frequency oscillator. LFO produces an output signal which can be attached to an AudioParam or Tone.Signal in order to modulate that parameter with an oscillator. The LFO can also be synced to the transport to start/stop and change when the tempo changes.`,
  Noise: `Noise is a noise generator. It uses looped noise buffers to save on performance. Noise supports the noise types: "pink", "white", and "brown".`,
  Oscillator: "Base source, supports all wave types", 
  PWMOscillator: 'PWMOscillator modulates the width of a Tone.PulseOscillator at the modulationFrequency. This has the effect of continuously changing the timbre of the oscillator by altering the harmonics generate',
  PulseOscillator: 'PulseOscillator is an oscillator with control over pulse width, also known as the duty cycle. At 50% duty cycle (width = 0) the wave is a square wave.',
  AMSynth: 'AMSynth uses the output of one Tone.Synth to modulate the amplitude of another Tone.Synth. The harmonicity (the ratio between the two signals) affects the timbre of the output signal greatly.', 
  FMSynth: 'FMSynth is composed of two Tone.Synths where one Tone.Synth modulates the frequency of a second Tone.Synth. A lot of spectral content can be explored using the modulationIndex parameter.', 
  MembraneSynth: 'MembraneSynth makes kick and tom sounds using a single oscillator with an amplitude envelope and frequency ramp. A Tone.OmniOscillator is routed through a Tone.AmplitudeEnvelope to the output. The drum quality of the sound comes from the frequency envelope applied during MembraneSynth.triggerAttack(note). The frequency envelope starts at note * .octaves and ramps to note over the duration of .pitchDecay', 
  MetalSynth: 'A highly inharmonic and spectrally complex source with a highpass filter and amplitude envelope which is good for making metallophone sounds.',
  MonoSynth: 'MonoSynth is composed of one oscillator, one filter, and two envelopes. The amplitude of the Oscillator and the cutoff frequency of the Filter are controlled by Envelopes',
  NoiseSynth: 'Tone.NoiseSynth is composed of Noise through an AmplitudeEnvelope.',
  PluckSynth: "Karplus-Strong string synthesis", 
  Synth: 'Synth is composed simply of a OmniOscillator routed through an AmplitudeEnvelope.',
  AutoFilter: 'AutoFilter is a Tone.Filter with a Tone.LFO connected to the filter cutoff frequency. Setting the LFO rate and depth allows for control over the filter modulation rate and depth.', 
  AutoPanner: "AutoPanner is a Panner with an LFO connected to the pan amount.", 
  AutoWah: "AutoWah connects a Follower to a Filter. The frequency of the filter, follows the input amplitude curve. ",
  BitCrusher: "BitCrusher down-samples the incoming signal to a different bit depth. Lowering the bit depth of the signal creates distortion.",
  Chebyshev: "Chebyshev is a waveshaper which is good for making different types of distortion sounds. Note that odd orders sound very different from even ones, and order = 1 is no change.",
  Chorus: "Chorus is a stereo chorus effect composed of a left and right delay with an LFO applied to the delayTime of each channel. When feedback is set to a value larger than 0, you also get Flanger-type effects.", 
  Distortion: 'A simple distortion effect using Tone.WaveShaper.',
  FeedbackDelay: "FeedbackDelay is a DelayNode in which part of output signal is fed back into the delay.", 
  Freeverb: "Freeverb is a reverb based on Freeverb. Read more on reverb on Sound On Sound. Freeverb is now implemented with an AudioWorkletNode which may result on performance degradation on some platforms. Consider using Reverb.", 
  FrequencyShifter: "FrequencyShifter can be used to shift all frequencies of a signal by a fixed amount. The amount can be changed at audio rate and the effect is applied in real time. The frequency shifting is implemented with a technique called single side band modulation using a ring modulator. Note: Contrary to pitch shifting, all frequencies are shifted by the same amount, destroying the harmonic relationship between them. This leads to the classic ring modulator timbre distortion. The algorithm will produces some aliasing towards the high end, especially if your source material contains a lot of high frequencies. Unfortunatelly the webaudio API does not support resampling buffers in real time, so it is not possible to fix it properly. Depending on the use case it might be an option to low pass filter your input before frequency shifting it to get ride of the aliasing.", 
  Phaser: "Phaser is a phaser effect. Phasers work by changing the phase of different frequency components of an incoming signal.", 
  PingPongDelay: "PingPongDelay is a feedback delay effect where the echo is heard first in one channel and next in the opposite channel. In a stereo system these are the right and left channels. PingPongDelay in more simplified terms is two Tone.FeedbackDelays with independent delay values. Each delay is routed to one channel (left or right), and the channel triggered second will always trigger at the same interval after the first.",
  PitchShift: "PitchShift does near-realtime pitch shifting to the incoming signal. The effect is achieved by speeding up or slowing down the delayTime of a DelayNode using a sawtooth wave",
  Reverb: "Simple convolution created with decaying noise. Generates an Impulse Response Buffer with Tone.Offline then feeds the IR into ConvolverNode. The impulse response generation is async, so you have to wait until ready resolves before it will make a sound.",
  Tremolo: 'Tremolo modulates the amplitude of an incoming signal using an LFO. The effect is a stereo effect where the modulation phase is inverted in each channel.',
  Vibrato: 'A Vibrato effect composed of a Tone.Delay and a Tone.LFO. The LFO modulates the delayTime of the delay, causing the pitch to rise and fall.',
  AmplitudeEnvelope: "AmplitudeEnvelope is a Tone.Envelope connected to a gain node. Unlike Tone.Envelope, which outputs the envelope's value, AmplitudeEnvelope accepts an audio signal as the input and will apply the envelope to the amplitude of the signal.", 
  Analyser: "Wrapper around the native Web Audio's AnalyserNode. Extracts FFT or Waveform data from the incoming signal. Supports Lissajous curves too",
  BiquadFilter: "Thin wrapper around the native Web Audio BiquadFilterNode. BiquadFilter is similar to Filter but doesn't have the option to set the -rolloff- value.",
  Channel: "Channel provides a channel strip interface with volume, pan, solo and mute controls.",
  Compressor: "Compressor is a thin wrapper around the Web Audio DynamicsCompressorNode. Compression reduces the volume of loud sounds or amplifies quiet sounds by narrowing or -compressing- an audio signal's dynamic range.",
  CrossFade: "Tone.Crossfade provides equal power fading between two inputs. The values can be controlled by LFO's.", 
  EQ3: "EQ3 provides 3 equalizer bins: Low/Mid/High.",
  Envelope: "Envelope is an ADSR envelope generator. Envelope outputs a signal which can be connected to an AudioParam or Tone.Signal",
  FeedbackCombFilter: "Comb filters are basic building blocks for physical modeling.", 
  FrequencyEnvelope: "FrequencyEnvelope is an Envelope which ramps between baseFrequency and octaves.", 
  Limiter: "Limiter will limit the loudness of an incoming signal. Under the hood it's composed of a Compressor with a fast attack and release and max compression ratio.", 
  PanVol: "PanVol is a Tone.Panner and Tone.Volume in one.", 
  Panner: "Panner is an equal power Left/Right Panner. It is a wrapper around the StereoPannerNode.", 
  Recorder: "A wrapper around the MediaRecorder API. Unlike the rest of Tone.js, this module does not offer any sample-accurate scheduling because it is not a feature of the MediaRecorder API. This is only natively supported in Chrome and Firefox.",
  Abs: 'Return the absolute value of an incoming signal.', 
  Add: 'Add a signal and a number or two signals. When no value is passed into the constructor, Tone.Add will sum input and addend If a value is passed into the constructor, the it will be added to the input.', 
  AudioToGain: "AudioToGain converts an input in AudioRange [-1,1] to NormalRange [0,1].", 
  GainToAudio: 'GainToAudio converts an input in NormalRange [0,1] to AudioRange [-1,1].', 
  GreaterThan: 'Output 1 if the signal is greater than the value, otherwise outputs 0. can compare two signals or a signal and a number.', 
  GreaterThanZero: "GreaterThanZero outputs 1 when the input is strictly greater than zero",
  Multiply: "Multiply two incoming signals. Or, if a number is given in the constructor, multiplies the incoming signal by that value.", 
  Negate: "Negate the incoming signal. i.e. an input signal of 10 will output -10", 
  Pow: "Pow applies an exponent to the incoming signal. The incoming signal must be AudioRange [-1, 1]", 
  Scale: 'Performs a linear scaling on an input signal. Scales a NormalRange input to between outputMin and outputMax.', 
  ScaleExp: 'Performs an exponential scaling on an input signal. Scales a NormalRange value [0,1] exponentially to the output range of outputMin to outputMax.', 
  Subtract: 'Subtract the signal connected to the input is subtracted from the signal connected The subtrahend.', 
  WaveShaper: "Wraps the native Web Audio API WaveShaperNode. Comes with predefined ten nonlinearity functions.", 
  

}


export const link = {
  link: "https://tonejs.github.io/docs/14.7.77/"  
}