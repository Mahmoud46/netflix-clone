import { API_GET_METHOD_OPTIONS } from "../../constants/API";

export async function FetchMovies(catergory: string) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${catergory}?language=en-US&page=1`,
		API_GET_METHOD_OPTIONS
	);

	if (!response.ok) throw new Error();
	return await response.json();
}
