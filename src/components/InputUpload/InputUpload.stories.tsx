import React from "react";

import { StoriesWrapper } from "../../containers/StoriesWrapper/StoriesWrapper";
import { InputUpload } from "./InputUpload";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

const MOCK_UPLOAD_IMAGE =
	"https://lh3.googleusercontent.com/sPIPJKvrjiyuqkYIVDjjmR25xjSLqqxWidfBE0rl3fR9RspBNSf9QW3fsF8KRYk-x-IDLytrRnynSHPbiSxgm9VpKkzdI769lCXDc_zdtXjdx-dRZY2oyaMOCwE8SZY_Ay_hyLpGDg=w2400";

export default {
	title: "UI-Components/upload",
	component: InputUpload,
	args: {
		currentImage: MOCK_UPLOAD_IMAGE
	}
} as ComponentMeta<typeof InputUpload>;

const Template: ComponentStory<typeof InputUpload> = (args) => (
	<StoriesWrapper bg="dark-30">
		<InputUpload {...args} />
	</StoriesWrapper>
);

export const InputUploadElement = Template.bind({});
InputUploadElement.storyName = "Input Upload Element";

export const InputUploadError = Template.bind({});
InputUploadError.storyName = "Input Upload Error";
InputUploadError.args = {
	error: "Field is Required"
};
