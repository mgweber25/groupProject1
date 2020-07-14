//CharityAPI.js

function findCharities() {
    
    var cityInput = document.querySelector("#city").value;

    var stateInput = document.querySelector("#state").value;

    city = cityInput.toUpperCase();
    
    state = stateInput.toUpperCase();

    charityResultsEl = document.querySelector("#charity-list");


    //Add CORS proxy
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + city + "&ntee%5Bid%5D=5&state%5bid%5d=" + state;
       
    fetch(proxyurl + url)
    
    .then(function(response) {

        if (response.ok) {
            console.log(response);
            return response.json().then(function(data) {
                
              var charityArr = data.organizations;
             
              var printArr = function(charityList) {
                var li = document.createElement("charity-results");
                li.textContent = charityList;
                charityResultsEl.appendChild(li);
              };


              console.log(data)


                for (i=0; i < charityArr.length; i++) {

                  if (charityArr.length === 0) {
                    charityResultsEl.textContent = "No charities listed for that city & state.";
                    return;
                  }
                  

                  var charityInfo = charityArr[i].name + " / " + charityArr[i].city + " / " + charityArr[i].state; 
                    
                    console.log(charityArr[i].city);
                    console.log(charityInfo);
                    
                    const charityList = document.createElement("p");
                    
                    charityList.innerHTML = charityInfo;
                    document.body.appendChild(charityList);

                    if(city === this.city) {
                  
                    charityList.classList = "charity-list";

                    charityList.textContent = charityInfo;
                   // charityList.appendChild([charityArr[i].name, charityArr[i].city, charityArr[i].state]);  

                    printArr(charityList);
                    }
                    else {
                      return;
                    }
                  }
                   
            })

          }
          });

}
      


    //   else {
    //     alert("Error: " + response.statusText);

    // }

                //var responseHeaderEl = document("#charity-form");
        
                //document.write(responseHeaderEl) // = ("<h2>" + city + ", " + state + "</h2>");


                //charityResultsEl.textContent = "";

    /*+ charityArr[i].zipcode;*/        

//charityList.classList = "charity-list";

  //charityList.textContent = charityInfo;
                    //charityList.appendChild([charityArr[i].name, charityArr[i].city, charityArr[i].state]);
                    //document.write(["<p>" + charityArr[i].name, charityArr[i].city, charityArr[i].state + "<p>"])
      //  "<p>" + 


     //   .then(function(response) {

       //     console.log(response);
        
        //var charityList = charityList.query.random[0].title;
        
        //var responseHeaderEl = document.querySelector("#charity-form");
        
          //    responseHeaderEl.innerHTML = ("<h2>" + city + ", " + state + "</h2>");
        
        /*      for(i = 0; i < charityArr.length; i++) {

                var charityArr = document.querySelector("#charity-list");
        
                charityArr.innerHTML = ("<h4>" + charityArr[i] + "</h4>");
              } */
             // function displayCharities() {
                
     //   }
  
