"use strict";

// Animating elements
<div id="boat" style="width:120px; height:105px; background:url(sail_r.png)">
</div>

<script>
'use strict'

let obj,
  w,
  goRight;

function setSail() {
  let pos = parseInt(obj.style.left, 10);

  (goRight) ? pos++ : pos--;
  obj.style.left = pos + "px";

  if (pos > (w + 40)) {
    obj.style.background = "url(sail_l.png)";
    goRight = false;
  }
  if (pos < -140) {
    obj.style.background = "url(sail_r.png)";
    goRight = true;
  }
  setTimeout(setSail, 10);
}

function init() {
  let preload = new Image();
  preload.src = "sail_l.png";

  obj = document.getElementById("boat");
  w = document.body.clientWidth;
  goRight = true;

  obj.style.position = "absolute";
  obj.style.left = "-120px";

  setSail();
}
// Nomination of the JavaScript initialisation function as the event handler to the DOMContentLoaded event must be made in a different way to that for the window.onload event. It requires a statment to "listen" out for the DOMContentLoaded event. This uses the JavaScript document.addEventListener() function to specify a comma-seperated list of three parameters within its parentheses. The parameters state in order the event to listen out for, the name of the event handler function to call when that event is triggered, and an event phase.
document.addEventListener('DOMContentLoaded', init, false);

// Storing data in variables
function init() {
  let str = "Text Content in JavaScript",
    num = 100,
    bln = true,
    fcn = init,
    obj = document.getElementById("panel");

    obj.innerHTML = `${str}: ${typeof str}`;
    obj.innerHTML += `<br> ${num}: ${typeof num}`;
    obj.innerHTML += `<br> ${bln}: ${typeof bln}`;
    obj.innerHTML += `<br> init(): ${typeof fcn}`;
    obj.innerHTML += `<br> ${obj}: ${typeof obj}`;
}
document.addEventListener("DOMContentLoaded", init, false);

// Passing function arguments
function init() {
  document.getElementById("panel").innerHTML =
    stringify("JavaScript", "in", "easy", "steps");
  document.getElementById("panel").innerHTML +=
    stringify("Copied", "by", "Roxanne", "Hatton");
}
function stringify(argA, argB, argC, argD) {
  let str = `${argA} ${argB} ${argC} ${argD} <br>`;
  return str;
}
document.addEventListener("DOMContentLoaded", init, false);

// Recognising variable scope
let global = "This is Worldwide Global news<hr>"; // <hr> creates a pagebreak line

function eu(obj) {
  let local = "***This is the European Local news***<br>";
  obj.innerHTML += local;
  obj.innerHTML += global;
}

function us(obj) {
  let local = "---This is the United States Local news---<br>";
  obj.innerHTML += local;
  obj.innerHTML += global;
}

function init() {
  let obj = document.getElementById("panel");
  obj.innerHTML = global;

  eu(obj);
  us(obj);
}
document.addEventListener("DOMContentLoaded", init, false);

// Switching alternatives or using switch statements
function init() {
  let panel = document.getElementById("panel");
  let day;

  switch (5 - 2) {
    case 1: day = "Monday";
    break;

    case 2: day = "Tuesday";
    break;

    case 3: day = "Wednesday";
    break;

    case 4: day = "Thursday";
    break;

    case 5: day = "Friday";
    break;

    case 6: day = "Saturday";
    break;

    case 7: day = "Sunday";
    break;

    default: day = "There are only 7 days per week!";
  }
  panel.innerHTML = `It's ${day}`;
}
document.addEventListener("DOMContentLoaded", init, false);

// Looping "for"
function init() {
  let panel = document.getElementById("panel");
  let i;

  for (i = 1; i < 11; i++) {
    panel.innerHTML +=`Iteration number: ${i} <br>`;
  }
}
document.addEventListener("DOMContentLoaded", init, false);

// Looping while true
function init() {
  let panel = document.getElementById("panel");
  let num = 70;

  while (num >= 10) {
    panel.innerHTML += `Countdown value: ${num} <br>`;
    num -= 5;
  }
}
document.addEventListener("DOMContentLoaded", init, false);

// Doing do-while loops
function init() {
  let panel = document.getElementById("panel");
  let num = 2;

  do {
    num *= 2;
    panel.innerHTML += `Multiplied value: ${num} <br>`;
  } while (num < 1000);
}
document.addEventListener("DOMContentLoaded", init, false);

// Breaking out of loops
function init() {
  let panel = document.getElementById("panel");
  let i,
    j;

  for (i = 1; i < 4; i++) {
    panel.innerHTML += `<dt>Outer Loop: ${i}`;
    for (j = 1; j < 4; j++) {
      if (j === 2) {break;}
      panel.innerHTML += `<dd>Inner Loop: ${j}`;
    }
  }
}
document.addEventListener("DOMContentLoaded", init, false);

// Returning control
function init() {
  let panel = document.getElementById("panel");
  let i;

  for (i = 1; i < 11; i++) {
    if (i === 2 || i === 7) {continue;}
    panel.innerHTML += `Loop Iteration: ${i} <br>`;
  }
}
document.addEventListener("DOMContentLoaded", init, false);

// Creating an object

function accelerate() {return '<br>Vroom!';}

function init()
{
  let panel = document.getElementById('panel');
  let myCar = new Car('Dodge ', 'Viper', 'Red ');
  panel.innerHTML = myCar.color + myCar.make + myCar.model;
  panel.innerHTML += myCar.accelerate();
}
document.addEventListener('DOMContentLoaded', init, false);

function Car(make, model, color)
{
  this.make = make;
  this.model = model;
  this.color = color;
  this.accelerate = accelerate;
}
