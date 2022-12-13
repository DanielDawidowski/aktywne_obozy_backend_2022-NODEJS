const Client = require("../models/client");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newClient = await new Client(req.body).save();
    res.json(newClient);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  let clients = await Client.find({})
    .populate("event", "_id name")
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(clients);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Client.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Client delete failed");
  }
};

exports.read = async (req, res) => {
  const event = await Client.findOne({ slug: req.params.slug })
    .populate("event", "_id name")
    .exec();
  res.json(event);
};

exports.update = async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const updated = await Client.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("CLIENT UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};
