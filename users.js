const mongoose = require("mongoose");
const { Schema } = mongoose;

//level 2 authentication
// const encrypt = require("mongoose-encryption");

//passport authentication
const passportLocalMongoose = require("passport-local-mongoose");

// const UserSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

const UserSchema = new Schema({});

//level 2 authentication
// UserSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });

// passport authentication
UserSchema.plugin(passportLocalMongoose);

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
