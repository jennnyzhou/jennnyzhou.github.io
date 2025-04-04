let formData = {
    name: '',
    bday: '',
    job: '',
    location: '',
    reason: '',
    photo: ''
};

// Load saved data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        formData = JSON.parse(savedData);
    }
    
    // Display data if we're on the ID card page
    if (document.getElementById('userData')) {
        displayIDCard();
    }
});

// Save name from name.html
function saveName() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput && nameInput.value.trim() !== '') {
        formData.name = nameInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Name saved:', formData.name);
    } else {
        alert('Please enter your name');
        return false;
    }
}

// Save birthday from dob.html
function saveBday() {
    const bdayInput = document.getElementById('bdayInput');
    if (bdayInput && bdayInput.value.trim() !== '') {
        formData.bday = bdayInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Birthday saved:', formData.bday);
    } else {
        alert('Please enter your birthday');
        return false;
    }
}

// Save job from job.html
function saveJob() {
    const jobInput = document.getElementById('jobInput');
    if (jobInput && jobInput.value.trim() !== '') {
        formData.job = jobInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Job saved:', formData.job);
    } else {
        alert('Please enter your job');
        return false;
    }
}

// Save location from location.html
function saveLocation() {
    const locationInput = document.getElementById('locationInput');
    if (locationInput && locationInput.value.trim() !== '') {
        formData.location = locationInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Location saved:', formData.location);
    } else {
        alert('Please enter your location');
        return false;
    }
}

// Save reason from reason.html
function saveReason() {
    const reasonInput = document.getElementById('reasonInput');
    if (reasonInput && reasonInput.value.trim() !== '') {
        formData.reason = reasonInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Reason saved:', formData.reason);
    } else {
        alert('Do you not want to be here');
        return false;
    }
}

// Save photo from photo.html
function savePhoto(photoData) {
    formData.photo = photoData;
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Photo saved');
}

// Display collected data on ID card
function displayIDCard() {
    const userData = document.getElementById('userData');
    const userPhoto = document.getElementById('userPhoto');
    
    if (userData && userPhoto) {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Display photo if available
            if (data.photo) {
                userPhoto.src = data.photo;
            }
            
            // Display user data
            userData.innerHTML = `
                <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
                <p><strong>Date of Birth:</strong> ${data.bday || 'Not provided'}</p>
                <p><strong>Job:</strong> ${data.job || 'Not provided'}</p>
                <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
                <p><strong>Here because:</strong> ${data.reason || 'Not provided'}</p>
            `;
        }
    }
}