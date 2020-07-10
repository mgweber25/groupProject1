var zipCode = "60018";

var getRestData = function(zipCode) {
    var restApiUrl = ("https://opentable.herokuapp.com/api/restaurants?zip=" + zipCode) ;
    fetch(restApiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(zipCode, data)
            });
            }
            else {
                alert("Error: " + response.statusText);
            }
    })
};

console.log(getRestData);

getRestData(zipCode);
