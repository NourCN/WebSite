import React, { Component } from "react";
import "bootstrap";
import "../App.css";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";

class info extends React.Component {
	render() {
		return (
			<div
				id="carouselExampleCaptions"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
          <button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="3"
						class="active"
						aria-current="true"
						aria-label="Slide 4"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="4"
						aria-label="Slide 5"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="5"
						aria-label="Slide 6"
					></button>
          <button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="6"
						aria-label="Slide 7"
					></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src={c1} class="d-block w-100" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C1</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c2} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C2</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c3} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C3</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c4} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C4</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c5} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C5</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c6} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C6</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={c7} class="d-block w-100" alt="" />
						<div class="carousel-caption d-none d-md-block">
							<h5>C7</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		);
	}
}

export default info;
