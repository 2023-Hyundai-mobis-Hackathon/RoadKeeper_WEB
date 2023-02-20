var imageContainer = document.getElementById("imageContainer");
var detailContainer = document.getElementById("detailContainer");
var buttonContainer = document.getElementById("buttonContainer");

window.onload = function() {
  imageContainer.style.display = "none";
  detailContainer.style.display = "none";
  buttonContainer.style.display = "none";
}

var tr1 = document.getElementById("tr1");
tr1.addEventListener("click", function() {
  imageContainer.style.display = "block";
  detailContainer.style.display = "block";
  buttonContainer.style.display = "grid";
})
