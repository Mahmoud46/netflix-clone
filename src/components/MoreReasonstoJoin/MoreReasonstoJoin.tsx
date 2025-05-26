import type { ReactNode } from "react";
import styles from "./MoreReasonstoJoin.module.scss";
import { MoreReasonstoJoinCards } from "../../constants/LandingCardsData";

function FeatureCard({
	title,
	info,
	icon,
}: {
	title: string;
	info: string;
	icon: string;
}): ReactNode {
	return (
		<div className={styles.card}>
			<div>
				<h2>{title}</h2>
				<p>{info}</p>
			</div>
			<img src={icon} alt="" />
		</div>
	);
}

export default function MoreReasonstoJoin(): ReactNode {
	return (
		<div className={styles["more-reasons-to-join"]}>
			<h2>More Reasons to Join</h2>
			<div className={styles["cards-container"]}>
				{MoreReasonstoJoinCards.map((card, index) => (
					<FeatureCard
						title={card.title}
						info={card.info}
						icon={card.icon}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
