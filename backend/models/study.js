
module.exports = (sequelize, Sequelize) => {
    const Study = sequelize.define("study", {
        tittle: { // study title
            type: Sequelize.STRING,
            allowNull: false,
        },
        abbreviation: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        principalInvestigatorName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        principalInvestigatorEmail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        permission: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        funding: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description:{
            type: Sequelize.TEXT,
            allowNull: true,
        },
        studyURL:{
            type: Sequelize.STRING,
            allowNull: true,
        },
        dataCollectionStatus: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        sampleSize: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        studyDesign: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dataCollectionSites: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        sampleTypeSpecies: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        healthyIndivisualInSample: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        clinicalAreaInSample: {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        participantMinAge: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        participantMaxAge : {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        participantSex: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dataTypesAvailable:{
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        biologicalSamples: {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        imagingMRIs:  {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        imagingPETs:  {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        imagingMRSs:  {
            type: Sequelize.STRING,
            allowNull: true,
        }, 
        VBrainSequesncesRadioButtons: {
            type: Sequelize.STRING, // it can be STRING  or BOOLEAN
            allowNull: true,
        },
    })
    return Study
}