import React from "react"
import { Link } from 'react-router-dom'
import { v4 as uuid } from "uuid"

const exampleStudy1 = {
    "tittle": "first study",
    "abbreviation": "FS",
    "principalInvestigatorName": "Sophia Frangou",
    "principalInvestigatorEmail": "sophia.frangou@ubc.ca",
    "permission": "Public",
    "funding": ["Funding/National Federal Agency", "Funding/Non-Governmental Funding Agency"],
    "description": "This is a public study to be registered to test the study registration of V-Brain platform",
    "dataCollectionStatus": "Completed",
    "sampleSize": 145,
    "studyDesign": ["Cross-sectional", "Interventional", "Observational"],
    "dataCollectionSites": ["Compute Canada", "UBC ARC", "McGill University"],
    "sampleTypeSpecies": ["Human", "Non-Human Primate"],
    "healthyIndivisualInSample": true,
    "clinicalAreaInSample": ["Addiction/Alcohol related disorders", "Addiction/Cannabis related disorders", "Psychotic Disorders/Delusional disorders", "Anxiety and Stress-related Disorders/Social Phobia"],
    "participantMinAge": 15,
    "participantMaxAge": 45,
    "participantSex": "Both",
    "dataTypesAvailable": ["Race/ethnicity", "Autonomic functions", "Neurological symptoms"],
    "biologicalSamples": ["Blood", "Stool", "Urine"],
    "imagingMRIs": ["Structural MRI", "Diffusion MRI"],
    "VBrainSequesncesRadioButtons": "yes",
}

const exampleStudy2 = {
    "tittle": "second study",
    "abbreviation": "SS",
    "principalInvestigatorName": "Nicole Sanford",
    "principalInvestigatorEmail": "nicole.sanford@ubc.ca",
    "permission": "Conditional on PI approval",
    "dataCollectionStatus": "Ongoing",
    "sampleSize": 15,
    "studyDesign": ["Observational", "Other study design_1"],
    "sampleTypeSpecies": ["Non-Human Primate"],
    "clinicalAreaInSample": ["Neurological Disorders/Dementia (Unspecified)", "Neurological Disorders/Pick's disease", "Developmental Disorders/Rett's syndrome"],
    "participantMinAge": 18,
    "participantMaxAge": 84,
    "participantSex": "Female",
    "dataTypesAvailable": ["Neurological symptoms"],
    "imagingMRIs": ["Structural MRI", "Diffusion MRI"]
}

const exampleStudy3 = {
    "tittle": "third study",
    "abbreviation": "TS",
    "principalInvestigatorName": "Sophia Frangou",
    "principalInvestigatorEmail": "sophia.frangou@ubc.ca",
    "permission": "Private",
    "funding": ["Funding/Non-Governmental Funding Agency"],
    "dataCollectionStatus": "Completed",
    "sampleSize": 120,
    "studyDesign": ["Cross-sectional"],
    "dataCollectionSites": ["Compute Canada"],
    "sampleTypeSpecies": ["Human"],
    "healthyIndivisualInSample": true,
    "biologicalSamples": ["Urine"],
    "imagingMRSs": ["Phosphorus", "Lithium", "Other MRS one", "Other MRS two"]
}

let studies = [exampleStudy1, exampleStudy2, exampleStudy3]


export default function Browse() {
    return (
        <div>
            <h1>Browse</h1>
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                        <searchBars />
                    </div>

                    <div className="thirteen wide column">
                        <StudyInfoList />
                    </div>
                </div>
            </div>

        </div>
    )
}

function StudyInfoList() {
    return (
        <div>
            {
                studies.map((study) => {
                    study.id = uuid()
                    return <StudyInfo key={study.id} study={study} />
                })
            }
        </div>
    )

}

// array contain [key, value] pairs, key is column name in database, value is tittle of that attribute to display to users
const columnTittleArray = [
    ["tittle", "Study title"], ["abbreviation", "Study abbreviation"], ["principalInvestigatorName", "Principal investigator"],
    ["principalInvestigatorEmail", "Principal investigator email"], ["permission", "Permission"],
    ["funding", "Funding"], ["description", "Description"], ["studyURL", "Study specific URL"],
    ["dataCollectionStatus", "Data collection status"], ["sampleSize", "Sample size"],
    ["studyDesign", "Design"], ["dataCollectionSites", "Data collection sites"], ["sampleTypeSpecies", "Species"],
    ["healthyIndivisualInSample", "Healthy individuals?"], ["clinicalAreaInSample", "Clinical area"],
    ["participantMinAge", "Minimum age of participant"], ["participantMaxAge", "Maximum age of participant"], ["participantSex", "sex(biological)"],
    ["dataTypesAvailable", "Data types available"], ["biologicalSamples", "Biological samples"],
    ["imagingMRIs", "MRI Imaging"], ["imagingPETs", "PET Imaging"], ["imagingMRSs", "MRS Imaging"]
]



const columnTittleMap = new Map(columnTittleArray)

