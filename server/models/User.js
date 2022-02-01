const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Must match an email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  favorites: [
    {
      charity_name: {
        type: String,
        required: true,
      },
    },
  ],
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Donation",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// userSchema.pre("findOneAndUpdate", async function (next) {

// const currentUser = await this.model.findOne(this.getQuery());
// // console.log(this.schema);
// // console.log(this.favorites);
// if (!this.getUpdate().$addToSet.favorites) {
//   return next();
// }
// const newFav = this.getUpdate().$addToSet.favorites.charity_name;
// const matchingFav = currentUser.favorites.find(({ charity_name }) => {
//   return charity_name === newFav;
// });
// if (matchingFav === undefined) {
//   return next();
// } else {
//   return next(currentUser.favorites);
// }
// // console.log(matchingFav);

// // next();
// });

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

/* 
add charity url to favorite charities array
*/
