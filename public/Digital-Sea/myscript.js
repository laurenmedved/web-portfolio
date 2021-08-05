function begin() {
    var x = document.getElementById("landing");
    var y = document.getElementById("load1");
    x.style.display = "none";
    y.style.display = "block";
    y.classList.add('fade');
  }

var i = 0;
var finished = false;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  setTimeout(load2, 6000)
}

function load2() {
    var x = document.getElementById("myBar");
    var y = document.getElementById("please-wait");
    var z = document.getElementById("disclaimer");
    x.style.display = "none";
    y.style.display = "none";
    z.classList.add('fade');
    z.style.display = "block";
    setTimeout(load3, 1800)
}

function load3(){
  var x = document.getElementById("info1");
  x.style.display = "block";
  x.classList.add('fade');
  setTimeout(load4, 2000)
}

function load4(){
  var x = document.getElementById("info2");
  x.style.display = "block";
  x.classList.add('fade');
  setTimeout(load5, 2000)
}

function load5(){
  var x = document.getElementById("info3");
  x.classList.add('fade');
  x.style.display = "block";
}