class Labels {
  constructor(){}

 drawLabels() {
  //draw the intonation buttons
  fill(14,43,53);
  stroke(205);
  strokeWeight(.6);
  rect((windowWidth / 166), (windowHeight / 77), (windowWidth / 4.4), (windowHeight / 16));
  rect((windowWidth / 4.2), (windowHeight / 77), (windowWidth / 4.4), (windowHeight / 16));
  rect((windowWidth / 2.126), (windowHeight / 77), (windowWidth / 4.4), (windowHeight / 16));
  rect((windowWidth / 1.421), (windowHeight / 77), (windowWidth / 4.4), (windowHeight / 16));
  fill(255);
  text('7 Limit Tritone', (windowWidth / 10), (windowHeight / 29), (windowWidth / 4.4), (windowHeight / 6));
  text('7 Limit 12-Tone', (windowWidth / 3), (windowHeight / 29), (windowWidth / 4.4), (windowHeight / 6));
  text('Alternate 12-Tone', (windowWidth / 1.8), (windowHeight / 29), (windowWidth / 4.4), (windowHeight / 6));
  text('12-Tone Subharmonic', (windowWidth / 1.28), (windowHeight / 29), (windowWidth / 4.4), (windowHeight / 6));

  //draw the intonation reset button
  fill(14,43,53);
  rect((windowWidth / 1.065), (windowHeight / 76), (windowWidth / 19), (windowHeight / 16));
  fill(255);
  textSize(12);
  textStyle(ITALIC);
  text('reset', (windowWidth / 1.061), (windowHeight / 29), (windowWidth / 17), (windowHeight / 6));
  textSize(17);
  textStyle(NORMAL);

  //draw the osc buttons
  fill(14,43,53);
  rect((windowWidth / 166), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 11.12), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 5.8), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 3.9), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 2.94), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 2.37), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.982), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.702), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.493), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.329), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.199), (windowHeight /1.318), (windowWidth / 12.98), (windowHeight / 16));
  rect((windowWidth / 1.09), (windowHeight /1.318), (windowWidth / 14.1), (windowHeight / 16));
  //draw the osc labels
  fill(255);
  text('Osc 1', (windowWidth / 60), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 2', (windowWidth / 10), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 3', (windowWidth / 5.5), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 4', (windowWidth / 3.71), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 5', (windowWidth / 2.83), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 6', (windowWidth / 2.31), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 7', (windowWidth / 1.94), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 8', (windowWidth / 1.67), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 9', (windowWidth / 1.47), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 10', (windowWidth / 1.32), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 11', (windowWidth / 1.19), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));
  text('Osc 12', (windowWidth / 1.085), (windowHeight /1.295), (windowWidth / 12.98), (windowHeight / 6));


   //draw the note labels
   if (osc1.started == true){
     fill(14,43,53)
   } else {fill(19,55,69)}
   rect((windowWidth / 166), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note1, (windowWidth / 99), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc2.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 11.12), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note2, (windowWidth / 10.8), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc3.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 5.8), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note3, (windowWidth / 5.7), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc4.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 3.9), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note4, (windowWidth / 3.84), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc5.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 2.94), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note5, (windowWidth / 2.9), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc6.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 2.37), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note6, (windowWidth / 2.35), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc7.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.982), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note7, (windowWidth / 1.97), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc8.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.702), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note8, (windowWidth / 1.69), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc9.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.493), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note9, (windowWidth / 1.485), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc10.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.329), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note10, (windowWidth / 1.32), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc11.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.199), (windowHeight /1.098), (windowWidth / 12.98), (windowHeight / 16));
   fill(255);
   text(note11, (windowWidth / 1.194), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));
   if (osc12.started == true){
    fill(14,43,53)
  } else {fill(19,55,69)}
   rect((windowWidth / 1.09), (windowHeight /1.098), (windowWidth / 13.98), (windowHeight / 16));
   fill(255);
   text(note12, (windowWidth / 1.086), (windowHeight /1.082), (windowWidth / 12.98), (windowHeight / 6));


  //draw the octave switch buttons
  fill(14,43,53);
  rect((windowWidth / 133), (windowHeight / 1.97), (windowWidth / 6.3), (windowHeight / 16));
  rect((windowWidth / 133), (windowHeight / 1.72), (windowWidth / 6.3), (windowHeight / 16));
  fill(255);
  text('Octave Up', (windowWidth / 44), (windowHeight / 1.91), (windowWidth / 7), (windowHeight / 6));
  text('Octave Down', (windowWidth / 44), (windowHeight / 1.68), (windowWidth / 7), (windowHeight / 6));

  //draw the change osc button
  textSize(13);
  fill(12,43,53);
  rect((windowWidth / 133), (windowHeight / 2.78), (windowWidth / 6.3), (windowHeight / 19));
  fill(255);
  text('Change Oscillators', (windowWidth / 77.2), (windowHeight / 2.69), (windowWidth / 6.3), (windowHeight / 9));
  textSize(17);

  //draw the osc display button
  fill(12,33,53);
  rect((windowWidth / 5.8), (windowHeight / 2.78), (windowWidth / 11.8), (windowHeight / 19));
  fill(255);
  textStyle(ITALIC);
  textSize(12);
  text(displayOsc, (windowWidth / 5.6), (windowHeight / 2.7), (windowWidth / 11.8), (windowHeight / 9));
  if (oscTypes[0] == 'sine') {
    displayOsc = 'Sine';
  } else if (oscTypes[0] == 'triangle') {
    displayOsc = 'Triangle';
  } else if (oscTypes[0] == 'sawtooth') {
    displayOsc = 'Sawtooth';
  } else if (oscTypes[0] == 'square') {displayOsc = 'Square';
}
  textStyle(NORMAL);
  textSize(17);

  //draw the all oscs and clear oscs buttons
  fill(14,43,53);
  rect((windowWidth / 1.2), (windowHeight - (windowHeight / 2.03)), (windowWidth / 6.4), (windowHeight / 17));
  rect((windowWidth / 1.2), (windowHeight - (windowHeight / 2.4)), (windowWidth / 6.4), (windowHeight / 17));
  fill(255);
  text('Clear Notes', (windowWidth / 1.16), (windowHeight - (windowHeight / 2.09)), (windowWidth / 6.3), (windowHeight / 7));
  text('All Notes On', (windowWidth / 1.16), (windowHeight - (windowHeight / 2.49)), (windowWidth / 6.3), (windowHeight / 7));

  //draw volume buttons
  fill(14,43,53);
  rect((windowWidth / 1.2), windowHeight - (windowHeight / 1.8), windowWidth / 14, windowHeight / 20);
  rect((windowWidth / 1.086), windowHeight - (windowHeight / 1.8), windowWidth / 14.5, windowHeight / 20);
  textSize(10);
  fill(255);
  text('Volume+', (windowWidth / 1.19), (windowHeight - (windowHeight / 1.84)), (windowWidth / 14), (windowHeight / 2));
  text('Volume-', (windowWidth / 1.076), (windowHeight - (windowHeight / 1.84)), (windowWidth / 14), (windowHeight / 2));
  }
}