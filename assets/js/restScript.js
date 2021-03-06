

var zipCodeEl = document.querySelector("#zipcode");
var submitButtonEl = document.querySelector("#submit-button-charity");
var restResultsEl = document.querySelector("#rest-results");

var getRestData = function(zip) {
    var restApiUrl = "https://opentable.herokuapp.com/api/restaurants?zip=" + zip;
    fetch(restApiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayRest(data, zip);
            });
            }
            else {
                alert("Error: " + response.statusText);
            }
    })
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    var userZip = zipCodeEl.value.trim();
    if (userZip) {
        getRestData(userZip);
        zipCodeEl.value = "";
    }
    else {
        alert("please enter a zip code")
    }
};

submitButtonEl.addEventListener("click", formSubmitHandler);

var displayRest = function(rest, restaurants) {
    var restArr = rest.restaurants;
    if (restArr.length === 0) {
        restResultsEl.textContent = "No Restaurants Listed for that Zip Code.";
        return;
    }
    restResultsEl.textContent = "";
    for (i=0; i<restArr.length; i++) {
        var restInfo = "<p>" + restArr[i].name + " - " + restArr[i].address + " - " + restArr[i].city + ", " + restArr[i].area + " - " + restArr[i].phone + "</p>";
        var restList = document.createElement("div");
        restList.classList = "rest-list pure-u-1-" + restArr.length;
        restList.innerHTML = restInfo;
        restResultsEl.appendChild(restList);

    }
}


