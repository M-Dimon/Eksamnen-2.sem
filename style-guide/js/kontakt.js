
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
  "hej",
  "dette er mit loop",
  ":)",
];


for (let i = 0; i < tekst.length; i++) {
  console.log(tekst[i])

}
