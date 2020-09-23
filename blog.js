document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
  document.getElementById("myDIV").classList.add("mystyle");
}

function undoFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
}

function colorFunction() {
  document.getElementById("myp1").style.color = "#F1C40F";
}

function blueFunction() {
  document.getElementById("myh2").style.backgroundColor = "#A569BD";
}
