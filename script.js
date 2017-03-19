var swapAvatar = function() {
  var num = Math.floor(Math.random() * 9) * 12.5
  document.getElementById('avatar').style.backgroundPosition = num + "% 0%"
  setTimeout(swapAvatar, 3000)
}

setTimeout(swapAvatar, 3000)

var goto = function(url) {
  window.location.href = url
  return false
}

var setStars = function(starClass) {
  document.getElementById('stars').className = starClass
}

var thanks = function(num) {
  switch(num) {
    case 1: confirm("Seriously, that's it?"); break
    case 2: confirm("Are you sure? That's only two stars."); break
    case 3: confirm("Try again. And a little to the right this time."); break
    case 4: confirm("That's almost enough. How about one more?"); break
    default: alert("Awesome!")
  }
}