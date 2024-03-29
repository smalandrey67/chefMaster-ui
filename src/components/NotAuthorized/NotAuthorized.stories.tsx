import React from "react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { NotAuthorized } from "./NotAuthorized";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "UI-Components/NotAuthorized",
	component: NotAuthorized
} as ComponentMeta<typeof NotAuthorized>;

export const Template: ComponentStory<typeof NotAuthorized> = () => (
	<StoriesWrapper bg="dark-30">
		<NotAuthorized />
	</StoriesWrapper>
);
Template.storyName = "NotAuthorized";
