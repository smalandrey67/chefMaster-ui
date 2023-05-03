import clsx from "clsx";

import type { FancyLinkProps } from "./FancyLink.interface";

import "./FancyLink.css";

export function FancyLink({ children, Link, href, Icon, iconSize, iconColor, className, ...args }: FancyLinkProps): JSX.Element {
	const isIconOnly = !children && Icon;

	// #checking if Link exist for stories
	if (!Link) {
		return (
			<a
				className={clsx(className, "fancyLink__reset fancyLink", {
					["fancyLink__icon-only"]: isIconOnly
				})}
				href={href}
				{...args}
			>
				{Icon && <Icon size={iconSize} color={iconColor} />}
				{children}
			</a>
		);
	}

	return (
		<Link
			className={clsx("fancyLink__reset fancyLink", className, {
				["fancyLink__icon-only"]: isIconOnly
			})}
			href={href}
			{...args}
		>
			{Icon && <Icon size={iconSize} color={iconColor} />}
			{children}
		</Link>
	);
}
