

$('button').click(function (){
  var input = $('input').val();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+input+`&limit=10&offset=0&rating=PG&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    console.log($(response));
    var gifArt = response.array[0].data[0].url;
    var gifRating = response.array[0].data[0].rating;
    $('#results').html(`img src=<"`+gifArt+`">`+`<br>`+gifRating);
  });
});