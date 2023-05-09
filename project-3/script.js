const url = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

let data = [];

fetch(url + '?$limit=100000')
  .then(response => response.json())
  .then(json => {
    data = json.filter(item => item.bias_motive_description === 'ANTI-ASIAN' && item.complaint_year_number);

    // data[0].county

    const years = {};
    data.forEach(item => {
      const year = item.complaint_year_number;
      if (year in years) {
        years[year] += 1;
      } else {
        years[year] = 1;
      }
    });


    const sortedYears = Object.keys(years).sort();


    const padding = 50;
    const width = canvas.width - padding * 2;
    const height = canvas.height - padding * 2;
    const barWidth = width / (sortedYears.length * 2); 

    const maxValue = Math.max(...Object.values(years));
    const barHeightRatio = height / maxValue;


    ctx.fillStyle = 'white';
    sortedYears.forEach((year, index) => {
      const value = years[year];
      const barHeight = value * barHeightRatio;
      const x = padding + index * barWidth * 2; 
      const y = canvas.height - barHeight - padding;
      ctx.fillRect(x, y, barWidth, barHeight);
    });


    ctx.fillStyle = 'white';
    ctx.font = '12px aktiv-grotesk-extended';
    sortedYears.forEach((year, index) => {
      const x = padding + index * barWidth * 2;
      const y = canvas.height - padding + 15;
      ctx.fillText(year, x, y, barWidth);
    });

    // ctx.fillText('NYC Open Data of Anti-Asian Hate Crimes', 10, 30);
  })
  .catch(error => console.error(error));


// const url = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
// const canvas = document.getElementById('myChart');
// const ctx = canvas.getContext('2d');

// let data = [];

// fetch(url + '?$limit=100000')
//   .then(response => response.json())
//   .then(json => {
//     data = json;

//     // Get data for each year
//     data.forEach(item => {
//       const year = item.complaint_year_number;
//       if (year in years) {
//         years[year] += 1;
//       } else {
//         years[year] = 1;
//       }
// });


//     // Sort the years
//     const sortedYears = Object.keys(years).sort();

//     // Calculate graph dimensions
//     const padding = 50;
//     const width = canvas.width - padding * 2;
//     const height = canvas.height - padding * 2;
//     const barWidth = width / sortedYears.length;

//     // Create the chart using Chart.js
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: sortedYears,
//         datasets: [
//           {
//             label: 'Number of Incidents',
//             data: Object.values(years),
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   });