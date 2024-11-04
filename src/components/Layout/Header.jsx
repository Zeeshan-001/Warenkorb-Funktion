import React, { Fragment } from 'react';
import classes from './header.module.css';
import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header({ onShow }) {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onShow={onShow} />
			</header>

			<div className={classes['main-image']}>
				<img src={mealsImage} alt='Table with full of food' />
			</div>
		</Fragment>
	);
}

export default Header;
