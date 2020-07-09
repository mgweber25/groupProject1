//CharityAPI.js

function findZipCode() {
    var searchTerm = document.querySelector('#zipcode').value;
    // Create a variable to hold the value of rating
   // var = document.querySelector('#rating').value;



fetch('https://projects.propublica.org/nonprofits/api/v2/search.json?q=' +

    zipCode)

  .then(function(response) {
    return response.json();
  })

  .then(function(response) {
    console.log(response.data[0]);
    var zipCode = document.querySelector('#zipcode');
  });
};
