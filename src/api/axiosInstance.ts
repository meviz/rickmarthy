import axios from "axios";

const createAxiosInstance = () => {
	const baseURL = process.env.REACT_APP_BACKEND_URL;
	const axiosInstance = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
		},
	});

	return axiosInstance;
};

export const axiosInstance = createAxiosInstance();
