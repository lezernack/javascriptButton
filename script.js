document.getElementById("lRBtn").addEventListener("click", clicker);

let i = 1;

function clicker() {
  document.getElementById("clicks").innerHTML = i;
  i++;
}
