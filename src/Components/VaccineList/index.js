import React from "react"

const VaccinesList = ({ vaccinesList }) => (
	<div>
		<h1>Vaccines List</h1>

		<table className="ui celled table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					
					<th>Options</th>
				</tr>
			</thead>
			{vaccinesList.length > 0 ? (
				<tbody>
					{vaccinesList.map((vaccine, i) => (
						<tr key={i}>
							<td>{vaccine.node.id}</td>
							<td>{vaccine.node.name}</td>
							<td className=""><a>administer</a></td>
						</tr>
					))}
					<tr className="center aligned active">
						<td colSpan="4">{vaccinesList.length} Vaccines</td>
					</tr>
				</tbody>
			) : (
				<tbody>
					<tr className="center aligned">
						<td colSpan="4">There are no vaccines found</td>
					</tr>
				</tbody>
			)}
		</table>
	</div>
)

export default VaccinesList
