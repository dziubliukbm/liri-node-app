require("dotenv").config();
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");


// Runtime global variables
let liriCommand = process.argv[2];
let search = process.argv.slice(3).join(" ");

liriRun();

function liriRun(){
  if(liriCommand === "concert-this"){
    concertSearch();
  }
  if(liriCommand === "spotify-this-song"){
    searchSong();
  }
  if(liriCommand === "movie-this"){
    searchMovie();
  }
  if(liriCommand === "do-what-it-says"){
    doWhatSays();
  }
}

function concertSearch(){
    artist = search;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
        console.log("Venue name: " + response.data[1].venue.name);
        console.log("Venue date and time: " + moment(response.data[1].datetime).format("MM-DD-YYYY"));
        console.log("Venue Location : " + response.data[1].venue.city);
        }
    );
  }
  
function searchSong(){
  
  let songName = search;
  if(songName === ""){
    songName = 'The Sign - Ace of Base'
  }
  
  spotify.request('https://api.spotify.com/v1/search?q='+songName+'&type=track%2Cartist&limit=1')
.then(function(data) {
  // console.log(data.tracks);
  console.log("Artist(s) name :"+ data.tracks.items[0].artists[0].name); 
  console.log("The song's name :"+ data.tracks.items[0].name); 
  console.log("A preview link :"+ data.tracks.items[0].preview_url); 
  console.log("Album name :"+ data.tracks.items[0].album.name); 
}
)
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});
}

function searchMovie(){
  let movieName = search;
  if(movieName === ""){
    movieName = 'Mr. Nobody'
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  
  axios.get(queryUrl).then(
    function(response) {
        console.log("Title of the movie:" + response.data.Title)
        console.log("Release Year: " + response.data.Year);
        console.log("ImDB Ratings: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
        console.log("Country where the movie was produced: " + response.data.Country);
        console.log("Language of the movie: " + response.data.Language);
        console.log("Plot of the movie: " + response.data.Plot);
        console.log("Actors in the movie: " + response.data.Actors);
    })
    .catch(function(error) {
      if (error.response) {
        
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function doWhatSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    // We will then print the contents of data
    console.log(data);
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    // We will then re-display the content as an array for later use.
    console.log(dataArr[0]);
    console.log(dataArr[1]);
    if(dataArr[0] === "spotify-this-song"){
      search = dataArr[1]
      searchSong()
    }
  });

}