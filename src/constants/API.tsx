export const API_READ_ACCESS_TOKEN: string = import.meta.env
	.VITE_API_READ_ACCESS_TOKEN;

export const API_KEY: string = import.meta.env.VITE_API_KEY;
export const BASIC_IMAGE_URL: string = "https://image.tmdb.org/t/p/w500";
export const API_GET_METHOD_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
	},
};
