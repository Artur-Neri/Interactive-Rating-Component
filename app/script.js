function myRating(btnValue) {
  let value = btnValue
  let res = document.getElementById('result')
  res.innerHTML = value
}

function sendRating() {
  document.getElementById('homePage').style.display = "none"
  document.getElementById('ty-page').style.display = "block"
}