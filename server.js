var restify = require('restify');

var server = restify.createServer();

server.use(restify.CORS());

server.post('/geocode', function(req, res, next){
  console.log("POST");
  req.pipe(process.stdout);
  res.send('[{"lat":-37.81,"lon":121.16}]');
 next(); 
});


server.get('/geocode/', function(req, res, next){
  console.log("GET");
  req.pipe(process.stdout); 
  res.send('{"lat":37.81,"lon":-121.16}');
  next();
});





server.listen(1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});
