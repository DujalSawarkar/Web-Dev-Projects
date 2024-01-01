import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "student", "visitor"],
  },
});

// module.exports = mongoose.model("user", useSchema);

export const user = mongoose.model("user", userSchema);
