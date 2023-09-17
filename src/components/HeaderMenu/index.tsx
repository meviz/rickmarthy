import { HomeFilled, LogoutOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { authActions } from "contexts/AuthSlice";
import { useAppDispatch } from "hooks/storeHooks";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapper, IconWrapper } from "./index.style";

export const HeaderMenu = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(authActions.logout());
		navigate("/login", { replace: true });
	};

	return (
		<HeaderWrapper>
			<Row justify="space-between">
				<Col>
					<IconWrapper>
						<Link to={"/"}>
							<HomeFilled />
						</Link>
					</IconWrapper>
				</Col>
				<Col>
					<Button
						type="primary"
						icon={<LogoutOutlined />}
						size="large"
						onClick={handleLogout}
					/>
				</Col>
			</Row>
		</HeaderWrapper>
	);
};
