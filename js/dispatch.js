if(sessionStorage.loca) {
  var street = sessionStorage.loca;
} else {
  street = "경부고속도로";
}

var road1 = document.getElementById("road1");
var road2 = document.getElementById("road2");
var road3 = document.getElementById("road3");
var road4 = document.getElementById("road4");
var road5 = document.getElementById("road5");

var tr1 = document.getElementById("tr1");
var tr2 = document.getElementById("tr2");
var tr3 = document.getElementById("tr3");
var tr4 = document.getElementById("tr4");
var tr5 = document.getElementById("tr5");

var stat1 = document.getElementById("stat1");
var stat2 = document.getElementById("stat2");
var stat3 = document.getElementById("stat3");
var stat4 = document.getElementById("stat4");
var stat5 = document.getElementById("stat5");

var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");
var car5 = document.getElementById("car5");

var statusText = document.getElementById("statusText");

var stat = {1: "대기 중", 2: '이동 중', 3: '작업 중', 4: '수리 중'};
var stat_list = [1, 1, 4, 3, 1];

window.onload = function() {
  road1.innerText = street;
  road2.innerText = street;
  road3.innerText = street;
  road4.innerText = street;
  road5.innerText = street;
  stat1.innerText = stat[stat_list[0]];
  stat2.innerText = stat[stat_list[1]];
  stat3.innerText = stat[stat_list[2]];
  stat4.innerText = stat[stat_list[3]];
  stat5.innerText = stat[stat_list[4]];
}

const repeatFunc = function() {
  setTimeout(function() {
    number1 = number1  + num[idx];
    number5 = number5 + arr1[idx];

    num1.innerText = number1;
    num5.innerText = number5;

    setTimeout(function() {
      idx += 1;
      if(idx == num.length) {
        idx = 0;
      }
      repeatFunc();
    }, 2000);
  }, 2000);
}

tr1.addEventListener("click", function() {
  if(stat_list[0] == 1) {
    statusText.innerText = "";
    var text = "1번 차량 상태 업데이트를 시작합니다. \n"
    stat_list[0] = 2;
    stat1.innerText = stat[stat_list[0]];
    car2.style.display = "none";
    car3.style.display = "none";
    car4.style.display = "none";
    car5.style.display = "none";
    statusText.innerText = text;

    setTimeout(function() {
      car1.style.marginTop = "160px";
      car1.style.marginLeft = "-240px";
      text += "목표 지점까지 이동 중... \n";
      statusText.innerText = text;
    }, 2000);

    setTimeout(function() {
      car1.style.marginTop = "170px";
      car1.style.marginLeft = "-230px";
    }, 3000);

    setTimeout(function() {
      car1.style.marginTop = "180px";
      car1.style.marginLeft = "-220px";
    }, 4000);

    setTimeout(function() {
      car1.style.marginTop = "190px";
      car1.style.marginLeft = "-210px";
      text += "도착 완료 \n";
      statusText.innerText = text;
    }, 5000);

    setTimeout(function() {
      text += "수리를 시작합니다. \n";
      text += "수리 중... \n"
      statusText.innerText = text;
    }, 6000);

    setTimeout(function() {
      text += "수리 완료. \n";
      statusText.innerText = text;
      stat_list[0] = 1;
      stat1.innerText = stat[stat_list[0]];
    }, 9000);
  }
})

tr2.addEventListener("click", function() {
  if(stat_list[1] == 1) {
    statusText.innerText = "";
    var text = "2번 차량 상태 업데이트를 시작합니다. \n"
    stat_list[1] = 2;
    stat2.innerText = stat[stat_list[1]];
    car1.style.display = "none";
    car3.style.display = "none";
    car4.style.display = "none";
    car5.style.display = "none";
    statusText.innerText = text;

    setTimeout(function() {
      car2.style.marginTop = "160px";
      car2.style.marginLeft = "-240px";
      text += "목표 지점까지 이동 중... \n";
      statusText.innerText = text;
    }, 2000);

    setTimeout(function() {
      car2.style.marginTop = "170px";
      car2.style.marginLeft = "-230px";
    }, 3000);

    setTimeout(function() {
      car2.style.marginTop = "180px";
      car2.style.marginLeft = "-220px";
    }, 4000);

    setTimeout(function() {
      car2.style.marginTop = "190px";
      car2.style.marginLeft = "-210px";
      text += "도착 완료 \n";
      statusText.innerText = text;
    }, 5000);

    setTimeout(function() {
      text += "수리를 시작합니다. \n";
      text += "수리 중... \n"
      statusText.innerText = text;
    }, 6000);

    setTimeout(function() {
      text += "수리 완료. \n";
      statusText.innerText = text;
      stat_list[1] = 1;
      stat2.innerText = stat[stat_list[1]];
    }, 9000);
  }
})

