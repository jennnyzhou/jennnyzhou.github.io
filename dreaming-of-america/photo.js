const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
    video: true,
};

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        player.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing the camera: ', error);
    });

captureButton.addEventListener('click', () => {
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    
    // Store the captured photo data in localStorage
    localStorage.setItem('capturedPhotoData', canvas.toDataURL('image/jpeg'));
    
    // Redirect to the next page (id.html)
    window.location.href = 'id.html';
});
