function move() {
  var elements = document.getElementsByClassName("bubble1");
    for(var i = 0, length = elements.length; i < length; i++) {
      elements[i].classList.add('float');
    }
  var elements = document.getElementsByClassName("bubble2");
  for(var i = 0, length = elements.length; i < length; i++) {
    elements[i].classList.add('float2');
  }
  setTimeout(load2, 6000);
}


function begin() {
    var x = document.getElementById("landing");
    var y = document.getElementById("load1");
    x.style.display = "none";
    y.style.display = "block";
    y.classList.add('fade');
  }

function load2() {
    var x = document.getElementById("bubbles");
    var y = document.getElementById("please-wait");
    var z = document.getElementById("disclaimer");
    x.style.display = "none";
    y.style.display = "none";
    z.classList.add('fade');
    z.style.display = "block";
    setTimeout(load3, 1800);
}

function load3(){
  var x = document.getElementById("info1");
  x.style.display = "block";
  x.classList.add('fade');
  setTimeout(load4, 2000);
}

function load4(){
  var x = document.getElementById("info2");
  x.style.display = "block";
  x.classList.add('fade');
  setTimeout(load5, 2000);
}

function load5(){
  var x = document.getElementById("info3");
  x.classList.add('fade');
  x.style.display = "block";
  setTimeout(load6, 4000);
}

function load6(){
  var x = document.getElementById("info4");
  x.classList.add('fade');
  x.style.display = "block";
  setTimeout(load7, 4000);
}

function load7(){
  var w = document.getElementById("load1");
  w.style.display = "none";
  setTimeout(load8, 5000);
}

//var i = 0;
// var finished = false;

// function test() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 50);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
//   setTimeout(load2, 6000)
// }