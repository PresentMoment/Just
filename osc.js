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

const clicks = new ClickEvents();

const sources = new SourceSetUp();

function setup() {
  createCanvas(width, height);
  noStroke();
  frameRate(10);
  sources.setUpSounds();
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
  clicks.events();
}