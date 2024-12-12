
const camera = document.getElementById('camera');


navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        
        camera.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing the camera: ', error);
    });