tr3.addEventListener("click", function() {
  if(stat_list[2] == 1) {
    statusText.innerText = "";
    var text = "3번 차량 상태 업데이트를 시작합니다. \n"
    stat_list[2] = 2;
    stat3.innerText = stat[stat_list[0]];
    car2.style.display = "none";
    car1.style.display = "none";
    car4.style.display = "none";
    car5.style.display = "none";
    statusText.innerText = text;

    setTimeout(function() {
      car3.style.marginTop = "160px";
      car3.style.marginLeft = "-240px";
      text += "목표 지점까지 이동 중... \n";
      statusText.innerText = text;
    }, 2000);

    setTimeout(function() {
      car3.style.marginTop = "170px";
      car3.style.marginLeft = "-230px";
    }, 3000);

    setTimeout(function() {
      car3.style.marginTop = "180px";
      car3.style.marginLeft = "-220px";
    }, 4000);

    setTimeout(function() {
      car3.style.marginTop = "190px";
      car3.style.marginLeft = "-210px";
      text += "도착 완료 \n";
      statusText.innerText = text;
    }, 5000);

    setTimeout(function() {
      text += "수리를 시작합니다. \n";
      text += "수리 중... \n"
      statusText.innerText = text;
    }, 6000);

    setTimeout(function() {
      text += "수리 완료. \n";
      statusText.innerText = text;
      stat_list[2] = 1;
      stat3.innerText = stat[stat_list[2]];
    }, 9000);
  }
})

tr4.addEventListener("click", function() {
  if(stat_list[3] == 1) {
    statusText.innerText = "";
    var text = "4번 차량 상태 업데이트를 시작합니다. \n"
    stat_list[3] = 2;
    stat4.innerText = stat[stat_list[3]];
    car2.style.display = "none";
    car3.style.display = "none";
    car1.style.display = "none";
    car5.style.display = "none";
    statusText.innerText = text;

    setTimeout(function() {
      car4.style.marginTop = "160px";
      car4.style.marginLeft = "-240px";
      text += "목표 지점까지 이동 중... \n";
      statusText.innerText = text;
    }, 2000);

    setTimeout(function() {
      car4.style.marginTop = "170px";
      car4.style.marginLeft = "-230px";
    }, 3000);

    setTimeout(function() {
      car4.style.marginTop = "180px";
      car4.style.marginLeft = "-220px";
    }, 4000);

    setTimeout(function() {
      car4.style.marginTop = "190px";
      car4.style.marginLeft = "-210px";
      text += "도착 완료 \n";
      statusText.innerText = text;
    }, 5000);

    setTimeout(function() {
      text += "수리를 시작합니다. \n";
      text += "수리 중... \n"
      statusText.innerText = text;
    }, 6000);

    setTimeout(function() {
      text += "수리 완료. \n";
      statusText.innerText = text;
      stat_list[3] = 1;
      stat4.innerText = stat[stat_list[3]];
    }, 9000);
  }
})

tr5.addEventListener("click", function() {
  if(stat_list[4] == 1) {
    statusText.innerText = "";
    var text = "5번 차량 상태 업데이트를 시작합니다. \n"
    stat_list[4] = 2;
    stat5.innerText = stat[stat_list[4]];
    car2.style.display = "none";
    car3.style.display = "none";
    car4.style.display = "none";
    car1.style.display = "none";
    statusText.innerText = text;

    setTimeout(function() {
      car5.style.marginTop = "180px";
      car5.style.marginLeft = "-220px";
    }, 2000);

    setTimeout(function() {
      car5.style.marginTop = "190px";
      car5.style.marginLeft = "-210px";
      text += "도착 완료 \n";
      statusText.innerText = text;
    }, 3000);

    setTimeout(function() {
      text += "수리를 시작합니다. \n";
      text += "수리 중... \n"
      statusText.innerText = text;
    }, 4000);

    setTimeout(function() {
      text += "수리 완료. \n";
      statusText.innerText = text;
      stat_list[4] = 1;
      stat5.innerText = stat[stat_list[4]];
    }, 7000);
  }
})
