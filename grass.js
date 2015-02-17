window.grass = function(){

  var endpoint = 'https://placeholder.gov/endpoint/geocode';

  function geocode(addr, cb){
    return getGeo(buildQuery({addr:addr}), cb);
  }
   

  function geocodeJSON(addrs, cb){
    return postGeo(buildQuery(), addrs, cb); 
  }


  function getGeo(url, cb){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = makeReadyFn(cb);

    xhr.send();
  } 


  function postGeo(url, json, cb){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = makeReadyFn(cb);
    xhr.send(json); 
  }

  function makeReadyFn(cb){
    return function(){
      if(this.readyState === 4){
        if(this.status === 200){
          cb(null, this.responseText);
        }else{
          cb(new Error(this.status + ". Uh-oh."));
        }
      }
    }
  }

  //Return possible results when typing
  function getSuggestions(addr, cb){
    return geoGeo(buildQuery({addr:addr,suggestions:1}), cb); 
  }


  function buildQuery(queryObj){
    if(!queryObj) return endpoint;

    var query = endpoint;
    var first = 1; 

    for(var i in queryObj){

      if(first){
        query+='?';
        first=0;
      }else{
        query+='&'
      }

      if(queryObj.hasOwnProperty(i)){
        query+= i+"="+encodeURIComponent(queryObj[i]);
      }

    } 

    return query
  }



  function reverseGeocode(){}


  function geocodeCSV(){}


  function isArray(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
  }


  return{
    geocode : geocode,
    geocodeJSON : geocodeJSON,
    geocodeCSV: geocodeCSV,
    reverseGeocode: reverseGeocode,
    getSuggestions: getSuggestions
  }
}();
