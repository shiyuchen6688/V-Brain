/**
 * Function that construct model for Study Table in PostgreSQL database
 */

// TODO: ask if mondana did this part
module.exports = (sequelize, Sequelize) => {
    const Study = sequelize.define("study", {
        tittle: {
            type: Sequelize.STRING
        }
    })
}