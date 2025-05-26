import { faq } from "../../constants/LandingCardsData";
import styles from "./Faq.module.scss";
import expandIcons from "../../assets/expand-icon.png";
import { useState } from "react";

export default function Faq() {
	const [activeFq, setActiveFq] = useState<number>(-1);

	return (
		<div className={styles.faq}>
			<h2>Frequently Asked Questions</h2>
			{faq.map((fq, index) => (
				<div className={styles["faq-card"]} key={index}>
					<button
						onClick={() => {
							setActiveFq(activeFq == index ? -1 : index);
						}}
					>
						<p>{fq.title}</p>
						<img
							src={expandIcons}
							alt=""
							className={activeFq == index ? styles.rotate : ""}
						/>
					</button>
					{activeFq == index && (
						<p
							className={styles.info}
							dangerouslySetInnerHTML={{ __html: fq.info }}
						></p>
					)}
				</div>
			))}
		</div>
	);
}
