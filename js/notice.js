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

var messageText = document.getElementById("messageText");
var messageInput = document.getElementById("messageInput");

var message = "[" + loca + "]" + " 도로 위 " +  danger + " 발견. 통행에 유의하세요. \n";
messageText.innerText = message;

messageInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    message += messageInput.value;
    messageText.innerText = message;
  }
})

var noticeBtn = document.getElementById("noticeBtn");
noticeBtn.addEventListener("click", function() {
  message = "[" + loca + "]" + " 도로 위 " +  danger + " 발견. 통행에 유의하세요. \n";
  messageText.innerText = message;
  alert("문자 전송 완료");
})
