import React, { Style, useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { v4 as uuid } from "uuid"

export default class RegisterStudy extends React.Component{ 
	
	styles = {
		input: {width: "100%", height:30, borderRadius: 5, margin:10, fontSize:"15px"},
		button: {width: "20%", height:50, borderRadius: 5, margin:10, fontSize:"20px"},
		textArea: {width: "100%", borderRadius: 5, margin:10, fontSize: 15, resize: "none"},
		radioButton: {margin: 10, transform: "scale(1.5)"},
		checkBox: {margin: 10, transform: "scale(1.5)"},
		formBackground: {width: "100%", borderRadius: 10, backgroundColor: "#7699bd", margin: 10},
		formHorizontalSection: {display: "flex", justifyContent: "space-between"},
		list: {width: "100%", overflowY: "scroll", height: "500px"},
	}

	radiotracerList = [
		{"text": "Adenosine A1 [11C]MPDX", "id": uuid()},			
		{"text": "Adenosine A1 [18F]CPFPX", "id": uuid()},
		{"text": "Adenosine A2A [11C]SCH442416", "id": uuid()},
		{"text": "Adenosine A2A [18F]MNI-444", "id": uuid()},
		{"text": "Adenosine A2A [123I]MNI-420", "id": uuid()},
		{"text": "Adenosine A2A [11C]Preladenant", "id": uuid()},
		{"text": "Adenosine A2A [11C]TMSX", "id": uuid()},
		{"text": "CB1 [18F]FEMMEP-d2", "id": uuid()},
		{"text": "CB1 [18F]MK-9470", "id": uuid()},
		{"text": "CB1 [11C]MePPEP", "id": uuid()},
		{"text": "CB1 [11C]OMAR", "id": uuid()},
		{"text": "CB1 [11C]SD5024", "id": uuid()},
		{"text": "D1 [11C]SCH 23390", "id": uuid()},
		{"text": "D1 [18F]MNI-968 ([18F]PF-8477)", "id": uuid()},
		{"text": "D1 [11C]NNC 112", "id": uuid()},
		{"text": "D2/D3 [11C]Raclopride", "id": uuid()},
		{"text": "D2/D3 [11C]FLB 457", "id": uuid()},
		{"text": "D2/D3 [11C]MNPA", "id": uuid()},
		{"text": "D2/D3 [11C](+)PHNO", "id": uuid()}, 
		{"text": "D2/D3 [11C]NPA", "id": uuid()},
		{"text": "D2/D3 [18F]Fallypride", "id": uuid()},
		{"text": "D2/D3 [123I]IBZM", "id": uuid()},
		{"text": "D2/D3 [123I]Epidepride", "id": uuid()},
		{"text": "D2/D3 [123I]IBF", "id": uuid()},
		{"text": "H1 [11C]Doxepin", "id": uuid()},
		{"text": "H3 [11C]GR 103545", "id": uuid()},
		{"text": "H3 [11C]GSK189254", "id": uuid()},
		{"text": "H3 [15-HT1A [carbonyl-11C]WAY", "id": uuid()},
		{"text": "5-HT1A [carbonyl-11D]WAY", "id": uuid()},
		{"text": "5-HT1A [11C]CUMI-101", "id": uuid()},
		{"text": "5-HT1A [18F] FCWAY", "id": uuid()},
		{"text": "5-HT1A [18F]MefWAY", "id": uuid()},
		{"text": "5-HT1A [18F]MPPF 8F]FMH3", "id": uuid()},
		{"text": "5-HT1B [11C]AZ10419369", "id": uuid()},
		{"text": "5-HT1B [11C]P943", "id": uuid()},
		{"text": "5-HT2A [11C]MDL 100 907", "id": uuid()},
		{"text": "5-HT2A [18F]Altanserin", "id": uuid()},
		{"text": "5-HT2A [18F]Altanserin-d2", "id": uuid()},
		{"text": "5-HT2A [18F]Setoperone", "id": uuid()},
		{"text": "5-HT4 [11C]SB-207145", "id": uuid()},
		{"text": "5-HT6 [11C]GSK-215083", "id": uuid()},
		{"text": "mGluR1 [11C]ITMM", "id": uuid()},
		{"text": "mGluR1 [18F]FIMX", "id": uuid()},
		{"text": "mGluR5 [11C]ABP688", "id": uuid()},
		{"text": "mGluR5 [18F]-FPEB", "id": uuid()},
		{"text": "mGluR5 [18F]-PSS232", "id": uuid()},
		{"text": "NK1[18F]SPA-RQ", "id": uuid()},
		{"text": "NK1 [18F]MK-0999 ([18F]FE-SPA-RQ)", "id": uuid()},
		{"text": "NOP [11C]NOP-1A", "id": uuid()},
		{"text": "Opiate (DOR) [11C]Methylnaltrindole", "id": uuid()},
		{"text": "Opiate (MOR) [11C]Diprenorphine", "id": uuid()},
		{"text": "Opiate (MOR) [11C]Carfentanil (agonist)", "id": uuid()},
		{"text": "Opiate (MOR) [18F]Fluoroethyldiprenorphine", "id": uuid()},
		{"text": "Opiate (KOR) [11C]GR103545", "id": uuid()},
		{"text": "Opiate (KOR) [11C]LY2795050", "id": uuid()},
		{"text": "Sigma [11C]SA4503", "id": uuid()},
		{"text": "Imidazoline Receptors (I2 binding site) [11C]BU99008", "id": uuid()},
		{"text": "Bz(GABAA) [11C]Flumazenil", "id": uuid()},
		{"text": "Bz (GABAA) [18F]Flumazenil", "id": uuid()},
		{"text": "Bz (α5GABAA) [11C]Ro15 4513", "id": uuid()},
		{"text": "Nicotinic (α4β2) 2-[18F]F-A-85380 (2-[18F]FA)", "id": uuid()},
		{"text": "Nicotinic (α4β2) 6-[18F]FA", "id": uuid()},
		{"text": "Nicotinic (α4β2) [18F]Nifene", "id": uuid()},
		{"text": "[18F]XTRA", "id": uuid()},
		{"text": "Nicotinic (α4β2) [18F]GMOM", "id": uuid()},
		{"text": "Nicotinic (α4β2) [18F]AZAN", "id": uuid()},
		{"text": "Nicotinic (α4β2) [18F]Flubatine", "id": uuid()},
		{"text": "Nicotinic (α4β2) [123I]51A", "id": uuid()},
		{"text": "Nicotinic (α7) [11C]CHIBA-1001", "id": uuid()},
		{"text": "Nicotinic (α7) [18F]ASEM", "id": uuid()},
		{"text": "NMDA [18F]GE-179", "id": uuid()},
		{"text": "NMDA [123I]CNS1 P2X7 [11C]JNJ54173717", "id": uuid()},
		{"text": "P2X7 [11C]GSK-1482160", "id": uuid()},
		{"text": "P2X7 [18F]JNJ-64413739261", "id": uuid()},
		{"text": "DAT [11C]PE2I", "id": uuid()},
		{"text": "DAT [11C]Methylphenidate", "id": uuid()},
		{"text": "DAT [18F]FP-CIT", "id": uuid()},
		{"text": "DAT [123I]FP-CIT (DATSCAN)", "id": uuid()},
		{"text": "DAT [18F]FE-PE2I", "id": uuid()},
		{"text": "DAT [123I]CIT (Dopascan)", "id": uuid()},
		{"text": "DAT [18F]FECNT", "id": uuid()},
		{"text": "DAT [123I]Altropane", "id": uuid()},
		{"text": "DAT [123I]PE2I", "id": uuid()},
		{"text": "Glycine T1[11C]CFpyPB", "id": uuid()},
		{"text": "Glycine T1 [11C]GSK 931145 ", "id": uuid()},
		{"text": "Glycine T1 [18F]CFPyPB", "id": uuid()},
		{"text": "Glycine T1 [11C]RO5013853", "id": uuid()},
		{"text": "NET [11C]MeNER-d2", "id": uuid()},
		{"text": "NET [18F]FMeNER-d2", "id": uuid()},
		{"text": "NET [123I]INER", "id": uuid()},
		{"text": "SERT [11C]DASB", "id": uuid()},
		{"text": "SERT [11C]MADAM", "id": uuid()},
		{"text": "SERT [11C]AFM", "id": uuid()},
		{"text": "SERT [11C]HOHMADAM", "id": uuid()},
		{"text": "SERT [18F]ADAM", "id": uuid()},
		{"text": "SERT [123I]CIT", "id": uuid()},
		{"text": "SERT [123I]mZIENT", "id": uuid()},
		{"text": "SERT [123I]norβCIT", "id": uuid()},
		{"text": "SERT [123I]βCIT", "id": uuid()},
		{"text": "SERT [123I]ADAM", "id": uuid()},
		{"text": "VMAT2 [11C]DTBZ", "id": uuid()},
		{"text": "VMAT2 [11C]MTBZ", "id": uuid()},
		{"text": "VMAT2 [18F]florbenazine", "id": uuid()},
		{"text": "VMAT2 [18F]AV-133", "id": uuid()},
		{"text": "VMAT2 [18F]FP-DTBZ", "id": uuid()},
		{"text": "VAChT [18F]FEOBV", "id": uuid()},
		{"text": "SV2A [11C]UCB-J", "id": uuid()},
		{"text": "SV2A [11C]UCB-A", "id": uuid()},
		{"text": "SV2A  [18F]UCB-H", "id": uuid()},
		{"text": "TSPO [11C](R)-PK 11195", "id": uuid()},
		{"text": "TSPO [11C]PBR28", "id": uuid()},
		{"text": "TSPO [11C]DAA1106", "id": uuid()},
		{"text": "TSPO [11C]DPA-713", "id": uuid()},
		{"text": "TSPO [18F]FBR", "id": uuid()},
		{"text": "TSPO [18F]FEPPA", "id": uuid()},
		{"text": "TSPO [18F]PBR111", "id": uuid()},
		{"text": "TSPO [123I]CLINDE", "id": uuid()},
		{"text": "AChE [11C]MP4A", "id": uuid()},
		{"text": "AChE [123I]IBVM", "id": uuid()},
		{"text": "Aromatase [11C]VOR", "id": uuid()},
		{"text": "Cox-1 [11C]PS13", "id": uuid()},
		{"text": "FAAH [11C]CURB", "id": uuid()},
		{"text": "FAAH [11C]MK3168", "id": uuid()},
		{"text": "HDAC 1-3 [11C]Martinostat", "id": uuid()},
		{"text": "MAO-A [11C]Harmine", "id": uuid()},
		{"text": "MAO-A [11C]Clorgyline", "id": uuid()},
		{"text": "MAO-A [11C]Befloxatone", "id": uuid()},
		{"text": "MAO-A", "id": uuid()},
		{"text": "MAO-B [11C]Deprenyl-d2", "id": uuid()},
		{"text": "Mitochondrial Complex 1[18F]BCPP-EF", "id": uuid()},
		{"text": "PDE2A [18F]PF05270430", "id": uuid()},
		{"text": "PDE4 [11C](R)-Rolipram", "id": uuid()},
		{"text": "PDE10A [11C]IMA107", "id": uuid()},
		{"text": "PDE10A [11C]MP-10", "id": uuid()},
		{"text": "PDE10A [11C]Lu AE92686", "id": uuid()},
		{"text": "PDE10A [18F]MNI659", "id": uuid()},
		{"text": "β-Amyloid [11C]PIB", "id": uuid()},
		{"text": "β-Amyloid [18F]Flutemetamol", "id": uuid()},
		{"text": "β-Amyloid [18F]Florbetapir([18F]AV-45)", "id": uuid()},
		{"text": "β-Amyloid [18F]AZD 4694", "id": uuid()},
		{"text": "β-Amyloid [18F]FBM", "id": uuid()},
		{"text": "β-Amyloid [18F]FDDNP", "id": uuid()},
		{"text": "β-Amyloid [18F]W372", "id": uuid()},
		{"text": "β-Amyloid [18F]Florbetaban", "id": uuid()},
		{"text": "β-Amyloid [18F]MK3328", "id": uuid()},
		{"text": "β-Amyloid [123I]IMPY", "id": uuid()},
		{"text": "Tau/Synuclein [11C]PBB3", "id": uuid()},
		{"text": "Tau/Synuclein [11C]THK5351", "id": uuid()},
		{"text": "Tau/Synuclein [18F]BF-227", "id": uuid()},
		{"text": "Tau/Synuclein [18F]Flortaucipir ([18F]AV-1451)", "id": uuid()},
		{"text": "Tau/Synuclein [18F]THK5351", "id": uuid()},
		{"text": "Tau/Synuclein [18F]THK5317", "id": uuid()},
		{"text": "Tau/Synuclein [18F]THK5105", "id": uuid()},
		{"text": "Tau/Synuclein [18F]THK523", "id": uuid()},
		{"text": "Tau/Synuclein [18F]MK6240", "id": uuid()},
		{"text": "Tau/Synuclein [18F]RO948", "id": uuid()},
	]

	extraRadiotracerList = [
	]

	clinicalAreaList = 
	[
		{
			branch: "Addiction",
			subBranch: 
			[
				"Alcohol related disorders",
				"Cannabis related disorders",
				"Cocaine related disorders",
				"Hallucinogen related disorders",
				"Inhalant related disorders",
				"Nicotine dependence",
				"Opioid related disorders",
				"Other stimulant related disorders",
				"Sedative, hypnotic, or anxiolytic related disorders",
	
			]
		},
		{
			branch: "Psychotic Disorders",
			subBranch: 
			[
				"Brief psychotic disorder",
				"Delusional disorders",
				"Prodromal Psychosis",
				"Schizophrenia",
				"Schizotypal disorder",
				"Schizoaffective disorders",
			]
		},
		{
			branch: "Mood Disorder",
			subBranch: 
			[
				"Bipolar disorder",
				"Depressive episode",
				"Major depressive disorder",
				"Manic episode",
				"Prodromal mood disorder",
			]
		},
		{
			branch: "Anxiety and Stress-related Disorders",
			subBranch: 
			[
				"Acute Stress Reaction",
				"Agoraphobia",
				"Depersonalization-derealization syndrome",
				"Dissociative and conversion disorders",
				"Obsessive-compulsive disorder",
				"Panic Disorder",
				"Post-traumatic stress disorder (PTSD)",
				"Adjustment disorders",
				"Somatoform disorders",
				"Social Phobia",
				"Specific Phobias",
			]
		},
		{
			branch: "Eating Disorders",
			subBranch: 
			[
				"Bulimia",
				"Binge-Eating",
				"Restrictive Eating Disoders (Anorexia Nervosa)",
			]
		},
		{
			branch: "Disorders of Adult Personality and Behaviour",
			subBranch: 
			[
				"Antisocial personality disorder",
				"Avoidant personality disorder",
				"Borderline personality disorder",
				"Dependent personality disorder",
				"Histrionic personality disorder",
				"Narcissistic personality disorder",
				"Obsessive-compulsive personality disorder",
				"Paranoid personality disorder",
				"Schizoid personality disorder",
				"Impulse Disorders: Pathological Gambling",
				"Gender Identity Disorder",
				"Paraphilias",
			]
		},
		{
			branch: "Developmental Disorders",
			subBranch: 
			[
				"Asperger's syndrome",
				"Attachment Disorders",
				"Attention Deficit Hyperactivity Disorder",
				"Autism Spectrum disorder",
				"Childhood disintegrative disorder", 
				"Conduct Disorders",
				"Intellectual Disability",
				"Rett's syndrome",
				"Separation anxiety disorder of childhood",
				"Specific developmental disorders of speech and language",
				"Specific developmental disorders of scholastic skills",
				"Specific developmental disorders of Motor function",
				"Tic Disorders (excluding Tourette’s disorder)",
				"Tourette's disorder",
			]
		},
		{
			branch: "Neurological Disorders",
			subBranch: 
			[
				"Alzheimer's Disease",
				"Creutzfeldt-Jakob disease", 
				"Dementia with Lewy bodies", 
				"Dementia (Unspecified)",
				"Frontotemporal dementia",
				"Huntington's disease",
				"Multiple Sclerosis",
				"Parkinson's disease",
				"Pick's disease",
				"Prion disease",
				"Systemic lupus erythematosus",
				"Traumatic brain Injury",
				"Vascular dementia",
				"Unspecified dementia",
			]
		},
	
	]

	studyDataList = [
		{
			text: "Race/ethnicity",
			id: "StudyDataType/Race/ethnicity",
			description: "This is a sample 1",
		},
		{
			text: "Gender (social construct)",
			id: "StudyDataType/Gender (social construct)",
			description: "This is a sample 2",
		},
		{
			text: "Socioeconomic status",
			id: "StudyDataType/Socioeconomic status",
			description: "",
		},
		{
			text: "Cognitive functions",
			id: "StudyDataType/Cognitive functions",
			description: "",
		},
		{
			text: "Autonomic functions",
			id: "StudyDataType/Autonomic functions",
			description: "",
		},
		{
			text: "Reproductive function",
			id: "StudyDataType/Reproductive function",
			description: "",
		},
		{
			text: "Motor function",
			id: "StudyDataType/Motor function",
			description: "",
		},
		{
			text: "Psychiatric symptoms",
			id: "StudyDataType/Psychiatric symptoms",
			description: "",
		},
		{
			text: "Neurological symptoms",
			id: "StudyDataType/Neurological symptoms",
			description: "",
		},
		{
			text: "Lifestyle",
			id: "StudyDataType/Lifestyle",
			description: "",
		},
		{
			text: "Substance use",
			id: "StudyDataType/Substance use",
			description: "",
		},
		{
			text: "Nutrition",
			id: "StudyDataType/Nutrition",
			description: "",
		},
		{
			text: "Physical activity",
			id: "StudyDataType/Physical activity",
			description: "",
		},
		{
			text: "Physical activity",
			id: "StudyDataType/Physical activity",
			description: "",
		},
	]

	extraMrsList = [
	]

    extraStudyDataTypeList = [
	]

	extraClinicalAreaList = [
	]

	extraSitesList = [
	]

    constructor(props){
        super(props);

		this.state = {};

		// This binding is necessary to make `this` work in the callback    
		this.uncheckAll = this.uncheckAll.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.clearForm = this.clearForm.bind(this);
		this.petCheckBoxChanged = this.petCheckBoxChanged.bind(this);
		this.addOtherRadiotracerButtonClicked = this.addOtherRadiotracerButtonClicked.bind(this);
		this.addOtherMrsButtonClicked = this.addOtherMrsButtonClicked.bind(this);
		this.addOtherStudyDataTypeButtonClicked = this.addOtherStudyDataTypeButtonClicked.bind(this);
		this.addOtherClinicalAreaButtonClicked = this.addOtherClinicalAreaButtonClicked.bind(this);
		this.addOtherSiteButtonClicked = this.addOtherSiteButtonClicked.bind(this);

		this.handleChanges = this.handleChanges.bind(this);

	}


	uncheckAll(divid) {
		var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
		for(var i =0; i< checks.length;i++){
			var check = checks[i];
			if(!check.disabled){
				check.checked = false;
			}
		}
	}

	submitForm(e){
		console.log("submitForm invoked");
		e.preventDefault()
        /*axios.post(apiRegisterURL, inputs)
            .then((response) => {
                // alert(JSON.stringify(response))
                if (response.data.success === "true") {
                    // redirect to login page
                    navigate('/login');

                } else {
                    // ask user to try again
                    alert(response.data.message)
                }

            })
            .catch((error) => {
                alert(error)
            })
			*/


		var formIsValid = true;
		
		if(!this.state.studyTitle ) formIsValid = false;
		if(!this.state.principalInvestigator ) formIsValid = false;
		if(!this.state.principalInvestigatorEmail ) formIsValid = false;

		if(formIsValid == false)
		{
			console.log("Form is not valid");
			window.confirm("The informations in the form is not valid");
		}
		else
		{
			console.log("Form is submitted");
			if (window.confirm("Do you confirm your request to register \"" + document.getElementById("Study title/text").value + "\"")){
				window.confirm("Your request for registering the study \"" + document.getElementById("Study title/text").value
					+ "\" has been sent to web administrator successfully, you will  recieve email about the status of registration");
					console.log(this.state)
				}

				/*
				var inputs, index;
				inputs = document.getElementsByTagName('input');
				for (index = 0; index < inputs.length; ++index) {
					// deal with inputs[index] element.
					if ((inputs[index].value != null) && (inputs[index].type == 'text')){
					console.log(inputs[index].id +' -> '+ inputs[index].value.length);
					}

				}
				*/

			//document.getElementById("Clear Form Button").click();
		}
	}

	clearForm(){
		console.log("ClearForm invoked");

		//if (window.confirm("Do you want to clear form?")){
		if (window.confirm("Do you want to clear form?")){
			console.log("User confirmed to clear form");
			
			this.setState({});

			/*
			document.getElementById("Study title/text").value = "";
			document.getElementById("Study abbreviation/text").value = "";
			document.getElementById("Principal investigator/text").value = "";
			document.getElementById("Principal investigator Email/text").value = "";
			*/

			document.getElementById("Permission/Public").ckeched = false;
			document.getElementById("Permission/Restricted").ckeched = false;
			document.getElementById("Permission/Conditional on PI approval").ckeched = false;

			document.getElementById("Funding/National Federal Agency").checked = false; 
			document.getElementById("Funding/Non-Governmental Funding Agency").checked = false;
			document.getElementById("Funding/Industry").checked = false;
			document.getElementById("Funding/Departmental Funds").checked = false;

			document.getElementById("Description/Text").value = "";
			document.getElementById("Study Specific URL/Text").value = "";

			document.getElementById("Data collection status/Completed").checked = false;
			document.getElementById("Data collection status/Completed/Text").value = "";
			document.getElementById("Data collection status/Ongoing").checked = false;
			document.getElementById("Data collection status/Ongoing/Text").value = "";

			document.getElementById("Design/Cross-sectional").checked = false;
			document.getElementById("Design/Longitudinal").checked = false;
			document.getElementById("Design/Observational").checked = false;
			document.getElementById("Design/Interventional").checked = false;
			document.getElementById("Design/Other").checked = false;
			document.getElementById("Design/Other/Text").disabled = true;
			document.getElementById("Design/Other/Text").value = "";
			
			document.getElementById("Data Collection Sites/Single Site").checked = false;
			document.getElementById("Data Collection Sites/Single Site/Text").disabled = true;
			document.getElementById("Data Collection Sites/Single Site/Text").value = "";
			document.getElementById("Data Collection Sites/Multiple Sites").checked = false;
			document.getElementById("Data Collection Sites/Multiple Sites/Text").disabled = true;
			document.getElementById("Data Collection Sites/Multiple Sites/Text").value = "";
			
			document.getElementById("Sample type/Species/Human").checked = false;
			document.getElementById("Sample type/Species/Non-Human Primate").checked = false;
			document.getElementById("Sample type/Species/Murine").checked = false;
			document.getElementById("Sample type/Species/Other").checked = false;
			
			//this.uncheckAll("(Imaging/PET/Radiotracer/List)");
			for (var i = 0; i < this.radiotracerList.length; i++)
			{
				document.getElementById(this.radiotracerList[i].text).disabled = true;
				document.getElementById(this.radiotracerList[i].text).checked = false;
			}

			document.getElementById("General Participant Information/minAge").value = "";
			document.getElementById("General Participant Information/maxAge").value = "";
			document.getElementById("General Participant Information/Sex (biological)").value = "Male";

			document.getElementById("StudyDataType/Race/ethnicity").checked = false;
			document.getElementById("StudyDataType/Gender (social construct)").checked = false;
			document.getElementById("StudyDataType/Socioeconomic status").checked = false;
			document.getElementById("StudyDataType/Cognitive functions").checked = false;
			document.getElementById("StudyDataType/Autonomic functions").checked = false;
			document.getElementById("StudyDataType/Reproductive function").checked = false;
			document.getElementById("StudyDataType/Motor function").checked = false;
			document.getElementById("StudyDataType/Psychiatric symptoms").checked = false;
			document.getElementById("StudyDataType/Neurological symptoms").checked = false;
			document.getElementById("StudyDataType/Lifestyle").checked = false;
			document.getElementById("StudyDataType/Substance use").checked = false;
			document.getElementById("StudyDataType/Nutrition").checked = false;
			document.getElementById("StudyDataType/Physical activity").checked = false;
			
			document.getElementById("Biological samples/Blood").checked = false;
			document.getElementById("Biological samples/Stool").checked = false;
			document.getElementById("Biological samples/Urine").checked = false;
			document.getElementById("Biological samples/CSF").checked = false;
			document.getElementById("Biological samples/Biopsy tissue").checked = false;
			document.getElementById("Biological samples/Hair").checked = false;
			document.getElementById("Biological samples/Saliva").checked = false;
			document.getElementById("Biological samples/DNA").checked = false;
			
			document.getElementById("Imaging/MRI").checked = false;
			document.getElementById("Imaging/MRI/Structural MRI").disabled = true;
			document.getElementById("Imaging/MRI/Structural MRI").checked = false;
			document.getElementById("Imaging/MRI/Diffusion MRI").disabled = true;
			document.getElementById("Imaging/MRI/Diffusion MRI").checked = false;
			document.getElementById("Imaging/MRI/Resting state fMRI").disabled = true;
			document.getElementById("Imaging/MRI/Resting state fMRI").checked = false;
			document.getElementById("Imaging/MRI/Task fMRI").disabled = true;
			document.getElementById("Imaging/MRI/Task fMRI").checked = false;
			document.getElementById("Imaging/MRI/ASL").disabled = true;
			document.getElementById("Imaging/MRI/ASL").checked = false;
			//this.mriCheckBoxChanged();

			document.getElementById("Imaging/PET").checked = false;
			document.getElementById("Imaging/PET/Radiotracer/List").disabled = true;
			document.getElementById("Imaging/PET/Radiotracer/List").value = this.radiotracerList[0].text;
			//document.getElementById("Imaging/PET/Radiotracer/List").disabled = true;
			//this.petCheckBoxChanged();
			
			document.getElementById("Imaging/MRS").checked = false;
			document.getElementById("Imaging/MRS/Proton").disabled = true;
			document.getElementById("Imaging/MRS/Proton").checked = false;
			document.getElementById("Imaging/MRS/Phosphorus").disabled = true;
			document.getElementById("Imaging/MRS/Phosphorus").checked = false;
			document.getElementById("Imaging/MRS/Na").disabled = true;
			document.getElementById("Imaging/MRS/Na").checked = false;
			document.getElementById("Imaging/MRS/Lithium").disabled = true;
			document.getElementById("Imaging/MRS/Lithium").checked = false;
			//this.mrsCheckBoxChanged();
			
			this.extraRadiotracerList = [];
			document.getElementById("otherRadiotracersDiv").innerHTML = "";

			this.extraStudyDataTypeList = [];
			document.getElementById("othersStudyDataTypeDiv").innerHTML = "";


			this.extraMrsList = [];
			document.getElementById("otherMrsDiv").innerHTML = "";

			this.extraClinicalAreaList = [];
			document.getElementById("otherClinicalAreaDiv").innerHTML = "";

			this.extraSitesList = [];
			document.getElementById("otherSitesDiv").innerHTML = "";
			
		}

	}

	dataCollectionSitesHandle(){
		console.log("dataCollectionSitesHandle invoked");
		if(document.getElementById("Data Collection Sites/Single Site").checked)
			document.getElementById("Data Collection Sites/Single Site/Text").disabled = false;
		else
		{
			document.getElementById("Data Collection Sites/Single Site/Text").disabled = true;
			document.getElementById("Data Collection Sites/Single Site/Text").value = "";
		}

		if(document.getElementById("Data Collection Sites/Multiple Sites").checked)
			document.getElementById("Data Collection Sites/Multiple Sites/Text").disabled = false;
		else
		{
			document.getElementById("Data Collection Sites/Multiple Sites/Text").disabled = true;
			document.getElementById("Data Collection Sites/Multiple Sites/Text").value = "";
		}
		
	}

	designOtherChanged(){
		if(document.getElementById("Design/Other").checked == true)
		{
			document.getElementById("Design/Other/Text").disabled = false;
		}
		else
		{
			document.getElementById("Design/Other/Text").disabled = true;
			document.getElementById("Design/Other/Text").value = "";
		}
	}

	mriCheckBoxChanged(){
		if(document.getElementById("Imaging/MRI").checked == true)
		{
			document.getElementById("Imaging/MRI/Structural MRI").disabled = false;
			document.getElementById("Imaging/MRI/Diffusion MRI").disabled = false;
			document.getElementById("Imaging/MRI/Resting state fMRI").disabled = false;
			document.getElementById("Imaging/MRI/Task fMRI").disabled = false;
			document.getElementById("Imaging/MRI/ASL").disabled = false;
			document.getElementById("VBrainSequesnces/Yes").disabled = false;
			document.getElementById("VBrainSequesnces/No").disabled = false;

			
		}
		else
		{
			document.getElementById("Imaging/MRI/Structural MRI").disabled = true;
			document.getElementById("Imaging/MRI/Structural MRI").checked = false;
		
			document.getElementById("Imaging/MRI/Diffusion MRI").disabled = true;
			document.getElementById("Imaging/MRI/Diffusion MRI").checked = false;
		
			document.getElementById("Imaging/MRI/Resting state fMRI").disabled = true;
			document.getElementById("Imaging/MRI/Resting state fMRI").checked = false;
		
			document.getElementById("Imaging/MRI/Task fMRI").disabled = true;
			document.getElementById("Imaging/MRI/Task fMRI").checked = false;
		
			document.getElementById("Imaging/MRI/ASL").disabled = true;
			document.getElementById("Imaging/MRI/ASL").checked = false;

			document.getElementById("VBrainSequesnces/Yes").disabled = true;
			document.getElementById("VBrainSequesnces/Yes").checked = false;

			document.getElementById("VBrainSequesnces/No").disabled = true;
			document.getElementById("VBrainSequesnces/No").checked = false;
		}
		
	}

	petCheckBoxChanged(){
		if(document.getElementById("Imaging/PET").checked == true)
		{
			for (var i = 0; i < this.radiotracerList.length; i++)
				document.getElementById(this.radiotracerList[i].text).disabled = false;
			document.getElementById("Add Other Radiotracer Button").disabled = false;
		}
		else
		{
			for (var i = 0; i < this.radiotracerList.length; i++)
			{
				document.getElementById(this.radiotracerList[i].text).disabled = true;
				document.getElementById(this.radiotracerList[i].text).checked = false;
			}
			document.getElementById("Add Other Radiotracer Button").disabled = true;
			this.extraRadiotracerList = [];
			
			document.getElementById("otherRadiotracersDiv").innerHTML = null;
		}
		
	}

	mrsCheckBoxChanged(){
		if(document.getElementById("Imaging/MRS").checked == true)
		{
			document.getElementById("Imaging/MRS/Proton").disabled = false;
			document.getElementById("Imaging/MRS/Phosphorus").disabled = false;
			document.getElementById("Imaging/MRS/Na").disabled = false;
			document.getElementById("Imaging/MRS/Lithium").disabled = false;
			
			//document.getElementById("Add Other MRS Button").disabled = false;
			//document.getElementById('Add Other MRS Button').removeAttribute('disabled');
		}
		else
		{
			document.getElementById("Imaging/MRS/Proton").disabled = true;
			document.getElementById("Imaging/MRS/Proton").checked = false;
		
			document.getElementById("Imaging/MRS/Phosphorus").disabled = true;
			document.getElementById("Imaging/MRS/Phosphorus").checked = false;
		
			document.getElementById("Imaging/MRS/Na").disabled = true;
			document.getElementById("Imaging/MRS/Na").checked = false;
		
			document.getElementById("Imaging/MRS/Lithium").disabled = true;
			document.getElementById("Imaging/MRS/Lithium").checked = false;
		
			//document.getElementById("Add Other MRS Button").disabled = true;
			//document.getElementById('Add Other MRS Button').setAttribute('disabled', true);
			//document.getElementById('Add Other MRS Button').setAttribute('onCLick', this.addOtherMrsButtonClicked);
		}
		
	}

	dataCollectionStatusHandle(){
		console.log("dataCollectionStatusHandle invoked");
		if(document.getElementById("Data collection status/Completed").checked)
			document.getElementById("Data collection status/Completed/Text").disabled = false;
		else
		{
			document.getElementById("Data collection status/Completed/Text").disabled = true;
			document.getElementById("Data collection status/Completed/Text").value = "";
		}

		if(document.getElementById("Data collection status/Ongoing").checked)
			document.getElementById("Data collection status/Ongoing/Text").disabled = false;
		else
		{
			document.getElementById("Data collection status/Ongoing/Text").disabled = true;
			document.getElementById("Data collection status/Ongoing/Text").value = "";
		}
	}

	addOtherRadiotracerButtonClicked(){
		
		this.extraRadiotracerList.push({"text": "", "id": uuid()});
		console.log(this.extraRadiotracerList);

		var content = "";
		for(var i =0; i< this.extraRadiotracerList.length;i++){
			content += "<input type=\"text\" style={this.styles.input}/><br/>";
		}
		console.log(content);

		/*
		var container = document.getElementById("otherRadiotracersDiv");
		container.innerHTML = content;
		container.style = {width:"100%"};
		container.appendChild(document.createElement("br"));
		return;
		*/

		var newItem = document.createElement("input");
		//newItem.style = this.styles.input;
		//newItem.type = "text";
		//width: "100%", height:30, borderRadius: 5, margin:10, fontSize:"15px"
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherRadiotracersDiv").appendChild(newItem);
		newItem.focus();
	}
	
	addOtherStudyDataTypeButtonClicked(){
		this.extraStudyDataTypeList.push({"text": "", "id": uuid()});
		console.log(this.extraStudyDataTypeList);

		var content = "";
		for(var i =0; i< this.extraStudyDataTypeList.length;i++){
			content += "<input type=\"text\" style={this.styles.input} /><br/>";
		}
		console.log(content);

		//document.getElementById("othersStudyDataTypeDiv").innerHTML = content;
		//document.getElementById("othersStudyDataTypeDiv").style = this.styles.input;
	
		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("othersStudyDataTypeDiv").appendChild(newItem);
		newItem.focus();
	}

	addOtherMrsButtonClicked(){
		this.extraMrsList.push({"text": "", "id": uuid()});
		console.log(this.extraMrsList);

		var content = "";
		for(var i =0; i< this.extraMrsList.length;i++){
			content += "<input type=\"text\" style={this.styles.input} /><br/>";
		}
		console.log(content);

		//document.getElementById("otherMrsDiv").innerHTML = content;
		//document.getElementById("otherMrsDiv").style = this.styles.input;
		//return;

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherMrsDiv").appendChild(newItem);
		newItem.focus();
	}

	
	addOtherClinicalAreaButtonClicked(){
		this.extraClinicalAreaList.push({"text": "", "id": uuid()});
		console.log(this.extraClinicalAreaList);

		var content = "";
		for(var i =0; i< this.extraClinicalAreaList.length;i++){
			content += "<input type=\"text\" style={this.styles.input} /><br/>";
		}
		console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherClinicalAreaDiv").appendChild(newItem);
		newItem.focus();
	}

	
	addOtherSiteButtonClicked(){
		this.extraSitesList.push({"text": "", "id": uuid()});
		console.log(this.extraSitesList);

		var content = "";
		for(var i =0; i< this.extraSitesList.length;i++){
			content += "<input type=\"text\" style={this.styles.input} /><br/>";
		}
		console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherSitesDiv").appendChild(newItem);
		newItem.focus();
	}

	handleChanges(e){

		console.log("*************  handleChanges invoked");
		const fieldName = e.target.name
        const newValue = e.target.value
        console.log(fieldName);
		console.log(newValue);
		//var sender = document.getElementsByName(e.target.name)
		
		var sender = document.getElementById(e.target.id)
		console.log(e.target.name);
		console.log(sender.type);
		
		//var x = document.getElementById("Funding field").querySelectorAll(".example");

		if((sender.type == "text") ||(sender.type == "email"))//fieldName == "Funding/National Federal Agency")
		{
			this.setState({[fieldName]: newValue});
		}
		else if(sender.type == "checkbox") 
		{
			console.log( sender.checked);
			var parent = sender.parentElement;
			console.log( parent);
			
        
		}
		else if(sender.type == "radio")
		{
			console.log( sender.checked);
        
		}
		console.log(this.state.studyTitle);
		console.log(this.state.studyAbbreviation);
		console.log(this.state.principalInvestigator);
		console.log(this.state.principalInvestigator);
		console.log(this.state.principalInvestigatorEmail);
		console.log(this.state["Funding/National Federal Agency"]);
	}

	render(){

		return (
		<div style={{width: "80%", textAlign: "left", fontSize:"15px"}}>
			
				<p style={{textAlign: "center", justifyContent: 'center', width: "100%"}}> Study Registration </p>
				<h6>Note <label style={{color:"red"}}>* </label> : mandatory fields</h6>
				<hr/>
				<div style={{width: "100%", textAlign: "center", minWidth:"800px"}}>
					<table style={{textAlign: "left", width: "100%", justifyContent: 'center', tableLayout: "fixed"}}>
						<colgroup>
							<col style={{width: "30%", aignItems: "left", verticalAlign: "top", textAlign: "left"}}/>
							<col style={{width: "70%", alignItems: "right", verticalAlign: "middle", textAlign: "right"}}/>
						</colgroup>
						<tbody>
							<tr>
								<td><label style={{color:"red"}}>* </label><label>Study title:</label></td>
								<td><input id="Study title/text" 
										style={this.styles.input} 
										name="studyTitle" 
										value={this.state.studyTitle || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label>Study abbreviation:</label></td>
								<td><input id="Study abbreviation/text" 
										style={this.styles.input} 
										name="studyAbbreviation" 
										value={this.state.studyAbbreviation || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label>Principal investigator:</label></td>
								<td><input id="Principal investigator/text" 
										style={this.styles.input} 
										name="principalInvestigator" 
										value={this.state.principalInvestigator || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label type="email" >Principal investigator email:</label></td>
								<td><input id="Principal investigator Email/text" 
										style={this.styles.input} 
										name="principalInvestigatorEmail" 
										value={this.state.principalInvestigatorEmail || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr><td colSpan="2"><hr/></td></tr>
							
							<tr>
								<td>Permission:</td>
								<td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Public <input id="Permission/Public" name="permissionRadioButtons" type="radio" style={this.styles.radioButton}/> </label>
										<label>Restricted<input id="Permission/Restricted" name="permissionRadioButtons" type="radio" style={this.styles.radioButton}/> </label>
										<label>Conditional on PI approval<input id="Permission/Conditional on PI approval" name="permissionRadioButtons" type="radio" style={this.styles.radioButton}/> </label>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr   style={{verticalAlign: "top"}}>
								<td>Funding:</td>
								<td name="Funding fields">
									
									<input style={this.styles.checkBox}  
									type="checkbox" 
									id={uuid()}
									name="Funding/National Federal Agency"
									onChange={this.handleChanges}/> National federal agency<br/>
									<input style={this.styles.checkBox}  type="checkbox" id="Funding/Non-Governmental Funding Agency"/> Non-governmental funding agency<br/>
									<input style={this.styles.checkBox}  type="checkbox" id="Funding/Industry"/> Industry<br/>
									<input style={this.styles.checkBox}  type="checkbox" id="Funding/Departmental Funds"/> Departmental funds<br/>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td>Description:</td>
								<td><textarea id="Description/Text" style={this.styles.textArea} name="Description" rows="5" cols="50" placeholder="maximum 200 words" maxLength="200"/></td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr>
								<td>Study specific URL:</td>
								<td><input id="Study Specific URL/Text" style={this.styles.input} /></td>
							</tr>

							
							<tr>
								<td  style={{verticalAlign: "center"}}>Data collection status</td>
								<td >
									<div style={{display: "flex", alignItems:"center",  justifyContent: "space-between"}}>
										Completed<input id="Data collection status/Completed" name="dataCollectionStatusRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.dataCollectionStatusHandle}/>
										<input id="Data collection status/Completed/Text" style={this.styles.input} placeholder="sample size" disabled="disabled"/>
										Ongoing<input id="Data collection status/Ongoing" name="dataCollectionStatusRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.dataCollectionStatusHandle}/>
										<input id="Data collection status/Ongoing/Text" style={this.styles.input} placeholder="sample size" disabled="disabled"/>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr>
								<td style={{verticalAlign: "top"}}>Design</td>
								<td >
									<input style={this.styles.checkBox} type="checkbox" id="Design/Cross-sectional"/> Cross-sectional<br/>
									<input style={this.styles.checkBox} type="checkbox" id="Design/Longitudinal"/> Longitudinal<br/>
									<input style={this.styles.checkBox} type="checkbox" id="Design/Observational"/> Observational<br/>
									<input style={this.styles.checkBox} type="checkbox" id="Design/Interventional"/> Interventional<br/>
									<input style={this.styles.checkBox} type="checkbox" id="Design/Other" onChange={this.designOtherChanged}/> Other
									<input id="Design/Other/Text" style={this.styles.input} disabled={true}/>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Data collection sites:</td>
								<td>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="Data Collection Sites/Single Site" style={this.styles.radioButton} onChange={this.dataCollectionSitesHandle}/>Single site</label>
									<input id="Data Collection Sites/Single Site/Text" style={this.styles.input} placeholder="Site's name" disabled/>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="Data Collection Sites/Multiple Sites" style={this.styles.radioButton} onChange={this.dataCollectionSitesHandle}/>Multiple sites</label>
									<input id="Data Collection Sites/Multiple Sites/Text" style={this.styles.input} placeholder="Enter the name of first site" disabled/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
											<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={this.addOtherSiteButtonClicked} id="Add Other Site Name Button" >Add another</button>
																				
										</div>
										<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column"}} id="otherSitesDiv"></div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Sample type:</td>
								<td>
									<p >Please check the data sources information to enable other users to browse the general type of 
										data collected – check all the fields that apply to your study </p>
									<hr/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										Species:
										<label>Human<input style={this.styles.checkBox} id="Sample type/Species/Human" name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"} } onChange={this.handleChanges}/> </label> 
										<label>Non-Human Primate<input id="Sample type/Species/Non-Human Primate" name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label> 
										<label>Murine<input id="Sample type/Species/Murine" name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}} /> </label> 
										<label>Other<input id="Sample type/Species/Other" name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}} /> </label> 
									</div>
									<hr/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										
									Healthy individuals?
										<label>Yes <input id="HealthyIndividuals/Yes" name="HealthyIndividualsRadioButtons" type="radio" style={this.styles.radioButton}/> </label>
										<label>No<input id="HealthyIndividuals/No" name="HealthyIndividualsRadioButtons" type="radio" style={this.styles.radioButton}/> </label>
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
								
								
										
										<label>Clinical&nbsp;area:&nbsp;&nbsp;&nbsp;&nbsp;</label>
										
								
										<div id="Clinical Area" multiple="multiple" style={this.styles.list}>
											{this.clinicalAreaList.map((item) => 
												<div>
													<label><b>{item.branch}</b></label><br/><br/>
													{item.subBranch.map((subBranchText) => <div><input type="checkbox" style={this.styles.checkBox}/>{subBranchText}<br/></div>)}
													<hr/>
												</div>)}
										</div>
									</div>
									
										<div style={{display: "flex", justifyContent: "space-between"}}>
											<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={this.addOtherClinicalAreaButtonClicked} id="Add Other Clinical Area Button" >Add another</button>
										</div>
										<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column"}} id="otherClinicalAreaDiv"></div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "center"}}>
								<td><label type="text" style={{textAlign: "left", alignItems:"center"}}/>General&nbsp;participant&nbsp;information:</td>
								<td style={{display: "inline-flex", alignItems:"center",  flexWrap: 'nowrap', justifyContent: "space-between", width:"100%", margin:10}}>
									<label>Age&nbsp;(years):</label>
									<input style={this.styles.input} id="General Participant Information/minAge" type="number" min="0" step="1"/> 
									<label >to</label>
									<input style={this.styles.input} id="General Participant Information/maxAge" type="number" min="0" step="1"/>
									<label  style={{marginLeft: 20, marginRight:10}}>sex&nbsp;(biological):&nbsp;</label>
									<select name="Sex (biological)" id="General Participant Information/Sex (biological)" style={{borderRadius: 5, width:800, fontSize: "20px"}}>
										<option selected=""></option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Both">Both</option>
									</select>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td colSpan="2">
									<label type="text" style={{textAlign: "left"}}/>Please indicate the data types available
									<div style={{padding:10, display: "flex", justifyContent: "space-between", flexWrap: 'wrap', width: "100%"}}>
										{this.studyDataList.map((item) => 
											<div> <label title={item.description} style={{leftMargin:20}}>{item.text} <input id={item.id} type="checkbox" title={item.description} style={this.styles.checkBox}/> </label><br/> </div>)
										}
									</div>	
									<div style={{padding:10}}>
										<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={this.addOtherStudyDataTypeButtonClicked} id="Add Other Study Data Type Button">Add another</button>
									</div>
									<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column"}} id="othersStudyDataTypeDiv">
									</div>
									
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td colSpan="2">
									<label type="text" style={{textAlign: "left"}}/>Biological samples
									<div style={{padding:10, display: "flex", justifyContent: "space-between"}}>
										<label>Blood <input id="Biological samples/Blood" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>Stool <input id="Biological samples/Stool" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>Urine <input id="Biological samples/Urine" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>CSF <input id="Biological samples/CSF" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>Biopsy tissue <input id="Biological samples/Biopsy tissue" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>Hair <input id="Biological samples/Hair" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>Saliva <input id="Biological samples/Saliva" type="checkbox" style={this.styles.checkBox}/> </label>
										<label>DNA <input id="Biological samples/DNA" type="checkbox" style={this.styles.checkBox}/> </label>
									</div>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Imaging</td>
								<td>
								
									<label><b>MRI</b><input id="Imaging/MRI" type="checkbox" style={this.styles.checkBox} onChange={this.mriCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Structural MRI<input id="Imaging/MRI/Structural MRI" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Diffusion MRI<input id="Imaging/MRI/Diffusion MRI" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Resting state fMRI<input id="Imaging/MRI/Resting state fMRI" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Task fMRI<input id="Imaging/MRI/Task fMRI" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>ASL <input id="Imaging/MRI/ASL" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
									
								<td>
								<td>Did you use the V-Brain sequesnces?</td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Yes <input id="VBrainSequesnces/Yes" name="VBrainSequesncesRadioButtons" type="radio" style={this.styles.radioButton}disabled/> </label>
										<label>No<input id="VBrainSequesnces/No" name="VBrainSequesncesRadioButtons" type="radio" style={this.styles.radioButton}disabled/> </label>
									</div>
								</td>
									
									</div>
									<hr/>
									<label><b>PET</b><input id="Imaging/PET" type="checkbox" style={this.styles.checkBox} onChange={this.petCheckBoxChanged}/> </label>
									<br/>		

									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Radiotracer</label>
										<div style={{padding:10, display: "flex", justifyContent: "space-between", flexWrap: 'wrap', width: "100%"}}>
											<div id="Imaging/PET/Radiotracer/List" multiple="multiple" style={this.styles.list}>
												{this.radiotracerList.map((item) => <div><input id={item.text} type="checkbox" style={this.styles.checkBox}  disabled="disabled"/>{item.text}<br/></div>)}
											</div>
										</div>
									</div>
									
									<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5}} onClick={this.addOtherRadiotracerButtonClicked} id="Add Other Radiotracer Button">Add another</button>

									<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column", align:"center"}} id="otherRadiotracersDiv">

									</div>
										
									<hr/>
									<label><b>MRS</b><input id="Imaging/MRS" type="checkbox" style={this.styles.checkBox} onChange={this.mrsCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
										<label>Proton<input id="Imaging/MRS/Proton" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Phosphorus<input id="Imaging/MRS/Phosphorus" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Na<input id="Imaging/MRS/Na" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<label>Lithium<input id="Imaging/MRS/Lithium" type="checkbox" style={this.styles.checkBox} disabled/> </label>
										<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={this.addOtherMrsButtonClicked} id="Add Other MRS Button" >Add another</button>
									</div>
									<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column"}} id="otherMrsDiv">
									
									</div>
									
								</td>
							</tr>
							<tr><td colSpan="100"><hr/></td></tr>

						</tbody>
					</table>
				</div>
				
				<div style={{textAlign: "center", margin: 10, padding: "50px"  }}>
					<button type="button" style={this.styles.button} onClick={this.clearForm} id="Clear Form Button">Clear&nbsp;Form</button> 
					<button type="button" style={this.styles.button} onClick={this.submitForm} id="Submit Button">Submit</button> 
				</div>
		</div>

		);
	}
}
