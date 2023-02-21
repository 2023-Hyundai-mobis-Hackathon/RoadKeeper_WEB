temperature = document.getElementById("temp");
feelText = document.getElementById("feel");
speedText = document.getElementById("speed");


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

getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      temp = data.main.temp;
      feel = data.main.feels_like;
      speed = data.wind.speed;
      temperature.innerText = "기온: " + temp + " 도";
      feelText.innerText = "체감 온도: " + feel + " 도";
      speedText.innerText = "풍속: " + speed + "km";
    }
  });

news1 = document.getElementById("news1");
news2 = document.getElementById("news2");
news3 = document.getElementById("news3");

function retrieve(e) {
  e.preventDefault();
  let url = `https://newsapi.org/v2/everything?q=도로&apiKey=2721d1f0de38415b978ddeed5ff2291a`;
  fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    data1 = data.articles[0];
    data2 = data.articles[1];
    data3 = data.articles[3];
    news1.innerText = data1.title;
    news2.innerText = data2.title;
    news3.innerText = data3.title;
    news1.addEventListener("click", function() {
      window.open(data1.url);
    });
    news2.addEventListener("click", function() {
      window.open(data2.url);
    });
    news3.addEventListener("click", function() {
      window.open(data3.url);
    })
  })
}

window.onload = retrieve;

var number1 = 834;
var number2 = 121;
var number3 = 713;

getJSON('http://ec2-18-183-5-142.ap-northeast-1.compute.amazonaws.com/main/report',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      number1 = data.data.entire_num;
      number2 = data.data.quick_num;
      number3 = data.data.complete_num;
    }
  });

  var number4 = 150;
  var number5 = 120;
  var number6 = 30;

getJSON('http://ec2-18-183-5-142.ap-northeast-1.compute.amazonaws.com/main/pbv',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      number4 = data.data.entire_num;
      number5 = data.data.fix_num;
      number6 = data.data.on_num;
    }
  });

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");

var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");

let idx = 0;

const num = [+3, -2, +5, -9, +1, -7];
const arr1 = [+1, -9, +4, -3, +8, -6];
const arr2 = [+3, -5, -7, +9, -3, +1];


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

const repeatFunc1 = function() {
  setTimeout(function() {
    number2 = number2 + arr1[idx];
    number6 = number6 + num[idx];

    num2.innerText = number2;
    num6.innerText = number6;

    setTimeout(function() {
      idx += 1;
      if(idx == num.length) {
        idx = 0;
      }
      repeatFunc1();
    }, 3000);
  }, 3000);
}

const repeatFunc2 = function() {
  setTimeout(function() {
    number4 = number4 + arr2[idx];
    number3 = number3 + arr1[idx];

    num4.innerText = number4;
    num3.innerText = number3;

    setTimeout(function() {
      idx += 1;
      if(idx == num.length) {
        idx = 0;
      }
      repeatFunc2();
    }, 5000);
  }, 5000);
}


repeatFunc();
repeatFunc1();
repeatFunc2();
