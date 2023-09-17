import { ColumnsType } from "antd/es/table";
import { Episode } from "model/api.types";

export const columns: ColumnsType<Episode> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Episode",
		dataIndex: "episode",
		key: "episode",
		defaultSortOrder: "ascend",
	},
	{
		title: "Air Date",
		dataIndex: "air_date",
		key: "air_date",
	},
];
