import React from "react";

export const ClickButton = props => {
	return (
		<button id={props.id} onClick={props.handleonClick}>
		<img src={props.url} alt={props.id} width={150} height={150}/>
		</button>
	)
};