  class ClickEvents {
    constructor(){}
    events() {

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
}