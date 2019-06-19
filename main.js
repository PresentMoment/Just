var lfo, osc, lpf, lfo2;

function setup() { 
  createCanvas(400, 400);

    lfo = new p5.Oscillator();
    lfo2 = new p5.Oscillator();
    osc = new p5.Noise('white');
    lpf = new p5.Filter();

    // chain
    lfo2.disconnect();
    lfo.disconnect();
    osc.disconnect();
    osc.connect(lpf);

    lfo.start();
    lfo2.start();
    osc.start();
    osc.amp(1);

    lfo.freq(80);
    lfo2.freq(23);
    osc.freq();
    lpf.freq(100);

    lpf.res(104);
    // how many Hz should the LFO oscillate
    lfo.amp(100);
    lfo2.amp(60);


    // connect the lfo
    lpf.freq(lfo);
    lpf.freq(lfo2);
} 