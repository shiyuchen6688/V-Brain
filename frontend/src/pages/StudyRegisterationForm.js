import React, {useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios"



function StudyRegisterationForm (){ 
	

	const [allValues, setAllValues] = useState({
		funding: [],
		studyDesign: [],
		dataCollectionSites: [],
		sampleTypeSpecies: [],
		clinicalAreaInSample:[],
		dataTypesAvailable:[],
		biologicalSamples:[],
		imagingMRIs: [],
		imagingMRSs: [],
		imagingPET_RadioTracers: [],
		multiSitesNames: [],
		singleSiteName: "",
		dataCollectionStatusRadioButtons: "",
		dataCollectionSitesRadioButton: ""
	});

	var latestId = 1000;
	const getUniqueId = (elementName) =>{
		//id = latestId++;
		return (elementName+latestId++);
	}

	const styles = {
		input: {width: "100%", height:30, borderRadius: 5, margin:10, fontSize:"15px"},
		button: {width: "20%", height:50, borderRadius: 5, margin:10, fontSize:"20px"},
		textArea: {width: "100%", borderRadius: 5, margin:10, fontSize: 15, resize: "none"},
		radioButton: {margin: 10, transform: "scale(1.5)"},
		checkBox: {margin: 10, transform: "scale(1.5)"},
		formBackground: {width: "100%", borderRadius: 10, backgroundColor: "#7699bd", margin: 10},
		formHorizontalSection: {display: "flex", justifyContent: "space-between"},
		list: {width: "100%", overflowY: "scroll", height: "500px"},
	}

	const radiotracerList = [
		{"text": "Adenosine A1 [11C]MPDX", "id": getUniqueId("radiotracerList")},			
		{"text": "Adenosine A1 [18F]CPFPX", "id": getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]SCH442416", "id": getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [18F]MNI-444", "id": getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [123I]MNI-420", "id": getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]Preladenant", "id": getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]TMSX", "id": getUniqueId("radiotracerList")},
		{"text": "CB1 [18F]FEMMEP-d2", "id": getUniqueId("radiotracerList")},
		{"text": "CB1 [18F]MK-9470", "id": getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]MePPEP", "id": getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]OMAR", "id": getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]SD5024", "id": getUniqueId("radiotracerList")},
		{"text": "D1 [11C]SCH 23390", "id": getUniqueId("radiotracerList")},
		{"text": "D1 [18F]MNI-968 ([18F]PF-8477)", "id": getUniqueId("radiotracerList")},
		{"text": "D1 [11C]NNC 112", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]Raclopride", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]FLB 457", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]MNPA", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C](+)PHNO", "id": getUniqueId("radiotracerList")}, 
		{"text": "D2/D3 [11C]NPA", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [18F]Fallypride", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]IBZM", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]Epidepride", "id": getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]IBF", "id": getUniqueId("radiotracerList")},
		{"text": "H1 [11C]Doxepin", "id": getUniqueId("radiotracerList")},
		{"text": "H3 [11C]GR 103545", "id": getUniqueId("radiotracerList")},
		{"text": "H3 [11C]GSK189254", "id": getUniqueId("radiotracerList")},
		{"text": "H3 [15-HT1A [carbonyl-11C]WAY", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1A [carbonyl-11D]WAY", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1A [11C]CUMI-101", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F] FCWAY", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F]MefWAY", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F]MPPF 8F]FMH3", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1B [11C]AZ10419369", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT1B [11C]P943", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT2A [11C]MDL 100 907", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Altanserin", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Altanserin-d2", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Setoperone", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT4 [11C]SB-207145", "id": getUniqueId("radiotracerList")},
		{"text": "5-HT6 [11C]GSK-215083", "id": getUniqueId("radiotracerList")},
		{"text": "mGluR1 [11C]ITMM", "id": getUniqueId("radiotracerList")}, 
		{"text": "mGluR1 [18F]FIMX", "id": getUniqueId("radiotracerList")},
		{"text": "mGluR5 [11C]ABP688", "id": getUniqueId("radiotracerList")},
		{"text": "mGluR5 [18F]-FPEB", "id": getUniqueId("radiotracerList")},
		{"text": "mGluR5 [18F]-PSS232", "id": getUniqueId("radiotracerList")},
		{"text": "NK1[18F]SPA-RQ", "id": getUniqueId("radiotracerList")},
		{"text": "NK1 [18F]MK-0999 ([18F]FE-SPA-RQ)", "id": getUniqueId("radiotracerList")},
		{"text": "NOP [11C]NOP-1A", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (DOR) [11C]Methylnaltrindole", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [11C]Diprenorphine", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [11C]Carfentanil (agonist)", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [18F]Fluoroethyldiprenorphine", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (KOR) [11C]GR103545", "id": getUniqueId("radiotracerList")},
		{"text": "Opiate (KOR) [11C]LY2795050", "id": getUniqueId("radiotracerList")},
		{"text": "Sigma [11C]SA4503", "id": getUniqueId("radiotracerList")},
		{"text": "Imidazoline Receptors (I2 binding site) [11C]BU99008", "id": getUniqueId("radiotracerList")},
		{"text": "Bz(GABAA) [11C]Flumazenil", "id": getUniqueId("radiotracerList")},
		{"text": "Bz (GABAA) [18F]Flumazenil", "id": getUniqueId("radiotracerList")},
		{"text": "Bz (α5GABAA) [11C]Ro15 4513", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) 2-[18F]F-A-85380 (2-[18F]FA)", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) 6-[18F]FA", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]Nifene", "id": getUniqueId("radiotracerList")},
		{"text": "[18F]XTRA", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]GMOM", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]AZAN", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]Flubatine", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [123I]51A", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α7) [11C]CHIBA-1001", "id": getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α7) [18F]ASEM", "id": getUniqueId("radiotracerList")},
		{"text": "NMDA [18F]GE-179", "id": getUniqueId("radiotracerList")},
		{"text": "NMDA [123I]CNS1 P2X7 [11C]JNJ54173717", "id": getUniqueId("radiotracerList")},
		{"text": "P2X7 [11C]GSK-1482160", "id": getUniqueId("radiotracerList")},
		{"text": "P2X7 [18F]JNJ-64413739261", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [11C]PE2I", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [11C]Methylphenidate", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FP-CIT", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [123I]FP-CIT (DATSCAN)", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FE-PE2I", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [123I]CIT (Dopascan)", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FECNT", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [123I]Altropane", "id": getUniqueId("radiotracerList")},
		{"text": "DAT [123I]PE2I", "id": getUniqueId("radiotracerList")},
		{"text": "Glycine T1[11C]CFpyPB", "id": getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [11C]GSK 931145 ", "id": getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [18F]CFPyPB", "id": getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [11C]RO5013853", "id": getUniqueId("radiotracerList")},
		{"text": "NET [11C]MeNER-d2", "id": getUniqueId("radiotracerList")},
		{"text": "NET [18F]FMeNER-d2", "id": getUniqueId("radiotracerList")},
		{"text": "NET [123I]INER", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [11C]DASB", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [11C]MADAM", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [11C]AFM", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [11C]HOHMADAM", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [18F]ADAM", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [123I]CIT", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [123I]mZIENT", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [123I]norβCIT", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [123I]βCIT", "id": getUniqueId("radiotracerList")},
		{"text": "SERT [123I]ADAM", "id": getUniqueId("radiotracerList")},
		{"text": "VMAT2 [11C]DTBZ", "id": getUniqueId("radiotracerList")},
		{"text": "VMAT2 [11C]MTBZ", "id": getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]florbenazine", "id": getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]AV-133", "id": getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]FP-DTBZ", "id": getUniqueId("radiotracerList")},
		{"text": "VAChT [18F]FEOBV", "id": getUniqueId("radiotracerList")},
		{"text": "SV2A [11C]UCB-J", "id": getUniqueId("radiotracerList")},
		{"text": "SV2A [11C]UCB-A", "id": getUniqueId("radiotracerList")},
		{"text": "SV2A  [18F]UCB-H", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [11C](R)-PK 11195", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]PBR28", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]DAA1106", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]DPA-713", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]FBR", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]FEPPA", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]PBR111", "id": getUniqueId("radiotracerList")},
		{"text": "TSPO [123I]CLINDE", "id": getUniqueId("radiotracerList")},
		{"text": "AChE [11C]MP4A", "id": getUniqueId("radiotracerList")},
		{"text": "AChE [123I]IBVM", "id": getUniqueId("radiotracerList")},
		{"text": "Aromatase [11C]VOR", "id": getUniqueId("radiotracerList")},
		{"text": "Cox-1 [11C]PS13", "id": getUniqueId("radiotracerList")},
		{"text": "FAAH [11C]CURB", "id": getUniqueId("radiotracerList")},
		{"text": "FAAH [11C]MK3168", "id": getUniqueId("radiotracerList")},
		{"text": "HDAC 1-3 [11C]Martinostat", "id": getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Harmine", "id": getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Clorgyline", "id": getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Befloxatone", "id": getUniqueId("radiotracerList")},
		{"text": "MAO-A", "id": getUniqueId("radiotracerList")},
		{"text": "MAO-B [11C]Deprenyl-d2", "id": getUniqueId("radiotracerList")},
		{"text": "Mitochondrial Complex 1[18F]BCPP-EF", "id": getUniqueId("radiotracerList")},
		{"text": "PDE2A [18F]PF05270430", "id": getUniqueId("radiotracerList")},
		{"text": "PDE4 [11C](R)-Rolipram", "id": getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]IMA107", "id": getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]MP-10", "id": getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]Lu AE92686", "id": getUniqueId("radiotracerList")},
		{"text": "PDE10A [18F]MNI659", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [11C]PIB", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Flutemetamol", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Florbetapir([18F]AV-45)", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]AZD 4694", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]FBM", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]FDDNP", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]W372", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Florbetaban", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]MK3328", "id": getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [123I]IMPY", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [11C]PBB3", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [11C]THK5351", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]BF-227", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]Flortaucipir ([18F]AV-1451)", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5351", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5317", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5105", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK523", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]MK6240", "id": getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]RO948", "id": getUniqueId("radiotracerList")},
	]

	var extraRadiotracerList = [
	]



	var clinicalAreaList = 
	[
		{
			branch: "Addiction",
			subBranch: 
			[
				{"name":"Alcohol related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Cannabis related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Cocaine related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Hallucinogen related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Inhalant related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Nicotine dependence", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Opioid related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Other stimulant related disorders", "id": getUniqueId("clinicalArea_Addiction")},
				{"name":"Sedative, hypnotic, or anxiolytic related disorders", "id": getUniqueId("clinicalArea_Addiction")},
	
			]
		},
		{
			branch: "Psychotic Disorders", 
			subBranch: 
			[
				{"name":"Brief psychotic disorder", "id": getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Delusional disorders", "id": getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Prodromal Psychosis", "id": getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizophrenia", "id": getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizotypal disorder", "id": getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizoaffective disorders", "id": getUniqueId("clinicalArea_sychoticDisorders")},
			]
		},
		{
			branch: "Mood Disorder",
			subBranch: 
			[
				{"name":"Bipolar disorder", "id": getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Depressive episode", "id": getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Major depressive disorder", "id": getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Manic episode", "id": getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Prodromal mood disorder", "id": getUniqueId("clinicalArea_moodDisorders")},
			]
		},
		{
			branch: "Anxiety and Stress-related Disorders",
			subBranch: 
			[
				{"name":"Acute Stress Reaction", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Agoraphobia", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Depersonalization-derealization syndrome", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Dissociative and conversion disorders", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Obsessive-compulsive disorder", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Panic Disorder", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Post-traumatic stress disorder (PTSD)", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Adjustment disorders", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Somatoform disorders", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Social Phobia", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Specific Phobias", "id": getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
			]
		},
		{
			branch: "Eating Disorders",
			subBranch: 
			[
				{"name":"Bulimia", "id": getUniqueId("clinicalArea_EatingDisorders")},
				{"name":"Binge-Eating", "id": getUniqueId("clinicalArea_EatingDisorders")},
				{"name":"Restrictive Eating Disoders (Anorexia Nervosa)", "id": getUniqueId("clinicalArea_EatingDisorders")},
			]
		},
		{
			branch: "Disorders of Adult Personality and Behaviour",
			subBranch: 
			[
				{"name":"Antisocial personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Avoidant personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Borderline personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Dependent personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Histrionic personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Narcissistic personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Obsessive-compulsive personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Paranoid personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Schizoid personality disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Impulse Disorders: Pathological Gambling", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Gender Identity Disorder", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Paraphilias", "id": getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
			]
		},
		{
			branch: "Developmental Disorders",
			subBranch: 
			[
				{"name":"Asperger's syndrome", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Attachment Disorders", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Attention Deficit Hyperactivity Disorder", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Autism Spectrum disorder", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Childhood disintegrative disorder", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")}, 
				{"name":"Conduct Disorders", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Intellectual Disability", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Rett's syndrome", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Separation anxiety disorder of childhood", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of speech and language", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of scholastic skills", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of Motor function", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Tic Disorders (excluding Tourette’s disorder)", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Tourette's disorder", "id": getUniqueId("clinicalArea_DevelopmentalDisorders")},
			]
		},
		{
			branch: "Neurological Disorders", 
			subBranch: 
			[
				{"name":"Alzheimer's Disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Creutzfeldt-Jakob disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")}, 
				{"name":"Dementia with Lewy bodies", "id": getUniqueId("clinicalArea_NeurologicalDisorders")}, 
				{"name":"Dementia (Unspecified)", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Frontotemporal dementia", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Huntington's disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Multiple Sclerosis", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Parkinson's disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Pick's disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Prion disease", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Systemic lupus erythematosus", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Traumatic brain Injury", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Vascular dementia", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Unspecified dementia", "id": getUniqueId("clinicalArea_NeurologicalDisorders")},
			]
		},
	
	]
	var studyDataList = [
		{
			text: "Race/ethnicity",
			id: "studyDataTypeRaceEthnicity",
			description: "This is a sample 1",
		},
		{
			text: "Gender (social construct)",
			id: "studyDataTypeGender",
			description: "This is a sample 2",
		},
		{
			text: "Socioeconomic status",
			id: "studyDataTypeSocioeconomicStatus",
			description: "",
		},
		{
			text: "Cognitive functions",
			id: "studyDataTypeCognitiveFunctions",
			description: "",
		},
		{
			text: "Autonomic functions",
			id: "studyDataTypeAutonomicFunctions",
			description: "",
		},
		{
			text: "Reproductive function",
			id: "studyDataTypeReproductiveFunctions",
			description: "",
		},
		{
			text: "Motor function",
			id: "studyDataTypeMotorFunctions",
			description: "",
		},
		{
			text: "Psychiatric symptoms",
			id: "studyDataTypePsychiatricSymptoms",
			description: "",
		},
		{
			text: "Neurological symptoms",
			id: "studyDataTypeNeurologicalSymptoms",
			description: "",
		},
		{
			text: "Lifestyle",
			id: "studyDataTypeLifestyle",
			description: "",
		},
		{
			text: "Substance use",
			id: "studyDataTypeSubstanceUse",
			description: "",
		},
		{
			text: "Nutrition",
			id: "studyDataTypeNutrition",
			description: "",
		},
		{
			text: "Physical activity",
			id: "studyDataTypePhysicalActivity",
			description: "",
		},
		{
			text: "Physical activity",
			id: "studyDataTypePhysicalActivity",
			description: "",
		},
	]

	var extraMrsList = [
	]

    var extraStudyDataTypeList = [
	]

	var extraClinicalAreaList = [
	]

	var extraSitesList = [
	]

  


	const uncheckAll= (divid) => {
		var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
		for(var i =0; i< checks.length;i++){
			var check = checks[i];
			if(!check.disabled){
				check.checked = false;
			}
		}
	}
	const apiRegisterURL = "http://localhost:8080/auth/studyRegistration";

	let navigate = useNavigate();
	
	const submitForm = () => {

		var tempList = [];
		console.log("************ submitForm invoked");
		var tempList = [];
		tempList = [...allValues.imagingPET_RadioTracers];
		console.log("extraRadiotracerList    ", extraRadiotracerList);
		extraRadiotracerList.forEach(element =>{if (element.value !== "")  tempList.push(element.value) }); //
		console.log("tempList        ",tempList);
		setAllValues(allValues => ({...allValues,["imagingPET_RadioTracers"]: tempList}));

		console.log("+++++++++++++++ submitForm invoked");
		
		// extraClinicalAreaList.forEach(element =>{if (element.value !== "")
		// 	setState("clinicalAreaInSample", element.value)});

			
		// extraStudyDataTypeList.forEach(element =>{if (element.value !== "")
		// 	setState("dataTypesAvailable", element.value)});

		// extraMrsList.forEach(element =>{if (element.value !== "")
		// 	setState("imagingMRSs", element.value)});
		
		// if(state["firstMultiSiteName"] !== "")
		// 	setState("multiSitesNames", "firstMultiSiteName");
		
			
		// if(extraSitesList){extraSitesList.forEach(element => {if ((element.value !== ""))
		// 	setState("multiSitesNames", element.value)});}
			
		console.log(allValues);
		//var result = axios.post(apiRegisterURL, state)

		//console.log(result.data);
		
		//allValues.preventDefault()
		axios.post(apiRegisterURL, allValues)
            .then((response) => {
                // alert(JSON.stringify(response))
                if (response.data.success === "true") {
                    // redirect to login page
                    navigate('/user-profile/:email');

                } else {
                    // ask user to try again
                    alert(response.data.message)
                }

            })
            .catch((error) => {
                alert(error)
            })
		
					


		
		var formIsValid = true;
		
		if(!allValues.studyTitle ) formIsValid = false;
		if(!allValues.principalInvestigatorName ) formIsValid = false;
		if(!allValues.principalInvestigatorNameEmail ) formIsValid = false;

		if(formIsValid == false)
		{
			console.log("Form is not valid");
			window.confirm("The informations in the form is not valid, you should fill the mandatory(*) fields ");
		}
		else
		{
			console.log("Form is submitted");
			if (window.confirm("Do you confirm your request to register \"" + document.getElementById("studyTitle").value + "\"")){
				window.confirm("Your request for registering the study \"" + document.getElementById("studyTitle").value
					+ "\" has been sent to web administrator successfully, you will  recieve email about the status of registration");
					console.log(allValues)
				}

				// var inputs, index;
				// inputs = document.getElementsByTagName('input');
				// for (index = 0; index < inputs.length; ++index) {
				// 	// deal with inputs[index] element.
				// 	if ((inputs[index].value != null) && (inputs[index].type == 'text')){
				// 	console.log(inputs[index].id +' -> '+ inputs[index].value.length);
				// 	}

				// }
				
			//document.getElementById("clearFormBtn").click();
		}
	}

	const clearForm = () =>{
		console.log("ClearForm invoked");

		//if (window.confirm("Do you want to clear form?")){
		if (window.confirm("Do you want to clear form?")){
			console.log("User confirmed to clear form");
			
			//setState({["studyTitle"]: ""});
			

			
			document.getElementById("studyTitle").value = "";
			document.getElementById("studyAbbreviation").value = "";
			document.getElementById("principalInvestigatorName").value = "";
			document.getElementById("principalInvestigatorNameEmail").value = "";
			

			document.getElementById("permissionPublic").ckeched = false;
			document.getElementById("permissionRestricted").ckeched = false;
			document.getElementById("permissionConditionalOnPIApproval").ckeched = false;

			//document.getElementsByName("fundingNationalFederalAgency").checked = false; 
			//fundingChecked = false;
			document.getElementsByName("fundingNonGovernmental").checked = false;
			document.getElementsByName("fundingIndustry").checked = false;
			document.getElementsByName("fundingDepartmental").checked = false;

			document.getElementById("studyDescription").value = "";
			document.getElementById("studyURL").value = "";

			document.getElementById("dataCollectionStatusCompleted").checked = false;
			document.getElementById("dataCollectionCompletedSampleSize").value = "";
			document.getElementById("dataCollectionStatusOngoing").checked = false;
			document.getElementById("dataCollectionOngoingSampleSize").value = "";

			document.getElementById("designCrossSectional").checked = false;
			document.getElementById("designLongitudinal").checked = false;
			document.getElementById("designObservational").checked = false;
			document.getElementById("designInterventional").checked = false;
			document.getElementById("designOtherCheckbox").checked = false;
			document.getElementById("designOtherText").disabled = true;
			document.getElementById("designOtherText").value = "";
			
			document.getElementById("dataCollectionSitesSingleRadio").checked = false;
			document.getElementById("dataCollectionSitesSingleText").disabled = true;
			document.getElementById("dataCollectionSitesSingleText").value = "";
			document.getElementById("dataCollectionSitesMultipleRadio").checked = false;
			document.getElementById("dataCollectionSitesMultipleText").disabled = true;
			document.getElementById("dataCollectionSitesMultipleText").value = "";
			
			document.getElementById("sampleTypeSpeciesHuman").checked = false;
			document.getElementById("sampleTypeSpeciesNonHumanPrimate").checked = false;
			document.getElementById("sampleTypeSpeciesMurine").checked = false;
			document.getElementById("sampleTypeSpeciesOther").checked = false;
			
			//uncheckAll("(imagingPETRadiotracerList)");
			for (var i = 0; i < radiotracerList.length; i++)
			{
				document.getElementById(radiotracerList[i].id).disabled = true;
				document.getElementById(radiotracerList[i].id).checked = false;
			}

			document.getElementById("participantMinAge").value = "";
			document.getElementById("participantMaxAge").value = "";
			document.getElementById("participantSex").value = "Male";

			document.getElementById("studyDataTypeRaceEthnicity").checked = false;
			document.getElementById("studyDataTypeGender").checked = false;
			document.getElementById("studyDataTypeSocioeconomicStatus").checked = false;
			document.getElementById("studyDataTypeCognitiveFunctions").checked = false;
			document.getElementById("studyDataTypeAutonomicFunctions").checked = false;
			document.getElementById("studyDataTypeReproductiveFunctions").checked = false;
			document.getElementById("studyDataTypeMotorFunctions").checked = false;
			document.getElementById("studyDataTypePsychiatricSymptoms").checked = false;
			document.getElementById("studyDataTypeNeurologicalSymptoms").checked = false;
			document.getElementById("studyDataTypeLifestyle").checked = false;
			document.getElementById("studyDataTypeSubstanceUse").checked = false;
			document.getElementById("studyDataTypeNutrition").checked = false;
			document.getElementById("studyDataTypePhysicalActivity").checked = false;
			
			document.getElementById("biologicalSamplesBlood").checked = false;
			document.getElementById("biologicalSamplesStool").checked = false;
			document.getElementById("biologicalSamplesUrine").checked = false;
			document.getElementById("biologicalSamplesCSF").checked = false;
			document.getElementById("biologicalSamplesBiopsyTissue").checked = false;
			document.getElementById("biologicalSamplesHair").checked = false;
			document.getElementById("biologicalSamplesSaliva").checked = false;
			document.getElementById("biologicalSamplesDNA").checked = false;
			
			document.getElementById("imagingMRI").checked = false;
			document.getElementById("imagingMRIStructuralMRI").disabled = true;
			document.getElementById("imagingMRIStructuralMRI").checked = false;
			document.getElementById("imagingMRIDiffusionMRI").disabled = true;
			document.getElementById("imagingMRIDiffusionMRI").checked = false;
			document.getElementById("imagingMRIRestingStatefMRI").disabled = true;
			document.getElementById("imagingMRIRestingStatefMRI").checked = false;
			document.getElementById("imagingMRITaskfMRI").disabled = true;
			document.getElementById("imagingMRITaskfMRI").checked = false;
			document.getElementById("imagingMRI_ALS").disabled = true;
			document.getElementById("imagingMRI_ALS").checked = false;
			//mriCheckBoxChanged();

			document.getElementById("imagingPET").checked = false;
			document.getElementById("imagingPETRadiotracerList").disabled = true;
			document.getElementById("imagingPETRadiotracerList").value = radiotracerList[0].text;
			//document.getElementById("imagingPETRadiotracerList").disabled = true;
			//petCheckBoxChanged();
			
			document.getElementById("imagingMRS").checked = false;
			document.getElementById("imagingMRSProton").disabled = true;
			document.getElementById("imagingMRSProton").checked = false;
			document.getElementById("imagingMRSPhosphorus").disabled = true;
			document.getElementById("imagingMRSPhosphorus").checked = false;
			document.getElementById("imagingMRSNa").disabled = true;
			document.getElementById("imagingMRSNa").checked = false;
			document.getElementById("imagingMRSLithium").disabled = true;
			document.getElementById("imagingMRSLithium").checked = false;
			//mrsCheckBoxChanged();
			
			extraRadiotracerList = [];
			document.getElementById("otherRadiotracersDiv").innerHTML = "";

			extraStudyDataTypeList = [];
			document.getElementById("othersStudyDataTypeDiv").innerHTML = "";


			extraMrsList = [];
			document.getElementById("otherMrsDiv").innerHTML = "";

			extraClinicalAreaList = [];
			document.getElementById("otherClinicalAreaDiv").innerHTML = "";

			extraSitesList = [];
			document.getElementById("otherSitesDiv").innerHTML = "";
			
		}

	}

	const dataCollectionSitesHandle = () =>{
		console.log("dataCollectionSitesHandle invoked");
		if(document.getElementById("dataCollectionSitesSingleRadio").checked){

			document.getElementById("dataCollectionSitesSingleText").disabled = false;
			document.getElementById("otherSitesDiv").innerHTML = "";
			// if(extraSitesList){

			// 	const myNode = document.getElementById("");
  			// 	myNode.innerHTML = '';
			// }
			// 	extraSitesList = [];

		}
			
		else
		{
			document.getElementById("dataCollectionSitesSingleText").disabled = true;
			document.getElementById("dataCollectionSitesSingleText").value = "";
		}

		if(document.getElementById("dataCollectionSitesMultipleRadio").checked){
			document.getElementById("dataCollectionSitesMultipleText").disabled = false;
			document.getElementById("addOtherSiteNameButton").disabled = false;
			
		}
			
		else
		{
			document.getElementById("dataCollectionSitesMultipleText").disabled = true;
			document.getElementById("dataCollectionSitesMultipleText").value = "";
		}
		
	}

	const designOtherChanged = () =>{
		if(document.getElementById("designOtherCheckbox").checked == true)
		{
			document.getElementById("designOtherText").disabled = false;
		}
		else
		{
			document.getElementById("designOtherText").disabled = true;
			document.getElementById("designOtherText").value = "";
		}
	}

	const mriCheckBoxChanged = () =>{
		if(document.getElementById("imagingMRI").checked == true)
		{
			document.getElementById("imagingMRIStructuralMRI").disabled = false;
			document.getElementById("imagingMRIDiffusionMRI").disabled = false;
			document.getElementById("imagingMRIRestingStatefMRI").disabled = false;
			document.getElementById("imagingMRITaskfMRI").disabled = false;
			document.getElementById("imagingMRI_ALS").disabled = false;
			document.getElementById("VBrainSequesncesYes").disabled = false;
			document.getElementById("VBrainSequesncesNo").disabled = false;

			
		}
		else
		{
			document.getElementById("imagingMRIStructuralMRI").disabled = true;
			document.getElementById("imagingMRIStructuralMRI").checked = false;
		
			document.getElementById("imagingMRIDiffusionMRI").disabled = true;
			document.getElementById("imagingMRIDiffusionMRI").checked = false;
		
			document.getElementById("imagingMRIRestingStatefMRI").disabled = true;
			document.getElementById("imagingMRIRestingStatefMRI").checked = false;
		
			document.getElementById("imagingMRITaskfMRI").disabled = true;
			document.getElementById("imagingMRITaskfMRI").checked = false;
		
			document.getElementById("imagingMRI_ALS").disabled = true;
			document.getElementById("imagingMRI_ALS").checked = false;

			document.getElementById("VBrainSequesncesYes").disabled = true;
			document.getElementById("VBrainSequesncesYes").checked = false;

			document.getElementById("VBrainSequesncesNo").disabled = true;
			document.getElementById("VBrainSequesncesNo").checked = false;
		}
		
	}

	const petCheckBoxChanged = () =>{
		if(document.getElementById("imagingPET").checked == true)
		{
			for (var i = 0; i < radiotracerList.length; i++)
				document.getElementById(radiotracerList[i].id).disabled = false;
			document.getElementById("addOtherRadiotracerButton").disabled = false;
		}
		else
		{
			for (var i = 0; i < radiotracerList.length; i++)
			{
				document.getElementById(radiotracerList[i].id).disabled = true;
				document.getElementById(radiotracerList[i].id).checked = false;
			}
			document.getElementById("addOtherRadiotracerButton").disabled = true;
			extraRadiotracerList = [];
			
			document.getElementById("otherRadiotracersDiv").innerHTML = null;
		}
		
	}

	const mrsCheckBoxChanged = () =>{
		if(document.getElementById("imagingMRS").checked == true)
		{
			document.getElementById("imagingMRSProton").disabled = false;
			document.getElementById("imagingMRSPhosphorus").disabled = false;
			document.getElementById("imagingMRSNa").disabled = false;
			document.getElementById("imagingMRSLithium").disabled = false;
			
			//document.getElementById("Add Other MRS Button").disabled = false;
			//document.getElementById('Add Other MRS Button').removeAttribute('disabled');
		}
		else
		{
			document.getElementById("imagingMRSProton").disabled = true;
			document.getElementById("imagingMRSProton").checked = false;
		
			document.getElementById("imagingMRSPhosphorus").disabled = true;
			document.getElementById("imagingMRSPhosphorus").checked = false;
		
			document.getElementById("imagingMRSNa").disabled = true;
			document.getElementById("imagingMRSNa").checked = false;
		
			document.getElementById("imagingMRSLithium").disabled = true;
			document.getElementById("imagingMRSLithium").checked = false;
		
			//document.getElementById("Add Other MRS Button").disabled = true;
			//document.getElementById('Add Other MRS Button').setAttribute('disabled', true);
			//document.getElementById('Add Other MRS Button').setAttribute('onCLick', addOtherMrsButtonClicked);
		}
		
	}

	const dataCollectionStatusHandle = () =>{
		console.log("dataCollectionStatusHandle invoked");
		if(document.getElementById("dataCollectionStatusCompleted").checked){
			document.getElementById("dataCollectionCompletedSampleSize").disabled = false;
			
		}

		else
		{
			document.getElementById("dataCollectionCompletedSampleSize").disabled = true;
			document.getElementById("dataCollectionCompletedSampleSize").value = "";
		}

		if(document.getElementById("dataCollectionStatusOngoing").checked)
			document.getElementById("dataCollectionOngoingSampleSize").disabled = false;
		else
		{
			document.getElementById("dataCollectionOngoingSampleSize").disabled = true;
			document.getElementById("dataCollectionOngoingSampleSize").value = "";
		}
	}

	const addOtherRadiotracerButtonClicked = () =>{
		
		// extraRadiotracerList.push({"text": "", "id": getUniqueId("extraRadiotracerList")});
		// console.log(extraRadiotracerList);

		// var content = "";
		// for(var i =0; i< extraRadiotracerList.length;i++){
		// 	content += "<input type=\"text\" style={styles.input}/><br/>";
		// }
		// console.log(content);

		/*
		var container = document.getElementById("otherRadiotracersDiv");
		container.innerHTML = content;
		container.style = {width:"100%"};
		container.appendChild(document.createElement("br"));
		return;
		*/

		var newItem = document.createElement("input");
		//newItem.style = styles.input;
		//newItem.type = "text";
		//width: "100%", height:30, borderRadius: 5, margin:10, fontSize:"15px"
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherRadiotracersDiv").appendChild(newItem);
		extraRadiotracerList.push(newItem);
		newItem.focus();
		
	}
	
	const addOtherStudyDataTypeButtonClicked = () =>{
		// extraStudyDataTypeList.push({"text": "", "id": getUniqueId("extraStudyDataTypeList")});
		// console.log(extraStudyDataTypeList);

		// var content = "";
		// for(var i =0; i< extraStudyDataTypeList.length;i++){
		// 	content += "<input type=\"text\" style={styles.input} /><br/>";
		// }
		// console.log(content);

		//document.getElementById("othersStudyDataTypeDiv").innerHTML = content;
		//document.getElementById("othersStudyDataTypeDiv").style = styles.input;
	
		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("othersStudyDataTypeDiv").appendChild(newItem);
		extraStudyDataTypeList.push(newItem);
		newItem.focus();
	}

	const addOtherMrsButtonClicked = () =>{
		// extraMrsList.push({"text": "", "id": getUniqueId("extraMrsList")});
		// console.log(extraMrsList);

		// var content = "";
		// for(var i =0; i< extraMrsList.length;i++){
		// 	content += "<input type=\"text\" style={styles.input} /><br/>";
		// }
		// console.log(content);

		//document.getElementById("otherMrsDiv").innerHTML = content;
		//document.getElementById("otherMrsDiv").style = styles.input;
		//return;

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherMrsDiv").appendChild(newItem);
		extraMrsList.push(newItem);
		newItem.focus();
	}

	
	const addOtherClinicalAreaButtonClicked = () =>{
		// extraClinicalAreaList.push({"text": "", "id": getUniqueId("extraClinicalAreaList")});
		// console.log(extraClinicalAreaList);

		// var content = "";
		// for(var i =0; i< extraClinicalAreaList.length;i++){
		// 	content += "<input type=\"text\" style={styles.input} /><br/>";
		// }
		// console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherClinicalAreaDiv").appendChild(newItem);
		extraClinicalAreaList.push(newItem);
		newItem.focus();
	}

	
	const addOtherSiteButtonClicked = () =>{
		// extraSitesList.push({"text": "", "id": getUniqueId("extraSitesList")});
		// console.log(extraSitesList);

		// var content = "";
		// for(var i =0; i< extraSitesList.length;i++){
		// 	content += "<input type=\"text\" style={styles.input}  /><br/>";
		// }
		// console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherSitesDiv").appendChild(newItem);
		extraSitesList.push(newItem);
		newItem.focus();
	}

	const handleChanges = (e) =>{

		console.log("*************  handleChanges invoked");
		const fieldID = e.target.id
        const newValue = e.target.value
        console.log(fieldID);
		console.log(newValue);
		//var sender = document.getElementsByName(e.target.name)
		
		var sender = document.getElementById(e.target.id)
		console.log(e.target.name);
		console.log(sender.type);
		

		//var x = document.getElementById("Funding field").querySelectorAll(".example");

		if((sender.type == "text") ||(sender.type == "email") ||(sender.type == "textarea") || (sender.type == "url") || (sender.type == "number") || (sender.type == "select-one"))//fieldName == "fundingNationalFederalAgency")
		{
			//			setState({[fieldID]: newValue});

			setAllValues(allValues => ({
				...allValues,
				[fieldID]: newValue
			}))
		}
	
		else if(sender.type == "radio")
		{
			console.log(sender.id, "---radio---", sender.checked);
			//setState({[sender.name]: sender.id});
			setAllValues(orgValues => ({
				...orgValues,
				[sender.name]: sender.id
			}))
        
		}
		console.log(allValues);
	}

	const handleClinicalAreaCheckbox = (e) =>{
		
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.clinicalAreaInSample) {
			var clinicalAreaList = [...allValues.clinicalAreaInSample]
		} else {
			var clinicalAreaList = [];
		}
		if(check){
			
			clinicalAreaList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["clinicalAreaInSample"]: clinicalAreaList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(clinicalAreaList.includes(sender.name)){

			var index = clinicalAreaList.indexOf(sender.name);
			if (index > -1){
				clinicalAreaList.splice(index,1);
				setAllValues(allValues => ({
					...allValues,
					["clinicalAreaInSample"]: clinicalAreaList
				}))
				}
			}
		
		}

		console.log(allValues);
	}

	const handleChangesimagingMRS = (e) =>{var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.imagingMRSs) {
			var imagingMRSsList = [...allValues.imagingMRSs]
		} else {
			var imagingMRSsList = [];
		}
		if(check){
			
			imagingMRSsList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["imagingMRSs"]: imagingMRSsList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(imagingMRSsList.includes(sender.name)){

			var index = imagingMRSsList.indexOf(sender.name);
			if (index > -1){
				imagingMRSsList.splice(index,1);
				setAllValues(allValues => ({
					...allValues,
					["imagingMRSs"]: imagingMRSsList
				}))
				}
			}
		
		}

		console.log(allValues);
	}
	const handleChangesimagingMRI = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.imagingMRIs) {
			var imagingMRIsList = [...allValues.imagingMRIs]
		} else {
			var imagingMRIsList = [];
		}
		if(check){
			
			imagingMRIsList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["imagingMRIs"]: imagingMRIsList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(imagingMRIsList.includes(sender.name)){

			var index = imagingMRIsList.indexOf(sender.name);
			if (index > -1){
				imagingMRIsList.splice(index,1);
				setAllValues(allValues => ({
					...allValues,
					["imagingMRIs"]: imagingMRIsList
				}))
				}
			}
		
		}

		console.log(allValues);
	}

	const handleChangesFunding = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.funding) {
			var fundingList = [...allValues.funding]
		} else {
			var fundingList = [];
		}
		if(check){
			
			fundingList.push(sender.name)        
			// setState({
			// 	funding: fundingList
			// })
			setAllValues(allValues => ({
				...allValues,
				["funding"]: fundingList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(fundingList.includes(sender.name)){
				var index = fundingList.indexOf(sender.name);
				if (index > -1){
					fundingList.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["funding"]: fundingList
					}))
					}
				}
		
		}

		console.log(allValues);
	}

	const handleChangesDesign = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.studyDesign) {
			var studyDesignList = [...allValues.studyDesign]
		} else {
			var studyDesignList = [];
		}
		if(check){
			
			studyDesignList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["studyDesign"]: studyDesignList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(studyDesignList.includes(sender.name)){
				var index = studyDesignList.indexOf(sender.name);
				if (index > -1){
					studyDesignList.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["studyDesign"]: studyDesignList
					}))
					}
				}
		
		}

		console.log(allValues);
	}

	const handleChangesSpecies = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.sampleTypeSpecies) {
			var speciesList = [...allValues.sampleTypeSpecies]
		} else {
			var speciesList = [];
		}
		if(check){
			
			speciesList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["sampleTypeSpecies"]: speciesList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(speciesList.includes(sender.name)){
				var index = speciesList.indexOf(sender.name);
				if (index > -1){
					speciesList.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["sampleTypeSpecies"]: speciesList
					}))
					}
				}
		
		}

		console.log(allValues);
	}

	const handleChangesDataTypes = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.dataTypesAvailable) {
			var dataTypeList = [...allValues.dataTypesAvailable]
		} else {
			var dataTypeList = [];
		}
		if(check){
			
			dataTypeList.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["dataTypesAvailable"]: dataTypeList
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(dataTypeList.includes(sender.name)){
				var index = dataTypeList.indexOf(sender.name);
				if (index > -1){
					dataTypeList.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["dataTypesAvailable"]: dataTypeList
					}))
					}
				}
		
		}

		console.log(allValues);
	}

	const handleChangesBiologicalSamples = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.biologicalSamples) {
			var List = [...allValues.biologicalSamples]
		} else {
			var List = [];
		}
		if(check){
			
			List.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["biologicalSamples"]: List
			}))
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(List.includes(sender.name)){
				var index = List.indexOf(sender.name);
				if (index > -1){
					List.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["biologicalSamples"]: List
					}))
					}
				}
		
		}

		console.log(allValues);


	}

	const handleChangesRadiotracer  = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		
		if (allValues.imagingPET_RadioTracers) {
			var List = [...allValues.imagingPET_RadioTracers]
		} else {
			var List = [];
		}


		if(check){
			
			List.push(sender.name)        
			setAllValues(allValues => ({
				...allValues,
				["imagingPET_RadioTracers"]: List
			}))
		console.log(sender.name, " is added to the list ");
		
		
		}else{
			console.log("are name:  ",sender.name);
			if(List.includes(sender.name)){
				var index = List.indexOf(sender.name);
				if (index > -1){
					List.splice(index,1);
					setAllValues(allValues => ({
						...allValues,
						["imagingPET_RadioTracers"]: List
					}))
					}
				}

		}

		console.log(allValues);


	}
	const handleChangesOtherRadiotracer = (e) =>{
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...text change..", sender.value , "should be added to list...");
		var check = sender.checked;
		/*****
		if (imagingPET_RadioTracers) {
			var List = [...imagingPET_RadioTracers]
		} else {
			var List = [];
		}
		if(check){
			
			List.push(sender.name)        
			setState({
				imagingPET_RadioTracers: List
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(List.includes(sender.name)){
				var index = List.indexOf(sender.name);
				if (index > -1){
					List.splice(index,1);
					setState({
						imagingPET_RadioTracers: List
							})
					}
				}
		
		}

		console.log(state);*****/


	}
	const handleChangesDataCollectionSites = (e) =>{
		const fieldID = e.target.id
        const newValue = e.target.value
        console.log(fieldID);
		console.log(newValue);
		//var sender = document.getElementsByName(e.target.name)
		
		var sender = document.getElementById(e.target.id)
		console.log(e.target.name);
		console.log(sender.type);

		/*****
		if(dataCollectionSitesRadioButton === "dataCollectionSitesSingleRadio"){
			setState({multiSitesNames: []});
			setState({singleSiteName: newValue});

		}
			
		else if(dataCollectionSitesRadioButton === "dataCollectionSitesMultipleRadio"){
			setState({singleSiteName: ""});
			firstMultiSiteName = newValue;
			console.log("firstMultiSiteName.............",firstMultiSiteName);
		}
		console.log(state);*****/

	}

	const handleChangesSampleSize = (e) =>{
		var sender = document.getElementById(e.target.id)
		

		
		setAllValues(allValues => ({
			...allValues,
			["sampleSize"]: e.target.value
		}))
		console.log(allValues);



	}
	

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
								<td><input id="studyTitle" 
										style={styles.input} 
										name="studyTitle" 
										value={allValues.studyTitle || ""} 
										type="text"
										onChange={handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label>Study abbreviation:</label></td>
								<td><input id="studyAbbreviation" 
										style={styles.input} 
										name="studyAbbreviation" 
										value={allValues.studyAbbreviation || ""} 
										type="text"
										onChange={handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label>Principal investigator:</label></td>
								<td><input id="principalInvestigatorName" 
										style={styles.input} 
										name="principalInvestigatorName" 
										value={allValues.principalInvestigatorName || ""} 
										type="text"
										onChange={handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label type="email" >Principal investigator email:</label></td>
								<td><input id="principalInvestigatorNameEmail" 
										style={styles.input} 
										name="principalInvestigatorNameEmail" 
										value={allValues.principalInvestigatorNameEmail || ""} 
										type="text"
										onChange={handleChanges}/></td>
							</tr>
							
							<tr><td colSpan="2"><hr/></td></tr>
							
							<tr>
								<td>Permission:</td>
								<td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Public <input id="permissionPublic" name="permissionRadioButtons" type="radio" style={styles.radioButton} onChange={handleChanges}/> </label>
										<label>Restricted<input id="permissionRestricted" name="permissionRadioButtons" type="radio" style={styles.radioButton} onChange={handleChanges}/> </label>
										<label>Conditional on PI approval<input id="permissionConditionalOnPIApproval" name="permissionRadioButtons" type="radio" style={styles.radioButton} onChange={handleChanges}/> </label>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr   style={{verticalAlign: "top"}}>
								<td>Funding:</td>
								<td>
									
									<input style={styles.checkBox}  
									type="checkbox" 
									id= "fundingNationalFederalAgency"
									name=" National federal agency"
									//checked = {fundingNationalFederalAgency || false}
									onChange={handleChangesFunding}/> National federal agency<br/>
									<input style={styles.checkBox}  type="checkbox" name=" Non-governmental funding agency" id="fundingNonGovernmental" onChange={handleChangesFunding}/> Non-governmental funding agency<br/>
									<input style={styles.checkBox}  type="checkbox" name="Industry" id="fundingIndustry" onChange={handleChangesFunding}/> Industry<br/>
									<input style={styles.checkBox}  type="checkbox" name="Departmental funds" id="fundingDepartmental" onChange={handleChangesFunding}/> Departmental funds<br/>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td>Description:</td>
								<td><textarea id="studyDescription" style={styles.textArea} name="Description" rows="5" cols="50" placeholder="maximum 200 words" maxLength="200" onChange={handleChanges}/></td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr>
								<td>Study specific URL:</td>
								<td><input id="studyURL" style={styles.input} onChange={handleChanges} /></td>
							</tr>

							
							<tr>
								<td  style={{verticalAlign: "center"}}>Data collection status</td>
								<td >
								
									<div style={{display: "flex", alignItems:"center",  justifyContent: "space-between"}}>
										Completed<input id="dataCollectionStatusCompleted" name="dataCollectionStatusRadioButtons" type="radio" style={styles.radioButton} onChange={e => { handleChanges(e); dataCollectionStatusHandle() }}/>
										<input id="dataCollectionCompletedSampleSize" style={styles.input} placeholder="sample size" disabled="disabled" onChange ={handleChangesSampleSize}/>
										Ongoing<input id="dataCollectionStatusOngoing" name="dataCollectionStatusRadioButtons" type="radio" style={styles.radioButton} onChange={e => { handleChanges(e); dataCollectionStatusHandle() }}/>
										<input id="dataCollectionOngoingSampleSize" style={styles.input} placeholder="sample size" disabled="disabled" onChange ={handleChangesSampleSize}/>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr>
								<td style={{verticalAlign: "top"}}>Design</td>
								<td >
									<input style={styles.checkBox} type="checkbox" id="designCrossSectional" name="Cross-sectional" onChange={handleChangesDesign}/> Cross-sectional<br/>
									<input style={styles.checkBox} type="checkbox" id="designLongitudinal" name="Longitudinal" onChange={handleChangesDesign}/> Longitudinal<br/>
									<input style={styles.checkBox} type="checkbox" id="designObservational" name="Observational" onChange={handleChangesDesign}/> Observational<br/>
									<input style={styles.checkBox} type="checkbox" id="designInterventional" name="Interventional" onChange={handleChangesDesign}/> Interventional<br/>
									<input style={styles.checkBox} type="checkbox" id="designOtherCheckbox" onChange={designOtherChanged}/> Other
									<input id="designOtherText" style={styles.input} disabled={true}/>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Data collection sites:</td>
								<td>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="dataCollectionSitesSingleRadio" style={styles.radioButton} onChange={e => { handleChanges(e); dataCollectionSitesHandle()} }/>Single site</label>
									<input id="dataCollectionSitesSingleText" style={styles.input} placeholder="Site's name" disabled onChange={handleChangesDataCollectionSites}/>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="dataCollectionSitesMultipleRadio" style={styles.radioButton} onChange={e => { handleChanges(e); dataCollectionSitesHandle()} }/>Multiple sites</label>
									<input id="dataCollectionSitesMultipleText" style={styles.input} placeholder="Enter the name of first site" disabled onChange={handleChangesDataCollectionSites}/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
											<button type="button" style={styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={addOtherSiteButtonClicked} id="addOtherSiteNameButton" >Add another</button>
																				
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
										<label>Human<input style={styles.checkBox} id="sampleTypeSpeciesHuman" name="Human" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={handleChangesSpecies}/> </label> 
										<label>Non-Human Primate<input id="sampleTypeSpeciesNonHumanPrimate" name="Non-Human Primate" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={handleChangesSpecies}/> </label> 
										<label>Murine<input id="sampleTypeSpeciesMurine" name="Murine" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={handleChangesSpecies}/> </label> 
										<label>Other<input id="sampleTypeSpeciesOther" name="Other" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={handleChangesSpecies}/> </label> 
									</div>
									<hr/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										
									Healthy individuals?
										<label>Yes <input id="HealthyIndividualsYes" name="HealthyIndividualsRadioButtons" type="radio" style={styles.radioButton} onChange={handleChanges}/> </label>
										<label>No<input id="HealthyIndividualsNo" name="HealthyIndividualsRadioButtons" type="radio" style={styles.radioButton} onChange={handleChanges}/> </label>
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Clinical&nbsp;area:&nbsp;&nbsp;&nbsp;&nbsp;</label>
										
								
										<div id="Clinical Area" multiple="multiple" style={styles.list}>
											{clinicalAreaList.map((item) => 
												<div>
													<label><b>{item.branch}</b></label><br/><br/>
													{item.subBranch.map((subBranchText) => <div><input type="checkbox" style={styles.checkBox} id={subBranchText.id} name={subBranchText.name} onChange={handleClinicalAreaCheckbox} />{subBranchText.name}<br/></div>)}
													<hr/>
												</div>)}
										</div>
									</div>
									
										<div style={{display: "flex", justifyContent: "space-between"}}>
											<button type="button" style={styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={addOtherClinicalAreaButtonClicked} id="Add Other Clinical Area Button" >Add another</button>
										</div>
										<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column"}} id="otherClinicalAreaDiv"></div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "center"}}>
								<td><label type="text" style={{textAlign: "left", alignItems:"center"}}/>General&nbsp;participant&nbsp;information:</td>
								<td style={{display: "inline-flex", alignItems:"center",  flexWrap: 'nowrap', justifyContent: "space-between", width:"100%", margin:10}}>
									<label>Age&nbsp;(years):</label>
									<input style={styles.input} name= "min age" id="participantMinAge" type="number" min="0" step="1" onChange={handleChanges}/> 
									<label >to</label>
									<input style={styles.input} name= "max age" id="participantMaxAge" type="number" min="0" step="1" onChange={handleChanges}/>
									<label  style={{marginLeft: 20, marginRight:10}}>sex&nbsp;(biological):&nbsp;</label>
									<select name="Sex (biological)" id="participantSex" style={{borderRadius: 5, width:800, fontSize: "20px"}} onChange={handleChanges}>
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
										{studyDataList.map((item) => 
											<div> <label title={item.description} style={{leftMargin:20}}>{item.text} <input id={item.id} name={item.text} type="checkbox" title={item.description} style={styles.checkBox} onChange={handleChangesDataTypes}/> </label><br/> </div>)
										}
									</div>	
									<div style={{padding:10}}>
										<button type="button" style={styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={addOtherStudyDataTypeButtonClicked} id="Add Other Study Data Type Button">Add another</button>
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
										<label>Blood <input name="Blood" id="biologicalSamplesBlood" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>Stool <input name="Stool" id="biologicalSamplesStool" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>Urine <input name="Urine" id="biologicalSamplesUrine" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>CSF <input name="CSF" id="biologicalSamplesCSF" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>Biopsy tissue <input name="Biopsy tissue" id="biologicalSamplesBiopsyTissue" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>Hair <input name="Hair" id="biologicalSamplesHair" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>Saliva <input name="Saliva" id="biologicalSamplesSaliva" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
										<label>DNA <input name="DNA" id="biologicalSamplesDNA" type="checkbox" style={styles.checkBox} onChange={handleChangesBiologicalSamples}/> </label>
									</div>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Imaging</td>
								<td>
								
									<label><b>MRI</b><input id="imagingMRI" type="checkbox" style={styles.checkBox} onChange={mriCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Structural MRI<input name="Structural MRI" id="imagingMRIStructuralMRI" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRI}/> </label>
										<label>Diffusion MRI<input name="Diffusion MRI" id="imagingMRIDiffusionMRI" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRI}/> </label>
										<label>Resting state fMRI<input name="Resting state fMRI" id="imagingMRIRestingStatefMRI" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRI}/> </label>
										<label>Task fMRI<input name="Task fMRI" id="imagingMRITaskfMRI" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRI}/> </label>
										<label>ASL <input name="ASL" id="imagingMRI_ALS" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRI}/> </label>
										
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
									
								<td>
								<td>Did you use the V-Brain sequesnces?</td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Yes <input id="VBrainSequesncesYes" name="VBrainSequesncesRadioButtons" type="radio" style={styles.radioButton}disabled/> </label>
										<label>No<input id="VBrainSequesncesNo" name="VBrainSequesncesRadioButtons" type="radio" style={styles.radioButton}disabled/> </label>
									</div>
								</td>
									
									</div>
									<hr/>
									<label><b>PET</b><input id="imagingPET" type="checkbox" style={styles.checkBox} onChange={petCheckBoxChanged}/> </label>
									<br/>		

									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Radiotracer</label>
										<div style={{padding:10, display: "flex", justifyContent: "space-between", flexWrap: 'wrap', width: "100%"}}>
											<div id="imagingPETRadiotracerList" multiple="multiple" style={styles.list}>
												{radiotracerList.map((item) => <div><input name={item.text} id={item.id} type="checkbox" style={styles.checkBox}  disabled="disabled" onChange={handleChangesRadiotracer}/>{item.text}<br/></div>)}
											</div>
										</div>
									</div>
									
									<button type="button" style={styles.button, {height:"30px", borderRadius: 5}} onClick={addOtherRadiotracerButtonClicked} id="addOtherRadiotracerButton">Add another</button>

									<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column", align:"center"}} id="otherRadiotracersDiv">

									</div>
										
									<hr/>
									<label><b>MRS</b><input id=  "imagingMRS" type="checkbox" style={styles.checkBox} onChange={mrsCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
										<label>Proton<input name="Proton" id="imagingMRSProton" type="checkbox" style={styles.checkBox} disabled  onChange={handleChangesimagingMRS}/> </label>
										<label>Phosphorus<input name="Phosphorus" id="imagingMRSPhosphorus" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRS}/> </label>
										<label>Na<input name="Na" id="imagingMRSNa" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRS}/> </label>
										<label>Lithium<input name="Lithium" id="imagingMRSLithium" type="checkbox" style={styles.checkBox} disabled onChange={handleChangesimagingMRS}/> </label>
										<button type="button" style={styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={addOtherMrsButtonClicked} id="Add Other MRS Button" >Add another</button>
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
					<button type="button" style={styles.button} onClick={clearForm} id="clearFormBtn">Clear&nbsp;Form</button> 
					<button type="button" style={styles.button} onClick={submitForm} id="submitFormBtn">Submit</button> 
				</div>
		</div>

		);
		

}

export default StudyRegisterationForm
