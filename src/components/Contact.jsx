export default function Contact({ name, email, phone }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{phone}</td>
		</tr>
	);
}
