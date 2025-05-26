import { API_GET_METHOD_OPTIONS } from "../../constants/API";
import type { CountryCode } from "../../interfaces/CountryCode180";

export async function FetchMovies(catergory: string) {
	const regionCode: CountryCode = "US";

	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${catergory}?language=en-US&page=1&region=${regionCode}`,
		API_GET_METHOD_OPTIONS
	);

	if (!response.ok) throw new Error();
	return await response.json();
}
