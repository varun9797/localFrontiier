var express = require("express");
var server = express();
var PORT = 3000;
var mongo = require("./MongoDB/app");
var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
    extended: false
}))
server.use(bodyParser.json())
    //server.use(server.router);
server.get('/hello', function (req, res) {
    console.log("checking");
    res.send('hello world');
});
server.get('/mongo/:operation/:data', mongo.perfromDbOperation);
server.get('/mongo/:operation', mongo.perfromDbOperation);
server.post('/mongo/:operation', mongo.perfromDbOperation);
/*server.post('/mongo/add', function (req, res) {
        //var body = req.body;
        console.log("request body "+req.body);
        mongo.perfromDbOperation;
        //res.json(req.body);
    });
*/
server.listen(PORT, function () {
    console.log("server is running on port" + PORT);
});
server.use(express.static(__dirname + '/Clinet'));