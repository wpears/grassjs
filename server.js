var restify = require('restify');

var server = restify.createServer();

var dummy = {
  "type": "Point",
  "coordinates": [-121.91, 37.88],
  "properties": {
    "name": "Mount Diablo"
  }
};

               
server.use(restify.CORS());

server.post('/geocode', function(req, res, next){
  console.log("POST");
  req.pipe(process.stdout);
  res.send(dummy);
 next(); 
});


server.get('/geocode/', function(req, res, next){
  console.log("GET");
  req.pipe(process.stdout); 
  res.send(dummy);
  next();
});





server.listen(1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});
