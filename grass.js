window.grass = function(){

  var endpoint = 'https://placeholder.gov/endpoint/geocode';

  function geocode(addr, cb){
    if(isArray(addr)){
      return postGeo(buildQuery(), addr, cb);
    } 
    return getGeo(buildQuery({addr:addr}), cb);
  }


  function getGeo(url, cb){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          cb(null, this.responseText);
        }else{
          cb(new Error(this.status + ". Uh-oh."));
        }
      }
    }

    xhr.send();
  } 


  function postGeo(url, params, cb){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
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
    return Object.prototype.toString.call(arg) === '[object Array]';
  }


  function map(arr, fn){
    var len = arr.length;
    var mapped = new Array(len); 
    for(var i=0; i<len; i++){
      mapped[i] = fn(arr[i],i);
    }
  }


  return{
    geocode : geocode,
    reverseGeocode: reverseGeocode,
    getSuggestions: getSuggestions,
    geocodeCSV: geocodeCSV
  }
}();
