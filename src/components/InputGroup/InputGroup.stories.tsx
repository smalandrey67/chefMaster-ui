import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { InputGroup } from "./InputGroup";

export default {
	title: "UI-Components/Input",
	component: InputGroup,
	args: {
		labelName: "email:",
		type: "email",
		name: "email"
	}
} as ComponentMeta<typeof InputGroup>;

export const Template: ComponentStory<typeof InputGroup> = (args) => (
	<StoriesWrapper bg="dark-30">
		<InputGroup {...args} />
	</StoriesWrapper>
);
Template.storyName = "Input";
