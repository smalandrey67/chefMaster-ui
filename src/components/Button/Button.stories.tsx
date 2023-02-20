import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { FiArrowLeft } from "react-icons/fi";

export default {
	title: "UI-Components/Button",
	component: Button,
	args: {
		fullWidth: false,
		Icon: FiArrowLeft,
		iconSize: 18,
		iconColor: "#000000"
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.storyName = "Button Simple";
Simple.args = {
	Icon: "",
	children: "Simple"
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "Button Simple With Icon";
WithIcon.args = {
	children: "With Icon"
};

export const JustIcon = Template.bind({});
JustIcon.storyName = "Button Only With Icon";
JustIcon.args = {};
