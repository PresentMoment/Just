let osc1;
let osc2;
let osc3;
let osc4;
let osc5;
let osc6;
let osc7;
let osc8;
let osc9;
let osc10;
let osc11;
let osc12;
let filter;

let note1 = '';
let note2 = '';
let note3 = '';
let note4 = '';
let note5 = '';
let note6 = '';
let note7 = '';
let note8 = '';
let note9 = '';
let note10 = '';
let note11 = '';
let note12 = '';

let just = [130.8, 139, 142.7, 149.5, 152.6, 166.5, 171.7, 174.4, 179.9, 190.3, 196.2, 199.3];

let triTone = [1, (16/15), (9/8), (6/5), (5/4), (4/3), (7/5), (3/2), (8/5), (5/3), (9/5), (15/8)];

let twelveTone = [1, (16/15), (9/8), (7/6), (5/4), (4/3), (7/5), (3/2), (8/5), (12/7), (7/4), (15/8)];

let altTwelve = [1, (25/24), (10/9), (7/6), (5/4), (21/16), (7/5), (3/2), (8/5), (12/7), (7/4), (15/8)];

let differential = [1, (16/15), (67/60), (6/5), (19/15), (4/3),(7/5), (3/2), (8/5), (5/3), (53/30), (28/15)];

let justRef = [130.8, 139, 142.7, 149.5, 152.6, 166.5, 171.7, 174.4, 179.9, 190.3, 196.2, 199.3, 261.60];

let oscPhase = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.1, 0.11, 0.12];

let oscTypes = ['sine', 'triangle', 'sawtooth', 'square'];

let displayOsc = ('');

let width = 1330;
let height = 790;

const note = new Notes();

const label = new Labels();

const settings = new OscSettings();

function setup() {
  createCanvas(width, height);
  noStroke();
  frameRate(10);

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
  osc1.amp(.1);
  osc2.amp(.1);
  osc3.amp(.1);
  osc4.amp(.1);
  osc5.amp(.1);
  osc6.amp(.1);
  osc7.amp(.1);
  osc8.amp(.1);
  osc9.amp(.1);
  osc10.amp(.1);
  osc11.amp(.1);
  osc12.amp(.1);

  //set the text
  textSize(27);

}

function draw() {
  background(23,63,80);

  settings.soundSettings();

  label.drawLabels();

  note.noteListener();
}

function touchStarted() {
  getAudioContext().resume()
  return true;
}

