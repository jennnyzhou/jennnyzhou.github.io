const body = document.body;
const container = document.getElementById("container");
const logo = document.getElementById("logo");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'a5e7c7c7b1msh454018ca23d5e9cp1c6664jsn67de886197da',
        'x-rapidapi-host': 'instagram230.p.rapidapi.com'
    }
};

let previousComments = 0; 

function addSparkles(count) {
    console.log(`Adding ${count} sparkle(s)`); 

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 12 + 8;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 2 + 1; 
        const delay = Math.random() * 2; 
        sparkle.style.setProperty('--animation-duration', `${duration}s`);
        sparkle.style.setProperty('--animation-delay', `${delay}s`);
        
        sparkle.style.setProperty('--rotation-direction', Math.random() < 0.5 ? 'clockwise' : 'counterclockwise');

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 86400000); 
    }
}

async function fetchData() {
    const url = 'https://instagram230.p.rapidapi.com/user/posts?username=cosmopolitan';
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const dataObject = JSON.parse(result);

        
        const currentComments = dataObject.items[5].comment_count;
        console.log(`Current comments: ${currentComments}`);

        
        if (currentComments > previousComments) {
            const newComments = currentComments - previousComments;
            addSparkles(newComments); 
        }

       
        previousComments = currentComments;
    } catch (error) {
        console.error(error);
    }
}


fetchData();


setInterval(fetchData, 60000);

// const body = document.body;
// const myEl = document.getElementById("logo");

// let previousComments = 0; 
// let currentComments = 4; 

// function addSparkles(count) {
//     console.log(`Adding ${count} sparkle(s)`);

//     for (let i = 0; i < count; i++) {
//         const sparkle = document.createElement('div');
//         sparkle.className = 'sparkle';
//         sparkle.style.top = `${Math.random() * 100}%`;
//         sparkle.style.left = `${Math.random() * 100}%`;

//         myEl.appendChild(sparkle);

       
//         setTimeout(() => {
//             sparkle.remove();
//         }, 86400000); // 24 hours in milliseconds
//     }
// }

// // 🚀 Dummy Comment Simulator
// function simulateComments() {
//     // Increase comments randomly between 1 and 3 per update
//     const newComments = Math.floor(Math.random() * 3) + 1; // 1 to 3 comments
//     currentComments += newComments;

//     console.log(`Simulated comments: ${currentComments}`);

//     // Add sparkles only if comments have increased
//     if (currentComments > previousComments) {
//         const addedComments = currentComments - previousComments;
//         addSparkles(addedComments);
//     }

//     // Update previousComments for the next cycle
//     previousComments = currentComments;
// }

// // 🕒 Run simulation every 10 seconds (for faster testing)
// setInterval(simulateComments, 10000); // Change to 60000 for 1 min in real case
