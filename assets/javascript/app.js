

$('button').click(function (){
  var input = $('input').val();
  var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=s1ZtYEWgR2UGbcVY0dPXq32Q5gMlN9Xf&q=`+input+`&limit=10&offset=0&rating=PG&lang=en`
  $.ajax({
    url: queryURL
  }).then(function(response) {
    console.log(response);
    console.log(response.data[0]);
    console.log(response.data[0].url);
    console.log(response.data[0].rating);
    console.log(response.data[0].images.original.url);
    var gifArt = response.data[0].url;
    var gifRating = response.data[0].rating;
    $('#results').html(`<iframe src="`+gifArt+`width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`+`<br> Rating: `+gifRating);
  });
});