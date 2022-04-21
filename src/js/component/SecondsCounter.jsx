import React from "react";
import Cards from "./card.jsx";

export const SecondsCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calander">
				<i className="far fa-clock"></i>
			</div>
			<Cards digit={0} />
			<Cards digit={0} />
			<Cards digit={0} />
			<Cards digit={0} />
			<Cards digit={0} />
			<Cards digit={0} />
			<div className="four">{props.digitfour}</div>
			<div className="three">{props.digitthree}</div>
			<div className="two">{props.digittwo}</div>
			<div className="one">{props.digitone}</div>
		</div>
	);
};
let counter = 0;
setInterval(function () {
	const four = math.floor(counter / 10000);
	const three = math.floor(counter / 1000);
	const two = math.floor(counter / 100);
	const one = math.floor(counter / 10);
});
// ReactDOM.render(
// 	<SecondsCounter digitone={counter.index0f()} />,
// 	document.querySelector(`#app`)
// );
