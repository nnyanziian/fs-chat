var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fschat";

mongoClient.connect(url, function (err, db) {
    if (err) throw err
        var myquery ={username:'Kasibante'};
    db.collection('users').deleteOne(myquery, function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();

    });

});
