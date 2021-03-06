
    
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var charityResultsEl = document.querySelector("#restaurant-display");
var charitySubmitButtonEl = document.querySelector("#submit-button-restaurant");

var getCharityData = function(charityCity, charityState) {
  var charityApiUrl = "https://api.data.charitynavigator.org/v2/Organizations?app_id=4afa39a6&app_key=bc704659ef9ff97cf1e9d6027aafe5fd&pageSize=50&state=" + charityState + "&city=" + charityCity;
    fetch(charityApiUrl).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
        displayCharity(data, charityCity);
        });
      }
      else {
      alert("Error: " + response.statusText);
      }
    })
};

var formSubmitHandler = function(event) {
  event.preventDefault();
  var charityCity = cityInput.value.toUpperCase().trim();
  var charityState = stateInput.value.toUpperCase().trim();
    if (charityCity) {
      getCharityData(charityCity, charityState);
      cityInput.value = "";
    }
    else {
      alert("please enter a valid city")
    }
};

charitySubmitButtonEl.addEventListener("click", formSubmitHandler);

var displayCharity = function(orginizations, city) {
    
  var charityArr = orginizations;
    if (charityArr.length === 0) {
      charityResultsEl.textContent = "No Charities were listed for this city.";
      return;
    }
  for (i=0; i<charityArr.length; i++) {
    var charityListInfo = "<p>" + charityArr[i].charityName + " - " + "<a href='" + charityArr[i].charityNavigatorURL + "' target=_'blank'>Website</a>" + " - " + charityArr[i].mailingAddress.streetAddress1 + ", " + charityArr[i].mailingAddress.city + ", " + charityArr[i].mailingAddress.stateOrProvince + " - " + charityArr[i].mailingAddress.postalCode + "</p>";
    var charityDisplayLi = document.createElement("div");
      charityDisplayLi.classList = "rest-list pure-u-1-" +charityArr.length;
      charityDisplayLi.innerHTML = charityListInfo;
      charityResultsEl.appendChild(charityDisplayLi);
  };
  
};


    
