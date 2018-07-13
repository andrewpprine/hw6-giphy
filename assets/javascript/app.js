
var topics = [`pizza`, `taco`, `sandwich`, `donut`,`ice cream`]
var newImage;
var newButton;
var newDiv;

//pre-made search buttons
function buttonMaker(){
  newButton = $('<button>').text(topics[x]);
  $('#buttonArea').append(newButton);
}
for(x in topics){
  buttonMaker(topics[x]);
}

//new buttons from input
$('#makeButton').click(function(){
  event.preventDefault();
  var userInput = $('input').val();
  newButton = $('<button>').text(userInput);
  $('#buttonArea').append(newButton);
  topics.push(userInput);
  $('input').val('');
});

//search giphy for 10 gifs based on button/search text
$(document).on('click','#buttonArea button',function (){
  clear();
  var searchFor = $(this).text();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+searchFor+`&limit=10&offset=0&rating=PG-13&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    console.log(response);
    for(x=0;x<10;x++){
      var gifArt = $('<img>').attr('src',response.data[x].images.original.url);
      var gifRating = response.data[x].rating;
      $('#gifArea').prepend(gifArt);
      $('#gifArea').append(gifRating);
      // $('#gifArea').html(`<img src="`+gifArt+`><br> Rating: `+gifRating);
    }
  });
});

function clear(){
  $('#gifArea').empty();
}


// $('#makeButton').click(function (){
//   var input = $('input').val();
//   var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+input+`&limit=10&offset=0&rating=PG-13&lang=en`
//   $.ajax({
//     url: queryURL
//   }).then(function(response) {
//     console.log(response);
//     for(x=0;x<10;x++){
//       var gifArt = $('<img>').attr('src',response.data[x].images.original.url);
//       var gifRating = response.data[x].rating;
//       $('#gifArea').prepend(gifArt);
//       $('#gifArea').append(gifRating);
//       // $('#gifArea').html(`<img src="`+gifArt+`><br> Rating: `+gifRating);
//     }
//   });
// });

