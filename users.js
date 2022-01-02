const mongoose = require("mongoose");
const { Schema } = mongoose;

//level 2 authentication
// const encrypt = require("mongoose-encryption");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//level 2 authentication
// UserSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
