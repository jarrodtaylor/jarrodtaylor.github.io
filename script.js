var swapAvatar = function() {
  var num = Math.floor(Math.random() * 9)
  console.log(num)
  document.getElementById('avatar').style.backgroundImage = "url('images/avatars/"+num+".jpg')";
  setTimeout(swapAvatar, 3000)
}

setTimeout(swapAvatar, 3000)

var goto = function(url) {
  window.location.href = url
  return false
}