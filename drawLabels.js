class Labels {
  constructor(){}

 drawLabels() {
  //draw the intonation buttons
  fill(14,43,53);
  stroke(205);
  strokeWeight(.6);
  rect((width / 166), (height / 77), (width / 4.4), (height / 16));
  rect((width / 4.2), (height / 77), (width / 4.4), (height / 16));
  rect((width / 2.126), (height / 77), (width / 4.4), (height / 16));
  rect((width / 1.421), (height / 77), (width / 4.4), (height / 16));
  fill(255);
  text('7 Limit Tritone', (width / 16), (height / 36), (width / 4.4), (height / 16));
  text('7 Limit 12-Tone', (width / 3.3), (height / 36), (width / 4.4), (height / 16));
  text('Alternate 12-Tone', (width / 1.9), (height / 36), (width / 4.4), (height / 16));
  text('12-Tone Subharmonic', (width / 1.34), (height / 36), (width / 4.4), (height / 16));

  //draw the intonation reset button
  fill(14,43,53);
  rect((width / 1.065), (height / 76), (width / 18), (height / 16));
  fill(255);
  textSize(22);
  textStyle(ITALIC);
  text('reset', (width / 1.055), (height / 36), (width / 18), (height / 26));
  textSize(27);
  textStyle(NORMAL);

  //draw the osc buttons
  fill(14,43,53);
  rect((width / 166), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 11.12), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 5.8), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 3.9), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 2.94), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 2.37), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.982), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.702), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.493), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.329), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.199), (height /1.318), (width / 12.98), (height / 16));
  rect((width / 1.09), (height /1.318), (width / 12.98), (height / 16));
  //draw the osc labels
  fill(255);
  text('Osc 1', (width / 60), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 2', (width / 10), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 3', (width / 5.5), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 4', (width / 3.71), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 5', (width / 2.83), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 6', (width / 2.31), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 7', (width / 1.94), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 8', (width / 1.67), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 9', (width / 1.47), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 10', (width / 1.32), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 11', (width / 1.19), (height /1.295), (width / 12.98), (height / 16));
  text('Osc 12', (width / 1.085), (height /1.295), (width / 12.98), (height / 16));


   //draw the note labels
   if (osc1.started == true){
     fill(14,43,53)
   } else {fill(19,55,69)}
   rect((width / 166), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note1, (width / 99), (height /1.082), (width / 12.98), (height / 16));
   if (osc2.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 11.12), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note2, (width / 11), (height /1.082), (width / 12.98), (height / 16));
   if (osc3.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 5.8), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note3, (width / 5.7), (height /1.082), (width / 12.98), (height / 16));
   if (osc4.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 3.9), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note4, (width / 3.84), (height /1.082), (width / 12.98), (height / 16));
   if (osc5.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 2.94), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note5, (width / 2.9), (height /1.082), (width / 12.98), (height / 16));
   if (osc6.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 2.37), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note6, (width / 2.35), (height /1.082), (width / 12.98), (height / 16));
   if (osc7.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.982), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note7, (width / 1.97), (height /1.082), (width / 12.98), (height / 16));
   if (osc8.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.702), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note8, (width / 1.69), (height /1.082), (width / 12.98), (height / 16));
   if (osc9.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.493), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note9, (width / 1.48), (height /1.082), (width / 12.98), (height / 16));
   if (osc10.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.329), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note10, (width / 1.32), (height /1.082), (width / 12.98), (height / 16));
   if (osc11.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.199), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note11, (width / 1.19), (height /1.082), (width / 12.98), (height / 16));
   if (osc12.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((width / 1.09), (height /1.098), (width / 12.98), (height / 16));
   fill(255);
   text(note12, (width / 1.086), (height /1.082), (width / 12.98), (height / 16));


  //draw the octave switch buttons
  fill(14,43,53);
  rect((leftGrid), (height / 1.97), (width / 6.3), (height / 16));
  rect((leftGrid), (height / 1.72), (width / 6.3), (height / 16));
  fill(255);
  text('Octave Up', (width / 44), (height / 1.91), (width / 7), (height / 6));
  text('Octave Down', (width / 44), (height / 1.68), (width / 7), (height / 6));

  //draw the change osc button
  textSize(23);
  fill(12,43,53);
  rect((leftGrid), (height / 2.78), (width / 6.3), (height / 19));
  fill(255);
  text('Change Oscillators', (width / 77.2), (height / 2.69), (width / 6.3), (height / 19));
  textSize(27);

  //draw the osc display button
  fill(12,33,53);
  rect((width / 5.8), (height / 2.78), (width / 11.8), (height / 19));
  fill(255);
  textStyle(ITALIC);
  textSize(22);
  text(displayOsc, (width / 5.6), (height / 2.7), (width / 11.8), (height / 19));
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
  rect((width / 1.2), (height - (height / 2.03)), (width / 6.3), (height / 17));
  rect((width / 1.2), (height - (height / 2.4)), (width / 6.3), (height / 17));
  fill(255);
  text('Clear Notes', (width / 1.16), (height - (height / 2.07)), (width / 6.3), (height / 17));
  text('All Notes On', (width / 1.16), (height - (height / 2.47)), (width / 6.3), (height / 17));

  //draw volume buttons
  fill(14,43,53);
  rect(width / 1.2, height - (height / 1.8), width / 14, height / 20);
  rect(width / 1.086, height - (height / 1.8), width / 14, height / 20);
  textSize(20);
  fill(255);
  text('Volume+', (width / 1.19), (height - (height / 1.84)), (width / 14), (height / 20));
  text('Volume-', (width / 1.076), (height - (height / 1.84)), (width / 14), (height / 20));
  }
}