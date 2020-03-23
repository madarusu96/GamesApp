var apiUrl="https://games-world.herokuapp.com"
fetch(apiUrl +"/games" , {
    method :"GET",
    headers : {
        "Content-Type": "applications/x-www-form-urlencoded"
    }

//pentru a lua doar json si il punem intr-un array jsonResponse
}).then(function(response){
    return response.json();
}).then(function(jsonResponse){
    console.log("the response", jsonResponse)

});