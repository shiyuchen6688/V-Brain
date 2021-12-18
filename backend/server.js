var express = require("express")
var cors = require("cors");
const { stringify } = require("nodemon/lib/utils");
// require("express-async-errors")
const errorHandlerMiddleware = require("./middlewares/error-handler")

const app = express();

const corsOption = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const { Sequelize, sequelize, userModel } = require("./models/index.js")
sequelize.sync();  // Sync all defined models to the DB

app.get("/", async (req, res) => {
    res.json({ message: "welcome to the server" })
})



app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`VBrain server is listening no Port: ${PORT}`)
})