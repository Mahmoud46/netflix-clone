export default interface VideoApiResponse {
	id: number;
	results: VideoMetadata[];
}

export interface VideoMetadata {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string; // ISO 8601 date string
	id: string;
}
