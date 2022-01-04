/**
 * Function that construct model for User Table in PostgreSQL database
 */

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        email: { // username
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    })
    return User
}