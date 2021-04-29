// fetch("https://api.edamam.com/search?q=vegetable&app_id=16faf740&app_key=7e13ce2d929e6839de8e33e08b528146", {
// })
// .then(response => {
// 	return response.json();
// })
// .then(response => {
//     console.log(response);
// });

function runEdamam(){
    console.log("runEdamam is running");
    const edamamUrl = "https://api.edamam.com/search?q=";
    const app_id = "&app_id=16faf740";
    const appKEY = "&app_key=7e13ce2d929e6839de8e33e08b528146";
    
    let query;

    $.ajax({
        url: edamamUrl+query+app_id+appKEY,
        method: "GET"
    }).then(function(response){
        console.log("AJAX Resopnse: ", response);

        // let hitsArray = response.hits;
        // let i = 0;
        // for(i; i < hitsArray.length; i++){
        //     console.log("hits array ", hitsArray[i]);
        // }
    })
}

var getMealDB = function () {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian').then(function(response) {
    response.json().then(function(data) {
    console.log(data);
  });
});
}

$("#edamam-btn").on("click", runEdamam);
$("#mealdb-btn").on("click", getMealDB);