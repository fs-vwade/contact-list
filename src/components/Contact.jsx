export default function Contact({ name, email, phone }) {
	return (
		<td>
			<tr>{name}</tr>
			<tr>{email}</tr>
			<tr>{phone}</tr>
		</td>
	);
}
