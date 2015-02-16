;(function(){
  window.grass = function(){
         
    var endpoint = 'https://endpoint.gov/geocode'

    function geocode(addr, cb){
      if(isArray(addr)){
        return postGeo(addr, cb);
      } 
      return getGeo(buildQuery({addr:addr}), cb);
    }
    
    function getGeo(url, cb){
      var xhr = new XMLHTTPRequest();
      xhr.open(
    } 
    
    //Return possible results when typing
    function getSuggestions(addr, cb){

    }

    function buildQuery(queryObj){
      var query = endpoint;
      var first = 1; 

      for(var i in queryObj){

        if(first) query+='?'
        else query+='&'

        if(queryObj.hasOwnProperty(i)){
          query+= i+"="+queryObj[i];
        }

      } 

      return encodeURIComponent(query)
    }

    function isArray(arr){
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

    return{
      geocode : geocode,
      reverseGeocode: reverseGeocode,
      getSuggestions: getSuggestions,
      geocodeCSV: geocodeCSV
    }
  }();
})()
