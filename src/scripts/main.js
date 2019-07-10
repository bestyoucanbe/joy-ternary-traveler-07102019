console.log("Your Webpack application is set up and ready to go. Please start writing code.") //Testing if application is loading

import { API } from "./api.js"

// **Given** a user has already has points of interests
// **When** the user opens the application
// **Then** all points of interests should be displayed with their name, description, cost, review if it's not blank and the place it is located

function createTemplate (name, desc, cost, review) {
  let createPointofInterestTemplate = `
                ****************************************************
                <h3 id="nameofPointInterest">${name}<h3>
                <h3 id="nameofPointInterest">${desc}<h3>
                <h3 id="nameofPointInterest">${cost}<h3>
                <h3 id="nameofPointInterest">${review}<h3>
                *****************************************************`
  return createPointofInterestTemplate
}

let divEachPlace = document.createElement("Div") //Div to hold the location
let divPointsofInterest = document.createElement("Div")  //Div to hold location of points of interest

for (let i = 1; i <= 3; i++) { //for each place, list the points of interest
  //i = 1, then place = Italy  i=2, then place = Switzerland  i=3, then place = France
  API.getfromDatabase(i).then(data => {
    if (i = 1) {// Italy
      divEachPlace.innerHTML = "<h1>Location: Italy <h1>"
      document.querySelector("#container").appendChild(divEachPlace) //Attach the title to the DOM
      let holdTemplate = ""; //variable for holding the template
          for (let j = 0; j < data.length; j++) {
            let itemNumber = j + 1;
            let namePointInterest = data[j].name
            let descPointInterest = data[j].description
            let costPointInterest = data[j].cost
            let reviPointInterest = data[j].review
            holdTemplate += createTemplate(namePointInterest,descPointInterest,costPointInterest,reviPointInterest);
            console.log("main", namePointInterest, descPointInterest, costPointInterest, reviPointInterest)
            console.log("main",`data${j}`,data[j])
          }
          divPointsofInterest.innerHTML = holdTemplate //Add it to the div that will hold it
       document.querySelector("#container").appendChild(divPointsofInterest) //Attach the points of Interest Div to DOM
    }
  })
}