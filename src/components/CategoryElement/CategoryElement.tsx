import type { CategoryElementProps } from "./CategoryElement.interface";

import "./CategoryElement.css";

export function CategoryElement({ label, icon, ...args }: CategoryElementProps): JSX.Element {
	return (
		<div className="category" {...args}>
			<img className="category__image" src={icon.src} width={icon.width} height={icon.height} alt={label} />
			<span className="category__label">{label}</span>
		</div>
	);
}
