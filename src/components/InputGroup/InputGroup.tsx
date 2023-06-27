import { forwardRef } from "react";

import { InputGroupProps } from "./InputGroup.interface";

import "./InputGroup.css";

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(({ labelName, error, ...args }, ref): JSX.Element => {
	return (
		<label className="label">
			<input ref={ref} className="input__reset input" {...args} />
			{error && <span className="input__error">{error}</span>}
			<p className="label__name">{labelName}</p>
		</label>
	);
});

InputGroup.displayName = "InputGroup";
