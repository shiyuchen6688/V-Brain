const express = require("express")
const router = express.Router()

const {
    createStudy,
} = require("../controllers/studyControllers")

//router.route("/reset").delete(dropUserTable)
//router.route("/:id").get(getOneUser).patch(updateOneUser).delete(deleteOneUser)
//router.route("/").get(getAllUser).post(createUser).delete(deleteAllUser)

module.exports = router