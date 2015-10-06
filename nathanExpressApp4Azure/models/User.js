var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name      : String
});

UserSchema.methods.speak = function () {
    var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
    console.log(greeting);
}

module.exports = mongoose.model('User', UserSchema);