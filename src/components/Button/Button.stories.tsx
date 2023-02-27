import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { Button } from "./Button";

import { FiArrowLeft } from "react-icons/fi";

export default {
	title: "UI-Components/Button",
	component: Button,
	args: {
		isFullWidth: false,
		Icon: FiArrowLeft,
		iconSize: 18,
		iconColor: "#000000"
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<StoriesWrapper bg="dark-30">
		<Button {...args} />
	</StoriesWrapper>
);

export const ButtonDefault = Template.bind({});
ButtonDefault.storyName = "Button Default";
ButtonDefault.args = {
	Icon: null,
	children: "Default"
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.storyName = "Button With Icon";
ButtonWithIcon.args = {
	children: "With Icon"
};
