if(sessionStorage.loca) {
  var loca = sessionStorage.loca;
} else {
  loca = "경부고속도로";
}

if(sessionStorage.danger) {
  var danger = sessionStorage.danger;
} else {
  danger = "포트홀";
}

if(danger == "포트홀") {
  danger = "pothole";
} else if(danger == "쓰레기") {
  danger = "garbage";
} else {
  danger = "animal";
}

var location1 = document.getElementById("location1");

window.onload = function() {
  location1.innerText = "도로: " + loca;
  var image = document.getElementById(danger);
  image.style.display = "block";
}

var reportBtn = document.getElementById("reportBtn");
reportBtn.addEventListener("click", function() {
  alert("신고 완료");
})
