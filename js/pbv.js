var car1 = document.getElementById("car1");

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

var stat = {1: "대기 중", 2: "이동 중", 3: "작업 중", 4: "수리 중"}

function toDOM(row, i) {
  var tr = "";
  tr += "<tr id='tr" +  i + "'>";
  tr += "<td>" + row._id; + "</td>";
  tr += "<td>" + stat[row.status] + "</td>";
  tr += "<td>" + row.location; + "</td>";
  tr += "</tr>";
  return tr;
}

function renderTable(id, data) {
  var size = data.length;
  var trList = "";
  for(var i=0; i < size; i++) {
    trList += toDOM(data[i], i+1);
  }
  document.getElementById("tbody").innerHTML = trList;
}

getJSON('http://ec2-35-77-220-13.ap-northeast-1.compute.amazonaws.com/info/pbv',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      api = data.data;
      renderTable("table", api);

      var tr1 = document.getElementById("tr1");
      tr1.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "125px";
        car1.style.marginTop = "-325px";
      })

      var tr2 = document.getElementById("tr2");
      tr2.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "135px";
        car1.style.marginTop = "-315px";
      })

      var tr3 = document.getElementById("tr3");
      tr3.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "155px";
        car1.style.marginTop = "-305px";
      })

      var tr4 = document.getElementById("tr4");
      tr4.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "175px";
        car1.style.marginTop = "-225px";
      })

      var tr5 = document.getElementById("tr5");
      tr5.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "205px";
        car1.style.marginTop = "-275px";
      })

      var tr6 = document.getElementById("tr6");
      tr6.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "145px";
        car1.style.marginTop = "-305px";
      })

      var tr7 = document.getElementById("tr7");
      tr7.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "145px";
        car1.style.marginTop = "-2905px";
      })

      var tr8 = document.getElementById("tr8");
      tr8.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "155px";
        car1.style.marginTop = "-265px";
      })

      var tr9 = document.getElementById("tr9");
      tr9.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "165px";
        car1.style.marginTop = "-175px";
      })

      var tr10 = document.getElementById("tr10");
      tr10.addEventListener("click", function() {
        car1.style.display = "block";
        car1.style.position = "absolute";
        car1.style.marginLeft = "160px";
        car1.style.marginTop = "-205px";
      })
    }
});
