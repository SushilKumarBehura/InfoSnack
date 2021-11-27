/*
  OK THATS IT. JUST PLAY WITH IT----
  -------------------------
*/
var c = document.getElementById('world');
var ctx = c.getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;
var m = {
  x : 0,
  y : 0
};
var cdist = 100; //connect distance 
window.onmousedown = function(e) {
  if(e.button == 0) {
    p.push(new Particle(m.x , m.y));
  }
  
}


window.onmousemove = function(e) {
  m.x = e.clientX || e.pageX || 0;
  m.y = e.clientY || e.pageY || 0;
}
c.width = w;
c.height = h;

function drawBG(clr) {
  ctx.fillStyle = clr
ctx.fillRect(0,0,w,h);
}



function drawText(txt , x , y , size , types , color) {
  ctx.font = size + "px" + " anton";
  ctx.textAlign = "center";
  ctx.lineWidth = 1;
  if(types == "stroke") {
    ctx.strokeStyle = color;
    ctx.strokeText(txt , x, y);
  } else if(types = "fill") {
    ctx.fillStyle = color;
    ctx.fillText(txt , x, y);
  }
  
  
}

function removeParticle(p , i) {
  window.onkeydown = function(e) {
    if(e.keyCode == 32) {
      p.splice(i , 1);
    }
  }
}



//random color generator...........
// function randomColor() {
//   var r = Math.floor(Math.random() * 255);
//   var g = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);
  
//   return "rgb(" + r + ',' + g + ',' + b + ")";
// }
var p = [] , cnt = 200;

for(var i = 0; i < cnt; i++) {
  p.push(new Particle());
}

function Particle(x , y) {
  this.x = x || Math.random() * w;
  this.y = y || Math.random() * h;
  this.vx = (Math.random() - 0.5) * 0.6;
  this.vy = (Math.random() - 0.5) * 0.6;
  this.rad = 0.8;
  this.color = "#fff" 
  
  this.move = function() {
    this.x += this.vx;
    this.y += this.vy;

      if(this.x > w + this.rad) {
        this.x = 0 - this.rad;
      } else if(this.x < 0 - this.rad) {
        this.x = w + this.rad;
      }
    
    if(this.y > h + this.rad) {
        this.y = 0 - this.rad;
      } else if(this.y < 0 - this.rad) {
        this.x = h + this.rad;
      }
  }
  this.show = function() {
    ctx.beginPath();
    ctx.arc(this.x , this.y , this.rad , 0 , Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

}

function connectDots(p1 , p2) {
  var dx = p1.x - p2.x;
  var dy = p1.y - p2.y;
  var dist = Math.sqrt(dx * dx + dy * dy);
  
  if(dist <= cdist) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(200,201,250,1)";
    ctx.lineWidth = 0.07;
    ctx.moveTo(p1.x , p1.y);
    ctx.lineTo(p2.x , p2.y);
    ctx.stroke();
    ctx.closePath();
  }
}

loop();


function loop() {
  window.requestAnimationFrame(loop);
  drawBG("#333");
    //   drawText("Made With ♥ & Javascript" , w / 2 , h / 2 , 65 , "stroke" , "#fff");
    drawText(w / 2 + 350 , h / 2 + 140 , 20 , "fill", "#fff")
for(var i = 0; i < p.length; i++) {
    p[i].show();
    p[i].move();
    removeParticle(p , 1);
    
    
    connectDots(p[i],m);
    for(var j = 0; j < p.length; j++) {
      connectDots(p[i],p[j]);
    }
  }
}