import { AxiosResponse } from "axios";
import { Episode, ListResponse, Character } from "model/api.types";
import { axiosInstance } from "./axiosInstance";

export const getAllEpisode = (page: number) => {
	return axiosInstance
		.get(`episode/?page=${page}`)
		.then((res: AxiosResponse<ListResponse<Episode>, any>) => res.data)
		.catch((err) => err.response.data);
};

export const getEpisode = (episode?: string) => {
	return axiosInstance
		.get(`episode/${episode ?? ""}`)
		.then((res: AxiosResponse<Episode, any>) => res.data)
		.catch((err) => err.response.data);
};

export const getEpisodeCharacters = (characterIds: string[]) => {
	let queryStr = `character/${characterIds.join(",")}`;

	console.log("queryStr", queryStr);
	return axiosInstance
		.get(queryStr)
		.then((res: AxiosResponse<ListResponse<Character>, any>) => res.data)
		.catch((err) => err.response.data);
};
