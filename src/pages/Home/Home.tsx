import type { ReactNode } from "react";
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

export default function Home(): ReactNode {
	return (
		<div className={styles.home}>
			<Navbar />
			<div className={styles.hero}>
				<img src={heroBanner} alt="" className={styles["banner-img"]} />
				<div className={styles["hero-caption"]}>
					<img src={heroTitle} alt="" className={styles["caption-img"]} />
					<p>
						Discovering his ties to a secret ancient order, a young man living
						in modern Istanbul embarks on a quest save the city from an immortal
						enemy.
					</p>
					<div className={styles["hero-btns"]}>
						<button>
							<img src={playIcon} alt="" />
							Play
						</button>
						<button>
							<img src={infoIcon} alt="" />
							More Info
						</button>
					</div>

					<TitleCards className="hero" />
				</div>
			</div>
			<div className={styles["more-cards"]}>
				<TitleCards title="Blockbuster Movies" category="top_rated" />
				<TitleCards title="Only on Netflix" category="popular" />
				<TitleCards title="Upcoming" category="upcoming" />
				<TitleCards title="Top Pics for You" />
			</div>
			<Footer />
		</div>
	);
}
