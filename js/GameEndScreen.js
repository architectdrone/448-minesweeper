function Win()
{
  let div = document.getElementById('msBoard');
  let old_table = document.getElementById('game_board');
  if (old_table !== null) {
      div.removeChild(old_table);
  }
  let WinPopup = document.getElementById("WinScreen");
  WinPopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";
}

function Lose()
{
  let div = document.getElementById('msBoard');
  let old_table = document.getElementById('game_board');
  if (old_table !== null) {
      div.removeChild(old_table);
  }
  let LosePopup = document.getElementById("LoseScreen");
  LosePopup.style.display = "block";
  let form = document.getElementById("msform");
  form.style.display = "none";
}
