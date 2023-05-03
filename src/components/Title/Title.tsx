import clsx from "clsx";

import type { TitleProps } from "./Title.interface";

import "./Title.css";

export function Title({ children, variant = "small", className, ...args }: TitleProps): JSX.Element {
	const isTitleSmall = variant === "small";
	const isTitleBig = variant === "big";

	return (
		<>
			{isTitleSmall && (
				<h5 className={clsx(className, "title title__small")} {...args}>
					{children}
				</h5>
			)}

			{isTitleBig && (
				<h2 className={clsx(className, "title title__big")} {...args}>
					{children}
				</h2>
			)}
		</>
	);
}
