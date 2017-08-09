//load mongoose package
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//connect to mongo Db and use fsChat DB
mongoose.connect('mongodb://localhost/fschat');


// Create a Schema that validates the input

var UserSchema = new Schema({
    "username": String,
    "userPassword": String,
    "userStatus": String,
    "created": { type: Date, default: Date.now },
    "online": Boolean
});

// Create a model based on the schema
var User = mongoose.model('User', UserSchema);




var callback = function (err, data) {
    if (err) {
        return console.error(err);
    }
    else {
        res.json(data);
    }

}

export function getAll(res) {
    User.find({}, function (err, data) {
        if (err) {
            return console.error(err);
        }
        else {
            res.json(data);
        }
    });
}

export function addUser(res, req) {
    User.create(req.body,function (err, post) {
        if (err)
            console.log(err);
        else{

            res.json(post);
        }
         
    });
}












