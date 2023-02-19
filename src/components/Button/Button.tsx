import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import "./Button.css";

export function Button({ children, icon, fullWidth = false, ...args }: ButtonProps): JSX.Element {
	return (
		<button
			className={clsx("button__reset button", {
				["button__icon-only"]: !children && icon,
				["button__icon-withContent"]: children && icon,
				["button__fullWidth"]: fullWidth
			})}
			{...args}
		>
			{icon && <img className="button__icon" src={icon.src} height={icon.height} width={icon.width} alt="button icon" />}
			{children}
		</button>
	);
}
