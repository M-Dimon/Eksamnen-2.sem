
var bekræft = document.getElementById("bekræft");

var btn = document.getElementById("knap");

var luk = document.getElementsByClassName("luk")[0];

btn.onclick = function() {
  bekræft.style.display = "block";
}

luk.onclick = function() {
  bekræft.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == bekræft) {
    bekræft.style.display = "none";
  }
}


var tekst = [
  "Tillykke din besked er send",
  "Beskeden er her med send",
  "Din besked er nu send",
]

function gettekst() {
  var randomNumber = Math.floor(Math.random()*tekst.length)
  document.getElementById('nytekst').innerHTML = tekst[randomNumber];
}

