import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { HeaderMenu } from "components/HeaderMenu";
import { ContentWrapper, LayoutWrapper } from "./index.style";

const { Footer } = Layout;

export const AppLayout = (): JSX.Element => {
	return (
		<Layout>
			<LayoutWrapper>
				<Layout>
					<HeaderMenu />
					<ContentWrapper>
						<Outlet />
					</ContentWrapper>
					<Footer style={{ textAlign: "center" }}>
						Rick And Morty ©2023 Created by Muhammed Eviz
					</Footer>
				</Layout>
			</LayoutWrapper>
		</Layout>
	);
};
