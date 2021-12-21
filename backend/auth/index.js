const express = require("express")
const router = express.Router()
const user = require("../controllers/userControllers")


// test if route is configured
router.get('/', (req, res) => {
    res.status(200).send({
        success: "true",
        message: "server is listening to request to auth"
    })
    console.log("received get request in auth")
})

// handle register request
router.post("/register", (req, res, next) => {
    console.log("register handler fired")
    user.createUser(req.body).then((result) => {
        if (result.success === "true") {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    })
})

// handle login request
router.post("/login", (req, res, next) => {
    console.lof("login handler fired")
    user.login(req.body).then((loginResult) => {
        if (loginResult) {
            // logged in, give them cookie or something
        } else {
            // something is not working, no permission
        }
    })
})


module.exports = router