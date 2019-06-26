// require("dotenv").config();
// const Spotify = require("node-spotify-api");
// var keys = require("./keys");
// var spotify = new Spotify(keys.spotify);

require("dotenv").config();
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
var axios = require("axios");

// Runtime global variables
var artist = process.argv[2];

// If statements to run program based on user commands

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
        console.log("Venue Name: " + response.data[1].venue.name);
        }
    );
 
// spotify.request('https://api.spotify.com/v1/search?q=grenade&type=track%2Cartist&limit=1')
// .then(function(data) {
//   // console.log(data.tracks);
//   console.log("Artist(s) name :"+ data.tracks.items[0].artists[0].name); 
//   console.log("The song's name :"+ data.tracks.items[0].name); 
//   console.log("A preview link :"+ data.tracks.items[0].preview_url); 
//   console.log("Album name :"+ data.tracks.items[0].album.name); 
// })
// .catch(function(err) {
//   console.error('Error occurred: ' + err); 
// });



  

// var axios = require("axios");

// var nodeArgs = process.argv;
// var movieName = "";

// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//       movieName = movieName + "+" + nodeArgs[i];
//     } else {
//       movieName += nodeArgs[i];
//     }
//   }
// if(process.argv[2] === undefined)
// {  movieName = "Mr. Nobody" }  
// // Then run a request with axios to the OMDB API with the movie specified
//   var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//   // This line is just to help us debug against the actual URL.
// //   console.log(queryUrl);
  
//   axios.get(queryUrl).then(
//     function(response) {
//         console.log("Title of the movie:" + response.data.Title)
//         console.log("Release Year: " + response.data.Year);
//         console.log("ImDB Ratings: " + response.data.imdbRating);
//         console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
//         console.log("Country where the movie was produced: " + response.data.Country);
//         console.log("Language of the movie: " + response.data.Language);
//         console.log("Plot of the movie: " + response.data.Plot);
//         console.log("Actors in the movie: " + response.data.Actors);
//     })
//     .catch(function(error) {
//       if (error.response) {
        
//       } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an object that comes back with details pertaining to the error that occurred.
//         console.log(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log("Error", error.message);
//       }
//       console.log(error.config);
//     });



