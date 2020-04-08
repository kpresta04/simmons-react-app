import React from "react";
import { Link } from "react-router-dom";

class FAQ extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const items = [...document.querySelectorAll(".accordion a")];

		function toggleAccordion() {
			this.classList.toggle("active-faq");
			this.nextElementSibling.classList.toggle("active-faq");
		}

		items.forEach((item) => item.addEventListener("click", toggleAccordion));
	}

	render() {
		return (
			<div className="main faq">
				<div className="container">
					<h3>Frequently Asked Questions</h3>

					<div className="accordion">
						<div className="accordion-item">
							<a>
								What are the delivery charges for orders from the Online Shop?
							</a>
							<div className="content">
								<p>
									We will ship the firearm container and box to you free of
									charge AND pay the return freight. You only pay the freight to
									receive the repaired firearm after finished. All other
									products or services are priced based on weight, length and
									distance of shipping.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<a>Which payment methods are accepted in the Online Shop?</a>
							<div className="content">
								<p>
									We accept major credit cards and we can accept PayPal
									purchases as well.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<a>How long will delivery take?</a>
							<div className="content">
								<p>
									Firearm purchases will take less than 1 week. Repairs will be
									quoted on a case by case basis.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<a>
								How secure is shopping in the Online Shop? Is my data secure?
							</a>
							<div className="content">
								<p>
									All data is encrypted and secure. Our site is state of the art
									and you can have true peace of mind when shopping online with
									us.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<a>What exactly happens after ordering?</a>
							<div className="content">
								<p>
									Firearm purchases are immediately pulled from our warehouse
									and shipped directly to your FFL in the town you are located
									in. For gun repairs, shipping containers are sent directly to
									you with a prepaid label for you to ship them to us. When your
									repair is finished, we will ship your firearm directly back to
									you in the container you bought.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<a>Do I receive an invoice for my order?</a>
							<div className="content">
								<p>
									Yes. You will receive an online invoice at the time of
									purchase, and another copy will arrive with your firearm or
									related purchase.
								</p>
							</div>
						</div>
					</div>
				</div>
				<button className="back-button">
					<Link to="/">Back To Simmons</Link>
				</button>
			</div>
		);
	}
}

export default FAQ;
