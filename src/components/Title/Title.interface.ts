import type { DetailedHTMLProps, HTMLAttributes } from "react";

type VariantType = "small" | "big";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	variant?: VariantType;
	className?: string;
	children: string;
}
