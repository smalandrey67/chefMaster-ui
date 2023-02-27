import type { DetailedHTMLProps, AnchorHTMLAttributes, ElementType } from "react";
import type { IconType } from "react-icons";

export interface FancyLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	children?: string;
	Link: ElementType;
	href: string;
	Icon?: IconType;
	iconSize?: number | string;
	iconColor?: string;
	className?: string;
}
