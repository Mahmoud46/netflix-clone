import { type ReactNode } from "react";
import styles from "./TitleCards.module.scss";
import { useQuery } from "@tanstack/react-query";
import type MovieApiResponse from "../../interfaces/MovieApiResponse ";
import { FetchMovies } from "../../utils/FetchDate/FetchMovies";
import type { MovieResult } from "../../interfaces/MovieApiResponse ";
import loadingAnimation from "../../assets/netflix_spinner.gif";
import { BASIC_IMAGE_URL } from "../../constants/API";
import { Link } from "react-router-dom";

export default function TitleCards({
	title,
	category,
	className,
}: {
	title?: string;
	category?: string;
	className?: string;
}): ReactNode {
	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.currentTarget.scrollLeft += e.deltaY;
	};

	const { data, isLoading, error } = useQuery<MovieApiResponse>({
		queryKey: [category],
		queryFn: () => FetchMovies(category ?? "now_playing"),
	});

	return (
		<div
			className={`${styles["title-cards"]} ${
				className ? styles[className] : ""
			}`}
		>
			<h2>{title ?? "Popular on Netflix"}</h2>
			<div className={styles["cards-list"]} onWheelCapture={handleWheel}>
				{error && <p>Whoops, something went wrong ...</p>}
				{isLoading && <img src={loadingAnimation} className={styles.spinner} />}
				{data &&
					data?.results?.map((movie: MovieResult, index: number) => (
						<Link to={`/trailer/${movie.id}`}>
							<div className={styles.card} key={index}>
								<img
									src={BASIC_IMAGE_URL + movie.backdrop_path}
									alt=""
									loading="lazy"
								/>
								<p>{movie.title}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}
