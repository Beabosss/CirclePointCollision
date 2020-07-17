function setup() {
  createCanvas(700, 700);
}

function collidePointCircle(px, py, cx, cy, d){
  let r = d/2
  distance = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2)
  if (distance <= r){
    stroke("red")
    return true
  }
  else{
    stroke("black")
    return false
  }
}

function draw() {
  let cx = 350
  let cy = 350
  let d = 50
  let px = mouseX
  let py = mouseY
  background(220);
  circle(cx, cy, d)
  point(px, py, 10)
  
  collidePointCircle(px, py, cx, cy, d)
  
}