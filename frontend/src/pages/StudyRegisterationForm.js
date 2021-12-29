import React, { Component } from 'react';
 


var state = {

	studyTitle : undefined,
	studyAbbreviation : undefined,
	principalInvestigator:undefined,
	principalInvestigatorEmail: undefined,
	permission: 'Public',
	funding: undefined,
	dataDollectionStatus: undefined,
	


}


function handleInputChange(){
}

function dataDollectionSitesClicked() {
	var dataDollectionSitesRadioButton = document.getElementById("dataDollectionSitesRadioButton");
	var dataDollectionSitesText = document.getElementById("dataDollectionSitesText");
	dataDollectionSitesText.disabled = dataDollectionSitesRadioButton.checked ? true : false;
	if (!dataDollectionSitesText.disabled) {
		dataDollectionSitesText.focus();
	}
}

export default function RegisterStudy() {

    return (
	
	<div style={{width: "90%", verticalAlign: "center", fontSize:"10"}}>
		<p style={{textAlign: "center"}}>Study Registeration</p>
		<hr/>
		<table style={{width: "90%"}}>
			<colgroup>
				<col style={{width: "30%", align: "left", verticalAlign: "top"}}/>
				<col style={{width: "70%", align: "right"}}/>
			</colgroup>
			<tbody>
				<tr>
					<td>
						<label style={{textAlign: "left"}}>Study title:</label>
					</td>
					<td>
						<input 
							type="text"
							value={state.studyTitle}
							style={{width: "100%", borderRadius: 10, margin:10}}
							onChange={handleInputChange} />
					</td>
				</tr>
				<tr>
					<td>
						<label style={{textAlign: "left"}}>Study abbreviation :</label>
					</td>
					<td>
						<input 
							value={state.studyAbbreviation}
							style={{width: "100%", borderRadius: 10, margin:10}}
							onChange={handleInputChange} />
					</td>
				</tr>
				<tr>
					<td>
						<label style={{textAlign: "left"}}>Principal investigator :</label>
					</td>
					<td>
						<input 
							value={state.principalInvestigator}
							style={{width: "100%", borderRadius: 10, margin:10}}
							onChange={handleInputChange} />
					</td>
				</tr>
				<tr>
					<td>
						<label type="email" style={{textAlign: "left"}}>Principal investigator Email :</label>
					</td>
					<td>
						<input 
							value={state.principalInvestigatorEmail}
							style={{width: "100%", borderRadius: 10, margin:10}}
							onChange={handleInputChange} />
					</td>
				</tr>
				<tr><td colspan="100"><hr/></td></tr>
				<tr style={{borderBottom:10, borderColor:"black", align:'top'}}>
					<td>
						<label style={{textAlign: "left"}}>Permission :</label>
					</td>
					<td>
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<label>Public <input name="Permission" type="radio" style={{margin: 10, transform: "scale(2)", width: 50}} /> </label>
							<label>Restricted<input name="Permission" type="radio" style={{margin: 10, transform: "scale(2)", width: 50}}  /> </label>
							<label>Conditional on PI approval<input name="Permission" type="radio" style={{margin: 10, transform: "scale(2)", width: 50}} /> </label>
						</div>
					</td>
				</tr>
				<tr><td colspan="100"><hr/></td></tr>
				<tr>
					<td style={{verticalAlign: "top"}}>
						<label type="checkbox" style={{textAlign: "left"}}>Funding :</label>
					</td>
					<td >
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="National/Federal Agency" value={state.funding} onChange={handleInputChange}/> National Federal Agency
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Non-Governmental Funding Agency" value={state.funding} onChange={handleInputChange}/> Non-Governmental Funding Agency
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Industry " value={state.funding} onChange={handleInputChange}/> Industry 
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Departmental Funds" value={state.funding} onChange={handleInputChange}/> Departmental Funds
						<br/>
						

					</td>
				</tr>
				<tr><td colspan="100"><hr/></td></tr>
				<tr style={{verticalAlign: "top"}}>
					<td>
						<label type="email" style={{textAlign: "left"}}/>Description :
					</td>
					<td>
						<textArea id="description" value={state.Description} style={{width: "100%", borderRadius: 10, margin:10}} name="Description" rows="4" cols="50"/>
					</td>
				</tr>
				<tr>
					<td>
						<label type="text" style={{textAlign: "left"}}/>Study Specific URL :
					</td>
					<td>
						<input
							id="Study Specific URL"
							value={state.studySpecificURL}
							style={{width: "100%", borderRadius: 10, margin:10}}
							onChange={handleInputChange} />
					</td>
				</tr>
				<tr>
					<td  style={{verticalAlign: "top"}}>
						<label type="text" style={{textAlign: "left"}}/>Data collection status :
					</td>
					<td>
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<div style={{display: "table-cell", verticalAlign: "middle"}}>
								<label>Completed<input name="Data collection status" type="radio" style={{margin: 10, transform: "scale(2)"}} value={state.dataDollectionStatus} onChange={handleInputChange} checked={state.permission === 'Public'} /> </label>
								<input
									style={{borderRadius: 10, margin:10}}
									disabled="disabled" 
									onChange={handleInputChange} />
							</div>
							<div style={{display: "table-cell", verticalAlign: "middle"}}>
								<label>Ongoing<input name="Data collection status" type="radio" style={{margin: 10, transform: "scale(2)"}} value={state.dataDollectionStatus} onChange={handleInputChange} checked={state.permission === 'Restricted'}/> </label> 
								<input 
									style={{borderRadius: 10, margin:10}}
									disabled="disabled" 
									onChange={handleInputChange} />
							</div>
						</div>
					</td>
				</tr>
				<tr><td colspan="100"><hr/></td></tr>
				<tr  style={{verticalAlign: "top"}}>
					<td>
						<label type="checkbox" style={{textAlign: "left"}}>Design :</label>
					</td>
					<td >
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Cross-sectional" value={state.design} onChange={handleInputChange}/> Cross-sectional
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Longitudinal" value={state.design} onChange={handleInputChange}/> Longitudinal
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Observational " value={state.design} onChange={handleInputChange}/> Observational 
						<br/>
						<input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Interventional" value={state.design} onChange={handleInputChange}/> Interventional
						<br/>
						<div style={{display: "flex", justifyContent: "space-between"}}>
								<div><input style={{margin: 10, transform: "scale(2)"}} type="checkbox" id="Other" value={state.design} onChange={handleInputChange}/> Other</div>
								<input
									id="Other"
									value={state.design}
									style={{width: "85%", borderRadius: 10}}
									onChange={handleInputChange} />
						</div>
					</td>
				</tr>
				<tr><td colspan="100"><hr/></td></tr>
				<tr style={{verticalAlign: "top"}}>
					<td>
						<label type="text" id="dataDollectionSitesRadioButton" style={{textAlign: "left"}}/>Data Collection Sites :
					</td>
					<td>
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<label>Single<input type="radio"  style={{margin: 10, checked:"checked" }} onClick={dataDollectionSitesClicked} /> </label>
							<input
								id="dataDollectionSitesText"
								style={{width: "85%", borderRadius: 10, margin:10}}
								disabled="disabled" 
								onChange={handleInputChange} />
						</div>
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<label>Multi<input type="radio"  style={{margin: 10}} onClick={dataDollectionSitesClicked} /> </label>
							<textArea id="description" 
								value={state.Description} 
								style={{width: "85%", borderRadius: 10, margin:10}} 
								name="Data Collection Sites Multi" rows="4" cols="50"/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		
		<div style={{width: "90%", borderRadius: 10, display: "flex", justifyContent: "space-between", backgroundColor: "#7699bd"}}>
			<div style={{width: "30%", margin:10}}>
				<h1 >Sample type</h1>
			</div>
			<div style={{width: "70%", margin:10}}>
				<p >Please check the data sources information to enable other users to browse the general type of 
					data collected – check all the fields that apply to your study </p>
				<hr/>
				<div style={{display: "flex", justifyContent: "space-between"}}>
					<label>Species:</label>
					<label>Human <input name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label> 
					<label>Non-Human Primate <input name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label> 
					<label>Murine <input name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}} /> </label> 
					<label>Other <input name="Species" type="checkbox" style={{margin: 10, transform: "scale(2)"}} /> </label> 
				</div>
				<hr/>
				<div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
					<label>Clinical Area:</label>
					<select id="Clinical Area" multiple="multiple" style={{fontSize:25, width: "50%"}}>
						<option value="None">None</option>
						<option value="Healthy Individuals">Healthy Individuals</option>
						<option value="Clinical pupulation">Clinical pupulation</option>
					</select>
				</div>
			</div>
		</div>
		<br/>
		<div style={{width: "90%", borderRadius: 10, margin:10, backgroundColor: "#7699bd"}}>
			<h1 style={{margin:10}}>General Participant Information</h1>
			<div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
				<div style={{width: "30%", margin:10, flexDirection: "column", display: "flex", justifyContent: "space-between"}}>
					<label>Age range:</label>
					<label>Sex (biological):</label>
				</div>
				<div style={{width: "70%", margin:10, borderRadius: 10}}>
					<label><input style={{borderRadius: 10}} name="minAge" type="text"/> to <input style={{borderRadius: 10}} name="maxAge" type="text"/> </label>
				</div>
			</div>
			<h1 style={{margin:10}}>Please indicate bellow the available data in this study</h1>
			<h1 style={{margin:10}}>Biological Samples</h1>
			<div style={{display: "flex", justifyContent: "space-between", margin: 10}}>
				<label>Blood <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>Stool <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>Urine <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>CSF <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>Biopsy tissue <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>Hair <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>Saliva <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
				<label>DNA <input name="Biological Samples" type="checkbox" style={{margin: 10, transform: "scale(2)"}}/> </label>
			</div>
		</div>
		
		
		<div>
		</div>
		
		<div  style={{textAlign: "center", margin: 10, paddingTop: "50px"  }}>
			<button type="button" style={{width: "20%", height:100, margin:10, borderRadius: 10}}>Clear Form</button> 
			<button type="button" style={{width: "20%", height:100, margin:10, borderRadius: 10}}>Submit</button> 
		</div>
		
		<div  style={{paddingTop: "100px"  }}>
		</div>
	</div>
	

    )
}