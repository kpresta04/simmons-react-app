import React from "react";
import { Link } from "react-router-dom";

class ResCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.slideIndex = 1;
		this.interval = false;
		this.mounted = 1;
	}
	plusSlides(n) {
		this.showSlides((this.slideIndex += n));
	}
	currentSlide(n) {
		this.showSlides((this.slideIndex = n));
	}

	setCarouselInterval() {
		const next = document.querySelector(".next");
		clearInterval(this.interval);

		this.interval = setInterval(() => {
			if (next) {
				next.click();
			}
		}, 7000);
	}
	componentDidMount() {
		this.showSlides(this.slideIndex);

		if (!this.interval) {
			this.setCarouselInterval();
		}
	}
	showSlides(n) {
		this.setCarouselInterval();

		var i;
		var slides = [...document.getElementsByClassName("mySlides")];
		var dots = [...document.getElementsByClassName("dot")];
		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active-dot", "");
		}
		if (slides) {
			slides[this.slideIndex - 1].style.display = "block";
			dots[this.slideIndex - 1].className += " active-dot";
		}
	}
	render() {
		return (
			<div>
				<div className="slideshow-container">
					<div className="mySlides fade">
						<img src="./carousel/pistols.jpg" style={{ width: "100%" }} />
						<div className="text">
							<div className="captionBlock">
								<h3>Simmons Gun Repair</h3>
								<h1>Professional gunsmithing with over 75 years of history!</h1>
								<button>
									<Link to="/shop" className="carouselLink">
										Shop Now
									</Link>
								</button>
							</div>
						</div>
					</div>

					<div className="mySlides fade">
						<img src="./carousel/gunAndShells.jpg" style={{ width: "100%" }} />
						<div className="text">
							<div className="captionBlock">
								<h3>In case you haven't heard...</h3>
								<h1>Simmons Restores Firearms</h1>
								<button>
									<Link to="/services" className="carouselLink">
										Browse Our Services
									</Link>
								</button>
							</div>
						</div>
					</div>

					<div className="mySlides fade">
						<img src="./carousel/rifleScope.jpg" style={{ width: "100%" }} />
						<div className="text">
							<div className="captionBlock">
								<h3>Since 1945</h3>
								<h1>We sell shotguns, rifles, and pistols - all brands!</h1>
								<button>
									<Link to="/contact" className="carouselLink">
										Contact Us
									</Link>
								</button>
							</div>
						</div>
					</div>

					<a className="prev" onClick={() => this.plusSlides(-1)}>
						&#10094;
					</a>
					<a className="next" onClick={() => this.plusSlides(1)}>
						&#10095;
					</a>
				</div>
				<br />

				<div style={{ textAlign: "center" }}>
					<span className="dot" onClick={() => this.currentSlide(1)}></span>
					<span className="dot" onClick={() => this.currentSlide(2)}></span>
					<span className="dot" onClick={() => this.currentSlide(3)}></span>
				</div>
			</div>
		);
	}
}

export default ResCarousel;
