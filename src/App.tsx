import React from "react";
import "./App.scss";

const App: React.FunctionComponent = () => {
	const [count, setCount] = React.useState<number>(0);

	const inc = () => {
		setCount(count + 1);
	};

	const dec = () => {
		setCount(count - 1);
	};

	return (
		<div className="app">
			<div className="bg-img"></div>

			<div className="container">
				<button className="container-counter-btn" onClick={inc}>
					+
				</button>

				<p className="container-count">{count}</p>

				<button className="container-counter-btn" onClick={dec}>
					-
				</button>
			</div>
		</div>
	);
};

export default App;
