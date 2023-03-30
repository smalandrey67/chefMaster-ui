import { forwardRef } from "react";

import { InputProps } from "./InputGroup.interface";

import "./InputGroup.css";

// eslint-disable-next-line react/display-name
export const InputGroup = forwardRef<HTMLInputElement, InputProps>(({ labelName, error, ...args }, ref): JSX.Element => {
	return (
		<label className="label">
			<input ref={ref} className="input__reset input" {...args} />
			{error && <span className="input__error">{error}</span>}
			<p className="label__name">{labelName}</p>
		</label>
	);
});
