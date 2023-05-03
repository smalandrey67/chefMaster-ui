import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import "./Button.css";

export function Button({ children, Icon, iconSize, iconColor, isFullWidth = false, className, ...args }: ButtonProps): JSX.Element {
	const isIconWithContent = children && Icon;

	return (
		<button
			className={clsx(className, "button__reset button", {
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
