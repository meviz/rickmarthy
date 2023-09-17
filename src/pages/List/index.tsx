import { useQuery } from "@tanstack/react-query";
import { getAllEpisode } from "api/clientApi";
import { Episode, DataInfo } from "model/api.types";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import { TableWrapper } from "./index.style";

export const List = () => {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const episodeListQuery = useQuery({
		queryKey: ["episodeListQuery"],
		queryFn: () => getAllEpisode(currentPage),
		enabled: false,
	});
	const episodeData: Episode[] = useMemo(
		() => episodeListQuery.data?.results ?? [],
		[episodeListQuery.data?.results]
	);
	const infoData: DataInfo | null = useMemo(
		() => episodeListQuery.data?.info ?? null,
		[episodeListQuery.data?.info]
	);

	useEffect(() => {
		episodeListQuery.refetch();
	}, [currentPage]);

	const handlePaginationChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<TableWrapper
			dataSource={episodeData}
			columns={columns}
			pagination={{
				pageSize: 20,
				total: infoData?.count,
				showSizeChanger: false,
				onChange: handlePaginationChange,
			}}
			onRow={(record: Episode) => ({
				onClick: () => {
					navigate(`/detail/${record.id}`, { replace: true });
				},
			})}
			loading={episodeListQuery.isLoading}
		/>
	);
};
