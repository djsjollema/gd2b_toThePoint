const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(200,300,20,"#FFFF00");
a.draw();
a.drag();

setInterval(loop,1);

function loop(){
  context.clearRect(0,0,800,450);
  a.draw();
}
