function avatar() {
  let avatar = document.querySelector("a#avatar")
  if (avatar.className != "") avatar.classList = ""
  else if (Math.random() > 0.95) avatar.className = ["left", "right"][Math.floor(Math.random() * 2)]
}

setInterval(avatar, 3000)
