//CharityAPI.js

function findCharities() {
    
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