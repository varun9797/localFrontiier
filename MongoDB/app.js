var uuid = require('uuid');
var mongoClient = require('mongodb').MongoClient,
    formar = require('util').format;
resultArray = [];
const util = require('util');
var operation = "findSpecific"; // add, delete, findSpecific, findAll, update
var insertDocument = function (db, data, callback) {
    var data1 = {
        "Name": "100/100M",
        "PackageType": "broadband",
        "Price": "5000",
        "Discription": "data product with download speed 100mb/sec for 6 month",
        "Promos": [{
            "date": new Date("2014-10-01T00:00:00Z"),
            "Name": " free upload speed for 6 month",
            "DurationInMonth": 6
        }]
    };
    db.collection('quote').insertOne(data, function (err, result) {
        if(err) {
            throw err;
        }
        console.log("Inserted a document into the restaurants collection. " + data._id);
        callback(data._id);
    });
};
var findAllDocument = function (db, callback) {
    /* var cursor =db.collection('productInfo').find({} );
   cursor.each(function(err, doc) {
      if(err){
		throw err;
		}
      if (doc != null) {
         console.dir(doc);
         // res.json(doc);
      } else {
         //callback();
      }
   }); */
    var collection = db.collection('productInfo');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        if(err) {
            throw err;
            return;
        }
        callback(docs);
        // db.close(docs);
    });
};
var findSpecificDocument = function (db, searchObj, callback) {
    var cursor = db.collection('productInfo').find(searchObj);
    cursor.each(function (err, doc) {
        if(err) {
            throw err;
        }
        if(doc != null) {
            console.dir(doc);
            callback(doc);
        } else {
            //callback();
        }
    });
};
var findSpecificQuote = function (db, searchObj, callback) {
    var cursor = db.collection('quote').find(searchObj);
    cursor.each(function (err, doc) {
        if(err) {
            throw err;
        }
        if(doc != null) {
            console.dir(doc);
            callback(doc);
        } else {
            //callback();
        }
    });
};
var findUser = function (db, searchObj, callback) {
    var cursor = db.collection('users').find(searchObj);
    cursor.each(function (err, doc) {
        if(err) {
            throw err;
        }
        if(doc != null) {
            console.dir(doc);
            callback(doc);
        } else {
            // callback();
        }
    });
};
var updateDocument = function (db, data, callback) {
    console.log("updating...data " + data)
    db.collection('quote').updateOne({
        "id": data.id
    }, {
        $push: {
            "quoteItems": data
        },
        $currentDate: {
            "lastModified": true
        }
    }, function (err, results) {
        //console.log(results);
        callback();
    });
};

var deleteElement = function (db, data, callback) {
    console.log("delete...data " + data)
    db.collection('quote').updateOne({
        "id": data.id
    }, {$pull: { 'quoteItems': { uniqueId: data.uniqueId } } }, function (err, results) {
        console.log("dfgdf "+data.uniqueId);
        callback();
    });
};

exports.perfromDbOperation = function (req, res) {
    var action = null;
    var searchObj = null;
    var data = null;
    var id = null;
    if(req.params.operation) {
        console.log("operation " + req.params.operation);
        console.log("req method " + req.method)
        action = req.params.operation;
    }
    if(req.method == 'GET' && action == 'findUser' && req.params.data) {
        console.log("param data " + req.params.data)
        console.log("req method " + req.method)
        searchObj = {
            phoneNumber: req.params.data
        };
    }
    if(req.method == 'GET' && action == 'findQuote' && req.params.data) {
        console.log("param data " + req.params.data)
        console.log("req method " + req.method)
        searchObj = {
            id: req.params.data
        };
    }
    if(req.method == 'GET' && action == 'findProduct' && req.params.data) {
        console.log("param data " + req.params.data)
        console.log("req method " + req.method)
        searchObj = {
            Name: req.params.data
        };
    }
    if(req.method == 'POST' && action == 'update' && req.body) {
        console.log("posted data " + req.body)
        console.log("req method " + req.method)
        data = req.body;
        //action = "add";
    }
    if(req.method == 'POST' && action == 'add' && req.body) {
        console.log("posted data " + req.body)
        console.log("req method " + req.method)
        data = req.body;
        //action = "add";
    }
    if(req.method == 'POST' && action == 'deleteElement' && req.body) {
        console.log("posted data " + req.body)
        console.log("req method " + req.method)
        data = req.body;
        //action = "add";
    }
    mongoClient.connect('mongodb://127.0.0.1:27017/frontier', function (err, db) {
        if(err) {
            throw err;
        } else {
            if(action === "findUser") {
                console.log("findUser ")
                findUser(db, searchObj, function (doc) {
                    res.json(doc)
                        //res.send("result "+JSON.parse(doc));
                    db.close();
                });
            } else if(action === "findAll") {
                findAllDocument(db, function (doc) {
                    res.json(doc);
                    db.close();
                });
            } else if(action === "add") {
                console.log("adding...")
                data.id = uuid.v1();
                insertDocument(db, data, function (doc) {
                    res.json(data.id);
                    db.close();
                });
            } else if(action === "findProduct") {
                findSpecificDocument(db, searchObj, function (doc) {
                    res.json(doc);
                    db.close();
                });
            } else if(action === "findQuote") {
                findSpecificQuote(db, searchObj, function (doc) {
                    res.json(doc);
                    db.close();
                });
            } else if(action === "update") {
                console.log("updating...")
                updateDocument(db, data, function () {
                    res.json("document updated");
                    db.close();
                });
            } else if(action === "deleteElement") {
                console.log("updating...")
                deleteElement(db, data, function () {
                    res.json("document updated");
                    db.close();
                });
            }
        }
    });
}
//perfromDbOperation("findSpecific",{Name:"75/75M"})