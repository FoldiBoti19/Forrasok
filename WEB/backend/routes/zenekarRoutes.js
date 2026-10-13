const express = require("express");
const router = express.Router();
const {
getZenekarok,
getStilusok,
ujZenekar
}
=
require("../controllers/zenekarController");
router.get(
"/zenekar",
getZenekarok
);
router.get(
"/stilus",
getStilusok
);
router.post(
"/ujzenekar",
ujZenekar
);

module.exports = router;