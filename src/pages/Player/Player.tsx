import type { ReactNode } from "react";
import styles from "./Player.module.scss";
import backArrowIcon from "../../assets/back_arrow_icon.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FetchVideos } from "../../utils/FetchDate/FetchVideos";
import { useQuery } from "@tanstack/react-query";
import type VideoApiResponse from "../../interfaces/VideoApiResponse";
import loadingAnimation from "../../assets/netflix_spinner.gif";
import type { VideoMetadata } from "../../interfaces/VideoApiResponse";

export default function Player(): ReactNode {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, isLoading, error } = useQuery<VideoApiResponse>({
		queryKey: [id],
		queryFn: () => FetchVideos(id as string),
	});

	const movieTrailer = (data: VideoApiResponse): VideoMetadata => {
		return data.results.filter(
			(video) => video.type === "Trailer" && !video.name.includes("Vertical")
		)[0];
	};
	return (
		<div className={styles.player}>
			<img src={backArrowIcon} alt="" onClick={() => navigate("/")} />
			{error && <p>Whoops, something went wrong ...</p>}
			{isLoading && <img src={loadingAnimation} className={styles.spinner} />}
			{data && (
				<>
					{!movieTrailer(data) && <p>Not Trailer Found ...</p>}
					{movieTrailer(data) && (
						<>
							<iframe
								src={`https://www.youtube.com/embed/${movieTrailer(data).key}`}
								width={"90%"}
								height={"90%"}
								title="Trailer"
								frameBorder="0"
								allowFullScreen
							></iframe>
							<div className={styles["player-info"]}>
								<p>{movieTrailer(data).published_at.split("T")[0]}</p>
								<p>{movieTrailer(data).name}</p>
								<p>{movieTrailer(data).type}</p>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
