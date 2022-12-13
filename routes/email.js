const express = require("express");
const router = express.Router();

const {
  contactForm,
  contactClientForm,
  contactAdminForm,
  contactClientSpecForm,
} = require("../controllers/email");

router.post("/contact", contactForm);
router.post("/contact-client", contactClientForm);
router.post("/contact-admin", contactAdminForm);
router.post("/contact-client-special", contactClientSpecForm);
module.exports = router;
