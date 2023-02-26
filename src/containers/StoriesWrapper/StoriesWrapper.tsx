import { clsx } from "clsx";

import type { StoriesWrapperProps } from "./StoriesWrapper.interface";

import "./StoriesWrapper.css";

export function StoriesWrapper({ children, bg = "dark-10" }: StoriesWrapperProps): JSX.Element {
	const isDark10 = bg === "dark-10";
	const isDark30 = bg === "dark-30";
	const isLight = bg === "light";

	return (
		<div
			className={clsx("stories__wrapper", {
				["stories__wrapper-dark-10"]: isDark10,
				["stories__wrapper-dark-30"]: isDark30,
				["stories__wrapper-light"]: isLight
			})}
		>
			{children}
		</div>
	);
}
