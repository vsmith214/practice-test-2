function twoSecondsLater(func) {
  setTimeout(func, 2000)
  
}

function getBirthYearOfStarWarsCharacter(id, cb) { 
  $.get('http://swapi.co/api/people/'+id, function(data) {
    cb(data.birth_year);
  })
}

function getHomePlanetOfStarWarsCharacter(id, cb) { 
  $.get('http://swapi.co/api/people/'+id, function(data) {
    $.get(data.homeworld, function(data) {
      cb(data.name);
    })
  })
}

function getRelatedArtistBySong(song, cb) {
  song = song.replace(/\s/g, '%20');
  $.get('https://api.spotify.com/v1/search/?q='+song+'&type=track&limit=1', function(data) {
    var artistId = data.tracks.items[0].artists[0].id;
    $.get('https://api.spotify.com/v1/artists/'+artistId+'/related-artists', function(data) {
      var relatedArtist = data.artists[0].name;
      cb(relatedArtist);
    })
  })
}


function asyncMap(arr, asyncFunc, cb) {
  var count = 0, mappedArr = [], gotAnError;

  arr.forEach(function(elem, index) {
    
    asyncFunc(elem, function(err, result) {
      if(err) {
        gotAnError = err; 
        //alternatively, can write a foreach and use break.
      }
      else mappedArr[index] = result; 

      if(count++ === arr.length-1) {
        if(gotAnError) cb(gotAnError);
        else cb(null, mappedArr)
      };
    })
  })
}

