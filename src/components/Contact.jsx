export default function Contact({ contact, selector }) {
	return (
		<tr
			onClick={() => {
				selector(contact);
			}}
		>
			<td>{contact.name}</td>
			<td>{contact.email}</td>
			<td>{contact.phone}</td>
		</tr>
	);
}
