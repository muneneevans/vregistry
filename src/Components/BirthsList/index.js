import React from "react"

const BirthsList = ({ birthsList }) => (
	<div>
		<h1>Births List</h1>

		<table className="ui celled table">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Status</th>
					<th>Options</th>
				</tr>
			</thead>
			{birthsList.length > 0 ? (
				<tbody>
					{birthsList.map((birth, i) => (
						<tr key={i}>
							<td>{birth.node.childFirstName}</td>
							<td>{birth.node.childLastName}</td>
							<td></td>
							<td className="">None</td>
						</tr>
					))}					
				</tbody>
			) : (
				<tbody>
					<tr className="center aligned">
						<td colSpan="4">There are no births for this facility</td>
					</tr>
				</tbody>
			)}
		</table>
	</div>
)

export default BirthsList
