// Define an array of links
const links = [
    "https://www.nytimes.com/2022/02/14/nyregion/suspect-christina-yuna-lee-murder.html",
    "https://www.theguardian.com/us-news/2022/mar/16/anti-asian-racism-atlanta-spa-shootings-anniversary",
    "https://abc7news.com/man-pushed-to-ground-in-oakland-violence-chinatown-robberies/10311111/",
    "https://www.washingtonpost.com/nation/2021/03/30/asian-american-attack-newyork-condo/",
    "https://www.sfexaminer.com/archives/teen-facing-murder-pleads-not-guilty-in-death-of-elder/article_35ca9229-a67b-5b28-9ace-8c0816f2924b.html",
    "https://www.sfexaminer.com/news/prosecutors-say-suspect-beat-88-year-old-woman-with-cane/article_34230f29-b760-52e1-862e-66899e84aaaa.html",
    "https://nextshark.com/elderly-filipino-man-icu-robbed-new-years-eve",
    "https://nextshark.com/l-subway-rain-man-slashed-face",
    "https://nextshark.com/grandmother-robbed-in-san-jose",
    "https://www.cnn.com/2022/06/23/us/vincent-chin-death-40-anniversary-cec/index.html",
    "https://www.dailymail.co.uk/news/article-11799327/Mark-Wahlberg-convicted-racist-hate-crimes-TWICE.html"
  ];
  
  // Define a function that generates a random link from the array
  function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  }
  
  // Get a reference to the h1 element
  const myH1 = document.getElementById("myH1");
  
  // Attach an event listener to the h1 element
  myH1.addEventListener("click", () => {
    console.log("Clicked on the h1 element");
    // Call the function that generates a random link
    const randomLink = getRandomLink();
    // Redirect the user to the random link
    window.location.href = randomLink;
  });
  
// // Define an array of links
// var links = [
// "https://www.nytimes.com/2022/02/14/nyregion/suspect-christina-yuna-lee-murder.html",
// "https://www.theguardian.com/us-news/2022/mar/16/anti-asian-racism-atlanta-spa-shootings-anniversary",
// "https://abc7news.com/man-pushed-to-ground-in-oakland-violence-chinatown-robberies/10311111/",
// "https://www.washingtonpost.com/nation/2021/03/30/asian-american-attack-newyork-condo/",
// "https://www.sfexaminer.com/archives/teen-facing-murder-pleads-not-guilty-in-death-of-elder/article_35ca9229-a67b-5b28-9ace-8c0816f2924b.html",
// "https://www.sfexaminer.com/news/prosecutors-say-suspect-beat-88-year-old-woman-with-cane/article_34230f29-b760-52e1-862e-66899e84aaaa.html",
// "https://nextshark.com/elderly-filipino-man-icu-robbed-new-years-eve",
// "https://nextshark.com/l-subway-rain-man-slashed-face",
// "https://nextshark.com/grandmother-robbed-in-san-jose",
// "https://www.cnn.com/2022/06/23/us/vincent-chin-death-40-anniversary-cec/index.html",
// "https://www.dailymail.co.uk/news/article-11799327/Mark-Wahlberg-convicted-racist-hate-crimes-TWICE.html"
// ];

// // Get the h1 element
// const myH1 = document.querySelector('h1');

// myH1.addEventListener('click', function() {
//     console.log('H1 clicked'); // add this line
//     const link = links[Math.floor(Math.random() * links.length)];
//     window.location.href = link;
//   });
  