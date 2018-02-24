import React from "react"

const BirthDetails = ({ birthDetails, getBirthDetails, match }) => {
	if (!("id" in birthDetails)) {
		getBirthDetails(match.params.id)
	}
	return (
		<div>
			<h1>
				{birthDetails.childFirstName +
					" " +
					birthDetails.childMiddleName +
					" " +
					birthDetails.childLastName}
			</h1>
			<div className="ui segment">
				<h4 className="ui dividing header">Child Information</h4>
				<div />
			</div>
			<div className="ui segment">
				<h4 className="ui dividing header">Vaccination history</h4>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Vaccine</th>							
							<th>Date given</th>
						</tr>
					</thead>

					<tbody>						
						<tr className="center aligned active">
							<td colSpan="4">N vaccinations administered</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="ui segment">
				<h4 className="ui dividing header">Pending vaccinations</h4>
				<table className="ui celled table">
					<thead>
						<tr>							
							<th>Vaccine</th>
							<th>Schedule date</th>
						</tr>
					</thead>

					<tbody>						
						<tr className="center aligned active">
							<td colSpan="4">N vaccinations pending</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default BirthDetails
