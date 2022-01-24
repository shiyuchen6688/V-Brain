import React, { useState, useEffect } from "react"
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

// Filters key and values
const filterKeys = ["permission", "status", "design", "species"];
const filterKeyValueMap = new Map();
filterKeyValueMap.set("permission", ["Public", "Private", "PI approval"])
filterKeyValueMap.set("status", ["Completed", "Ongoing"])
filterKeyValueMap.set("design", ["Cross-sectional", "Longitudinal", "Observational", "Interventional", "Other"])
filterKeyValueMap.set("species", ["Human", "Non-Human Primate", "Murine", "Other"])



export default function Browse() {
    const [keyword, setKeyword] = useState("")
    const [permission, setPermission] = useState([])
    const [status, setStatus] = useState([])
    const [design, setDesign] = useState([])
    const [species, setSpecies] = useState([])

    const searchBarProps = {
        onPermissionSelection: setPermission,
        permissionSelection: permission,
        onStatusSelection: setStatus,
        statusSelection: status,
        onDesignSelection: setDesign,
        designSelection: design,
        onSpeciesSelection: setSpecies,
        speciesSelection: species,

    }

    useEffect(() => {
        console.log("rerendered")
    }, [keyword, permission, status, design, species])



    return (
        <div className="ui container">
            <h1>Browse</h1>
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="sixteen wide column">
                        <KeyWordSearch onInputChange={setKeyword} />
                    </div>
                </div>
                <div className="row">
                    <div className="four wide column">
                        <SearchBars {...searchBarProps} />
                    </div>

                    <div className="twelve wide column">
                        <StudyInfoList keyword={keyword} permission={permission} status={status} design={design} species={species} />
                    </div>
                </div>
            </div>

        </div>
    )
}

function KeyWordSearch(props) {
    const { onInputChange } = props;

    return (
        <div className="ui form">
            <div className="inline field">
                <p>Key word search:</p>
                <input type="text" placeholder="Key Word" size="50" onChange={(e) => onInputChange(e.target.value)} />
            </div>
        </div>
    )
}

function SearchBars(props) {
    const { onPermissionSelection, permissionSelection, onStatusSelection, statusSelection,
        onDesignSelection, designSelection, onSpeciesSelection, speciesSelection } = props;
    return (
        <div>
            <p style={{ fontSize: "62%" }}>Filter By Attribute:</p>
            <p style={{ fontSize: "55%" }}>(hold cmd or ctrl to select multiple)</p>
            <div className="ui hidden divider"></div>

            <FilterOption filterKey="permission" onSelection={onPermissionSelection} selection={permissionSelection} />

            <div className="ui hidden divider"></div><div className="ui hidden divider"></div>

            <FilterOption filterKey="status" onSelection={onStatusSelection} selection={statusSelection} />

            <div className="ui hidden divider"></div><div className="ui hidden divider"></div>

            <FilterOption filterKey="design" onSelection={onDesignSelection} selection={designSelection} />

            <div className="ui hidden divider"></div><div className="ui hidden divider"></div>

            <FilterOption filterKey="species" onSelection={onSpeciesSelection} selection={speciesSelection} />
        </div>
    )
}


function FilterOption(props) {
    const { filterKey, onSelection, selection } = props;
    const options = filterKeyValueMap.get(filterKey);

    const handleChange = (e) => {
        var selected = [];
        for (var option of document.getElementById(`filter-${filterKey}`).options) {
            if (option.selected) {
                selected.push(option.value);
            }
        }
        console.log(selected);

        onSelection(selected);
    }
    return (
        <div>
            <p style={{ fontSize: "60%" }}>{filterKey}</p>
            <select id={`filter-${filterKey}`} name={filterKey} multiple className="ui fluid dropdown" style={{ fontSize: "65%", height: "180%" }} onChange={handleChange}>
                {/* <option value="">{filterKey}</option> */}
                {

                    options.map((option, i) => {
                        if (selection.includes(option.toLowerCase()))
                            return <option key={uuid()} value={option.toLowerCase()} selected>{option}</option>
                        else
                            return <option key={uuid()} value={option.toLowerCase()}>{option}</option>
                    })
                }
            </select>
        </div>

    )

}



function StudyInfoList(props) {
    const { keyword, permission, status, design, species } = props;
    console.log(props)

    return (
        <div>
            {
                studies.filter((s) => {
                    const includeKeyWord = JSON.stringify(s).toLowerCase().includes(keyword.toLowerCase());
                    const matchPermission = permission.length === 0 || (s.permission && permission.includes(s.permission.toLowerCase()));
                    const matchStatus = status.length === 0 || (s.dataCollectionStatus && status.includes(s.dataCollectionStatus.toLowerCase()));
                    const matchDesign = design.length === 0 || (s.studyDesign && s.studyDesign.some(item => design.includes(item.toLowerCase())));
                    const matchSpecies = species.length === 0 || (s.sampleTypeSpecies && s.sampleTypeSpecies.some(item => species.includes(item.toLowerCase())));
                    console.log(matchDesign)
                    if (includeKeyWord && matchPermission && matchStatus && matchDesign && matchSpecies) {
                        return s;
                    }
                })
                    .map((study) => {
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
            <table className="ui celled table">
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