import { CharacterFilterValue } from "model/api.types";

export interface CharacterFilterFormProps {
	filter?: CharacterFilterValue;
	open?: boolean;
	onSubmit?: (value: CharacterFilterValue) => void;
	onClose?: () => void;
}

export const genderOptions = [
	{ label: "Female", value: "Female" },
	{ label: "Male", value: "Male" },
	{ label: "Genderless", value: "Genderless" },
	{ label: "Unknown", value: "unknown" },
];

export const statusOptions = [
	{ label: "Alive", value: "Alive" },
	{ label: "Dead", value: "Dead" },
	{ label: "Unknown", value: "unknown" },
];
