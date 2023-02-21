const router = require("express").Router();
const userController = require("../controller/user.controller");
router.put('/update/:email', userController.createUser)

module.exports = router;