export default function Contact({ name, email, phone }) {
	return (
		<table>
			<thead>
				<tr>
					<th colSpan="3">Contact List</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
			</tbody>
		</table>
	);
}
