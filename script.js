document.getElementById("lRBtn").addEventListener("click", clicker);

let i = 0;

function clicker() {
  document.getElementById("clicks").innerHTML = i;
  i++;
}
