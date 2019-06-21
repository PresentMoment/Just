  class ClickEvents {
    constructor(){}
    events() {

  //osc buttons
  if ((mouseX >= (windowWidth / 166) && mouseX <= (windowWidth / 12)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc1.started) {
  osc1.stop();} else if ((mouseX >= (windowWidth / 166) && mouseX <= (windowWidth / 12)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc1.started == false) {
  osc1.start();}
  if ((mouseX >= (windowWidth * 0.09022) && mouseX <= (windowWidth * 0.1654)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc2.started) { 
  osc2.stop();} else if ((mouseX >= (windowWidth * 0.09022) && mouseX <= (windowWidth * 0.1654)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc2.started == false) { 
  osc2.start();}
  if ((mouseX >= (windowWidth * 0.1729) && mouseX <= (windowWidth * 0.2481)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc3.started) {
  osc3.stop();} else if ((mouseX >= (windowWidth * 0.1729) && mouseX <= (windowWidth * 0.2481)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc3.started == false) {
  osc3.start();}
  if ((mouseX >= (windowWidth * 0.2556) && mouseX <= (windowWidth * 0.3308)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc4.started) {
  osc4.stop();} else if ((mouseX >= (windowWidth * 0.2556) && mouseX <= (windowWidth * 0.3308)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc4.started == false) {
  osc4.start();}
  if ((mouseX >= (windowWidth * 0.3383) && mouseX <= (windowWidth * 0.4135)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc5.started) {
  osc5.stop();} else if ((mouseX >= (windowWidth * 0.3383) && mouseX <= (windowWidth * 0.4135)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc5.started == false) { 
  osc5.start();}
  if ((mouseX >= (windowWidth * 0.421) && mouseX <= (windowWidth * 0.4962)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc6.started) {
  osc6.stop();} else if ((mouseX >= (windowWidth * 0.421) && mouseX <= (windowWidth * 0.4692)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc6.started == false) {
  osc6.start();}
  if ((mouseX >= (windowWidth * 0.5037) && mouseX <= (windowWidth * 0.5789)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc7.started) {
  osc7.stop();} else if ((mouseX >= (windowWidth * 0.5037) && mouseX <= (windowWidth * 0.5789)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc7.started == false) {
  osc7.start();}
  if ((mouseX >= (windowWidth * 0.5864) && mouseX <= (windowWidth * 0.6616)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc8.started) {
  osc8.stop();} else if ((mouseX >= (windowWidth * 0.5864) && mouseX <= (windowWidth * 0.6616)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc8.started == false) {
  osc8.start();}
  if ((mouseX >= (windowWidth * 0.6691) && mouseX <= (windowWidth * 0.7443)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc9.started) {
  osc9.stop();} else if ((mouseX >= (windowWidth * 0.6691) && mouseX <= (windowWidth * 0.7443)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc9.started == false) { 
  osc9.start();}
  if ((mouseX >= (windowWidth * 0.7518) && mouseX <= (windowWidth * 0.8270)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc10.started) {
  osc10.stop();} else if ((mouseX >= (windowWidth * 0.7518) && mouseX <= (windowWidth * 0.8270)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc10.started == false) {
  osc10.start();}
  if ((mouseX >= (windowWidth * 0.8345) && mouseX <= (windowWidth * 0.9097)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc11.started) {
  osc11.stop();} else if ((mouseX >= (windowWidth * 0.8345) && mouseX <= (windowWidth * 0.9097)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc11.started == false) {
  osc11.start();}
  if ((mouseX >= (windowWidth * 0.9172) && mouseX <= (windowWidth * 0.9924)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc12.started) {
  osc12.stop();} else if ((mouseX >= (windowWidth * 0.9172) && mouseX <= (windowWidth * 0.9924)) && 
  (mouseY >= (windowHeight * .759) && mouseY <= (windowHeight * 0.822)) && osc12.started == false) {
  osc12.start();}

  //octave up
  if ((mouseX >= (windowWidth * .0075) && mouseX <= (windowWidth * .1729)) && 
  (mouseY >= (windowHeight * .5063) && mouseY <= (windowHeight * .5696))) {
    just = just.map(function(i){
      return i + i; } )
    }

  //octave down
  if ((mouseX >= (windowWidth * .0075) && mouseX <= (windowWidth * .1729)) && 
  (mouseY >= (windowHeight * .5822) && mouseY <= (windowHeight * .6455))) {
    just = just.map(function(i){
      return i / 2 ; } )
    }

  //clear notes
  if ((mouseX >= (windowWidth - 220) && mouseX <= (windowWidth - 10) &&
  (mouseY >= (windowHeight * .5063) && mouseY <= (windowHeight * .5696)))) {
    osc1.stop(), osc2.stop(), osc3.stop(), osc4.stop(), osc5.stop(), osc6.stop(),
    osc7.stop(), osc8.stop(), osc9.stop(), osc10.stop(), osc11.stop(), osc12.stop();
  }

  //all notes on
  if ((mouseX >= (windowWidth - 220) && mouseX <= (windowWidth - 10) &&
  (mouseY >= (windowHeight * .5822) && mouseY <= (windowHeight * .6455)))) {
    osc1.start(), osc2.start(), osc3.start(), osc4.start(), osc5.start(), osc6.start(),
    osc7.start(), osc8.start(), osc9.start(), osc10.start(), osc11.start(), osc12.start();
  }

  //change oscs
  if ((mouseX >= (windowWidth * .0075) && mouseX <= (windowWidth * .1654)) &&
  (mouseY >= (windowHeight * .3544) && mouseY <= (windowHeight * .4177))) {
    oscTypes.push(oscTypes.shift());
  }

  //change intonation
  if ((mouseX >= (windowWidth * .0075) && mouseX <= (windowWidth * .233)) &&
  (mouseY >= (windowHeight * .0126) && mouseY <= (windowHeight * .0759))) {
    just = just.map((e,i)=>e*triTone[i]);
  }
  if ((mouseX >= (windowWidth * .2406) && mouseX <= (windowWidth * .4661)) &&
  (mouseY >= (windowHeight * .0126) && mouseY <= (windowHeight * .0759))) {
    just = just.map((e,i)=>e*twelveTone[i]);
  }
  if ((mouseX >= (windowWidth * .4736) && mouseX <= (windowWidth * .6992)) &&
  (mouseY >= (windowHeight * .0126) && mouseY <= (windowHeight * .0759))) {
    just = just.map((e,i)=>e*altTwelve[i]);
  }
  if ((mouseX >= (windowWidth * .7067) && mouseX <= (windowWidth * .9323)) &&
  (mouseY >= (windowHeight * .0126) && mouseY <= (windowHeight * .0759))) {
    just = just.map((e,i)=>e*differential[i]);
  }
  if ((mouseX >= (windowWidth * .9398) && mouseX <= (windowWidth * .9924)) &&
  (mouseY >= (windowHeight * .0126) && mouseY <= (windowHeight * .0759))) {
    just = just.map((e,i)=>justRef[i]);
    }

  //volume buttons
  if ((mouseX >= (windowWidth * .8345) && mouseX <= (windowWidth * .9022)) &&
  (mouseY >= (windowHeight * .4468) && mouseY <= (windowHeight * .4949))){
    oscVolume = oscVolume.map(function(i){
      return i +0.1;
    })
  }
  if ((mouseX >= (windowWidth * .921) && mouseX <= (windowWidth * .9909)) &&
  (mouseY >= (windowHeight * .4468) && mouseY <= (windowHeight * .4949))){
    oscVolume = oscVolume.map(function(i){
      return i -0.1;
    })
  }


  }
}