function StudyInfo(props) {
    // TODO: these are inputs I need to double check: radiotracerList, StudyDataTypes
    const { tittle, abbreviation, principalInvestigatorName, principalInvestigatorEmail, permission, funding, description,
        studyURL, dataCollectionStatus, sampleSize, studyDesign, dataCollectionSites, sampleTypeSpecies, healthyIndivisualInSample,
        clinicalAreaInSample, participantMinAge, participantMaxAge, participantSex, dataTypesAvailable, biologicalSamples,
        imagingMRIs, imagingPETs, imagingMRSs } = props.study

    console.log(props)


    console.log(isDefined(tittle))
    return (
        <div className="ui piled segment" style={{ color: "black" }}>
            {isDefined(tittle) ? <h3>{tittle}</h3> : null}
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {isDefined(tittle) ? <StudyAttribute columnName="tittle" value={tittle} /> : null}
                    {isDefined(abbreviation) ? <StudyAttribute columnName="abbreviation" value={abbreviation} /> : null}
                    {isDefined(funding) ? <StudyAttribute columnName="funding" value={funding} /> : null}
                    {isDefined(description) ? <StudyAttribute columnName="description" value={description} /> : null}
                    {isDefined(studyURL) ? <StudyAttribute columnName="studyURL" value={studyURL} /> : null}
                    {isDefined(dataCollectionStatus) ? <StudyAttribute columnName="dataCollectionStatus" value={dataCollectionStatus} /> : null}
                    {isDefined(sampleSize) ? <StudyAttribute columnName="sampleSize" value={sampleSize} /> : null}
                    {isDefined(studyDesign) ? <StudyAttribute columnName="studyDesign" value={studyDesign} /> : null}
                    {isDefined(dataCollectionSites) ? <StudyAttribute columnName="dataCollectionSites" value={dataCollectionSites} /> : null}
                    {isDefined(sampleTypeSpecies) ? <StudyAttribute columnName="sampleTypeSpecies" value={sampleTypeSpecies} /> : null}
                    {isDefined(healthyIndivisualInSample) ? <StudyAttribute columnName="healthyIndivisualInSample" value={healthyIndivisualInSample} /> : null}
                    {isDefined(clinicalAreaInSample) ? <StudyAttribute columnName="clinicalAreaInSample" value={clinicalAreaInSample} /> : null}
                    {isDefined(participantMinAge) ? <StudyAttribute columnName="participantMinAge" value={participantMinAge} /> : null}
                    {isDefined(participantMaxAge) ? <StudyAttribute columnName="participantMaxAge" value={participantMaxAge} /> : null}
                    {isDefined(participantSex) ? <StudyAttribute columnName="participantSex" value={participantSex} /> : null}
                    {isDefined(dataTypesAvailable) ? <StudyAttribute columnName="dataTypesAvailable" value={dataTypesAvailable} /> : null}
                    {isDefined(biologicalSamples) ? <StudyAttribute columnName="biologicalSamples" value={biologicalSamples} /> : null}
                    {isDefined(imagingMRIs) ? <StudyAttribute columnName="imagingMRIs" value={imagingMRIs} /> : null}
                    {isDefined(imagingPETs) ? <StudyAttribute columnName="imagingPETs" value={imagingPETs} /> : null}
                    {isDefined(imagingMRSs) ? <StudyAttribute columnName="imagingMRSs" value={imagingMRSs} /> : null}
                    {isDefined(principalInvestigatorName) ? <StudyAttribute columnName="principalInvestigatorName" value={principalInvestigatorName} /> : null}
                    {isDefined(principalInvestigatorEmail) ? <StudyAttribute columnName="principalInvestigatorEmail" value={principalInvestigatorEmail} /> : null}
                    {isDefined(permission) ? <StudyAttribute columnName="permission" value={permission} /> : null}
                </tbody>
            </table>
            {isDefined(permission) ? <PermissionAttribute value={permission} /> : null}
        </div>
    )

}

function isDefined(variable) {
    return Boolean(variable)
}

/**
 * Input:
 * columnName: name of the column in the database
 * value: value of the column in database
 * Output:
 * Return div describe current attribute
 */
function StudyAttribute(props) {
    let { columnName, value } = props
    if (value === true)
        value = "Yes"
    if (Array.isArray(value))
        value = value.join(", ")

    return (
        // <section className="ui">
        //     <p>{`${columnTittleMap.get(columnName)}: ${value}`}</p>
        //     {(columnName === "permission") ? <PermissionAttribute permissionLevel={value} /> : null}
        // </section>
        <tr>
            <td data-label="Name">{columnTittleMap.get(columnName)}</td>
            <td data-label="Value">{value}</td>
        </tr>
    )

}

function PermissionAttribute(props) {
    const { value: permissionLevel } = props
    if (permissionLevel === "Public") {
        return <button className="ui button green">Add to Your Study Home Page</button> // TODO: button to add this study to user's study List
    } else if (permissionLevel === "Private") {
        return (
            <div className="ui message red">
                <p>You can't access this study since it's a public study</p>
            </div>
        );
    }
    else {
        return (
            <div className="ui message yellow">
                <p>To access this study, you need approval from the principal investigator by sending email to the email address above</p>
            </div>
        );
    }

}