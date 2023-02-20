var road1 = document.getElementById("road1");
var road2 = document.getElementById("road2");

var plot1 = document.getElementById("plotContainer1");
var plot2 = document.getElementById("plotContainer2");

var roadMenu = document.getElementById("roadMenu");

roadMenu.onchange = function() {
  if(roadMenu.value == 0) {
    plot1.style.display = "none";
    plot2.style.display = "none";
  }
  else if(roadMenu.value == 1) {
    plot1.style.display = "grid";
    plot2.style.display = "none";
  }
  else {
    plot1.style.display = "none";
    plot2.style.display = "block";
  }
}
