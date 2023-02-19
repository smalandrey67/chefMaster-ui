import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { IconType } from "../../types";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: string;
	icon?: IconType;
	fullWidth?: boolean;
}
