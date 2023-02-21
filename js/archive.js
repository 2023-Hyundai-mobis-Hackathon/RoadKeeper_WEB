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

category = {"animal": "동물", "pothole": "포트홀", "garbage": "쓰레기", 'Pothole on road': "포트홀"};

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

getJSON('http://ec2-35-77-220-13.ap-northeast-1.compute.amazonaws.com/archive/danger',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {

      api = data.data;
      if(api.length > 20) {
        api = api.slice(0, 20);
      }
      for(var i = 0; i < api.length; i++) {
        if(api[i].category == "Pothole on road") {
          api[i].category = "pothole";
        }
      }
      renderTable("table", api);

      var img1 = document.getElementById("pothole");
      var img2 = document.getElementById("garbage");
      var img3 = document.getElementById("animal");


      var tr1 = document.getElementById("tr1");
      tr1.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[0].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[0].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[0].category];
        percentageText.innerText = "위험도: " + api[0].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[0].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[0].location;
      });

      var tr2 = document.getElementById("tr2");
      tr2.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[1].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[1].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[1].category];
        percentageText.innerText = "위험도: " + api[1].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[1].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[1].location;
      });

      var tr3 = document.getElementById("tr3");
      tr3.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[2].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[2].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[2].category];
        percentageText.innerText = "위험도: " + api[2].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[2].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[2].location;
      });

      var tr4 = document.getElementById("tr4");
      tr4.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[3].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[3].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[3].category];
        percentageText.innerText = "위험도: " + api[3].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[3].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[3].location;
      });

      var tr5 = document.getElementById("tr5");
      tr5.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[4].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[4].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[4].category];
        percentageText.innerText = "위험도: " + api[4].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[4].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[4].location;
      });

      var tr6 = document.getElementById("tr6");
      tr6.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[5].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[5].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[5].category];
        percentageText.innerText = "위험도: " + api[5].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[5].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[5].location;
      });

      var tr7 = document.getElementById("tr7");
      tr7.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[6].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[6].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[6].category];
        percentageText.innerText = "위험도: " + api[6].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[6].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[6].location;
      });

      var tr8 = document.getElementById("tr8");
      tr8.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[7].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[7].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[7].category];
        percentageText.innerText = "위험도: " + api[7].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[7].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[7].location;
      });

      var tr9 = document.getElementById("tr9");
      tr9.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[8].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[8].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[8].category];
        percentageText.innerText = "위험도: " + api[8].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[8].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[8].location;
      });

      var tr10 = document.getElementById("tr10");
      tr10.addEventListener("click", function() {
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        imageContainer.style.display = "none";
        detailContainer.style.display = "none";
        buttonContainer.style.display = "none";
        var img = document.getElementById(api[9].category)
        img.style.display = "block";
        roadText.innerText = "도로: " + api[9].location;
        dangerText.innerText = "위험 요소 종류: " + category[api[9].category];
        percentageText.innerText = "위험도: " + api[9].danger_score + "%";
        accuracyText.innerText = "정확도: " + api[9].accuracy;
        imageContainer.style.display = "block";
        detailContainer.style.display = "block";
        buttonContainer.style.display = "grid";
        sessionStorage.loca = api[9].location;
      });

      if(api.length > 10) {
        var tr11 = document.getElementById("tr11");
        tr11.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[10].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[10].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[10].category];
          percentageText.innerText = "위험도: " + api[10].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[10].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[10].location;
        });

        var tr12 = document.getElementById("tr12");
        tr12.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[11].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[11].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[11].category];
          percentageText.innerText = "위험도: " + api[11].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[11].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[11].location;
        });

        var tr13 = document.getElementById("tr13");
        tr13.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[12].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[12].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[12].category];
          percentageText.innerText = "위험도: " + api[12].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[12].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[12].location;
        });

        var tr14 = document.getElementById("tr14");
        tr14.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[13].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[13].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[13].category];
          percentageText.innerText = "위험도: " + api[13].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[13].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[13].location;
        });

        var tr15 = document.getElementById("tr15");
        tr15.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[14].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[14].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[14].category];
          percentageText.innerText = "위험도: " + api[14].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[14].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[14].location;
        });

        var tr16 = document.getElementById("tr16");
        tr16.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[15].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[15].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[15].category];
          percentageText.innerText = "위험도: " + api[15].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[15].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[15].location;
        });

        var tr17 = document.getElementById("tr17");
        tr17.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[16].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[16].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[16].category];
          percentageText.innerText = "위험도: " + api[16].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[16].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[16].location;
        });

        var tr18 = document.getElementById("tr18");
        tr18.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[17].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[17].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[17].category];
          percentageText.innerText = "위험도: " + api[17].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[17].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[17].location;
        });

        var tr19 = document.getElementById("tr19");
        tr19.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[18].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[18].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[18].category];
          percentageText.innerText = "위험도: " + api[18].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[18].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[18].location;
        });

        var tr20 = document.getElementById("tr20");
        tr20.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[19].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[19].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[19].category];
          percentageText.innerText = "위험도: " + api[19].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[19].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[19].location;
        });
      }

      var filterBtn = document.getElementById("filterBtn");
      var filter ="";
      filterBtn.addEventListener("click", function() {
        var input = document.getElementById("filter");
        filter = input.value;
        api = data.data;
        if(filter.length > 0) {
          newapi = [];
          var length = api.length;
          for(var i = 0; i < length; i++) {
            if(api[i].location == filter) {
              newapi.push(api[i]);
            }
          }
          api = newapi;
        }
        if(api.length > 10) {
          api = api.slice(0, 10);
        }
        for(var i = 0; i < api.length; i++) {
          if(api[i].category == "Pothole on road") {
            api[i].category = "pothole";
          }
        }
        renderTable("table", api);
        var tr1 = document.getElementById("tr1");
        tr1.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[0].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[0].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[0].category];
          percentageText.innerText = "위험도: " + api[0].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[0].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[0].location;
        });

        var tr2 = document.getElementById("tr2");
        tr2.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[1].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[1].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[1].category];
          percentageText.innerText = "위험도: " + api[1].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[1].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[1].location;
        });

        var tr3 = document.getElementById("tr3");
        tr3.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[2].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[2].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[2].category];
          percentageText.innerText = "위험도: " + api[2].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[2].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[2].location;
        });

        var tr4 = document.getElementById("tr4");
        tr4.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[3].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[3].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[3].category];
          percentageText.innerText = "위험도: " + api[3].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[3].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[3].location;
        });

        var tr5 = document.getElementById("tr5");
        tr5.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[4].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[4].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[4].category];
          percentageText.innerText = "위험도: " + api[4].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[4].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[4].location;
        });

        var tr6 = document.getElementById("tr6");
        tr6.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[5].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[5].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[5].category];
          percentageText.innerText = "위험도: " + api[5].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[5].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[5].location;
        });

        var tr7 = document.getElementById("tr7");
        tr7.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[6].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[6].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[6].category];
          percentageText.innerText = "위험도: " + api[6].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[6].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[6].location;
        });

        var tr8 = document.getElementById("tr8");
        tr8.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[7].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[7].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[7].category];
          percentageText.innerText = "위험도: " + api[7].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[7].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[7].location;
        });

        var tr9 = document.getElementById("tr9");
        tr9.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[8].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[8].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[8].category];
          percentageText.innerText = "위험도: " + api[8].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[8].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[8].location;
        });

        var tr10 = document.getElementById("tr10");
        tr10.addEventListener("click", function() {
          img1.style.display = "none";
          img2.style.display = "none";
          img3.style.display = "none";
          imageContainer.style.display = "none";
          detailContainer.style.display = "none";
          buttonContainer.style.display = "none";
          var img = document.getElementById(api[9].category)
          img.style.display = "block";
          roadText.innerText = "도로: " + api[9].location;
          dangerText.innerText = "위험 요소 종류: " + category[api[9].category];
          percentageText.innerText = "위험도: " + api[9].danger_score + "%";
          accuracyText.innerText = "정확도: " + api[9].accuracy;
          imageContainer.style.display = "block";
          detailContainer.style.display = "block";
          buttonContainer.style.display = "grid";
          sessionStorage.loca = api[9].location;
        });
      })
    }
});
