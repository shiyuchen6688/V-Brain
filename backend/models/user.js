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
        }
        // TODO: more informatin to be added here
        // TODO: 1 to many or constraint like that
    })
    return User
}