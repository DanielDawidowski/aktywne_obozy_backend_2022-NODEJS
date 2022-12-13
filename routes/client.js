const express = require("express");
const router = express.Router();

const {
  create,
  clientById,
  read,
  update,
  remove,
  getStatusValues,
  updateClientStatus,
  listAll,
} = require("../controllers/client");
// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

router.post("/client", create);
router.get("/clients", listAll);
router.get("/client/:slug", authCheck, adminCheck, read);
router.put("/client/:slug", authCheck, adminCheck, update);
router.delete("/client/:slug", authCheck, adminCheck, remove);
// router.get("/client/statusValues/:userId", authCheck, adminCheck, getStatusValues)
// router.put("/client/:clientId/status/:userId", requireSignin, isAuth, isAdmin, updateClientStatus)

module.exports = router;
