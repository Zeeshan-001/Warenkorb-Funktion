import React, { Fragment } from 'react';
import classes from './Model.module.css';
import ReactDOM from 'react-dom';

function Backdrop({ onClose }) {
	return <div className={classes.backdrop} onClick={onClose}></div>;
}

function ModalOverlay(props) {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
}

const portalElement = document.getElementById('overlays');

function Model(props) {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}

			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
}

export default Model;
