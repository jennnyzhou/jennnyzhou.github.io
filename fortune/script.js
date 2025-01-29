
  
var textarray = [
    "i grew up in argentina and ever since i moved here i have been getting asked why i am from there so many times", 
    "i have a really cute bunny named oreo", 
    "my most listened to artist last year was beabadoobee", 
    "my younger brother is called nacho (short for ignacio)",
    "drinking an arctic vibe flavoured celsius while i type this",
    "fun fact is i cannot think of facts that are fun right now",
    "i am terrified about graduating omg everyone pray i can stay in the country lol",
    "the bathroom in my apartment is shark themed",
    "i tried dyeing my hair lavender and it looked crazy so i tried to dye it back to brown and it turned gray so now it's back to black and i'm really upset about it",
    "i didn't tan mindfully this past break and now my back looks like i was put on a grill but no one will ever know",
    "there are eleven facts in this array including this one ... feeling uninspired 💔 "
];

function RndText() {

    var rannum= Math.floor(Math.random()*textarray.length);
    
    document.getElementById('ShowText').innerHTML=textarray[rannum];
    
    }
    
    onload = function() { RndText(); }
    
