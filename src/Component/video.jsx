import React from "react";
import "bootstrap";
import "../App.css";
import ReactPlayer from "react-player";

class Youtube extends React.Component {
	render() {
		return (
			<div >
				<h1>LES DERNIERS CLIPS</h1>
				<div className="yy">
					<div>
						<div className="">
							<ReactPlayer url="https://youtu.be/EpQVD81my84" />
						</div>
						<div className="">
							<ReactPlayer url="https://youtu.be/KDnc3dwKJCg" />
						</div>
					</div>
					<div>
						<div className="">
							<ReactPlayer url="https://youtu.be/I6WqaJ7Phbo" />
						</div>
						<div className="">
							<ReactPlayer url="https://youtu.be/Jtzpas85plY" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Youtube;
