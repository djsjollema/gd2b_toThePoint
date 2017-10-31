class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#ffff00";
    console.log("hallo point");
  }
  draw(){
    context.beginPath();
    context.fillStyle= this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  drag(){
    let drag = false;
    let x,y;

    canvas.addEventListener('mousedown',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      x = evt.clientX - rect.left;
      y = evt.clientY - rect.top;
      console.log(x,y);
    })

  }
}
