const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(`Error handler caught an err ${err}`)
    return res.status(500).json({ message: "Something went wrong, server error, please try later" })
}

module.exports = errorHandlerMiddleware