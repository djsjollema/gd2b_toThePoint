const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(400,200,20,"#ff0000");
a.draw();
a.drag();

var b = new Point(300,100,10,"#00ff00");
b.draw();
