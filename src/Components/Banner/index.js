import React from "react"
import styles from "./style.css"

const banner = ({ title, secondaryText }) => (
	<div className={styles.banner}>
		<h1 className={styles.bannerText}>{title}</h1>
		<p>{secondaryText}</p>
	</div>
)

export default banner
