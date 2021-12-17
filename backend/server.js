var express = require("express")
var cors = require("cors");
const { stringify } = require("nodemon/lib/utils");

const app = express();

const corsOption = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "welcome to the server" })
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`VBrain server is listening no Port: ${PORT}`)
})