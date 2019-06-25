class SourceSetUp {
  constructor(){}

  setUpSounds(){

  osc1 = new p5.Oscillator(oscTypes[0]);
  osc2 = new p5.Oscillator(oscTypes[0]);
  osc3 = new p5.Oscillator(oscTypes[0]);
  osc4 = new p5.Oscillator(oscTypes[0]);
  osc5 = new p5.Oscillator(oscTypes[0]);
  osc6 = new p5.Oscillator(oscTypes[0]);
  osc7 = new p5.Oscillator(oscTypes[0]);
  osc8 = new p5.Oscillator(oscTypes[0]);
  osc9 = new p5.Oscillator(oscTypes[0]);
  osc10 = new p5.Oscillator(oscTypes[0]);
  osc11 = new p5.Oscillator(oscTypes[0]);
  osc12 = new p5.Oscillator(oscTypes[0]);


  filter = new p5.Filter();

  //disconnect the oscs
  osc1.disconnect();
  osc2.disconnect();
  osc3.disconnect();
  osc4.disconnect();
  osc5.disconnect();
  osc6.disconnect();
  osc7.disconnect();
  osc8.disconnect();
  osc9.disconnect();
  osc10.disconnect();
  osc11.disconnect();
  osc12.disconnect();


  //process oscs into filter
  filter.process(osc1);
  filter.process(osc2);
  filter.process(osc3);
  filter.process(osc4);
  filter.process(osc5);
  filter.process(osc6);
  filter.process(osc7);
  filter.process(osc8);
  filter.process(osc9);
  filter.process(osc10);
  filter.process(osc11);
  filter.process(osc12);



  //connect oscs to filter
  osc1.connect(filter);
  osc2.connect(filter);
  osc3.connect(filter);
  osc4.connect(filter);
  osc5.connect(filter);
  osc6.connect(filter);
  osc7.connect(filter);
  osc8.connect(filter);
  osc9.connect(filter);
  osc10.connect(filter);
  osc11.connect(filter);
  osc12.connect(filter);


  //start the oscs
  osc1.start(.3);
  osc2.start(.3);
  osc3.start(.3);
  osc4.start(.3);
  osc5.start(.3);
  osc6.start(.3);
  osc7.start(.3);
  osc8.start(.3);
  osc9.start(.3);
  osc10.start(.3);
  osc11.start(.3);
  osc12.start(.3);

  //set the amps for the oscs
  osc1.amp(0.1);
  osc2.amp(0.1);
  osc3.amp(0.1);
  osc4.amp(0.1);
  osc5.amp(0.1);
  osc6.amp(0.1);
  osc7.amp(0.1);
  osc8.amp(0.1);
  osc9.amp(0.1);
  osc10.amp(0.1);
  osc11.amp(0.1);
  osc12.amp(0.1);
  }
}