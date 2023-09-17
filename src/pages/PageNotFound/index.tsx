import React from "react";
import { StatusWrapper, Wrapper } from "./index.style";

export const PageNotFound = () => {
	return (
		<Wrapper>
			<StatusWrapper>404</StatusWrapper>
			<div>Page Not Found</div>
		</Wrapper>
	);
};
