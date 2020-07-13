//CharityAPI.js



function findCharities() {
    
    var cityInput = document.querySelector("#city").value;

    var stateInput = document.querySelector("#state").value;

    city = cityInput.toUpperCase();
    
    state = stateInput.toUpperCase();

    charityResultsEl = document.querySelector("#charity-results");


    //Add CORS proxy
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + city + "&ntee%5Bid%5D=5&state%5bid%5d=" + state;
       
    fetch(proxyurl + url)
    
    .then(function(response) {

        if (response.ok) {
            console.log(response);
            return response.json().then(function(data) {
                //console.log(data)

                var charityArr = data.organizations;

                console.log(charityArr);
                if (charityArr.length === 0) {
                    charityResultsEl.textContent = "No charities listed for that city & state.";
                    return;
                }

                //var responseHeaderEl = document("#charity-form");
        
                //document.write(responseHeaderEl) // = ("<h2>" + city + ", " + state + "</h2>");


                //charityResultsEl.textContent = "";
                for (i=0; i<charityArr.length; i++) {

                    var charityInfo = charityArr[i].name + " / " + charityArr[i].city + " / " + charityArr[i].state; /*+ charityArr[i].zipcode;*/

                    console.log(charityInfo);
                    
                    var charityList = document.createElement("p");
                    //charityList.classList = "charity-list";
                    charityList.innerHTML = charityInfo;
                    document.body.appendChild(charityList);
                    //charityList.textContent = charityInfo;
                    //charityList.appendChild([charityArr[i].name, charityArr[i].city, charityArr[i].state]);
                    //document.write(["<p>" + charityArr[i].name, charityArr[i].city, charityArr[i].state + "<p>"])
                }    
            
        })
    }
        else {
                    alert("Error: " + response.statusText);

                }
            })
        };

            
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
   // });



  


//https://projects.propublica.org/nonprofits/api/v2/search.json?=1&state%5Bid%5D=IL&ntee%5Bid%5D=5&city=chicago

//https://projects.propublica.org/nonprofits/api/v2/search.json?q=&city=chicago&ntee%5Bid%5D=5&state%5bid%5d=IL


  //  https://projects.propublica.org/nonprofits/search?utf8=%E2%9C%93&adv_search=1&q_all=&q_phrase=&q_any=&q_none=&city=chicago&state%5Bid%5D=IL&ntee%5Bid%5D=5&c_code%5Bid%5D=


  //https://projects.propublica.org/nonprofits/api/v2/search.json?q=&city=chicago&ntee%5Bid%5D=1&state%5Bid%5D=IL


//https://projects.propublica.org/nonprofits/api/v2/search.json?q=5&state%5bid%5d=IL&ntee%5Bid%5D=&city=chicago
  
  

//https://projects.propublica.org/nonprofits/api/v2/search.json?q=&state%5Bid%5D=IL&ntee%5Bid%5D=&city=chicago

//https://projects.propublica.org/nonprofits/api/v2/search.json?q=&city=brooklyn&ntee%5Bid%5D=5&state%5bid%5d=NY

//https://projects.propublica.org/nonprofits/api/v2/search.json?q=1&state%5Bid%5D=IL&ntee%5Bid%5D=5&c_code%5Bid%5D=&city=chicago

  /*   
  search?utf8=%E2%9C%93&adv_search=1&state%5Bid%5D=IL&ntee%5Bid%5D=5&c_code%5Bid%5D=&q_all=&q_phrase=&q_any=&q_none=&city=chicago */