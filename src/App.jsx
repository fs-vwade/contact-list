import { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

export default function App() {
	const [selectedContact, setSelectedContact] = useState(null);
	function passContact(contact) {
		setSelectedContact(contact);
	}
	return (
		<>
			<ContactList />
		</>
	);
}
