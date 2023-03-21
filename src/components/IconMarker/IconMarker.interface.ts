import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { IconType } from "react-icons";

export interface IconMarkerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	Icon: IconType;
	iconSize?: number | string;
	iconColor?: string;
}
