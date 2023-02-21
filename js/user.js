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

function toDOM(row) {
  var tr = "";
  tr += "<tr>";
  tr += "<td>" + row._id; + "</td>";
  tr += "<td>" + row.user_name; + "</td>";
  tr += "<td>" + row.mileage; + "</td>";
  tr += "<td>" + row.danger_num; + "</td>";
  tr += "<td>" + row.pothole_num; + "</td>";
  tr += "<td>" + row.garbage_num; + "</td>";
  tr += "<td>" + row.animal_num; + "</td>";
  tr += "<td>" + row.user_score; + "</td>";
  tr += "</tr>";
  return tr;
}

function renderTable(id, data) {
  var size = data.length;
  var trList = "";
  for(var i=0; i < size; i++) {
    trList += toDOM(data[i]);
  }
  document.getElementById("tbody").innerHTML = trList;
}

getJSON('http://ec2-35-77-220-13.ap-northeast-1.compute.amazonaws.com/info/user',
  function(err, data) {
    if(err !== null) {
      alert("예상치 못한 오류 발생." + err);
    } else {
      api = data.data;
      console.log(api);
      renderTable("table", api);
    }
});
