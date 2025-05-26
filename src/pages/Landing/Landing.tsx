import type { ReactNode } from "react";
import { LandingNavbar } from "../../components/Navbar/Navbar";
import styles from "./Landing.module.scss";
import rightArrowActive from "../../assets/right-arrow-active-icon.png";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import MoreReasonstoJoin from "../../components/MoreReasonstoJoin/MoreReasonstoJoin";
import Footer from "../../components/Footer/Footer";
import Faq from "../../components/Faq/Faq";

export default function Landing(): ReactNode {
	return (
		<div className={styles.landing}>
			<LandingNavbar />
			<div className={styles.hero}>
				<div className={styles["hero-cont"]}>
					<h1>Unlimited movies, TV shows, and more</h1>
					<p>
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>
					<form className={styles["membership-input"]}>
						<input type="email" placeholder="Email address" required />
						<button type="submit" onClick={(e) => e.preventDefault()}>
							Get Started <img src={rightArrowActive} alt="" />
						</button>
					</form>
				</div>
			</div>
			<TrendingNow />
			<MoreReasonstoJoin />
			<Faq />
			<Footer />
		</div>
	);
}
