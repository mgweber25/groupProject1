//CharityAPI.js

fetch(
    'https://projects.propublica.org/nonprofits/api/v2'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
