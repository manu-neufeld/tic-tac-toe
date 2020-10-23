import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Modal } from "./modal.jsx";

//create your first component
export function Home() {
	return (
		<div className="">
			<h1>Tic Tac Toe in React</h1>
			<Modal />
		</div>
	);
}
