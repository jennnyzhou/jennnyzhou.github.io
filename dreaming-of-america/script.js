let formData = {
    name: '',
    bday: '',
    job: '',
    location: '',
    reason: '',
    photo: ''
};


document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        formData = JSON.parse(savedData);
    }
    

    if (document.getElementById('userData')) {
        displayIDCard();
    }
});


function saveName() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput && nameInput.value.trim() !== '') {
        formData.name = nameInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Name saved:', formData.name);
    } else {
        alert('Please enter your name');
        event.preventDefault();
        button.disabled = true;
        return false;
    }
}


function saveBday() {
    const bdayInput = document.getElementById('bdayInput');
    if (bdayInput && bdayInput.value.trim() !== '') {
        formData.bday = bdayInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Birthday saved:', formData.bday);
    } else {
        alert('Please enter your birthday');
        event.preventDefault();
        button.disabled = true;
        return false;
    }
}


function saveJob() {
    const jobInput = document.getElementById('jobInput');
    if (jobInput && jobInput.value.trim() !== '') {
        formData.job = jobInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Job saved:', formData.job);
    } else {
        alert('Are you embarrassed');
        event.preventDefault();
        button.disabled = true;
        return false;
    }
}


function saveLocation() {
    const locationInput = document.getElementById('locationInput');
    if (locationInput && locationInput.value.trim() !== '') {
        formData.location = locationInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Location saved:', formData.location);
    } else {
        alert('Are you hiding something');
        event.preventDefault();
        button.disabled = true;
        return false;
    }
}


function saveReason() {
    const reasonInput = document.getElementById('reasonInput');
    if (reasonInput && reasonInput.value.trim() !== '') {
        formData.reason = reasonInput.value.trim();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Reason saved:', formData.reason);
    } else {
        alert('Do you not want to be here');
        event.preventDefault();
        button.disabled = true;
        return false;
    }
}


function savePhoto(photoData) {
    formData.photo = photoData;
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Photo saved');
}

function displayIDCard() {
    const userData = document.getElementById('userData');
    const userPhoto = document.getElementById('userPhoto');
    
    if (userData && userPhoto) {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const data = JSON.parse(savedData);

            if (data.photo) {
                userPhoto.src = data.photo;
            }

            userData.innerHTML = `

                <div class="id-row">
                    <p><strong>NAME</strong><br>${data.name || 'Not provided'}</p>
                    <p><strong>DOB</strong><br>${data.bday || 'Not provided'}</p>
                </div>
                <div class="id-row">
                    <p><strong>UNEMPLOYED</strong><br>${data.job || 'Not provided'}</p>
                    <p><strong>NATIONALITY</strong><br>${data.location || 'Not provided'}</p>
                </div>
                <div class="id-row">
                    <p><strong>HERE BECAUSE</strong><br>${data.reason || 'Not provided'}</p>
                </div>
                <div class="id-row">
                    <p><strong>EXPIRES:</strong></p>
                    <h2><span>N</span>ever!!!</h2>
                </div>

            `;
        }
    }
}