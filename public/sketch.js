let socket;

function setup() {
 createCanvas(200, 200);
background(51);

 socket = io.connect('http://localhost:3000');
 socket.on('mouse', (data) => {
    noStroke();
    fill(255,0, 100);
    ellipse(data.x, data.y, 2, 2);
 });
}

function draw() {

}

function mouseDragged() {
    console.log(mouseX + ", "+ mouseY);

    var data = {
        x: mouseX,
        y: mouseY 
    }
    
    socket.emit('mouse', data);


    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
}