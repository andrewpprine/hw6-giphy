

$('button').click(function (){
  var input = $('input').val();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+input+`&limit=10&offset=0&rating=PG-13&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    console.log(response);
    console.log(response.data[0].images.original.url);
    // var gifArt = response.data[0].url;
    var gifArt = $('<img>').attr('src',response.data[0].images.original.url);
    var gifRating = response.data[0].rating;
    $('#results').prepend(gifArt);
    $('#results').append(gifRating);
    // $('#results').html(`<img src="`+gifArt+`><br> Rating: `+gifRating);
  });
});