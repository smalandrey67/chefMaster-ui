import React from "react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { IconMarker } from "./IconMarker";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiFillFire } from "react-icons/ai";

export default {
	title: "UI-Components/IconMarker",
	component: IconMarker,
	args: {
		label: "Easy level",
		Icon: AiFillFire,
		iconColor: "var(--neon-20)"
	}
} as ComponentMeta<typeof IconMarker>;

export const Template: ComponentStory<typeof IconMarker> = (args) => (
	<StoriesWrapper>
		<IconMarker {...args} />
	</StoriesWrapper>
);
Template.storyName = "IconMarker";
