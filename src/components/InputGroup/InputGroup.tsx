import { InputProps } from "./InputGroup.interface";

import "./InputGroup.css";

export function InputGroup({ labelName, ...args }: InputProps): JSX.Element {
	return (
		<label className="label">
			<input className="input__reset input" {...args} />
			<p className="label__name">{labelName}</p>
		</label>
	);
}
