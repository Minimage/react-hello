import React from "react";

function Cards(props) {
	return (
		<div className="card bg-dark text-light">
			<div className="card-body fs-1 mx-auto p-1">
				<span className="number">{props.digit}</span>
			</div>
		</div>
	);
}

export default Cards;
