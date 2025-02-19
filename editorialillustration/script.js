let phones = [];
let phoneVideo;
let phoneImage;
let handImage;

function preload() {
    phoneVideo = createVideo('video1.mp4'); 
    phoneVideo.hide(); // Hide the default HTML element
    phoneVideo.loop(); // Keep it looping
    phoneVideo.autoplay(true); // Make sure it starts
    handImage = loadImage('hand.png'); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    for (let i = 0; i < 10; i++) { // Fewer for better performance
        phones.push(new Phone(random(width), random(height)));
    }
    
}

function draw() {
    background('white');

    for (let phone of phones) {
        phone.update();
        phone.display();
    }


    let handWidth = 250;
    let handHeight = handImage.height * (handWidth / handImage.width);
    image(handImage, mouseX - handWidth / 2, mouseY - handHeight / 2, handWidth, handHeight);
}

class Phone {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.size = 200;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let force = p5.Vector.sub(this.position, mouse);
        let distance = force.mag();
        
        if (distance < 200) { // Repelling range
            force.setMag(5); 
            this.position.add(force);
        }
    }

    display() {
        // Extract the current video frame and draw it as an image
        image(phoneVideo, this.position.x - this.size / 2, this.position.y - this.size / 2, this.size, this.size);
    }
}
