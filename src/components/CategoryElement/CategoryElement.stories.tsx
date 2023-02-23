import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { CategoryElement } from "./CategoryElement";

const ICON_MOCK = "https://svgshare.com/i/qYU.svg";

export default {
	title: "UI-Components/Category",
	component: CategoryElement
} as ComponentMeta<typeof CategoryElement>;

const Template: ComponentStory<typeof CategoryElement> = (args) => <CategoryElement {...args} />;

export const Default = Template.bind({});
Default.storyName = "Category Element With Icon";
Default.args = {
	icon: {
		src: ICON_MOCK,
		width: 60,
		height: 60
	},
	label: "burger"
};
