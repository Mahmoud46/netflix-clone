import type { ReactNode } from "react";
import styles from "./TrendingNow.module.scss";
import { filmsPosters } from "../../constants/LandingCardsData";

export default function TrendingNow(): ReactNode {
	return (
		<div className={styles["trending-now"]}>
			<h2>Trending Now</h2>
			<div className={styles.container}>
				{filmsPosters.map((poster, index) => (
					<div className={styles.poster}>
						<div
							className={styles["poster-container"]}
							style={{ backgroundImage: `url(${poster})` }}
							key={index}
						></div>
						<span>{index + 1}</span>
					</div>
				))}
			</div>
		</div>
	);
}
