var apiUrl="https://games-world.herokuapp.com"
fetch(apiUrl +"/games" , {
    method :"GET",
    headers : {
        "Content-Type": "applications/x-www-form-urlencoded"
    }

//pentru a lua doar json si il punem intr-un array jsonResponse
}).then(function(response){
    return response.json();
}).then(function(arrayOfGames){
    console.log("the response", arrayOfGames)

    var container=document.querySelector('.container');
    console.log("container")

    // for (i= 0;i<arrayOfGames.length ;i++){
    //     // console.log(arrayOfGames[i]);
    //     const h1=document.createElement("h1");
    //     const p =document.createElement("p");
    //     const img=document.createElement("img");

    //     h1.innerHTML= arrayOfGames[i].title;
    //     p.innerHTML=arrayOfGames[i].description;

    //     img.setAttribute("src",arrayOfGames[i].imageUrl);

    //     container.appendChild(h1);
    //     container.appendChild(img);
    //     container.appendChild(p);


    //     // arrayOfGames[i].title;
    //     // arrayOfGames[i].description;
    //     // arrayOfGames[i].imageUrl
    // }

    //optimizare 
    let gameElements ="";
    for (i= 0;i<arrayOfGames.length ;i++){
         gameElements +="<h1>"+arrayOfGames[i].title+"</h1>"+
                            "<img src='"+ arrayOfGames[i].imageUrl + "'/>" +
                            "<p>"+arrayOfGames[i].description + "</p>" +
                            "<button class='delete-btn' id='"+arrayOfGames[i]._id + "'>Delete</button>";
        
    }
    container.innerHTML=gameElements;

});

var deleteBtns =document.getElementsByClassName("delete-btn");
deleteBtns.addEventListener(click,function(){
    console.log("vom sterge")
})