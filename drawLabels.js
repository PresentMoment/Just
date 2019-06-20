class Labels {
  constructor(){}

 drawLabels() {
  //draw the intonation buttons
  fill(14,43,53);
  rect(10, 10, 300, 50);
  fill(255);
  text('7 Limit Tritone', 70, 20, 300, 50);
  fill(14,43,53);
  rect(320, 10, 300, 50);
  fill(255);
  text('7 Limit 12-Tone', 390, 20, 300, 50);
  fill(14,43,53);
  rect(630, 10, 300, 50);
  fill(255);
  text('Alternate 12-Tone', 680, 20, 300, 50);
  fill(14,43,53);
  rect(940, 10, 300, 50);
  fill(255);
  text('12-Tone Subharmonic', 960, 20, 300, 50);

  //draw the intonation reset button
  fill(14,43,53);
  rect(1250, 10, 70, 50);
  fill(255);
  textSize(22);
  textStyle(ITALIC);
  text('reset', 1258, 23, 70, 50);
  textSize(27);
  textStyle(NORMAL);

  //draw the osc buttons
  fill(14,43,53);
  rect(10, 600, 100, 50);
  fill(255);
  text('Osc 1', 20, 610, 100, 50);
  fill(14,43,53);
  rect(120, 600, 100, 50);
  fill(255);
  text('Osc 2', 130, 610, 100, 50);
  fill(14,43,53);
  rect(230, 600, 100, 50);
  fill(255);
  text('Osc 3', 240, 610, 100, 50);
  fill(14,43,53);
  rect(340, 600, 100, 50);
  fill(255);
  text('Osc 4', 350, 610, 100, 50);
  fill(14,43,53);
  rect(450, 600, 100, 50);
  fill(255);
  text('Osc 5', 460, 610, 100, 50);
  fill(14,43,53);
  rect(560, 600, 100, 50);
  fill(255);
  text('Osc 6', 570, 610, 100, 50);
  fill(14,43,53);
  rect(670, 600, 100, 50);
  fill(255);
  text('Osc 7', 680, 610, 100, 50);
  fill(14,43,53);
  rect(780, 600, 100, 50);
  fill(255);
  text('Osc 8', 790, 610, 100, 50);
  fill(14,43,53);
  rect(890, 600, 100, 50);
  fill(255);
  text('Osc 9', 900, 610, 100, 50);
  fill(14,43,53);
  rect(1000, 600, 100, 50);
  fill(255);
  text('Osc 10', 1010, 610, 100, 50);
  fill(14,43,53);
  rect(1110, 600, 100, 50);
  fill(255);
  text('Osc 11', 1120, 610, 100, 50);
  fill(14,43,53);
  rect(1220, 600, 100, 50);
  fill(255);
  text('Osc 12', 1230, 610, 100, 50);


   //draw the note labels
   if (osc1.started == true){
     fill(14,43,53)
   } else {fill(19,55,69)}
   rect(10, 720, 100, 50);
   fill(255);
   text(note1, 20, 730, 100, 50);
   if (osc2.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(120, 720, 100, 50);
   fill(255);
   text(note2, 130, 730, 100, 50);
   if (osc3.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(230, 720, 100, 50);
   fill(255);
   text(note3, 240, 730, 100, 50);
   if (osc4.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(340, 720, 100, 50);
   fill(255);
   text(note4, 350, 730, 100, 50);
   if (osc5.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(450, 720, 100, 50);
   fill(255);
   text(note5, 460, 730, 100, 50);
   if (osc6.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(560, 720, 100, 50);
   fill(255);
   text(note6, 570, 730, 100, 50);
   if (osc7.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(670, 720, 100, 50);
   fill(255);
   text(note7, 680, 730, 100, 50);
   if (osc8.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(780, 720, 100, 50);
   fill(255);
   text(note8, 790, 730, 100, 50);
   if (osc9.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(890, 720, 100, 50);
   fill(255);
   text(note9, 900, 730, 100, 50);
   if (osc10.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(1000, 720, 100, 50);
   fill(255);
   text(note10, 1010, 730, 100, 50);
   if (osc11.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(1110, 720, 100, 50);
   fill(255);
   text(note11, 1120, 730, 100, 50);
   if (osc12.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect(1220, 720, 100, 50);
   fill(255);
   text(note12, 1230, 730, 100, 50);

  //draw the octave up button
  fill(14,43,53);
  rect(10, 400, 210, 50);
  fill(255);
  text('Octave Up', 30, 412, 210, 50);
  //draw the octave down button 
  fill(14,43,53);
  rect(10, 460, 210, 50);
  fill(255);
  text('Octave Down', 30, 472, 210, 50);

  //draw the change osc button
  textSize(23);
  fill(12,43,53);
  rect(10, 280, 210, 50);
  fill(255);
  text('Change Oscillators', 17, 293, 210, 50);
  textSize(27);

  //draw the osc display button
  fill(12,33,53);
  rect(230, 285, 125, 40);
  fill(255);
  textStyle(ITALIC);
  textSize(22);
  text(displayOsc, 245, 293, 210, 50);
  if (oscTypes[0] == 'sine') {
    displayOsc = 'Sine';
  } else if (oscTypes[0] == 'triangle') {
    displayOsc = 'Triangle';
  } else if (oscTypes[0] == 'sawtooth') {
    displayOsc = 'Sawtooth';
  } else if (oscTypes[0] == 'square') {displayOsc = 'Square';
}
  textStyle(NORMAL);
  textSize(27);

  //draw the all oscs and clear oscs buttons
  fill(14,43,53);
  rect((width - 220), 400, 210, 50);
  fill(255);
  text('Clear Notes', (width - 180), 412, 210, 50);
  fill(14,43,53);
  rect((width - 220), 460, 210, 50);
  fill(255);
  text('All Notes On', (width - 185), 472, 210, 50);

  }
}