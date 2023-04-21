fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    data.forEach(item => {
      const element = document.createElement('p');
      element.textContent = `Incident: ${item.boro_nm} - ${item.victim_race}: ${item.bias_motivation}`;
      container.appendChild(element);
    });
    document.body.appendChild(container);
  })
  .catch(error => console.error(error));