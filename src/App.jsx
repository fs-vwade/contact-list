import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactView from "./components/ContactView";
import "./App.css";

export default function App() {
	const [selectedContact, setSelectedContact] = useState(null);

	return (
		<>
			<ContactList selector={setSelectedContact} />
			<ContactView selected={selectedContact} />
		</>
	);
}
