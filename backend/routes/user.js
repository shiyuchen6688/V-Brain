const express = require("express")
const router = express.Router()

const {
    createUser,
    getAllUser,
    getOneUser,
    updateOneUser,
    deleteAllUser,
    deleteOneUser
} = require("../controllers/userControllers")

router.route("/").get(getAllUser).post(createUser)
router.route("/:id").get(getOneUser).patch(updateOneUser).delete(deleteOneUser)

module.exports = router