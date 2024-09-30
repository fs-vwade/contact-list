export default function ContactView({ selected }) {
	return (
		selected && (
			<div>
				<div>{selected.name}</div>
				<div>{selected.email}</div>
				<div>{selected.phone}</div>
			</div>
		)
	);
}
