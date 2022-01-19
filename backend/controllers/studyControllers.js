
const { Sequelize, sequelize, userModel, studyModel } = require("../models/index")
const Op = Sequelize.Op
const Study = studyModel


// create new study in database
createStudy = (requestBody) => {
    console.log(requestBody);// testing

    return new Promise(function (resolve, reject) {
        
        const newStudy = {
            //tittle: requestBody.tittle,
            tittle: "",
            abbreviation: "",
            principalInvestigatorName: "",
            principalInvestigatorEmail: "",
            permission: "",
            funding: "",
            description:"",
            studyURL:"",
            dataCollectionStatus:"",
            sampleSize:"",
            studyDesign:"",
            dataCollectionSites:"",
            sampleTypeSpecies:"",
            healthyIndivisualInSample:"",
            clinicalAreaInSample:"",
            participantMinAge:"",
            participantMaxAge :"",
            participantSex:"",
            dataTypesAvailable:"",
            biologicalSamples:"",
            imagingMRIs: "",
            imagingPETs: "",
            imagingMRSs: "",
            VBrainSequesncesRadioButtons:"",       
        }
        
        
        Study.create(newStudy).then((newStudy) => {
            console.log("new Study created in database")
            resolve({
                success: "true",
                message: "study created",
                user: newStudy
            })
        })
        .catch((err) => {
            console.log("failed to create new Study")
            resolve({
                success: "false",
                message: "error is throwed",
                error: err
            })
        })


    })

}

module.exports = {
    createStudy,
}
