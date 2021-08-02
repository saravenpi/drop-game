var socket = io();
var screen = [1920, 1080]
var size = 30 //size in px
socket.on('drop', function(user){
  old = document.getElementById(user.username)
  if (old) {
    old.remove()
  }

  drop = document.createElement('img')
  drop.id = user.username
  drop.className = "drop"
  drop.src = '/ressources/flower.png'
  drop.style.position = "absolute";
  document.getElementsByTagName('body')[0].appendChild(drop)
  var pos = {
    x: Math.floor(Math.random() * screen[0]),
    y: 0
  }
  var coef = {
    x: 3,
    y: 1,
  }
  if (pos.x > screen[0]/2) {
    coef.x = -2
  }

  var flower = document.getElementById(user.username)
  interval = setInterval(function() {
    if (pos.x >= screen[0]-size || pos.x <= 0) {
      coef.x = -coef.x
    }
    pos.x+=coef.x
    pos.y+=coef.y

    flower.style.left = pos.x+'px';
    flower.style.top = pos.y+'px';


    if(pos.y >= screen[1]-size) {
      pos.y = screen[1]-size
      coef.x = 0
    }
},10);


});


socket.on('dropme', function(data){
  var user = data.data[0]
  old = document.getElementById(user.login)
  if (old) {
    old.remove()
  }


  drop = document.createElement('img')
  drop.id = user.login
  drop.className = "dropme"
  drop.src = user.profile_image_url
  drop.style.position = "absolute";
  document.getElementsByTagName('body')[0].appendChild(drop)
  var pos = {
    x: Math.floor(Math.random() * screen[0]),
    y: 0,
    r: 0
  }
  var coef = {
    x: 3,
    y: 1,
    r: 2
  }
  if (pos.x > screen[0]/2) {
    coef.x = -coef.x

  }
  var flower = document.getElementById(user.login)
  interval = setInterval(function() {
    if (pos.x >= screen[0]-size || pos.x <= 0) {
      coef.x = -coef.x
      coef.r = -coef.r
    }
    pos.x+=coef.x
    pos.y+=coef.y
    pos.r+= coef.r

    flower.style.left = pos.x+'px';
    flower.style.top = pos.y+'px';
    flower.style.transform = 'rotate(' + pos.r +  'deg)';


    if(pos.y >= screen[1]-size) {
      pos.y = screen[1]-size
      coef.x = 0
      coef.r = 0
    }
},10);


});
