const express = require("express")
const router = express.Router()

const {
    createUser,
    getAllUser,
    getOneUser,
    updateOneUser,
    deleteAllUser,
    deleteOneUser,
    dropUserTable,
} = require("../controllers/userControllers")

router.route("/reset").delete(dropUserTable)
router.route("/:id").get(getOneUser).patch(updateOneUser).delete(deleteOneUser)
router.route("/").get(getAllUser).post(createUser).delete(deleteAllUser)



module.exports = router