import { API_GET_METHOD_OPTIONS } from "../../constants/API";

export async function FetchVideos(movieId: string) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
		API_GET_METHOD_OPTIONS
	);

	if (!response.ok) throw new Error();
	return await response.json();
}
