const router = require("express").Router();
const userController = require("../controller/user.controller");
router.put('/update', userController.createUser)

module.exports = router;