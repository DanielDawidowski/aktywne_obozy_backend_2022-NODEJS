const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  listByTypeEvent,
} = require("../controllers/event");

// routes
router.post("/event", authCheck, adminCheck, create);
router.get("/event/:slug", read);
router.get("/events/:count", listAll); // products/100
router.get("/eventsByTypeEvent", listByTypeEvent);
router.delete("/event/:slug", authCheck, adminCheck, remove);
router.put("/event/:slug", authCheck, adminCheck, update);

module.exports = router;
