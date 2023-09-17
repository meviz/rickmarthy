import { FilterFilled } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Spin, Input, Button, Space, Empty, Select } from "antd";
import { getEpisodeCharacters } from "api/clientApi";
import { CharacterFilterForm } from "components/CharacterFilterForm";
import { CharacterItem } from "components/CharacterItem";
import { getCharacterIdsFromCharaterUrlList } from "helpers/getCharacterIdsFromCharaterUlrList";
import { Character, CharacterFilterValue } from "model/api.types";
import React, { useEffect } from "react";
import { useState } from "react";
import { CharacterListProps, sortOptions } from "./index.types";

const { Search } = Input;

export const CharacterList = ({ characters }: CharacterListProps) => {
	const [openFilterForm, setOpenFilterForm] = useState(false);
	const [filter, setFilter] = useState<CharacterFilterValue>();
	const [search, setSearch] = useState<string>();
	const [sortType, setSortType] = useState<string>("asc");
	const [dataState, setDataState] = useState<Character[]>();

	const { data, isLoading } = useQuery<Character[]>({
		queryKey: ["characterFilteredList"],
		queryFn: () => {
			const data = getEpisodeCharacters(getCharacterIdsFromCharaterUrlList(characters));
			return data;
		},
		enabled: !!characters.length,
	});

	useEffect(() => {
		setDataState(data);
	}, [data]);

	useEffect(() => {
		if (data) {
			const filteredData = data.filter((item) => {
				let isPassed = true;
				if (filter?.status?.length) {
					isPassed = isPassed && filter?.status.includes(item.status);
				}
				if (filter?.type) {
					isPassed =
						isPassed && item.type.toLowerCase().includes(filter.type.toLowerCase());
				}
				if (filter?.gender?.length) {
					isPassed = isPassed && filter?.gender.includes(item.gender);
				}
				if (search) {
					isPassed = isPassed && item.name.toLowerCase().includes(search?.toLowerCase());
				}
				return isPassed;
			});
			filteredData.sort((a, b) =>
				sortType === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
			);
			setDataState(filteredData);
		}
	}, [filter, search, data, sortType]);

	const handleSearch = (value: string) => {
		setSearch(value);
	};

	const handleFilter = (filter: CharacterFilterValue) => {
		setFilter(filter);
		setOpenFilterForm(false);
	};

	const handleSort = (value: string) => {
		setSortType(value);
	};

	return (
		<>
			<Spin spinning={isLoading}>
				<Row justify="space-between">
					<Col md={7}>
						<Search
							placeholder="input search text"
							enterButton="Search"
							size="large"
							onSearch={handleSearch}
						/>
					</Col>
					<Col>
						<Space>
							<Button
								type="primary"
								icon={<FilterFilled />}
								size="large"
								onClick={() => setOpenFilterForm(true)}
							/>
							<Select
								onChange={handleSort}
								options={sortOptions}
								size="large"
								style={{ width: 100 }}
								defaultValue="asc"
							></Select>
						</Space>
					</Col>
				</Row>
			</Spin>
			<CharacterFilterForm
				filter={filter}
				open={openFilterForm}
				onClose={() => setOpenFilterForm(false)}
				onSubmit={handleFilter}
			/>
			<Row style={{ marginTop: 48 }} gutter={[12, 12]} justify="center">
				{dataState?.length ? (
					dataState?.map((item: Character) => (
						<Col sm={24} md={6} lg={4}>
							<CharacterItem key={item.id} {...item} />
						</Col>
					))
				) : (
					<Col>
						<Empty />
					</Col>
				)}
			</Row>
		</>
	);
};
