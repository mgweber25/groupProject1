//CharityAPI.js

/*
q=delta%20alpha%20%2Bevanston (delta alpha +evanston)


// ntee%5Bid%5D=7) = c_code[id] = Human Services # 5  */


//ntee%5Bid%5D=5%2B

function findCharities() {
    var city = document.getElementById("#zipcode");

    var state = document.getElementById("#state");

fetch("https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + city + "&ntee%5Bid%5D=5&" + "state%5bid%5d=" + state.toUpperCase())

  .then(function(response) {
    return response.json();
  })

  .then(function(response) {

    console.log(response.data[0]);

var charityList = charityList.query.random[0].title;

var responseHeaderEl = document.querySelector("#charity-form");

      responseHeaderEl.innerHTML = '<h2>' + zipCode + '</h2>';

    //  return fetch('https://projects.propublica.org/nonprofits/api/v2/search?q=ntee%5Bid%5D=5%2B' + zipCode);
  });
};
