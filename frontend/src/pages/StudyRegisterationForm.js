import React, { Style, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios"

export default class RegisterStudy extends React.Component{ 
	latestId = 1000;
	getUniqueId(elementName){
		//id = this.latestId++;
		return (elementName+this.latestId++);
	}

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
		{"text": "Adenosine A1 [11C]MPDX", "id": this.getUniqueId("radiotracerList")},			
		{"text": "Adenosine A1 [18F]CPFPX", "id": this.getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]SCH442416", "id": this.getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [18F]MNI-444", "id": this.getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [123I]MNI-420", "id": this.getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]Preladenant", "id": this.getUniqueId("radiotracerList")},
		{"text": "Adenosine A2A [11C]TMSX", "id": this.getUniqueId("radiotracerList")},
		{"text": "CB1 [18F]FEMMEP-d2", "id": this.getUniqueId("radiotracerList")},
		{"text": "CB1 [18F]MK-9470", "id": this.getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]MePPEP", "id": this.getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]OMAR", "id": this.getUniqueId("radiotracerList")},
		{"text": "CB1 [11C]SD5024", "id": this.getUniqueId("radiotracerList")},
		{"text": "D1 [11C]SCH 23390", "id": this.getUniqueId("radiotracerList")},
		{"text": "D1 [18F]MNI-968 ([18F]PF-8477)", "id": this.getUniqueId("radiotracerList")},
		{"text": "D1 [11C]NNC 112", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]Raclopride", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]FLB 457", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C]MNPA", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [11C](+)PHNO", "id": this.getUniqueId("radiotracerList")}, 
		{"text": "D2/D3 [11C]NPA", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [18F]Fallypride", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]IBZM", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]Epidepride", "id": this.getUniqueId("radiotracerList")},
		{"text": "D2/D3 [123I]IBF", "id": this.getUniqueId("radiotracerList")},
		{"text": "H1 [11C]Doxepin", "id": this.getUniqueId("radiotracerList")},
		{"text": "H3 [11C]GR 103545", "id": this.getUniqueId("radiotracerList")},
		{"text": "H3 [11C]GSK189254", "id": this.getUniqueId("radiotracerList")},
		{"text": "H3 [15-HT1A [carbonyl-11C]WAY", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1A [carbonyl-11D]WAY", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1A [11C]CUMI-101", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F] FCWAY", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F]MefWAY", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1A [18F]MPPF 8F]FMH3", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1B [11C]AZ10419369", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT1B [11C]P943", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT2A [11C]MDL 100 907", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Altanserin", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Altanserin-d2", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT2A [18F]Setoperone", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT4 [11C]SB-207145", "id": this.getUniqueId("radiotracerList")},
		{"text": "5-HT6 [11C]GSK-215083", "id": this.getUniqueId("radiotracerList")},
		{"text": "mGluR1 [11C]ITMM", "id": this.getUniqueId("radiotracerList")},
		{"text": "mGluR1 [18F]FIMX", "id": this.getUniqueId("radiotracerList")},
		{"text": "mGluR5 [11C]ABP688", "id": this.getUniqueId("radiotracerList")},
		{"text": "mGluR5 [18F]-FPEB", "id": this.getUniqueId("radiotracerList")},
		{"text": "mGluR5 [18F]-PSS232", "id": this.getUniqueId("radiotracerList")},
		{"text": "NK1[18F]SPA-RQ", "id": this.getUniqueId("radiotracerList")},
		{"text": "NK1 [18F]MK-0999 ([18F]FE-SPA-RQ)", "id": this.getUniqueId("radiotracerList")},
		{"text": "NOP [11C]NOP-1A", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (DOR) [11C]Methylnaltrindole", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [11C]Diprenorphine", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [11C]Carfentanil (agonist)", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (MOR) [18F]Fluoroethyldiprenorphine", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (KOR) [11C]GR103545", "id": this.getUniqueId("radiotracerList")},
		{"text": "Opiate (KOR) [11C]LY2795050", "id": this.getUniqueId("radiotracerList")},
		{"text": "Sigma [11C]SA4503", "id": this.getUniqueId("radiotracerList")},
		{"text": "Imidazoline Receptors (I2 binding site) [11C]BU99008", "id": this.getUniqueId("radiotracerList")},
		{"text": "Bz(GABAA) [11C]Flumazenil", "id": this.getUniqueId("radiotracerList")},
		{"text": "Bz (GABAA) [18F]Flumazenil", "id": this.getUniqueId("radiotracerList")},
		{"text": "Bz (α5GABAA) [11C]Ro15 4513", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) 2-[18F]F-A-85380 (2-[18F]FA)", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) 6-[18F]FA", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]Nifene", "id": this.getUniqueId("radiotracerList")},
		{"text": "[18F]XTRA", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]GMOM", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]AZAN", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [18F]Flubatine", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α4β2) [123I]51A", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α7) [11C]CHIBA-1001", "id": this.getUniqueId("radiotracerList")},
		{"text": "Nicotinic (α7) [18F]ASEM", "id": this.getUniqueId("radiotracerList")},
		{"text": "NMDA [18F]GE-179", "id": this.getUniqueId("radiotracerList")},
		{"text": "NMDA [123I]CNS1 P2X7 [11C]JNJ54173717", "id": this.getUniqueId("radiotracerList")},
		{"text": "P2X7 [11C]GSK-1482160", "id": this.getUniqueId("radiotracerList")},
		{"text": "P2X7 [18F]JNJ-64413739261", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [11C]PE2I", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [11C]Methylphenidate", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FP-CIT", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [123I]FP-CIT (DATSCAN)", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FE-PE2I", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [123I]CIT (Dopascan)", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [18F]FECNT", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [123I]Altropane", "id": this.getUniqueId("radiotracerList")},
		{"text": "DAT [123I]PE2I", "id": this.getUniqueId("radiotracerList")},
		{"text": "Glycine T1[11C]CFpyPB", "id": this.getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [11C]GSK 931145 ", "id": this.getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [18F]CFPyPB", "id": this.getUniqueId("radiotracerList")},
		{"text": "Glycine T1 [11C]RO5013853", "id": this.getUniqueId("radiotracerList")},
		{"text": "NET [11C]MeNER-d2", "id": this.getUniqueId("radiotracerList")},
		{"text": "NET [18F]FMeNER-d2", "id": this.getUniqueId("radiotracerList")},
		{"text": "NET [123I]INER", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [11C]DASB", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [11C]MADAM", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [11C]AFM", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [11C]HOHMADAM", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [18F]ADAM", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [123I]CIT", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [123I]mZIENT", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [123I]norβCIT", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [123I]βCIT", "id": this.getUniqueId("radiotracerList")},
		{"text": "SERT [123I]ADAM", "id": this.getUniqueId("radiotracerList")},
		{"text": "VMAT2 [11C]DTBZ", "id": this.getUniqueId("radiotracerList")},
		{"text": "VMAT2 [11C]MTBZ", "id": this.getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]florbenazine", "id": this.getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]AV-133", "id": this.getUniqueId("radiotracerList")},
		{"text": "VMAT2 [18F]FP-DTBZ", "id": this.getUniqueId("radiotracerList")},
		{"text": "VAChT [18F]FEOBV", "id": this.getUniqueId("radiotracerList")},
		{"text": "SV2A [11C]UCB-J", "id": this.getUniqueId("radiotracerList")},
		{"text": "SV2A [11C]UCB-A", "id": this.getUniqueId("radiotracerList")},
		{"text": "SV2A  [18F]UCB-H", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [11C](R)-PK 11195", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]PBR28", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]DAA1106", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [11C]DPA-713", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]FBR", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]FEPPA", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [18F]PBR111", "id": this.getUniqueId("radiotracerList")},
		{"text": "TSPO [123I]CLINDE", "id": this.getUniqueId("radiotracerList")},
		{"text": "AChE [11C]MP4A", "id": this.getUniqueId("radiotracerList")},
		{"text": "AChE [123I]IBVM", "id": this.getUniqueId("radiotracerList")},
		{"text": "Aromatase [11C]VOR", "id": this.getUniqueId("radiotracerList")},
		{"text": "Cox-1 [11C]PS13", "id": this.getUniqueId("radiotracerList")},
		{"text": "FAAH [11C]CURB", "id": this.getUniqueId("radiotracerList")},
		{"text": "FAAH [11C]MK3168", "id": this.getUniqueId("radiotracerList")},
		{"text": "HDAC 1-3 [11C]Martinostat", "id": this.getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Harmine", "id": this.getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Clorgyline", "id": this.getUniqueId("radiotracerList")},
		{"text": "MAO-A [11C]Befloxatone", "id": this.getUniqueId("radiotracerList")},
		{"text": "MAO-A", "id": this.getUniqueId("radiotracerList")},
		{"text": "MAO-B [11C]Deprenyl-d2", "id": this.getUniqueId("radiotracerList")},
		{"text": "Mitochondrial Complex 1[18F]BCPP-EF", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE2A [18F]PF05270430", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE4 [11C](R)-Rolipram", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]IMA107", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]MP-10", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE10A [11C]Lu AE92686", "id": this.getUniqueId("radiotracerList")},
		{"text": "PDE10A [18F]MNI659", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [11C]PIB", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Flutemetamol", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Florbetapir([18F]AV-45)", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]AZD 4694", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]FBM", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]FDDNP", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]W372", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]Florbetaban", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [18F]MK3328", "id": this.getUniqueId("radiotracerList")},
		{"text": "β-Amyloid [123I]IMPY", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [11C]PBB3", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [11C]THK5351", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]BF-227", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]Flortaucipir ([18F]AV-1451)", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5351", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5317", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK5105", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]THK523", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]MK6240", "id": this.getUniqueId("radiotracerList")},
		{"text": "Tau/Synuclein [18F]RO948", "id": this.getUniqueId("radiotracerList")},
	]

	extraRadiotracerList = [
	]



	clinicalAreaList = 
	[
		{
			branch: "Addiction",
			subBranch: 
			[
				{"name":"Alcohol related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Cannabis related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Cocaine related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Hallucinogen related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Inhalant related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Nicotine dependence", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Opioid related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Other stimulant related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
				{"name":"Sedative, hypnotic, or anxiolytic related disorders", "id": this.getUniqueId("clinicalArea_Addiction")},
	
			]
		},
		{
			branch: "Psychotic Disorders", 
			subBranch: 
			[
				{"name":"Brief psychotic disorder", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Delusional disorders", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Prodromal Psychosis", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizophrenia", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizotypal disorder", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
				{"name":"Schizoaffective disorders", "id": this.getUniqueId("clinicalArea_sychoticDisorders")},
			]
		},
		{
			branch: "Mood Disorder",
			subBranch: 
			[
				{"name":"Bipolar disorder", "id": this.getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Depressive episode", "id": this.getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Major depressive disorder", "id": this.getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Manic episode", "id": this.getUniqueId("clinicalArea_moodDisorders")},
				{"name":"Prodromal mood disorder", "id": this.getUniqueId("clinicalArea_moodDisorders")},
			]
		},
		{
			branch: "Anxiety and Stress-related Disorders",
			subBranch: 
			[
				{"name":"Acute Stress Reaction", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Agoraphobia", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Depersonalization-derealization syndrome", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Dissociative and conversion disorders", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Obsessive-compulsive disorder", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Panic Disorder", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Post-traumatic stress disorder (PTSD)", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Adjustment disorders", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Somatoform disorders", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Social Phobia", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
				{"name":"Specific Phobias", "id": this.getUniqueId("clinicalArea_AnxietyAndStressRelatedDisorders")},
			]
		},
		{
			branch: "Eating Disorders",
			subBranch: 
			[
				{"name":"Bulimia", "id": this.getUniqueId("clinicalArea_EatingDisorders")},
				{"name":"Binge-Eating", "id": this.getUniqueId("clinicalArea_EatingDisorders")},
				{"name":"Restrictive Eating Disoders (Anorexia Nervosa)", "id": this.getUniqueId("clinicalArea_EatingDisorders")},
			]
		},
		{
			branch: "Disorders of Adult Personality and Behaviour",
			subBranch: 
			[
				{"name":"Antisocial personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Avoidant personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Borderline personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Dependent personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Histrionic personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Narcissistic personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Obsessive-compulsive personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Paranoid personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Schizoid personality disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Impulse Disorders: Pathological Gambling", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Gender Identity Disorder", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
				{"name":"Paraphilias", "id": this.getUniqueId("clinicalArea_DisordersOfAdultPersonality")},
			]
		},
		{
			branch: "Developmental Disorders",
			subBranch: 
			[
				{"name":"Asperger's syndrome", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Attachment Disorders", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Attention Deficit Hyperactivity Disorder", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Autism Spectrum disorder", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Childhood disintegrative disorder", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")}, 
				{"name":"Conduct Disorders", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Intellectual Disability", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Rett's syndrome", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Separation anxiety disorder of childhood", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of speech and language", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of scholastic skills", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Specific developmental disorders of Motor function", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Tic Disorders (excluding Tourette’s disorder)", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
				{"name":"Tourette's disorder", "id": this.getUniqueId("clinicalArea_DevelopmentalDisorders")},
			]
		},
		{
			branch: "Neurological Disorders", 
			subBranch: 
			[
				{"name":"Alzheimer's Disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Creutzfeldt-Jakob disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")}, 
				{"name":"Dementia with Lewy bodies", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")}, 
				{"name":"Dementia (Unspecified)", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Frontotemporal dementia", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Huntington's disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Multiple Sclerosis", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Parkinson's disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Pick's disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Prion disease", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Systemic lupus erythematosus", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Traumatic brain Injury", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Vascular dementia", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
				{"name":"Unspecified dementia", "id": this.getUniqueId("clinicalArea_NeurologicalDisorders")},
			]
		},
	
	]
	studyDataList = [
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

		this.state = {
			funding: [],
			studyDesign: [],
			dataCollectionSites:[],
			sampleTypeSpecies: [],
			clinicalAreaInSample: [],
			dataTypesAvailable: [],
			biologicalSamples: [],
			imagingMRIs: [],
			imagingMRSs: [],
			imagingPET_RadioTracers:[],
			multiSitesNames: [],
			singleSiteName: "",
			dataCollectionStatusRadioButtons: "",
			dataCollectionSitesRadioButton: "",
			
		};

		// This binding is necessary to make `this` work in the callback  
		this.firstMultiSiteName = "";  
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
		this.handleClinicalAreaCheckbox = this.handleClinicalAreaCheckbox.bind(this);
		this.handleChangesimagingMRS = this.handleChangesimagingMRS.bind(this)
		this.handleChangesimagingMRI = this.handleChangesimagingMRI.bind(this)
		this.handleChangesFunding = this.handleChangesFunding.bind(this)
		this.handleChangesDesign = this.handleChangesDesign.bind(this);
		this.handleChangesSpecies = this.handleChangesSpecies.bind(this);
		this.handleChangesDataTypes = this.handleChangesDataTypes.bind(this);
		this.handleChangesBiologicalSamples = this.handleChangesBiologicalSamples.bind(this);
		this.handleChangesRadiotracer = this.handleChangesRadiotracer.bind(this);
		this.handleChangesOtherRadiotracer = this.handleChangesOtherRadiotracer.bind(this);
		this.handleChangesDataCollectionSites = this.handleChangesDataCollectionSites.bind(this);
		this.handleChangesSampleSize = this.handleChangesSampleSize.bind(this);


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
	apiRegisterURL = "http://localhost:8080/auth/studyRegistration";
	submitForm(e){

		
		console.log("************ submitForm invoked");

		this.extraRadiotracerList.forEach(element =>{if (element.value !== "")
			this.state.imagingPET_RadioTracers.push(element.value)});

		this.extraClinicalAreaList.forEach(element =>{if (element.value !== "")
			this.state.clinicalAreaInSample.push(element.value)});

			
		this.extraStudyDataTypeList.forEach(element =>{if (element.value !== "")
			this.state.dataTypesAvailable.push(element.value)});

		this.extraMrsList.forEach(element =>{if (element.value !== "")
			this.state.imagingMRSs.push(element.value)});
		
		if(this.firstMultiSiteName !== "")
			this.state.multiSitesNames.push(this.firstMultiSiteName);
		
			
		if(this.extraSitesList){this.extraSitesList.forEach(element => {if ((element.value !== ""))
			this.state.multiSitesNames.push(element.value)});}
		

			
		console.log(this.state)
		//var result = axios.post(this.apiRegisterURL, this.state)

		//console.log(result.data);
		//e.preventDefault()
		
		axios.post(this.apiRegisterURL, this.state)
            .then((response) => {
                // alert(JSON.stringify(response))
                if (response.data.success === "true") {
                    // redirect to login page
                    useNavigate('/login');

                } else {
                    // ask user to try again
                    alert(response.data.message)
                }

            })
            .catch((error) => {
                alert(error)
            })
		
			


		/*
		var formIsValid = true;
		
		if(!this.state.studyTitle ) formIsValid = false;
		if(!this.state.principalInvestigatorName ) formIsValid = false;
		if(!this.state.principalInvestigatorNameEmail ) formIsValid = false;

		if(formIsValid == false)
		{
			console.log("Form is not valid");
			window.confirm("The informations in the form is not valid");
		}
		else
		{
			console.log("Form is submitted");
			if (window.confirm("Do you confirm your request to register \"" + document.getElementById("studyTitle").value + "\"")){
				window.confirm("Your request for registering the study \"" + document.getElementById("studyTitle").value
					+ "\" has been sent to web administrator successfully, you will  recieve email about the status of registration");
					console.log(this.state)
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
		}*/
	}

	clearForm(){
		console.log("ClearForm invoked");

		//if (window.confirm("Do you want to clear form?")){
		if (window.confirm("Do you want to clear form?")){
			console.log("User confirmed to clear form");
			
			//this.setState({["studyTitle"]: ""});
			

			
			document.getElementById("studyTitle").value = "";
			document.getElementById("studyAbbreviation").value = "";
			document.getElementById("principalInvestigatorName").value = "";
			document.getElementById("principalInvestigatorNameEmail").value = "";
			

			document.getElementById("permissionPublic").ckeched = false;
			document.getElementById("permissionRestricted").ckeched = false;
			document.getElementById("permissionConditionalOnPIApproval").ckeched = false;

			//document.getElementsByName("fundingNationalFederalAgency").checked = false; 
			this.state.fundingChecked = false;
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
			
			//this.uncheckAll("(imagingPETRadiotracerList)");
			for (var i = 0; i < this.radiotracerList.length; i++)
			{
				document.getElementById(this.radiotracerList[i].id).disabled = true;
				document.getElementById(this.radiotracerList[i].id).checked = false;
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
			//this.mriCheckBoxChanged();

			document.getElementById("imagingPET").checked = false;
			document.getElementById("imagingPETRadiotracerList").disabled = true;
			document.getElementById("imagingPETRadiotracerList").value = this.radiotracerList[0].text;
			//document.getElementById("imagingPETRadiotracerList").disabled = true;
			//this.petCheckBoxChanged();
			
			document.getElementById("imagingMRS").checked = false;
			document.getElementById("imagingMRSProton").disabled = true;
			document.getElementById("imagingMRSProton").checked = false;
			document.getElementById("imagingMRSPhosphorus").disabled = true;
			document.getElementById("imagingMRSPhosphorus").checked = false;
			document.getElementById("imagingMRSNa").disabled = true;
			document.getElementById("imagingMRSNa").checked = false;
			document.getElementById("imagingMRSLithium").disabled = true;
			document.getElementById("imagingMRSLithium").checked = false;
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
		if(document.getElementById("dataCollectionSitesSingleRadio").checked){

			document.getElementById("dataCollectionSitesSingleText").disabled = false;
			document.getElementById("otherSitesDiv").innerHTML = "";
			// if(this.extraSitesList){

			// 	const myNode = document.getElementById("");
  			// 	myNode.innerHTML = '';
			// }
			// 	this.extraSitesList = [];

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

	designOtherChanged(){
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

	mriCheckBoxChanged(){
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

	petCheckBoxChanged(){
		if(document.getElementById("imagingPET").checked == true)
		{
			for (var i = 0; i < this.radiotracerList.length; i++)
				document.getElementById(this.radiotracerList[i].id).disabled = false;
			document.getElementById("addOtherRadiotracerButton").disabled = false;
		}
		else
		{
			for (var i = 0; i < this.radiotracerList.length; i++)
			{
				document.getElementById(this.radiotracerList[i].id).disabled = true;
				document.getElementById(this.radiotracerList[i].id).checked = false;
			}
			document.getElementById("addOtherRadiotracerButton").disabled = true;
			this.extraRadiotracerList = [];
			
			document.getElementById("otherRadiotracersDiv").innerHTML = null;
		}
		
	}

	mrsCheckBoxChanged(){
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
			//document.getElementById('Add Other MRS Button').setAttribute('onCLick', this.addOtherMrsButtonClicked);
		}
		
	}

	dataCollectionStatusHandle(){
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

	addOtherRadiotracerButtonClicked(){
		
		// this.extraRadiotracerList.push({"text": "", "id": this.getUniqueId("extraRadiotracerList")});
		// console.log(this.extraRadiotracerList);

		// var content = "";
		// for(var i =0; i< this.extraRadiotracerList.length;i++){
		// 	content += "<input type=\"text\" style={this.styles.input}/><br/>";
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
		//newItem.style = this.styles.input;
		//newItem.type = "text";
		//width: "100%", height:30, borderRadius: 5, margin:10, fontSize:"15px"
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherRadiotracersDiv").appendChild(newItem);
		this.extraRadiotracerList.push(newItem);
		newItem.focus();
		
	}
	
	addOtherStudyDataTypeButtonClicked(){
		// this.extraStudyDataTypeList.push({"text": "", "id": this.getUniqueId("extraStudyDataTypeList")});
		// console.log(this.extraStudyDataTypeList);

		// var content = "";
		// for(var i =0; i< this.extraStudyDataTypeList.length;i++){
		// 	content += "<input type=\"text\" style={this.styles.input} /><br/>";
		// }
		// console.log(content);

		//document.getElementById("othersStudyDataTypeDiv").innerHTML = content;
		//document.getElementById("othersStudyDataTypeDiv").style = this.styles.input;
	
		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("othersStudyDataTypeDiv").appendChild(newItem);
		this.extraStudyDataTypeList.push(newItem);
		newItem.focus();
	}

	addOtherMrsButtonClicked(){
		// this.extraMrsList.push({"text": "", "id": this.getUniqueId("extraMrsList")});
		// console.log(this.extraMrsList);

		// var content = "";
		// for(var i =0; i< this.extraMrsList.length;i++){
		// 	content += "<input type=\"text\" style={this.styles.input} /><br/>";
		// }
		// console.log(content);

		//document.getElementById("otherMrsDiv").innerHTML = content;
		//document.getElementById("otherMrsDiv").style = this.styles.input;
		//return;

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherMrsDiv").appendChild(newItem);
		this.extraMrsList.push(newItem);
		newItem.focus();
	}

	
	addOtherClinicalAreaButtonClicked(){
		// this.extraClinicalAreaList.push({"text": "", "id": this.getUniqueId("extraClinicalAreaList")});
		// console.log(this.extraClinicalAreaList);

		// var content = "";
		// for(var i =0; i< this.extraClinicalAreaList.length;i++){
		// 	content += "<input type=\"text\" style={this.styles.input} /><br/>";
		// }
		// console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherClinicalAreaDiv").appendChild(newItem);
		this.extraClinicalAreaList.push(newItem);
		newItem.focus();
	}

	
	addOtherSiteButtonClicked(){
		// this.extraSitesList.push({"text": "", "id": this.getUniqueId("extraSitesList")});
		// console.log(this.extraSitesList);

		// var content = "";
		// for(var i =0; i< this.extraSitesList.length;i++){
		// 	content += "<input type=\"text\" style={this.styles.input}  /><br/>";
		// }
		// console.log(content);

		var newItem = document.createElement("input");
		newItem.setAttribute("width", "100%");
		newItem.setAttribute("borderRadius", 5);
		newItem.setAttribute("padding", 10);
		document.getElementById("otherSitesDiv").appendChild(newItem);
		this.extraSitesList.push(newItem);
		newItem.focus();
	}

	handleChanges(e){

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
			this.setState({[fieldID]: newValue});
		}
		// else if(sender.type == "checkbox") 
		// {
		// 	var parent = sender.parentElement;
		// 	this.setState({[sender.name]: sender.checked});
		// 	console.log(sender.id, " ->" , sender.checked)
		// }
		else if(sender.type == "radio")
		{
			console.log(sender.id, "---radio---", sender.checked);
			this.setState({[sender.name]: sender.id});
        
		}
		console.log(this.state);
	}

	handleClinicalAreaCheckbox(e){
		
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.clinicalAreaInSample) {
			var clinicalAreaList = [...this.state.clinicalAreaInSample]
		} else {
			var clinicalAreaList = [];
		}
		if(check){
			
			clinicalAreaList.push(sender.name)        
			this.setState({
				clinicalAreaInSample: clinicalAreaList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(clinicalAreaList.includes(sender.name)){

			var index = clinicalAreaList.indexOf(sender.name);
			if (index > -1){
				clinicalAreaList.splice(index,1);
				this.setState({
					clinicalAreaInSample: clinicalAreaList
						})
				}
			}
		
		}

		console.log(this.state);
	}
	handleChangesimagingMRS(e){var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.imagingMRSs) {
			var imagingMRSsList = [...this.state.imagingMRSs]
		} else {
			var imagingMRSsList = [];
		}
		if(check){
			
			imagingMRSsList.push(sender.name)        
			this.setState({
				imagingMRSs: imagingMRSsList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(imagingMRSsList.includes(sender.name)){

			var index = imagingMRSsList.indexOf(sender.name);
			if (index > -1){
				imagingMRSsList.splice(index,1);
				this.setState({
					imagingMRSs: imagingMRSsList
						})
				}
			}
		
		}

		console.log(this.state);
	}
	handleChangesimagingMRI(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.imagingMRIs) {
			var imagingMRIsList = [...this.state.imagingMRIs]
		} else {
			var imagingMRIsList = [];
		}
		if(check){
			
			imagingMRIsList.push(sender.name)        
			this.setState({
				imagingMRIs: imagingMRIsList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(imagingMRIsList.includes(sender.name)){

			var index = imagingMRIsList.indexOf(sender.name);
			if (index > -1){
				imagingMRIsList.splice(index,1);
				this.setState({
					imagingMRIs: imagingMRIsList
						})
				}
			}
		
		}

		console.log(this.state);
	}

	handleChangesFunding(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.funding) {
			var fundingList = [...this.state.funding]
		} else {
			var fundingList = [];
		}
		if(check){
			
			fundingList.push(sender.name)        
			this.setState({
				funding: fundingList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(fundingList.includes(sender.name)){
				var index = fundingList.indexOf(sender.name);
				if (index > -1){
					fundingList.splice(index,1);
					this.setState({
						funding: fundingList
							})
					}
				}
		
		}

		console.log(this.state);
	}

	handleChangesDesign(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.studyDesign) {
			var studyDesignList = [...this.state.studyDesign]
		} else {
			var studyDesignList = [];
		}
		if(check){
			
			studyDesignList.push(sender.name)        
			this.setState({
				studyDesign: studyDesignList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(studyDesignList.includes(sender.name)){
				var index = studyDesignList.indexOf(sender.name);
				if (index > -1){
					studyDesignList.splice(index,1);
					this.setState({
						studyDesign: studyDesignList
							})
					}
				}
		
		}

		console.log(this.state);
	}

	handleChangesSpecies(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.sampleTypeSpecies) {
			var speciesList = [...this.state.sampleTypeSpecies]
		} else {
			var speciesList = [];
		}
		if(check){
			
			speciesList.push(sender.name)        
			this.setState({
				sampleTypeSpecies: speciesList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(speciesList.includes(sender.name)){
				var index = speciesList.indexOf(sender.name);
				if (index > -1){
					speciesList.splice(index,1);
					this.setState({
						sampleTypeSpecies: speciesList
							})
					}
				}
		
		}

		console.log(this.state);
	}

	handleChangesDataTypes(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.dataTypesAvailable) {
			var dataTypeList = [...this.state.dataTypesAvailable]
		} else {
			var dataTypeList = [];
		}
		if(check){
			
			dataTypeList.push(sender.name)        
			this.setState({
				dataTypesAvailable: dataTypeList
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(dataTypeList.includes(sender.name)){
				var index = dataTypeList.indexOf(sender.name);
				if (index > -1){
					dataTypeList.splice(index,1);
					this.setState({
						dataTypesAvailable: dataTypeList
							})
					}
				}
		
		}

		console.log(this.state);
	}

	handleChangesBiologicalSamples(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.biologicalSamples) {
			var List = [...this.state.biologicalSamples]
		} else {
			var List = [];
		}
		if(check){
			
			List.push(sender.name)        
			this.setState({
				biologicalSamples: List
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(List.includes(sender.name)){
				var index = List.indexOf(sender.name);
				if (index > -1){
					List.splice(index,1);
					this.setState({
						biologicalSamples: List
							})
					}
				}
		
		}

		console.log(this.state);


	}

	handleChangesRadiotracer(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...checked change..", sender.checked , "should be added to ...");
		var check = sender.checked;
		if (this.state.imagingPET_RadioTracers) {
			var List = [...this.state.imagingPET_RadioTracers]
		} else {
			var List = [];
		}


		if(check){
			
			List.push(sender.name)        
			this.setState({
				imagingPET_RadioTracers: List
			})
		console.log(sender.name, " is added to the list ");
		
		
		}

		console.log(this.state);


	}
	handleChangesOtherRadiotracer(e){
		var sender = document.getElementById(e.target.id)
		console.log(sender.name, " ...text change..", sender.value , "should be added to list...");
		var check = sender.checked;
		if (this.state.imagingPET_RadioTracers) {
			var List = [...this.state.imagingPET_RadioTracers]
		} else {
			var List = [];
		}
		if(check){
			
			List.push(sender.name)        
			this.setState({
				imagingPET_RadioTracers: List
			})
		console.log(sender.name, " is added to the list ");
		}else{ 
			console.log("are name:  ",sender.name);
			if(List.includes(sender.name)){
				var index = List.indexOf(sender.name);
				if (index > -1){
					List.splice(index,1);
					this.setState({
						imagingPET_RadioTracers: List
							})
					}
				}
		
		}

		console.log(this.state);


	}
	handleChangesDataCollectionSites(e){
		const fieldID = e.target.id
        const newValue = e.target.value
        console.log(fieldID);
		console.log(newValue);
		//var sender = document.getElementsByName(e.target.name)
		
		var sender = document.getElementById(e.target.id)
		console.log(e.target.name);
		console.log(sender.type);

		if(this.state.dataCollectionSitesRadioButton === "dataCollectionSitesSingleRadio"){
			this.setState({multiSitesNames: []});
			this.setState({singleSiteName: newValue});

		}
			
		else if(this.state.dataCollectionSitesRadioButton === "dataCollectionSitesMultipleRadio"){
			this.setState({singleSiteName: ""});
			this.firstMultiSiteName = newValue;
			console.log("firstMultiSiteName.............",this.firstMultiSiteName);
		}
		console.log(this.state);

	}

	handleChangesSampleSize(e){
		var sender = document.getElementById(e.target.id)
		
		this.setState({sampleSize: sender.value});
		console.log(this.state);



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
								<td><input id="studyTitle" 
										style={this.styles.input} 
										name="studyTitle" 
										value={this.state.studyTitle || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label>Study abbreviation:</label></td>
								<td><input id="studyAbbreviation" 
										style={this.styles.input} 
										name="studyAbbreviation" 
										value={this.state.studyAbbreviation || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label>Principal investigator:</label></td>
								<td><input id="principalInvestigatorName" 
										style={this.styles.input} 
										name="principalInvestigatorName" 
										value={this.state.principalInvestigatorName || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr>
								<td><label style={{color:"red"}}>* </label><label type="email" >Principal investigator email:</label></td>
								<td><input id="principalInvestigatorNameEmail" 
										style={this.styles.input} 
										name="principalInvestigatorNameEmail" 
										value={this.state.principalInvestigatorNameEmail || ""} 
										type="text"
										onChange={this.handleChanges}/></td>
							</tr>
							
							<tr><td colSpan="2"><hr/></td></tr>
							
							<tr>
								<td>Permission:</td>
								<td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Public <input id="permissionPublic" name="permissionRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.handleChanges}/> </label>
										<label>Restricted<input id="permissionRestricted" name="permissionRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.handleChanges}/> </label>
										<label>Conditional on PI approval<input id="permissionConditionalOnPIApproval" name="permissionRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.handleChanges}/> </label>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr   style={{verticalAlign: "top"}}>
								<td>Funding:</td>
								<td>
									
									<input style={this.styles.checkBox}  
									type="checkbox" 
									id= "fundingNationalFederalAgency"
									name=" National federal agency"
									//checked = {this.state.fundingNationalFederalAgency || false}
									onChange={this.handleChangesFunding}/> National federal agency<br/>
									<input style={this.styles.checkBox}  type="checkbox" name=" Non-governmental funding agency" id="fundingNonGovernmental" onChange={this.handleChangesFunding}/> Non-governmental funding agency<br/>
									<input style={this.styles.checkBox}  type="checkbox" name="Industry" id="fundingIndustry" onChange={this.handleChangesFunding}/> Industry<br/>
									<input style={this.styles.checkBox}  type="checkbox" name="Departmental funds" id="fundingDepartmental" onChange={this.handleChangesFunding}/> Departmental funds<br/>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td>Description:</td>
								<td><textarea id="studyDescription" style={this.styles.textArea} name="Description" rows="5" cols="50" placeholder="maximum 200 words" maxLength="200" onChange={this.handleChanges}/></td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr>
								<td>Study specific URL:</td>
								<td><input id="studyURL" style={this.styles.input} onChange={this.handleChanges} /></td>
							</tr>

							
							<tr>
								<td  style={{verticalAlign: "center"}}>Data collection status</td>
								<td >
								
									<div style={{display: "flex", alignItems:"center",  justifyContent: "space-between"}}>
										Completed<input id="dataCollectionStatusCompleted" name="dataCollectionStatusRadioButtons" type="radio" style={this.styles.radioButton} onChange={e => { this.handleChanges(e); this.dataCollectionStatusHandle() }}/>
										<input id="dataCollectionCompletedSampleSize" style={this.styles.input} placeholder="sample size" disabled="disabled" onChange ={this.handleChangesSampleSize}/>
										Ongoing<input id="dataCollectionStatusOngoing" name="dataCollectionStatusRadioButtons" type="radio" style={this.styles.radioButton} onChange={e => { this.handleChanges(e); this.dataCollectionStatusHandle() }}/>
										<input id="dataCollectionOngoingSampleSize" style={this.styles.input} placeholder="sample size" disabled="disabled" onChange ={this.handleChangesSampleSize}/>
									</div>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>
							<tr>
								<td style={{verticalAlign: "top"}}>Design</td>
								<td >
									<input style={this.styles.checkBox} type="checkbox" id="designCrossSectional" name="Cross-sectional" onChange={this.handleChangesDesign}/> Cross-sectional<br/>
									<input style={this.styles.checkBox} type="checkbox" id="designLongitudinal" name="Longitudinal" onChange={this.handleChangesDesign}/> Longitudinal<br/>
									<input style={this.styles.checkBox} type="checkbox" id="designObservational" name="Observational" onChange={this.handleChangesDesign}/> Observational<br/>
									<input style={this.styles.checkBox} type="checkbox" id="designInterventional" name="Interventional" onChange={this.handleChangesDesign}/> Interventional<br/>
									<input style={this.styles.checkBox} type="checkbox" id="designOtherCheckbox" onChange={this.designOtherChanged}/> Other
									<input id="designOtherText" style={this.styles.input} disabled={true}/>
								</td>
							</tr>

							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Data collection sites:</td>
								<td>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="dataCollectionSitesSingleRadio" style={this.styles.radioButton} onChange={e => { this.handleChanges(e); this.dataCollectionSitesHandle()} }/>Single site</label>
									<input id="dataCollectionSitesSingleText" style={this.styles.input} placeholder="Site's name" disabled onChange={this.handleChangesDataCollectionSites}/>
									<label><input type="radio" name="dataCollectionSitesRadioButton" id="dataCollectionSitesMultipleRadio" style={this.styles.radioButton} onChange={e => { this.handleChanges(e); this.dataCollectionSitesHandle()} }/>Multiple sites</label>
									<input id="dataCollectionSitesMultipleText" style={this.styles.input} placeholder="Enter the name of first site" disabled onChange={this.handleChangesDataCollectionSites}/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
											<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5, fontSize:15}} onClick={this.addOtherSiteButtonClicked} id="addOtherSiteNameButton" >Add another</button>
																				
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
										<label>Human<input style={this.styles.checkBox} id="sampleTypeSpeciesHuman" name="Human" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={this.handleChangesSpecies}/> </label> 
										<label>Non-Human Primate<input id="sampleTypeSpeciesNonHumanPrimate" name="Non-Human Primate" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={this.handleChangesSpecies}/> </label> 
										<label>Murine<input id="sampleTypeSpeciesMurine" name="Murine" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={this.handleChangesSpecies}/> </label> 
										<label>Other<input id="sampleTypeSpeciesOther" name="Other" type="checkbox" style={{margin: 10, transform: "scale(2)"}} onChange={this.handleChangesSpecies}/> </label> 
									</div>
									<hr/>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										
									Healthy individuals?
										<label>Yes <input id="HealthyIndividualsYes" name="HealthyIndividualsRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.handleChanges}/> </label>
										<label>No<input id="HealthyIndividualsNo" name="HealthyIndividualsRadioButtons" type="radio" style={this.styles.radioButton} onChange={this.handleChanges}/> </label>
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Clinical&nbsp;area:&nbsp;&nbsp;&nbsp;&nbsp;</label>
										
								
										<div id="Clinical Area" multiple="multiple" style={this.styles.list}>
											{this.clinicalAreaList.map((item) => 
												<div>
													<label><b>{item.branch}</b></label><br/><br/>
													{item.subBranch.map((subBranchText) => <div><input type="checkbox" style={this.styles.checkBox} id={subBranchText.id} name={subBranchText.name} onChange={this.handleClinicalAreaCheckbox} />{subBranchText.name}<br/></div>)}
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
									<input style={this.styles.input} name= "min age" id="participantMinAge" type="number" min="0" step="1" onChange={this.handleChanges}/> 
									<label >to</label>
									<input style={this.styles.input} name= "max age" id="participantMaxAge" type="number" min="0" step="1" onChange={this.handleChanges}/>
									<label  style={{marginLeft: 20, marginRight:10}}>sex&nbsp;(biological):&nbsp;</label>
									<select name="Sex (biological)" id="participantSex" style={{borderRadius: 5, width:800, fontSize: "20px"}} onChange={this.handleChanges}>
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
											<div> <label title={item.description} style={{leftMargin:20}}>{item.text} <input id={item.id} name={item.text} type="checkbox" title={item.description} style={this.styles.checkBox} onChange={this.handleChangesDataTypes}/> </label><br/> </div>)
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
										<label>Blood <input name="Blood" id="biologicalSamplesBlood" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>Stool <input name="Stool" id="biologicalSamplesStool" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>Urine <input name="Urine" id="biologicalSamplesUrine" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>CSF <input name="CSF" id="biologicalSamplesCSF" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>Biopsy tissue <input name="Biopsy tissue" id="biologicalSamplesBiopsyTissue" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>Hair <input name="Hair" id="biologicalSamplesHair" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>Saliva <input name="Saliva" id="biologicalSamplesSaliva" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
										<label>DNA <input name="DNA" id="biologicalSamplesDNA" type="checkbox" style={this.styles.checkBox} onChange={this.handleChangesBiologicalSamples}/> </label>
									</div>
								</td>
							</tr>
							
							<tr><td colSpan="100"><hr/></td></tr>

							<tr style={{verticalAlign: "top"}}>
								<td><label type="text" style={{textAlign: "left"}}/>Imaging</td>
								<td>
								
									<label><b>MRI</b><input id="imagingMRI" type="checkbox" style={this.styles.checkBox} onChange={this.mriCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Structural MRI<input name="Structural MRI" id="imagingMRIStructuralMRI" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRI}/> </label>
										<label>Diffusion MRI<input name="Diffusion MRI" id="imagingMRIDiffusionMRI" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRI}/> </label>
										<label>Resting state fMRI<input name="Resting state fMRI" id="imagingMRIRestingStatefMRI" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRI}/> </label>
										<label>Task fMRI<input name="Task fMRI" id="imagingMRITaskfMRI" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRI}/> </label>
										<label>ASL <input name="ASL" id="imagingMRI_ALS" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRI}/> </label>
										
									</div>
									<div style={{display: "flex", justifyContent: "space-between"}}>
									
								<td>
								<td>Did you use the V-Brain sequesnces?</td>
									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Yes <input id="VBrainSequesncesYes" name="VBrainSequesncesRadioButtons" type="radio" style={this.styles.radioButton}disabled/> </label>
										<label>No<input id="VBrainSequesncesNo" name="VBrainSequesncesRadioButtons" type="radio" style={this.styles.radioButton}disabled/> </label>
									</div>
								</td>
									
									</div>
									<hr/>
									<label><b>PET</b><input id="imagingPET" type="checkbox" style={this.styles.checkBox} onChange={this.petCheckBoxChanged}/> </label>
									<br/>		

									<div style={{display: "flex", justifyContent: "space-between"}}>
										<label>Radiotracer</label>
										<div style={{padding:10, display: "flex", justifyContent: "space-between", flexWrap: 'wrap', width: "100%"}}>
											<div id="imagingPETRadiotracerList" multiple="multiple" style={this.styles.list}>
												{this.radiotracerList.map((item) => <div><input name={item.text} id={item.id} type="checkbox" style={this.styles.checkBox}  disabled="disabled" onChange={this.handleChangesRadiotracer}/>{item.text}<br/></div>)}
											</div>
										</div>
									</div>
									
									<button type="button" style={this.styles.button, {height:"30px", borderRadius: 5}} onClick={this.addOtherRadiotracerButtonClicked} id="addOtherRadiotracerButton">Add another</button>

									<div style={{width:"50%", padding:10, display:"flex", flexDirection: "column", align:"center"}} id="otherRadiotracersDiv">

									</div>
										
									<hr/>
									<label><b>MRS</b><input id=  "imagingMRS" type="checkbox" style={this.styles.checkBox} onChange={this.mrsCheckBoxChanged}/> </label>
									<div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
										<label>Proton<input name="Proton" id="imagingMRSProton" type="checkbox" style={this.styles.checkBox} disabled  onChange={this.handleChangesimagingMRS}/> </label>
										<label>Phosphorus<input name="Phosphorus" id="imagingMRSPhosphorus" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRS}/> </label>
										<label>Na<input name="Na" id="imagingMRSNa" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRS}/> </label>
										<label>Lithium<input name="Lithium" id="imagingMRSLithium" type="checkbox" style={this.styles.checkBox} disabled onChange={this.handleChangesimagingMRS}/> </label>
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
					<button type="button" style={this.styles.button} onClick={this.clearForm} id="clearFormBtn">Clear&nbsp;Form</button> 
					<button type="button" style={this.styles.button} onClick={this.submitForm} id="submitFormBtn">Submit</button> 
				</div>
		</div>

		);
	}
}
