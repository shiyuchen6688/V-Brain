const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: 'postgres'
    }
);

const userConstructor = require("./user.js")
userModel = userConstructor(sequelize, Sequelize)

const studyConstructor = require("./study.js")
studyModel = studyConstructor(sequelize, Sequelize)

// TODO: might need to refactor for different models
// console.log(sequelize)
module.exports = { Sequelize, sequelize, userModel, studyModel }