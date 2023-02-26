import type { ReactNode } from "react";

type BgType = "dark-10" | "dark-30" | "light";

export interface StoriesWrapperProps {
	children: ReactNode;
	bg?: BgType;
}
