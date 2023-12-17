const post = require("../models/postmodel");
const comment = require("../models/commentmodel");
const { findByIdAndUpdate, populate } = require("../models/likemodel");

exports.createcomment = async (req, res) => {
  try {
    //fetch
    const { post, usr, body } = req.body;

    //create object
    const comment = new comment({
      post,
      usr,
      body,
    });

    //save
    const Saved = await comment.save();

    //update post array

    const updatepost = await findByIdAndUpdate(
      post,
      { $push: { comment: Saved._id } },
      { new: true }
    ).populate("comments").exec;
  } catch (err) {
    console.log(err);
  }
};
