//declare sound sources
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

//declare note values
let notes = ["", "", "", "", "", "", "", "", "", "", "", ""];

//declare scales
let just = [130.8, 139, 142.7, 149.5, 152.6, 166.5, 171.7, 174.4, 179.9, 190.3, 196.2, 199.3];

let triTone = [1, (16/15), (9/8), (6/5), (5/4), (4/3), (7/5), (3/2), (8/5), (5/3), (9/5), (15/8)];

let twelveTone = [1, (16/15), (9/8), (7/6), (5/4), (4/3), (7/5), (3/2), (8/5), (12/7), (7/4), (15/8)];

let altTwelve = [1, (25/24), (10/9), (7/6), (5/4), (21/16), (7/5), (3/2), (8/5), (12/7), (7/4), (15/8)];

let differential = [1, (16/15), (67/60), (6/5), (19/15), (4/3),(7/5), (3/2), (8/5), (5/3), (53/30), (28/15)];

let justRef = [130.8, 139, 142.7, 149.5, 152.6, 166.5, 171.7, 174.4, 179.9, 190.3, 196.2, 199.3, 261.60];

let oscPhase = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];

//declare osc types
let oscTypes = ['sine', 'triangle', 'sawtooth', 'square'];

//declare osc display var
let displayOsc = ('');

//volume array
let oscVolume = [0.1];

//declare window dimensions
let width = 1330;
let height = 790;

//declare box dimensions
let leftGrid = (width / 133);
let rightGrid = (width / 1.2);

//declare classes
const note = new Notes();

const label = new Labels();

const settings = new OscSettings();

const clicks = new ClickEvents();

const sources = new SourceSetUp();


function setup() {
  var cnv = createCanvas(windowWidth - 2, windowHeight);
  cnv.style('display', 'block');
  noStroke();
  frameRate(10);
  sources.setUpSounds();
}


function draw() {
  background(23,63,80);
  // background(bg);

  settings.soundSettings();

  label.drawLabels();

  note.noteListener();

}

function windowResized() {
  resizeCanvas(windowWidth - 2, windowHeight);
}

function labelSize() {
  text.style("font-size", "40px");
}

function touchStarted() {
  getAudioContext().resume()
  return true;
}

function mouseClicked() {
  clicks.events();
}