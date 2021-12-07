import React from "react";
import "bootstrap";
import "../App.css";
import ReactPlayer from "react-player";

class Info extends React.Component {
	render() {
		return (
			<div >
				<h1>VISITEZ LES COMORES </h1>
				<div className="yy2">
					<div>
						<div className="">
                            <article></article>
							<ReactPlayer url="https://youtu.be/iE98IIrJsGE" />
						</div>
						<div className="">
						    <ReactPlayer url="https://youtu.be/ldxpXsJQhCc" />
						</div>
					</div>
					<div>
						<div className="">
                        <ReactPlayer url="https://youtu.be/UqfprqN7iRI" />
						</div>
						<div className="">
                        <ReactPlayer url="https://youtu.be/FrZCZj14Azw" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Info;