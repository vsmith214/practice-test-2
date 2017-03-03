function twoSecondsLater(func) {
  setTimeout(func, 2000)
  
}

function dataLookUp(func, cb) {
  //number of people in space? spotify?
  func(function(err, result) {
    if(err) cb(err)
    cb(null, result.numberOfPeopleCurrentlyInSpace);
  })
}

function asyncEach(arr, asyncFunc, cb) {
  arr.forEach(function(elem) {
    asyncFunc(elem, function(err, asyncResult) {
      if(err) cb(err);
      else cb(null, asyncResult);
    })
  })
}

function asyncMap(arr, asyncFunc, cb) {
  var count = 0, mappedArr = [], gotAnError;

  arr.forEach(function(elem) {
    
    asyncFunc(elem, function(err, result) {
      if(err) {
        gotAnError = err; 
        //really, this should stop the loop. But I wanna keep my forEach
        //Is just a bit slower this way. 
      }
      else mappedArr.push(result); 
      //for in order map, only change would be pushing
      //to a specific index

      if(count++ === arr.length-1) {
        if(gotAnError) cb(gotAnError);
        else cb(null, mappedArr)
      };
    })
  })
}

