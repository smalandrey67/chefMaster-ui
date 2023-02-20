import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import "./Button.css";

export function Button({ children, Icon, iconSize, iconColor, fullWidth = false, ...args }: ButtonProps): JSX.Element {
	return (
		<button
			className={clsx("button__reset button", {
				["button__icon-only"]: !children && Icon,
				["button__icon-withContent"]: children && Icon,
				["button__fullWidth"]: fullWidth
			})}
			{...args}
		>
			{Icon && <Icon size={iconSize} color={iconColor} />}
			{children}
		</button>
	);
}
