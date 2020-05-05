//code for rain referenced from https://thecodingtrain.com/CodingChallenges/004-purplerain.html
function Drop() {
  let x = random(width); //defines x value
  let y = random(-500, -50); //defines y value
  let yspeed = random(4, 10); //sets the speed of drops

  this.fall = function() {
    y = y + yspeed; //Increases the speed as drops fall
  }

  this.show = function() { //styling the drops
    strokeWeight(10);
    stroke(12, 123, 134);
    line(x, y, x, y + 10);
  }
}