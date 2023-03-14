const Event = require("../models/event");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newEvent = await new Event(req.body).save();
    res.json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  let events = await Event.find({})
    .limit(parseInt(req.params.count))
    .populate("typeEvent")
    // .sort([["createdAt", "desc"]])
    .exec();
  res.json(events);
};

exports.listByTypeEvent = async (req, res) => {
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  let products = await Event.find({})
    .where({ typeEvent: sortBy })
    .limit(limit)
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(products);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Event.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Event delete failed");
  }
};

exports.read = async (req, res) => {
  const event = await Event.findOne({ slug: req.params.slug }).exec();
  res.json(event);
};

exports.update = async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const updated = await Event.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("EVENT UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

// exports.read = (req, res) => {
//     return res.json(req.event)
// }

// exports.update = (req, res) => {
//     Event.findByIdAndUpdate(req.params.eventId, req.body,  (err, events) => {
//     // Handle any possible database errors
//         if (err) return res.status(500).send(err);
//         return res.send(events);
//     })
// }

// exports.remove = (req, res) => {
//     Event.findByIdAndRemove(req.params.eventId, (err, event) => {
//     // As always, handle any potential errors:
//     if (err) return res.status(500).send(err);
//     // We'll create a simple object to send back with a message and the id of the document that was removed
//     // You can really do this however you want, though.
//     const response = {
//         message: "Event successfully deleted",
//         id: event._id
//     };
//         return res.status(200).send(response);
//     });
// }

// exports.list = (req, res) => {
//     let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
//     let limit = req.query.limit ? parseInt(req.query.limit) : 6;

//     Event.find()
//         .where({ typeEvent: sortBy })
//         .limit(limit)
//         .exec((err, events) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: 'Products not found'
//                 });
//             }
//             res.json(events);
//         });
// };

// exports.listEvents = (req, res) => {
//     Event.find()
//         .exec((err, events) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: 'Event not found'
//                 });
//             }
//             res.json(events);
//         });
// };

// exports.getTypeEvents = (req, res) => {
//    res.json(Event.schema.path("typeEvent").enumValues);
// };

// exports.getStatusValues = (req, res) => {
//    res.json(Event.schema.path("status").enumValues);
// };

// // exports.addClientToEventHistory = (req, res, next) => {
// //     let history = [];

// //     history.push({ name: req.body.name, email: req.body.email, phone: req.body.phone })

// //     Event.findOneAndUpdate(
// //         {_id: req.event._id },
// //         { $push: { history: history } },
// //         { new: true },
// //         (error, data) => {
// //             if (error) {
// //                 return res.status(400).json({
// //                     error: "Could not update user purchase history"
// //                 });
// //             }
// //             next();
// //         }
// //     );
// // };

// exports.decreaseAmount = (req, res, next) => {
//     let bulkOps = {
//             updateOne: {
//                 filter:  req.body._id,
//                 update:{ $inc: { amount: -1 } }
//             }
//         }

//     console.log(req.body._id)
//     //    let bulkOps = [];
//     //     let decreaseClient = {
//     //         updateOne: {
//     //                 filter: { _id: req.body._id},
//     //                 update: { amount: -event.count }
//     //             }
//     //     }

//     //      bulkOps.push(decreaseClient);

//     Event.bulkWrite(bulkOps, {}, (error, events) => {
//         if (error) {
//             return res.status(400).json({
//                 error: "Could not update product"
//             });
//         }
//         next();
//     });
// }
