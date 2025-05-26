import { useEffect, useState, type ReactNode } from "react";
import styles from "./Navbar.module.scss";
import netflixLogo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { logout } from "../../config/Firbase.config";
import langIcon from "../../assets/language-icon.png";
import langCaretIcon from "../../assets/language-caret-icon.png";
import { Link } from "react-router-dom";

export default function Navbar(): ReactNode {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 80) setIsScroll(true);
			else setIsScroll(false);
		});
	});

	return (
		<header className={isScroll ? styles.dark : ""}>
			<div className={styles.left}>
				<img src={netflixLogo} alt="" />
				<ul>
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
					<li>Browse by Language</li>
				</ul>
			</div>
			<div className={styles.right}>
				<img src={searchIcon} alt="" className={styles.icons} />
				<p>Children</p>
				<img src={bellIcon} alt="" className={styles.icons} />
				<div className={styles.profile}>
					<img src={profileImg} alt="" className={styles["profile-img"]} />
					<img src={caretIcon} alt="" />
					<div className={styles.dropdown}>
						<p onClick={logout}>Sign Out of Netflix</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export function LandingNavbar(): ReactNode {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 80) setIsScroll(true);
			else setIsScroll(false);
		});
	});
	return (
		<header
			className={`${styles["landing-navbar"]} ${isScroll ? styles.dark : ""}`}
		>
			<img src={netflixLogo} alt="" className={styles.logo} />

			<div className={styles["lang-signin"]}>
				<div className={styles["lang-input"]}>
					<img src={langIcon} alt="" />
					<select name="" id="">
						<option value="eng" selected>
							English
						</option>
					</select>
					<img src={langCaretIcon} alt="" />
				</div>
				<Link to="/login">
					<button>Sign In</button>
				</Link>
			</div>
		</header>
	);
}
