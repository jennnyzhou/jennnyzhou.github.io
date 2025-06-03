let phones = [];
let phoneImages = [];
let handImage;
let prevMouseX, prevMouseY; 
let handAngle = 0; 

function preload() {
    phoneImages.push(loadImage('phone1.gif'));
    phoneImages.push(loadImage('phone2.gif'));
    phoneImages.push(loadImage('phone3.gif'));
    phoneImages.push(loadImage('phone4.gif'));
    phoneImages.push(loadImage('phone5.gif'));
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
    background('blue');


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
        this.velocity = createVector(random(-3, 3), random(-3, 3)); // Random initial velocity
        this.size = 600;
        this.image = random(phoneImages);
        this.aspectRatio = this.image.width / this.image.height; 
    }

    update() {
        // Update position based on velocity
        this.position.add(this.velocity);

        // Check for collisions with canvas edges and reverse velocity
        if (this.position.x - this.size / 2 < 0 || this.position.x + this.size / 2 > width) {
            this.velocity.x *= -1; // Reverse horizontal velocity
        }
        if (this.position.y - (this.size / this.aspectRatio) / 2 < 0 || this.position.y + (this.size / this.aspectRatio) / 2 > height) {
            this.velocity.y *= -1; // Reverse vertical velocity
        }

        // Optional: Add interaction with the mouse
        const mouse = createVector(mouseX, mouseY);
        const force = p5.Vector.sub(this.position, mouse);
        const distance = force.mag();
        if (distance < 300) {
            force.setMag(5);
            this.position.add(force);
        }
    }

    display() {
        const adjustedHeight = this.size / this.aspectRatio; // Adjust height based on aspect ratio
        image(
            this.image,
            this.position.x - this.size / 2, // Center the image horizontally
            this.position.y - adjustedHeight / 2, // Center the image vertically
            this.size, // Use the fixed width
            adjustedHeight // Use the dynamically calculated height
        );
    }
}
