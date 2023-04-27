fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    const asianHateCrimes = data.filter(crime => crime.bias_desc === 'Anti-Asian');
    asianHateCrimes.forEach(item => {
      const element = document.createElement('p');
      element.textContent = `Incident: ${item.boro_nm} - ${item.vic_race}: ${item.bias_desc}`;
      container.appendChild(element);
    });
    document.body.appendChild(container);
  })
  .catch(error => console.error(error));