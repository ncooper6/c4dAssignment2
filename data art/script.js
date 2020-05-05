const rainDrop = [];
let rainData;
let counter = 0; //declares the counter used to track when a year has passed
let monthCounter = -1; //month tracker - set to avoid starting on the wrong year
let yearCounter = 0; //tracks the years

function setup() { //p5 function to initialise the environment
  createCanvas(640, 360); //creates canvas
  loadJSON("http://localhost:3000/db", getData);
  //p5 function loads JSON from URL - (local JSON server being used)

  function getData(data) { //p5 populates the data from the URL
    let rainJSON = data.rainfall[0].data; //variable for path of rainfall data
    let yearJSON = data.years[0].data; //variable for path of years data
    let monthJSON = data.months[0].data; //variable for path of months data
    //console.log(rainJSON.length);
    var offset = 0; //sets the timer to 0
    //loop referenced from https://stackoverflow.com/questions/17246275/settimeout-and-array-each
    rainJSON.forEach(function(dataset) { //cycles through the rainfall data as this will be used the most it can incapsulate the counters
      setTimeout(function() { //function to delay the output of data
        rainData = dataset; //defining rain data
        counter++; //counter used to track when a year has passed
        monthCounter++; //counter used to track months
        //console.log(rainData);
        for (var i = 0; i < rainData; i++) { //loop creates drops using rain data
          rainDrop[i] = new Drop(); //creates an array of drops
          //console.log(i);
        }
        if (monthCounter > 11) { //works out when a year has passed and resets months
          monthCounter = 0;
        }
        if (((counter - 1) != 0) && (counter - 1) % 12 == 0) { //works out when a year has passed and increases counter
          yearCounter++;
        };

        console.log(rainData + " " + counter + " " + yearCounter);
        yearHUD = yearJSON[yearCounter]; //variable for display of data
        monthHUD = monthJSON[monthCounter]; //variable for display of data
      }, 3500 + offset); //sets a delay of 3.5 seconds
      offset += 3500; //delay has to be increased to space out individual loop results
    });
  }
}



let yearHUD; //declaring varaibles
let monthHUD;

function draw() { //p5 function to draw elements
  background(255, 255, 255);
  for (var i = 0; i < rainDrop.length; i++) { //runs for length of rainDrop array
    rainDrop[i].fall(); //calls functions defined in rainDrop.js
    rainDrop[i].show();
  }
  //styling for the hud at the top of the page
  stroke('black');
  strokeWeight(1);
  fill('white');
  rect(0, 0, width, 50);
  stroke('none');
  fill('black');
  textSize(25);
  text(yearHUD, 50, 35);
  text(monthHUD, (width / 2) - 100, 35);
  text("Rainfall = " + rainData + "(mm)", (width / 2) + 25, 35);
}
//}*/