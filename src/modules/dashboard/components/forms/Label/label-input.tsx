"use client";

import { useState, type HTMLInputTypeAttribute } from "react";
import "./label-input.css";

export function LabelInput({
	inputId,
	label,
	type = "text",
	name,
	required = false,
	disabled = false,
}: {
	inputId: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	name: string;
	required?: boolean;
	disabled?: boolean;
}) {
	const [value, setvalue] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setvalue(e.target.value);
	};
	return (
		<label htmlFor={inputId} className="label-input">
			<span className="">{label}</span>
			<input
				id={inputId}
				type={type}
				name={name}
				className={value.trim() ? "input-filled" : ""}
				onChange={handleChange}
				disabled={disabled}
				required={required}
			/>
		</label>
	);
}
