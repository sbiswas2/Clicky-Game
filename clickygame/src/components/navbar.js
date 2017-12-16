import * as React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<ul>
			<li className={window.location.pathname === "/" ? "active" : ""}><Link to="/">Clicky Game</Link></li>
			<li>Guess</li>
			<li>Score</li>
		</ul>
	);
}