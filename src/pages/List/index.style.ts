import { Table } from "antd";
import styled from "styled-components";

export const TableWrapper = styled(Table)`
	tbody tr:hover {
		cursor: pointer;
		color: ${(props) => props.theme.defaultConfig.token.blue};
	}
`;
