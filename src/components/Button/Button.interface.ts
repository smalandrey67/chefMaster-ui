import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: string;
	Icon?: IconType;
	iconSize?: number | string;
	iconColor?: string;
	fullWidth?: boolean;
}
