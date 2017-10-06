//pulling from keys.js
var keys = require('./keys.js');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'b37ab4679b86470bb962af9a9396d1c7',
  secret: '2ab34597f7e4477faa7a5e671015c67b',
});






//------------------------------

function myTweets() {
	var twitterUsername = process.argv[3];
	var params = {screen_name: "gage_lavergne"};
	var client = new twitter(keys);
	client.get('statuses/user_timeline/', params,  function(error, data, response) {
  if(!error){ 
  	for(var i = 0; i < data.length; i++){
  		
  		var date = data[i].created_at;
  		console.log("--------------------------------");
  		console.log("@gage_lavergne:") 
  		console.log(data[i].text);
  		console.log("Created At: " + date.substring(0, 19));
  			}
 		}
	});
}

myTweets();





//________ MOVIE __________



function getMovie(){
var userMovie = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&tomatoes=true&r=json&apikey=40e9cece";
var movie = 'Mr.Nobody';
var request = require('request');
    request(userMovie, function(error, response, body) {
          if (!error && response.statusCode === 200)
     var movieObject = JSON.parse(body);
 		console.log("Title: " + movieObject.Title);
 		console.log("Year: " + movieObject.Year);
		console.log("Imdb Rating" + movieObject.imdbRating);
		console.log("Country: " + movieObject.Country);
		console.log("Language: " + movieObject.Language);
		console.log("Plot: " + movieObject.Plot);
		console.log("Actors: " + movieObject.Actors);
		console.log("Rotten Tomatoes Rating: " + movieObject.tomatoRating);
		console.log("Rotten Tomatoes URL: " + movieObject.tomatoURL);

})
};
getMovie();

//_________SPOTIFY________

// spotify
//   .search({ type: 'track', query: 'The Sign' })
//   .then(function(response) {
//     console.log(response);
//   })

spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  //console.log("Artist Name: ", data.track.items[0].name);
var tracks = data.tracks.items;

tracks.map(function(track){
  track.artists.map(function(artist){
    //console.log("Artist Name: ", artist.name);

 if (artist.name == "Ace of Base", track.name == "The Sign") {
    console.log(artist.name);
    console.log("--------------");
    console.log("Song Name: ",track.name);
    console.log("--------------");
    console.log("Album Name: ",track.album.name);

 }
   })
  // console.log("Song Name: ",track.name);
  // console.log("Album Name: ", track.album.name)
  // console.log("------------------------")
})

});







