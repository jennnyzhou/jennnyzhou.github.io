let phones = [];
let phoneImages = [];
let handImage;
let prevMouseX, prevMouseY; 
let handAngle = 0; 

function preload() {
    phoneImages.push(loadImage('phone.png'));
    phoneImages.push(loadImage('phone2.png'));
    phoneImages.push(loadImage('phone3.png'));
    phoneImages.push(loadImage('phone4.png'));
    phoneImages.push(loadImage('phone5.png'));
    handImage = loadImage('hand.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    for (let i = 0; i < 50; i++) {
        phones.push(new Phone(random(width), random(height)));
    }
}

function draw() {
    background('white');


    for (let phone of phones) {
        phone.update();
        phone.display();
    }


    let dx = mouseX - prevMouseX;
    let dy = mouseY - prevMouseY;
    if (dx !== 0 || dy !== 0) { 
        handAngle = atan2(dy, dx); 
    }


    let handWidth = 250;
    let handHeight = handImage.height * (handWidth / handImage.width);
    
    push();
    translate(mouseX, mouseY);
    rotate(handAngle);
    imageMode(CENTER);
    image(handImage, 0, 0, handWidth, handHeight);
    pop();

    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

class Phone {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.size = 300;
        this.image = random(phoneImages);
    }

    update() {
        const mouse = createVector(mouseX, mouseY);
        const force = p5.Vector.sub(this.position, mouse);
        const distance = force.mag();
        if (distance < 300) {
            force.setMag(5);
            this.position.add(force);
        }
    }

    display() {
        image(this.image, this.position.x - this.size / 2, this.position.y - this.size / 2, this.size, this.size);
    }
}
