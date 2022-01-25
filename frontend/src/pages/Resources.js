/**
 * Display static resources to users
 */
import React from "react"

const neuroImagingTittleList = [
    "Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium",
    "Human Connectome Project ",
    "Adolescent Brain Cognitive Development (ABCD)",
    "UK-Biobank",
    "Alzheimer's Disease Neuroimaging Initiative (ADNI)",
    "IMAGEN Study ",
    "Cambridge Centre for Ageing and Neuroscience (Cam-CAN) ",
    "Neurovault ",
    "International Neuroimaging Data-sharing Initiative",
    "this one includes many widely used dataset, e.g., ABIDE, ADHD200, CoRR etc. Function Biomedical Informatics Research Network(FBIRN)",
    "Open Access Series of Imaging Studies (OASIS)",
    "OpenfMRI and OpenNeuro", // TODO: treat this specially
    "NIH Pediatric MRI Data Repository",
    "Information eXtraction from Images (IXI)",
    "Open Connectome Project",
    "Naturalistic Neuroimaging Database",
    "National Consortium on Alcohol and Neurodevelopment in Adolescence",
    "Pediatric Imaging, Neurocognition, and Genetics (PING)",
    "Philadelphia Neurodevelopmental Cohort",
    "SchizConnect",
    "Brain Genome Superstruct Project",
    "Australian Imaging, Biomarkers and Lifestyle (AIBL)",
    "Chinese Imaging Genetics (CHIMGEN)"


]

const neuroimagingRepoLinkList = [
]

const analysesSiteTittleList = [
]

const analysesSiteLinkList = [
]

export default function Resources() {
    return (
        <div className="ui container">
            <h1>Resources</h1>

            <h3>Neuroimaging repositories</h3>
            <ResourceList names={neuroImagingTittleList} links={neuroimagingRepoLinkList} />

            <h3>Sites with script for analyses packages</h3>
            <ResourceList names={analysesSiteTittleList} links={analysesSiteLinkList} />
        </div>
    )
}

function ResourceList() {
    return (
        <div>
            <div class="ui ordered list">
                <a class="item" href="http://enigma.ini.usc.edu/">Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium</a>
                <a class="item" href="http://enigma.ini.usc.edu/">Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium</a>
                <a class="item" href="http://enigma.ini.usc.edu/">Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium</a>
                <a class="item" href="http://enigma.ini.usc.edu/">Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium</a>

            </div>
            <div>

                <p>Enhancing NeuroImaging Genetics through Meta-Analysis (ENIGMA) Consortium (http://enigma.ini.usc.edu/)</p>
                <p>Human Connectome Project (http://www.humanconnectomeproject.org/)</p>
                <p>Adolescent Brain Cognitive Development (ABCD) (https://abcdstudy.org)</p>
                <p>UK-Biobank (https://www.ukbiobank.ac.uk/enable-your-research/about-our-data/imaging-data)</p>
                <p>Alzheimer's Disease Neuroimaging Initiative (ADNI) (http://adni.loni.usc.edu/)</p>
                <p>IMAGEN Study (https://imagen-europe.com/)</p>
                <p>Cambridge Centre for Ageing and Neuroscience (Cam-CAN) (https://www.cam-can.org/)</p>
                <p>Neurovault (https://neurovault.org/)</p>
                <p>International Neuroimaging Data-sharing Initiative (http://fcon_1000.projects.nitrc.org/), this one includes many widely used dataset, e.g., ABIDE, ADHD200, CoRR etc.</p>
                <p>Function Biomedical Informatics Research Network (FBIRN) (http://www.birncommunity.org)</p>
                <p>Open Access Series of Imaging Studies (OASIS) (https://www.oasis-brains.org/)</p>
                <p>OpenfMRI (http://openfmri.org/) and OpenNeuro (https://openneuro.org/)</p>
                <p>NIH Pediatric MRI Data Repository (https://www.nitrc.org/projects/pediatric_mri)</p>
                <p>Information eXtraction from Images (IXI) (http://brain-development.org/)</p>
                <p>Open Connectome Project (https://neurodata.io/mri/)</p>
                <p>Naturalistic Neuroimaging Database (https://www.naturalistic-neuroimaging-database.org/)</p>
                <p>National Consortium on Alcohol and Neurodevelopment in Adolescence (http://www.ncanda.org/)</p>
                <p>Pediatric Imaging, Neurocognition, and Genetics (PING) (http://pingstudy.ucsd.edu)</p>
                <p>Philadelphia Neurodevelopmental Cohort (https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000607.v2.p2)</p>
                <p>SchizConnect (https://www.schizconnect.org)</p>
                <p>Brain Genome Superstruct Project (http://neuroinformatics.harvard.edu/gsp)</p>
                <p>Australian Imaging, Biomarkers and Lifestyle (AIBL) (http://www.aibl.csiro.au)</p>
                <p>Chinese Imaging Genetics (CHIMGEN) (http://chimgen.tmu.edu.cn/en/)</p>
            </div>
        </div>
    )
}