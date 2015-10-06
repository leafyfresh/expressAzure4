var mongoose = require('mongoose')
var User = require('./models/User.js');

module.exports = UserList;

function UserList(mongooseUri) {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongoose connection error:'));
    db.once('open', function (callback) {
        console.log('mongoose connection success');
    });
    mongoose.connect(mongooseUri);
}

UserList.prototype = {

    addUser: function (msg) {
        console.log("adduser function")
        
        var newUser = new User({ name: msg});
        console.log(newUser.name);
        
        newUser.speak();

        newUser.save(function savedUser(err) {
            console.log("username: " + msg + " saved.");
            if (err) {
                console.log("username save error.");
                throw err;                
            }
        });
    }
  
}