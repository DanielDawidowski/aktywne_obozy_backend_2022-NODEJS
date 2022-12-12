const express = require("express");
const router = express.Router();

const {
  contactForm,
  contactClientForm,
  contactAdminForm,
} = require("../controllers/email");

router.post("/contact", contactForm);
router.post("/contact-client", contactClientForm);
router.post("/contact-admin", contactAdminForm);

module.exports = router;
