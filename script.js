var swapAvatar = function() {
  var num = Math.floor(Math.random() * 9) * 12.5
  document.getElementById('avatar').style.backgroundPosition = num + "% 0%";
  setTimeout(swapAvatar, 3000)
}

setTimeout(swapAvatar, 3000)

var goto = function(url) {
  window.location.href = url
  return false
}