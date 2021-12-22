const express = require("express")
const router = express.Router()
const user = require("../controllers/userControllers")
const jwt = require("jsonwebtoken")
require("dotenv").config()


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
            console.log(result)
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
        if (loginResult.success === 'true') {
            // logged in, give them jwt token
            // create jwt token
            const token = jwt.sign(
                { uesrname: req.body.email },
                provess.env.JWT_KEY,
                {
                    expiresIn: "2h"
                }
            );
            res.cookie('vbrain-login-cookie', token, {
                httpOnly: true,
                maxAge: 2 * 60 * 3600 * 1000,
                //secure: true, // TODO: enable this in deployment
                signed: true
            })
            res.status(200).json(loginResult)
        } else {
            // something is not working, no permission
            res.status(400).json(loginResult)
        }
    })
})


module.exports = router