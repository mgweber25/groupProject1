//CharityAPI.js

function findCharities() {
    //these first two are not necesary, then. 
    var cityInput = document.querySelector("#city").value;

    var stateInput = document.querySelector("#state").value;

    state = stateInput.toUpperCase();



fetch(
"https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + cityInput + "&ntee%5Bid%5D=5&state%5bid%5d=" + stateInput)

  .then(function(response) {

    return response.json();
  })

  .then(function(response) {

    console.log(response.organizations);

//var charityList = charityList.query.random[0].title;

var responseHeaderEl = document.querySelector("#charity-form");

var responseContainerEl = document.querySelector("#charity-form");

      responseHeaderEl.innerHTML = ("<h2>" + cityInput +", " + stateInput + "</h2>");

      for(i = 0; i < response.length; i++) {

        responseContainerEl = ("<h4>" + organizations[i].querySelector("#response-container").value + "</h4>");
      }

  });
};


// https://projects.propublica.org/nonprofits/api/v2/search.json?q=brooklyn&ntee%5Bid%5D=5&state%5bid%5d=NY

// https://projects.propublica.org/nonprofits/api/v2/search.json?q=Milwaukee&ntee%5Bid%5D=5&state%5bid%5d=WI

//"#city", "#state"
  
  
  //var to capture the submit forms
  //not sure I actually need this as it 
  //seems they may have plugged these into their api
  var charityFormEl = document.querySelector("#charity-form");
  var charityNameEl = document.querySelector("#charity-name");
  var cityInput = document.querySelector("#city");
  var stateInput = document.querySelector ("#state");
  var restaurantsFormEl = document.querySelector("#restaurant-form");
  var restaurantNameEl = document.querySelector("#restaurant-name");
  var zipCode = document.querySelector ("#zipcode");

//checkbox input?? "#aligned-cb"
//the two form submit buttons // ".pure-button"

/*var to capture the submit buttons//i think 
the submit buttons may each need their own 
ids instead of a shared class*/
//might not even need this if I use eventlistener on form, instead
document.getElementsByClassName("pure-button").onclick = function () {
    //function
    //conditional
    //if  isn't a proper input repsonse, loop them back into function
    //else plug input into function that merges the apis?
};
//handles submit in each form
//i need a seperate id for each form and a seperate handler, correct?
var formSubmitHandler = function(event) {
    event.preventDefault();
    var zipRest = zipCode.value.trim();

if (username) {
  findCharities(zipRest);
  zipCode.value = "";
} else {
  alert("Please enter a valid zipcode!");
}
  };

//captures responses to each submit form and stores in a variable
  charityFormEl.addEventListener("submit", formSubmitHandler);
  restaurantsFormEl.addEventListener("submit", formSubmitHandler);

  //when they hit submit it eithe has to show the results in a field next to the 
  //field and leave the field; or 2 hide the field and show the list on the same page
  //or 3, have the button send the user to the page with the results, but for ease of use, to allow them to easily update hte form field, we 
  //shoul probably show the list dynamically in a field next ot the formSubmitHandler. 