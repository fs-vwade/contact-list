import { useState, useEffect } from "react";
import Contact from "./Contact.jsx";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com";

const dummyContacts = [
	{ id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
	{ id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
	{ id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ selector }) {
	const [contacts, setContacts] = useState(dummyContacts);

	useEffect(() => {
		const getContacts = async () => {
			try {
				const response = await fetch(`${API_URL}/users`);
				const result = await response.json();
				setContacts(result);
			} catch (error) {
				console.error(error);
			}
		};
		getContacts();
	}, []);

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
				{contacts.map((e) => {
					return <Contact key={e.id} contact={e} selector={selector} />;
				})}
			</tbody>
		</table>
	);
}
