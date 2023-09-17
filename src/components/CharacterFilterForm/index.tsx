import React from "react";
import { Input, Button, Form, Select, Drawer, Space } from "antd";
import { CharacterFilterValue } from "model/api.types";
import { CharacterFilterFormProps, genderOptions, statusOptions } from "./index.types";

const { useForm } = Form;

export const CharacterFilterForm = ({
	filter,
	onSubmit,
	onClose,
	open,
}: CharacterFilterFormProps) => {
	const [form] = useForm();
	const handleSubmit = (values: CharacterFilterValue) => {
		if (onSubmit) onSubmit(values);
	};

	const handleClose = () => {
		if (onClose) onClose();
	};

	const handleClearFilter = () => {
		form.resetFields();
		form.submit();
	};

	return (
		<Drawer
			title="Filter Characters"
			width={720}
			open={open}
			onClose={handleClose}
			extra={
				<Space>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClearFilter}>Clear Filter</Button>
					<Button type="primary" htmlType="submit" onClick={() => form.submit()}>
						Submit
					</Button>
				</Space>
			}
		>
			<Form form={form} layout="vertical" name="login" onFinish={handleSubmit}>
				<Form.Item label="Type" name="type">
					<Input value={filter?.type} />
				</Form.Item>

				<Form.Item label="Status" name="status">
					<Select
						mode="multiple"
						allowClear
						value={filter?.status}
						style={{ width: "100%" }}
						placeholder="Please select"
						options={statusOptions}
					/>
				</Form.Item>
				<Form.Item label="Gender" name="gender">
					<Select
						value={filter?.gender}
						mode="multiple"
						allowClear
						style={{ width: "100%" }}
						placeholder="Please select"
						options={genderOptions}
					/>
				</Form.Item>
			</Form>
		</Drawer>
	);
};
