import styles from './style.module.css';
import { useState } from 'preact/hooks';

export default function Home() {
	return (
		<>
			<section class={styles.home}>
				<h1>Jalapeño Timer</h1>
				<h2>The spicy pomodoro timer.</h2>
			</section>
		</>
	);
}
