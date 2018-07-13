
var foods = [`pizza`, `taco`, `sandwich`, `donut`,`ice cream`]
var newImage;
var newButton;
var newDiv;

//pre-made search buttons
function buttonMaker(){
  newButton = $('<button>').text(foods[x]);
  $('#buttonArea').append(newButton);
  }
  for(x in foods){
    buttonMaker(foods[x]);
  }


$('#makeButton').click(function (){
  var input = $('input').val();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+input+`&limit=10&offset=0&rating=PG-13&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    console.log(response);
    console.log(response.data[0].images.original.url);
    for(x=0;x<10;x++){
      var gifArt = $('<img>').attr('src',response.data[x].images.original.url);
      var gifRating = response.data[x].rating;
      $('#results').prepend(gifArt);
      $('#results').append(gifRating);
      // $('#results').html(`<img src="`+gifArt+`><br> Rating: `+gifRating);
    }
  });
});

