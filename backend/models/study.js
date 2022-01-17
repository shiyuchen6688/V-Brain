
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
            //type: Sequelize.??? (would be a list),
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
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        },
        dataCollectionSites: {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        },
        sampleTypeSpecies: {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        },
        healthyIndivisualInSample: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        clinicalAreaInSample: {
            //type: Sequelize.??? (would be a list),
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
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        }, 
        biologicalSamples: {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        }, 
        imagingMRIs:  {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        }, 
        imagingPETs:  {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        }, 
        imagingMRSs:  {
            //type: Sequelize.??? (would be a list),
            allowNull: true,
        }, 
        VBrainSequesncesRadioButtons: {
            type: Sequelize.STRING, // it can be STRING  or BOOLEAN
            allowNull: true,
        },








    })
    return Study
}