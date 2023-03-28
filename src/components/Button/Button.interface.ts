import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: string;
	Icon?: IconType;
	iconSize?: number | string;
	iconColor?: string;
	isFullWidth?: boolean;
	className?: string;
}