function mouseClicked() {

  //osc buttons
  if ((mouseX >= 10 && mouseX <= 110) && 
  (mouseY >= 600 && mouseY <= 650) && osc1.started) {
  osc1.stop();} else if ((mouseX >= 10 && mouseX <= 110) && 
  (mouseY >= 600 && mouseY <= 650) && osc1.started == false) {
  osc1.start();}
  if ((mouseX >= 120 && mouseX <= 220) && 
  (mouseY >= 600 && mouseY <= 650) && osc2.started) { 
  osc2.stop();} else if ((mouseX >= 120 && mouseX <= 220) && 
  (mouseY >= 600 && mouseY <= 650) && osc2.started == false) { 
  osc2.start();}
  if ((mouseX >= 230 && mouseX <= 330) && 
  (mouseY >= 600 && mouseY <= 650) && osc3.started) { 
  osc3.stop();} else if ((mouseX >= 230 && mouseX <= 330) && 
  (mouseY >= 600 && mouseY <= 650) && osc3.started == false) { 
  osc3.start();}
  if ((mouseX >= 340 && mouseX <= 440) && 
  (mouseY >= 600 && mouseY <= 650) && osc4.started) { 
  osc4.stop();} else if ((mouseX >= 340 && mouseX <= 440) && 
  (mouseY >= 600 && mouseY <= 650) && osc4.started == false) { 
  osc4.start();}
  if ((mouseX >= 450 && mouseX <= 550) && 
  (mouseY >= 600 && mouseY <= 650) && osc5.started) { 
  osc5.stop();} else if ((mouseX >= 450 && mouseX <= 550) && 
  (mouseY >= 600 && mouseY <= 650) && osc5.started == false) { 
  osc5.start();}
  if ((mouseX >= 560 && mouseX <= 660) && 
  (mouseY >= 600 && mouseY <= 650) && osc6.started) { 
  osc6.stop();} else if ((mouseX >= 560 && mouseX <= 660) && 
  (mouseY >= 600 && mouseY <= 650) && osc6.started ==  false) { 
  osc6.start();}
  if ((mouseX >= 670 && mouseX <= 770) && 
  (mouseY >= 600 && mouseY <= 650) && osc7.started) { 
  osc7.stop();} else if ((mouseX >= 670 && mouseX <= 770) && 
  (mouseY >= 600 && mouseY <= 650) && osc7.started == false) { 
  osc7.start();}
  if ((mouseX >= 780 && mouseX <= 880) && 
  (mouseY >= 600 && mouseY <= 650) && osc8.started) { 
  osc8.stop();} else if ((mouseX >= 780 && mouseX <= 880) && 
  (mouseY >= 600 && mouseY <= 650) && osc8.started == false) { 
  osc8.start();}
  if ((mouseX >= 890 && mouseX <= 990) && 
  (mouseY >= 600 && mouseY <= 650) && osc9.started) { 
  osc9.stop();} else if ((mouseX >= 890 && mouseX <= 990) && 
  (mouseY >= 600 && mouseY <= 650) && osc9.started == false) { 
  osc9.start();}
  if ((mouseX >= 1000 && mouseX <= 1100) && 
  (mouseY >= 600 && mouseY <= 650) && osc10.started) { 
  osc10.stop();} else if ((mouseX >= 1000 && mouseX <= 1100) && 
  (mouseY >= 600 && mouseY <= 650) && osc10.started == false) { 
  osc10.start();}
  if ((mouseX >= 1110 && mouseX <= 1210) && 
  (mouseY >= 600 && mouseY <= 650) && osc11.started) { 
  osc11.stop();} else if ((mouseX >= 1110 && mouseX <= 1210) && 
  (mouseY >= 600 && mouseY <= 650) && osc11.started == false) { 
  osc11.start();}
  if ((mouseX >= 1220 && mouseX <= 1320) && 
  (mouseY >= 600 && mouseY <= 650) && osc12.started) { 
  osc12.stop();} else if ((mouseX >= 1220 && mouseX <= 1320) && 
  (mouseY >= 600 && mouseY <= 650) && osc12.started == false) { 
  osc12.start();}

  //octave up
  if ((mouseX >= 10 && mouseX <= 230) && 
  (mouseY >= 400 && mouseY <= 450)) {
    just = just.map(function(i){
      return i + i; } )
    }

  //octave down
  if ((mouseX >= 10 && mouseX <= 230) && 
  (mouseY >= 460 && mouseY <= 510)) {
    just = just.map(function(i){
      return i / 2 ; } )
    }

  //clear notes
  if ((mouseX >= (width - 220) && mouseX <= (width - 10) &&
  (mouseY >= 400 && mouseY <= 450))) {
    osc1.stop(), osc2.stop(), osc3.stop(), osc4.stop(), osc5.stop(), osc6.stop(),
    osc7.stop(), osc8.stop(), osc9.stop(), osc10.stop(), osc11.stop(), osc12.stop();
  }

  //all notes on
  if ((mouseX >= (width - 220) && mouseX <= (width - 10) &&
  (mouseY >= 460 && mouseY <= 510))) {
    osc1.start(), osc2.start(), osc3.start(), osc4.start(), osc5.start(), osc6.start(),
    osc7.start(), osc8.start(), osc9.start(), osc10.start(), osc11.start(), osc12.start();
  }

  //change oscs
  if ((mouseX >= 10 && mouseX <= 220) &&
  (mouseY >= 280 && mouseY <= 330)) {
    oscTypes.push(oscTypes.shift());
  }

  //change intonation
  if ((mouseX >= 10 && mouseX <= 310) &&
  (mouseY >= 10 && mouseY <= 60)) {
    just = just.map((e,i)=>e*triTone[i]);
  }
  if ((mouseX >= 320 && mouseX <= 620) &&
  (mouseY >= 10 && mouseY <= 60)) {
    just = just.map((e,i)=>e*twelveTone[i]);
  }
  if ((mouseX >= 630 && mouseX <= 930) &&
  (mouseY >= 10 && mouseY <= 60)) {
    just = just.map((e,i)=>e*altTwelve[i]);
  }
  if ((mouseX >= 940 && mouseX <= 1240) &&
  (mouseY >= 10 && mouseY <= 60)) {
    just = just.map((e,i)=>e*differential[i]);
  }
  if ((mouseX >= 1250 && mouseX <= 1320) &&
  (mouseY >= 10 && mouseY <= 60)) {
    just = just.map((e,i)=>justRef[i]);
  }

}

  // //phase up
  // if ((mouseX >= 10 && mouseX <= 220) &&
  // (mouseY >= 100 && mouseY <= 150)) {
  //   oscPhase = oscPhase.map(function(i){
  //     return i + .1;
  //   })
  // }

  // //phase down
  // if ((mouseX >= 10 && mouseX <= 220) &&
  // (mouseY >= 160 && mouseY <= 210)) {
  //   oscPhase = oscPhase.map(function(i){
  //     return i - .1;
  //   })
  // }

  // //draw the phase shift buttons
  // textSize(23);
  // fill(14,43,53)
  // rect(10, 100, 210, 50);
  // fill(255);
  // text('Shift Phase Up', 25, 112, 210, 50);
  // textSize(23);
  // fill(14,43,53)
  // rect(10, 160, 210, 50);
  // fill(255);
  // text('Shift Phase Down', 25, 170, 210, 50);
  // textSize(27);