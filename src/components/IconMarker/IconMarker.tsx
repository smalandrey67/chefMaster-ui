import type { IconMarkerProps } from "./IconMarker.interface";

import "./IconMarker.css";

export function IconMarker({ label, Icon, iconSize, iconColor, ...args }: IconMarkerProps): JSX.Element {
	return (
		<div className="marker" {...args}>
			<Icon size={iconSize} color={iconColor} />
			<span className="marker__title">{label}</span>
		</div>
	);
}
