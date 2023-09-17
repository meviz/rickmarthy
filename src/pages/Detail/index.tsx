import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEpisode } from "api/clientApi";
import { CharacterList } from "components/CharacterList";
import { Row, Col, Card, Spin } from "antd";
import moment from "moment";
import { Episode } from "model/api.types";

export const Detail = () => {
	const params = useParams();
	const { data, isLoading } = useQuery<Episode>({
		queryKey: ["episodeQuery"],
		queryFn: () => {
			return getEpisode(params.episodeId);
		},
	});
	const formattedAirDate = useMemo(
		() => moment(data?.air_date).format("DD/MM/YYYY"),
		[data?.air_date]
	);
	const formattedCreated = useMemo(
		() => moment(data?.created).format("DD/MM/YYYY"),
		[data?.created]
	);
	return (
		<Spin spinning={isLoading}>
			<Row gutter={[0, 24]}>
				<Col xs={24}>
					<h1>{data?.name}</h1>
					<i> {formattedAirDate}</i> - <i> {formattedCreated}</i>
				</Col>
				<Col xs={24}>
					<Card title="Character List">
						<CharacterList characters={data?.characters ?? []} />
					</Card>
				</Col>
			</Row>
		</Spin>
	);
};
