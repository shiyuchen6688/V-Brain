
const { Sequelize, sequelize, userModel } = require("../models/index")
const Op = Sequelize.Op
const User = userModel
const bcrypt = require('bcryptjs')

// create new user in database
createUser = (requestBody) => {
    console.log(requestBody) // testing

    return new Promise(function (resolve, reject) {
        // validate request
        if (!requestBody.email) {
            resolve({
                success: "false",
                message: "Missing email(uesr name) when in createUser"
            })
        }

        let userInfoValidation = validUser(requestBody)
        console.log(userInfoValidation)
        console.log(!userInfoValidation)
        if (userInfoValidation.length !== 0) {
            resolve({
                success: "false",
                message: `user information not valid ${userInfoValidation}`
            })
        }

        if (alreadyExist(requestBody.email)) {
            resolve({
                success: "false",
                message: "user email already exist, please log in"
            })
        }

        // hash password by 5 round
        bcrypt.hash(requestBody.password, 5)
            .then((hash) => {
                console.log("hashed")
                const newUser = {
                    email: requestBody.email,
                    password: hash
                }
                return User.create(newUser)
            })
            .then((newUser) => {
                console.log("new User created in database")
                resolve({
                    success: "true",
                    message: "user created",
                    user: newUser
                })
            })
            .catch((err) => {
                resolve({
                    success: "false",
                    message: "error is throwed",
                    error: err
                })
            })


    })
}


// verify user information
function validUser(requestBody) {
    let result = "";

    const validEmail = (typeof requestBody.email == 'string') &&
        (requestBody.email.trim() != '') &&
        (requestBody.email.includes('@'));
    const validPassword = (typeof requestBody.password == 'string') &&
        (requestBody.password.trim().length >= 6);

    // console.log((typeof requestBody.password == 'string'))
    // console.log((requestBody.password.trim().length >= 6))
    if (!validEmail) {
        result = "email is not valid"
    } else if (!validPassword) {
        result = "password is not valid"
    }
    return result
}

// check if registerEmail already exist in our database
function alreadyExist(registerEmail) {
    return (findOneUserByEmail(registerEmail) !== null); // TODO: finish this
}

// log in to existing user account
login = (requestBody) => {
    console.log(requestBody) // testing


    return new Promise(function (resolve, reject) {
        // validate request
        let userInfoValidation = validUser(requestBody)
        if (userInfoValidation.length !== 0) {
            resolve({
                success: "false",
                message: `login information is not valid ${userInfoValidation}`
            })
        }
        if (!alreadyExist(requestBody.email)) {
            resolve({
                success: "false",
                message: "User name does not exist, please register"
            })
        }

        const { email, password } = requestBody
        const loginUser = findOneUserByEmail(email)
        // verify password
        bycrpt.compare(loginUser.password, password)
            .then((passwordMatched) => {
                if (passwordMatched) {
                    resolve({
                        success: "true",
                        message: "You've logged into your account"
                    })
                } else {
                    resolve({
                        success: "false",
                        message: "Password does not match with username, please try again"
                    })
                }
            })
    })
}


// find all users in database
getAllUser = (req, res) => {
    // console.log(User)
    User.findAll()
        .then(allUsers => {
            res.status(200).json(allUsers)
        })
}

// find one specific user in database
getOneUser = (req, res) => {
    findOneUserByEmail(req.body.email)
        .then((findRes) => {
            if (findRes === null) {
                res.status(400).send({
                    success: "false",
                    message: "provided email does not exist in the database"
                })
            } else {
                res.status(200).send({
                    success: "success",
                    message: "found the user",
                    user: findRes
                })
            }
        })
        .catch((err) => {
            throw err;
        })
}

function findOneUserByEmail(email) {
    return User.findOne({ where: { email: email } });
}

// update information about one user
updateOneUser = (req, res) => {
}

// delete all user from database
deleteAllUser = (req, res) => {
}

// delete record of a user from database
deleteOneUser = (req, res) => {
}

// TODO: get permission or other useful info?

module.exports = {
    createUser,
    getOneUser,
    getAllUser,
    updateOneUser,
    deleteAllUser,
    deleteOneUser
}


