import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import "./Button.css";

export function Button({ children, Icon, iconSize, iconColor, isFullWidth = false, ...args }: ButtonProps): JSX.Element {
	const isIconOnly = !children && Icon;
	const isIconWithContent = children && Icon;

	return (
		<button
			className={clsx("button__reset button", {
				["button__icon-only"]: isIconOnly,
				["button__icon-withContent"]: isIconWithContent,
				["button__fullWidth"]: isFullWidth
			})}
			{...args}
		>
			{Icon && <Icon size={iconSize} color={iconColor} />}
			{children}
		</button>
	);
}
