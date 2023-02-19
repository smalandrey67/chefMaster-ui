import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ICON_STORIES_URL } from "../../constants";

export default {
	title: "UI-Components/Button",
	component: Button,
	args: {
		fullWidth: false,
		icon: {
			src: ICON_STORIES_URL,
			width: 17,
			height: 17
		}
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.storyName = "Button Simple";
Simple.args = {
	icon: null,
	children: "Simple"
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "Button With Icon";
WithIcon.args = {
	children: "With Icon"
};

export const JustIcon = Template.bind({});
JustIcon.storyName = "Button Only With Icon";
JustIcon.args = {};
