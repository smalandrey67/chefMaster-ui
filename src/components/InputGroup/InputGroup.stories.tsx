import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { InputGroup } from "./InputGroup";

export default {
	title: "UI-Components/Inputs",
	component: InputGroup,
	args: {
		labelName: "email:",
		type: "email",
		name: "email"
	}
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
	<StoriesWrapper bg="dark-30">
		<InputGroup {...args} />
	</StoriesWrapper>
);

export const Input = Template.bind({});
Input.storyName = "Input Group";

export const InputError = Template.bind({});
InputError.storyName = "Input Error";
InputError.args = {
	error: "error"
};
