function Win()
{
  let WinPopup = document.getElementById("WinScreen");
  WinPopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";
}

function Lose()
{
  let LosePopup = document.getElementById("LoseScreen");
  LosePopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";
}
