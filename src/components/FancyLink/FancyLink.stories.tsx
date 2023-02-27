import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { FancyLink } from "./FancyLink";

import { FiArrowLeft } from "react-icons/fi";

const MOCK_HREF_ARG = "https://github.com/smalandrey67";

export default {
	title: "UI-Components/FancyLink",
	component: FancyLink,
	args: {
		Icon: FiArrowLeft,
		iconSize: 20,
		href: MOCK_HREF_ARG
	}
} as ComponentMeta<typeof FancyLink>;

const Template: ComponentStory<typeof FancyLink> = (args) => (
	<StoriesWrapper bg="dark-30">
		<FancyLink {...args} />
	</StoriesWrapper>
);

export const FancyLinkDefault = Template.bind({});
FancyLinkDefault.storyName = "Fancy Link";
FancyLinkDefault.args = {
	Icon: null,
	children: "Fancy Link"
};

export const FancyLinkWithIcon = Template.bind({});
FancyLinkWithIcon.storyName = "Fancy Link With Icon";
FancyLinkWithIcon.args = {
	children: "Fancy Link With Icon",
	iconColor: "#ffffff"
};

export const FancyLinkIcon = Template.bind({});
FancyLinkIcon.storyName = "Fancy Link Icon";
FancyLinkIcon.args = {
	iconColor: "#000000"
};
