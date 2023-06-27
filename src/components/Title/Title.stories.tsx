import React from "react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { Title } from "./Title";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "UI-Components/Title",
	component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
	<StoriesWrapper>
		<Title {...args} />
	</StoriesWrapper>
);

export const TitleSmall = Template.bind({});
TitleSmall.storyName = "Title small";
TitleSmall.args = {
	children: "Title small",
	variant: "small"
};

export const TitleBig = Template.bind({});
TitleBig.storyName = "Title big";
TitleBig.args = {
	children: "Title big",
	variant: "big"
};
