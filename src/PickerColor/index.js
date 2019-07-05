import React from 'react';

function PickerColor(props){
	const checkbox = props.held ? 'far fa-check-square' : 'far fa-square';
	const holdClass = props.held ? 'hold' : null;

	return (
		<div className="picker-color" style={{ backgroundColor: props.color, color: props.color }}>
			<p className="picker-color-value">{props.color}</p>
			<p className={`picker-hold ${holdClass}`} onClick={() => props.toggleHold(props.id)}>
				<i className={checkbox} />HOLD
			</p>
		</div>
	);
}

export default PickerColor;