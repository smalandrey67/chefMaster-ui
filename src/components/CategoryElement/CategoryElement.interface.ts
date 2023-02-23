import type { DetailedHTMLProps, HTMLAttributes } from "react";

type IconNextType = {
	src: string;
	width: number | string;
	height: number | string;
};

export interface CategoryElementProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	icon: IconNextType;
}
