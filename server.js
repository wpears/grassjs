var restify = require('restify');

var server = restify.createServer();


server.post('/geocode', function(req, res, next){
  req.pipe(process.stdout);
  res.send("got your post");
 next(); 
});

server.get('/geocode/', function(req, res, next){
  req.pipe(process.stdout); 
  res.send("got your get"); 
  next();
});





server.listen(1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});
