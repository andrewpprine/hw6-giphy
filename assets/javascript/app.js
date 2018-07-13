
var topics = [`pizza`, `taco`, `sandwich`, `donut`,`ice cream`]
var newButton;

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
  var userInput = $('input').val();
  newButton = $('<button>').text(userInput);
  // if(newButton.val() === ''){
  //   alert('Get off your diet');
  // }else{
  $('#buttonArea').append(newButton);
  topics.push(userInput);
  $('input').val('');
});

//search giphy for 10 gifs based on button text
$(document).on('click','#buttonArea button',function (){
  clear();
  var searchFor = $(this).text();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+searchFor+`&limit=10&offset=0&rating=PG-13&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    // console.log(response);
    for(x=0;x<10;x++){
      var gifArt = $('<img>').attr('src',response.data[x].images.original.url);
      var gifRating = response.data[x].rating;
      var gifRated = gifRating.toUpperCase();
      $('#gifArea').append(gifArt);
      $('#gifArea').append('<br>');
      $('#gifArea').append(`Rated: `+gifRated);
      $('#gifArea').append('<br><br><br>');
//ideally the search will be for 50, first 10 will display, plus a more button to append the next 10 at a time
      // if(x>10){
      //   gifArt.hide();
      //   gifRated.hide();
      //   var moreButton = $('<button>').text('MORE!');
      //   $('#gifArea').append(moreButton);
    }
  });
});

function clear(){
  $('#gifArea').empty();
}