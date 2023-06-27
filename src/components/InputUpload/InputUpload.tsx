import { forwardRef } from "react";

import { InputUploadProps } from "./InputUpload.interface";

import "./InputUpload.css";

export const InputUpload = forwardRef<HTMLInputElement, InputUploadProps>(({ currentImage, error, ...args }, ref): JSX.Element => {
	return (
		<div className="upload">
			<div className="upload__image-wrapper">
				<img src={currentImage} className="upload__image" alt="avatar" />
			</div>
			<label className="upload__cover">
				<input className="upload__cover-input" ref={ref} {...args} />
				<span className="upload__cover-plus">+</span>
			</label>
			{error && <span className="upload__validation-error">{error}</span>}
		</div>
	);
});

InputUpload.displayName = "InputUpload";
