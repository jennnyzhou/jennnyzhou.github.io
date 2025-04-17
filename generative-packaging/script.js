let sheetID = "1Bt5WbYY1SWL7rXlUyTR8Jq3b4d_0aWC67k4aChUNY-U";
let tabName = 'Sheet1';
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
console.log(opensheet_uri);

fetch(opensheet_uri)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    for (let scent of data) {
      let newScentDiv = document.createElement("div");
      newScentDiv.classList.add("scent");
      container.appendChild(newScentDiv);

      const name = scent["Perfume Name"];


      const fresh = scent.Fresh;
      const citrus = scent.Citrus;
      const warm = scent.Warm;
      const cozy = scent.Cozy;
      const floral = scent.Floral;
      const spicy = scent.Spicy;
      const woody = scent.Woody;
      const earthy = scent.Earthy;
      const ambery = scent.Ambery;

      const intensity = parseInt(scent.Intensity);
      const occasion = scent.Occasion;

      const spring = scent.Spring;
      const summer = scent.Summer;
      const autumn = scent.Autumn;
      const winter = scent.Winter;


      const brandText = document.createElement("replica");
      brandText.classList.add("brandText");
      brandText.innerHTML = "<h3>REPLICA</h3>";
      newScentDiv.appendChild(brandText);

      const perfumeName = document.createElement("h2");
    perfumeName.classList.add("perfume-name");
    perfumeName.innerText = name;
    newScentDiv.appendChild(perfumeName);



      if (fresh === "TRUE") {
        const freshIcon = createInlineTraitIcon(freshSVG, "fresh-icon", scent);
        newScentDiv.appendChild(freshIcon);
      }

      if (citrus === "TRUE") {
        const citrusIcon = createInlineTraitIcon(citrusSVG, "citrus-icon", scent);
        newScentDiv.appendChild(citrusIcon);
      }
      
      if (warm === "TRUE") {
        const warmIcon = createInlineTraitIcon(warmSVG, "warm-icon", scent);
        newScentDiv.appendChild(warmIcon);
      }
      
      if (cozy === "TRUE") {
        const cozyIcon = createInlineTraitIcon(cozySVG, "cozy-icon", scent);
        newScentDiv.appendChild(cozyIcon);
      }

      if (floral === "TRUE") {
        const floralIcon = createInlineTraitIcon(floralSVG, "floral-icon", scent);
        newScentDiv.appendChild(floralIcon);
      }

      if (spicy === "TRUE") {
        const spicyIcon = createInlineTraitIcon(spicySVG, "spicy-icon", scent);
        newScentDiv.appendChild(spicyIcon);
      }

      if (woody === "TRUE") {
        const woodyIcon = createInlineTraitIcon(woodySVG, "woody-icon", scent);
        newScentDiv.appendChild(woodyIcon);
      }

      if (earthy === "TRUE") {
        const earthyIcon = createInlineTraitIcon(earthySVG, "earthy-icon", scent);
        newScentDiv.appendChild(earthyIcon);
      }

      if (ambery === "TRUE") {
        const amberyIcon = createInlineTraitIcon(amberySVG, "ambery-icon", scent);
        newScentDiv.appendChild(amberyIcon);
      }

      function getSeasonColors(scent) {
        let colors = [];
        if (scent.Spring === "TRUE") colors.push("#FFBDC2");
        if (scent.Summer === "TRUE") colors.push("#3b941e");
        if (scent.Autumn === "TRUE") colors.push("#BB4B1F");
        if (scent.Winter === "TRUE") colors.push("#5695C8");
        return colors;
      }



      function createSeasonGradient(colors) {
        if (colors.length === 1) {
            return colors[0]; 
        }
        return `linear-gradient(45deg, ${colors.join(", ")})`; 
      }

      function createInlineTraitIcon(svgMarkup, className, scent) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("trait-icon-wrapper");
        wrapper.innerHTML = svgMarkup;

        const svg = wrapper.querySelector("svg");
        svg.classList.add("trait-icon", className);

        const seasonColors = getSeasonColors(scent);
        const gradient = createSeasonGradient(seasonColors);


        const fillables = svg.querySelectorAll("path, circle, rect, polygon, ellipse");
        fillables.forEach(el => {

            if (el.getAttribute("fill") === "none") return;

            if (seasonColors.length > 1) {

                const gradientId = `gradient-${className}-${Math.random().toString(36).substr(2, 9)}`;
                const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");

                linearGradient.setAttribute("id", gradientId);
                linearGradient.setAttribute("x1", "0%");
                linearGradient.setAttribute("y1", "0%");
                linearGradient.setAttribute("x2", "0%");
                linearGradient.setAttribute("y2", "100%");

                // Add color stops to the gradient
                seasonColors.forEach((color, index) => {
                    const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                    stop.setAttribute("offset", `${(index / (seasonColors.length - 1)) * 100}%`);
                    stop.setAttribute("stop-color", color);
                    linearGradient.appendChild(stop);
                });

                defs.appendChild(linearGradient);
                svg.prepend(defs); // Add the gradient definition to the SVG
                el.setAttribute("fill", `url(#${gradientId})`);
            } else {
                // Apply a single color if only one season
                el.setAttribute("fill", seasonColors[0] || "#000");
            }


            if (el.hasAttribute("stroke")) {

                if (seasonColors.length === 1) {
                    el.setAttribute("stroke", seasonColors[0]); 
                } else {
                    el.setAttribute("stroke", `url(#${gradientId})`); 
                }
            }
        });



        return wrapper;
      }

      const logoText = document.createElement("margiela");
      logoText.classList.add("logoText");
      logoText.innerHTML = "<h4>Maison Margiela</h4><h5>PARIS</h5>";
      newScentDiv.appendChild(logoText);

      newScentDiv.style.backgroundColor = occasion; 

      if (occasion === 'Casual / Daytime') {
          newScentDiv.style.backgroundColor = 'white'; 
      }
  
      if (occasion === 'Evening / Fancy') {
          newScentDiv.style.backgroundColor = 'black'; 
          brandText.style.color = 'white';
          perfumeName.style.color = 'white';
          logoText.style.color = 'white';
      }
  
      if (occasion === 'Festive') {
          newScentDiv.style.backgroundColor = '#a89077'; 
      }
  
  

      function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
      }
    }
  })
  .catch(err => {
    console.log("Something went wrong!", err);
  });



const freshSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M128.87,134.85c0,37.39-12.93,52.77-28.87,52.77s-28.87-15.38-28.87-52.77S100,12.38,100,12.38c0,0,28.87,85.08,28.87,122.47Z"/>
</svg>
`;

const citrusSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M112.26,151.94c0,15.86-5.48,22.38-12.24,22.38s-12.24-6.52-12.24-22.38,12.24-51.94,12.24-51.94c0,0,12.24,36.08,12.24,51.94Z"/>
  <path d="M87.76,48.08c-.02-15.86,5.45-22.39,12.21-22.4s12.25,6.5,12.28,22.36c.02,15.86-12.17,51.95-12.17,51.95,0,0-12.29-36.06-12.32-51.92Z"/>
  <path d="M48.06,111.48c-15.86,0-22.38-5.48-22.38-12.24s6.52-12.24,22.38-12.24,51.94,12.24,51.94,12.24c0,0-36.08,12.24-51.94,12.24Z"/>
  <path d="M151.92,86.98c15.86-.02,22.39,5.45,22.4,12.21s-6.5,12.25-22.36,12.28-51.95-12.17-51.95-12.17c0,0,36.06-12.29,51.92-12.32Z"/>
  <circle cx="100.02" cy="100" r="84.34" stroke="#000" stroke-width="4" fill="none"/>
</svg>
`;

const warmSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M143.19,49.77s-10.99,32.39-17.43,61.45c-6.5-39.24-25.25-94.5-25.25-94.5,0,0-19.17,56.5-25.46,95.81-6.4-29.38-17.72-62.76-17.72-62.76,0,0-22,64.82-22,93.31s9.85,40.2,22,40.2c8.77,0,16.34-6.11,19.87-20.23,4.84,14.06,13.47,20.23,23.31,20.23s18.13-5.94,23.03-19.43c3.62,13.54,11.06,19.43,19.66,19.43,12.15,0,22-11.72,22-40.2s-22-93.31-22-93.31Z"/>
</svg>
`;

const cozySVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M136.91,65.65c-.39,0-.78.02-1.17.03.09-1.02.14-2.05.14-3.09
           0-19.82-16.06-35.88-35.88-35.88s-35.88,16.06-35.88,35.88c0,0,0,.02,0,.03
           -.34,0-.68-.03-1.03-.03-19.82,0-35.88,16.06-35.88,35.88s16.06,35.88,35.88,35.88
           c.39,0,.78-.02,1.17-.03-.09,1.02-.14,2.05-.14,3.09
           0,19.82,16.06,35.88,35.88,35.88s35.88-16.06,35.88-35.88c0,0,0-.02,0-.03
           .34,0,.68.03,1.03.03,19.82,0,35.88-16.06,35.88-35.88s-16.06-35.88-35.88-35.88Z"/>
</svg>
`;

const floralSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M154.12,99.7c-.31-.28-.63-.55-.94-.82.81-.74,1.6-1.52,2.36-2.34
           14.41-15.65,13.39-40.02-2.26-54.43-15.65-14.41-40.02-13.39-54.43,2.26
           0,0-.01.01-.02.02-.26-.26-.52-.52-.79-.77-15.65-14.41-40.02-13.39-54.43,2.26
           -14.41,15.65-13.39,40.02,2.26,54.43.31.28.63.55.94.82-.81.74-1.6,1.52-2.36,2.34
           -14.41,15.65-13.39,40.02,2.26,54.43,15.65,14.41,40.02,13.39,54.43-2.26
           0,0,.01-.01.02-.02.26.26.52.52.79.77,15.65,14.41,40.02,13.39,54.43-2.26
           14.41-15.65,13.39-40.02-2.26-54.43Z"/>
</svg>
`;


const spicySVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M128.87,123.74c0,37.39-12.93,63.1-28.87,63.1s-28.87-15.38-28.87-52.77
           S100,11.6,100,11.6c0,0,4.43,108.84,11.15,115.56,7.34,7.34,17.72-3.41,17.72-3.41Z"/>
</svg>
`;

const woodySVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path fill="#231f20" d="M154.12,99.7c-.31-.28-.63-.55-.94-.82.81-.74,1.6-1.52,2.36-2.34,
    14.41-15.65,13.39-40.02-2.26-54.43-15.65-14.41-40.02-13.39-54.43,2.26c0,0-.01.01-.02.02
    -.26-.26-.52-.52-.79-.77-15.65-14.41-40.02-13.39-54.43,2.26-14.41,15.65-13.39,40.02,
    2.26,54.43.31.28.63.55.94.82-.81.74-1.6,1.52-2.36,2.34-14.41,15.65-13.39,40.02,
    2.26,54.43,15.65,14.41,40.02,13.39,54.43-2.26,0,0,.01-.01.02-.02.26.26.52.52.79.77,
    15.65,14.41,40.02,13.39,54.43-2.26,14.41-15.65,13.39-40.02-2.26-54.43Z"/>
  <path fill="#414042" d="M133.25,99.82c-.19-.17-.38-.34-.57-.5.49-.45.98-.92,1.44-1.43,
    8.77-9.53,8.15-24.37-1.38-33.14s-24.37-8.15-33.14,1.38c0,0,0,0-.01.01-.16-.16-.32-.31
    -.48-.47-9.53-8.77-24.37-8.15-33.14,1.38-8.77,9.53-8.15,24.37,1.38,33.14.19.17.38.34
    .57.5-.49.45-.98.92-1.44,1.43-8.77,9.53-8.15,24.37,1.38,33.14,9.53,8.77,24.37,8.15,
    33.14-1.38,0,0,0,0,.01-.01.16.16.32.31.48.47,9.53,8.77,24.37,8.15,33.14-1.38,
    8.77-9.53,8.15-24.37-1.38-33.14Z"/>
</svg>
`;

const earthySVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M42.22,69.21c-16.96-3.85-22.6-11.3-20.96-18.53,1.64-7.23,9.95-11.51,26.91-7.66
           s52.58,25.72,52.58,25.72c0,0-41.57,4.33-58.53.48Z"/>
  <path d="M151.88,43.03c16.98-3.76,25.27.56,26.87,7.8,1.6,7.24-4.08,14.66-21.06,18.42
           s-58.53-.79-58.53-.79c0,0,35.73-21.67,52.72-25.43Z"/>
  <line x1="99.16" y1="67.25" x2="99.16" y2="158.43"/>
</svg>
`;

const amberySVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M71.13,65.15c0-37.39,12.93-52.77,28.87-52.77s28.87,15.38,28.87,52.77
           -28.87,122.47-28.87,122.47c0,0-28.87-85.08-28.87-122.47Z"/>
</svg>
`;

