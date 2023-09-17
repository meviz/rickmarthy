import { Button, Card, Col, Form, Input, notification } from "antd";
import { authActions } from "contexts/AuthSlice";
import { useAppDispatch } from "hooks/storeHooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RowWrapper } from "./index.style";
import { LoginData } from "./index.types";

const { useForm } = Form;

export const Login = () => {
	const [form] = useForm<LoginData>();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = (values: LoginData) => {
		if (values.userName === "admin" && values.password === "123") {
			dispatch(authActions.login({ userName: values.userName }));
			navigate("/", { replace: true });
		} else {
			notification.error({ message: "Username or password is wrong" });
		}
	};

	return (
		<RowWrapper justify="center" align="middle">
			<Col span={10}>
				<Card>
					<Form form={form} layout="vertical" name="login" onFinish={handleSubmit}>
						<Form.Item
							label="Username"
							name="userName"
							rules={[{ required: true, message: "Please input your username!" }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: "Please input your password!" }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Col>
		</RowWrapper>
	);
};
