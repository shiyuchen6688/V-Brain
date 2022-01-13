/**
 * Function that construct model for User Table in PostgreSQL database
 */

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: { // username
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return User
}