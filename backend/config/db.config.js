module.exports = {
    HOST: "localhost", // First five parameters are for PostgreSQL connection
    USER: "Shiyu",
    PASSWORD: "123",
    DB: "vbraindb",
    dialect: "postgres"
    // used for Sequelize connection pool, you can add pool option here
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    //   },
}


// I didn't want to change your code, since I wasn't sure 
const Sequelize = require('sequelize');
const sequelize = new Sequelize('vbraindb', 'Shiyu', '123', {
host: 'localhost',
dialect: 'postgres',
//operatorsAliases: false,

pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
},

});



