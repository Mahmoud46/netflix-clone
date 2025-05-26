import type { ReactNode } from "react";
import styles from "./Footer.module.scss";
import youtubeIcon from "../../assets/youtube_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";

export default function Footer(): ReactNode {
	return (
		<footer>
			<div className={styles["footer-icons"]}>
				<img src={facebookIcon} alt="" loading="lazy" />
				<img src={instagramIcon} alt="" loading="lazy" />
				<img src={twitterIcon} alt="" loading="lazy" />
				<img src={youtubeIcon} alt="" loading="lazy" />
			</div>
			<ul>
				<li>Audio Description</li>
				<li>Help Centre</li>
				<li>Gift Cards</li>
				<li>Media Centre</li>
				<li>Investor Relations</li>
				<li>Jobs</li>
				<li>Terms of Use</li>
				<li>Privacy</li>
				<li>Legal Notices</li>
				<li>Cookie Preferences</li>
				<li>Corporate Information</li>
				<li>Contact Us</li>
			</ul>
			<p className={styles["copyright-text"]}>© 1997-2025 Netflix, Inc.</p>
		</footer>
	);
}
