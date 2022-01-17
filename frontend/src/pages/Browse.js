import React from "react"
import { Link } from 'react-router-dom'

let studies = []

export default function Browse() {
    return (
        <div>
            <h1>Browse</h1>
            <StudyInfoList />
        </div>
    )
}

function StudyInfoList() {
    return (
        <div>
            {
                studies.map((study) => {
                    return <StudyInfo study={study} />
                })
            }
        </div>
    )

}

// array contain [key, value] pairs, key is column name in database, value is tittle of that attribute to display to users
const columnTittleArray = [["tittle", "Study title"], ["abbreviation", "Study abbreviation"], ["principalInvestigatorName", "Principal investigator"], ["principalInvestigatorEmail", "Principal investigator email"], ["permission", "Permission"],
["funding", "Funding"], ["description", "Description"], ["studyURL", "Study specific URL"], ["dataCollectionStatus", "Data collection status"], ["sampleSize", "Sample size"],
["studyDesign", "Design"], ["dataCollectionSites", "Data collection sites"], ["sampleTypeSpecies", "Species"], ["healthyIndivisualInSample", "Healthy individuals?"],
["clinicalAreaInSample", "Clinical area"], ["participantMinAge", "Minimum age of participant"], ["participantMaxAge", "Maximum age of participant"], ["participantSex", "sex(biological)"]
["dataTypesAvailable", "Data types available"], ["biologicalSamples", "Biological samples"], ["imagingMRIs", "MRI Imaging"], ["imagingPETs", "PET Imaging"], ["imagingMRSs", "MRS Imaging"]]

const columnTittleMap = new Map(columnTittleArray)

function StudyInfo(props) {
    // TODO: these are inputs I need to double check: radiotracerList, StudyDataTypes
    const { tittle, abbreviation, principalInvestigatorName, principalInvestigatorEmail, permission, funding, description,
        studyURL, dataCollectionStatus, sampleSize, studyDesign, dataCollectionSites, sampleTypeSpecies, healthyIndivisualInSample,
        clinicalAreaInSample, participantMinAge, participantMaxAge, participantSex, dataTypesAvailable, biologicalSamples,
        imagingMRIs, imagingPETs, imagingMRSs } = props



    return (
        <div>
            {isDefined(tittle) ? <StudyAttribute columnName="tittle" value={tittle} /> : null}
            {isDefined(abbreviation) ? <StudyAttribute columnName="abbreviation" value={abbreviation} /> : null}
            {isDefined(permission) ? <StudyAttribute columnName="permission" value={permission} /> : null}
            {isDefined(principalInvestigatorName) ? <StudyAttribute columnName="principalInvestigatorName" value={principalInvestigatorName} /> : null}
            {isDefined(principalInvestigatorEmail) ? <StudyAttribute columnName="principalInvestigatorEmail" value={principalInvestigatorEmail} /> : null}
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
    const { columnName, value } = props

    return (
        <section>
            <h4>{columnTittleMap.get(columnName)}</h4>
            <p>{value}</p>
            {(columnName === "permission") ? <PermissionAttribute permissionLevel={value} /> : null}
        </section>
    )

}

function PermissionAttribute(props) {
    const { permissionLevel } = props
    if (permissionLevel === "Public") {
        return <Link />; // TODO: button to add this study to user's study List
    } else if (permissionLevel === "private") {
        return <p>You can't access this study since it's a public study</p>;
    } else {
        return (
            <duv>
                <p>To access this study, you need approval from the principal investigator using contact information in the section below</p>
            </duv>
        );
    }

}