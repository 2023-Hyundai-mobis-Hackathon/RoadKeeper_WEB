var imageContainer = document.getElementById("imageContainer");
var detailContainer = document.getElementById("detailContainer");
var buttonContainer = document.getElementById("buttonContainer");

window.onload = function() {
  imageContainer.style.display = "none";
  detailContainer.style.display = "none";
  buttonContainer.style.display = "none";
}

const getJSON = function(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    const status = xhr.status;
    if(status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

category = {"animal": "동물", "pothole": "포트홀", "garbage": "쓰레기"}

function toDOM(row, i) {
  var tr = "";
  tr += "<tr id='tr" +  i + "'>";
  tr += "<td>" + row.location+ "</td>";
  tr += "<td>" + category[row.category] + "</td>";
  tr += "<td>" + row.danger_score+ "</td>";
  tr += "</tr>";
  return tr;
}

function renderTable(id, data) {
  var size = data.length;
  var trList = "";
  for(var i=0; i < size; i++) {
    trList += toDOM(data[i], i + 1);
  }
  document.getElementById("tbody").innerHTML = trList;
}

var roadText = document.getElementById("roadText");
var dangerText = document.getElementById("dangerText");
var percentageText = document.getElementById("percentageText");
var accuracyText = document.getElementById("accuracyText");

getJSON('http://ec2-18-183-5-142.ap-northeast-1.compute.amazonaws.com/archive/danger',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      api = data.data;
      console.log(api);
      renderTable("table", api);

      var tr1 = document.getElementById("tr1");
      tr1.addEventListener("click", function() {
        var img = document.getElementById(api[0].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[0].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[0].category];
        percentageText.innerText = "위험도: " + api[0].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[0].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr2 = document.getElementById("tr2");
      tr2.addEventListener("click", function() {
        var img = document.getElementById(api[1].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[1].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[1].category];
        percentageText.innerText = "위험도: " + api[1].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[1].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr3 = document.getElementById("tr3");
      tr3.addEventListener("click", function() {
        var img = document.getElementById(api[2].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[2].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[2].category];
        percentageText.innerText = "위험도: " + api[2].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[2].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr4 = document.getElementById("tr4");
      tr4.addEventListener("click", function() {
        var img = document.getElementById(api[3].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[3].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[3].category];
        percentageText.innerText = "위험도: " + api[3].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[3].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr5 = document.getElementById("tr5");
      tr5.addEventListener("click", function() {
        var img = document.getElementById(api[5].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[5].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[5].category];
        percentageText.innerText = "위험도: " + api[5].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[5].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr6 = document.getElementById("tr6");
      tr6.addEventListener("click", function() {
        var img = document.getElementById(api[5].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[5].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[5].category];
        percentageText.innerText = "위험도: " + api[5].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[5].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr7 = document.getElementById("tr7");
      tr7.addEventListener("click", function() {
        var img = document.getElementById(api[6].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[6].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[6].category];
        percentageText.innerText = "위험도: " + api[6].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[6].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr8 = document.getElementById("tr8");
      tr8.addEventListener("click", function() {
        var img = document.getElementById(api[7].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[7].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[7].category];
        percentageText.innerText = "위험도: " + api[7].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[7].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr9 = document.getElementById("tr9");
      tr9.addEventListener("click", function() {
        var img = document.getElementById(api[8].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[8].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[8].category];
        percentageText.innerText = "위험도: " + api[8].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[8].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });

      var tr10 = document.getElementById("tr10");
      tr10.addEventListener("click", function() {
        var img = document.getElementById(api[10].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[10].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[10].category];
        percentageText.innerText = "위험도: " + api[10].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[10].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "block";
      });
    }
});
