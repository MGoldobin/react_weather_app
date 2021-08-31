import React from "react";

class Weather extends React.Component {
	render() {
		return (
			<div className="weather">
				{this.props.city &&
					<ul className="weather__list">
						<li className="weather__temp weather__listItem">{this.props.temp} °C</li>
						<li className="weather__city weather__listItem">{this.props.city}, {this.props.country}</li>
						<li className="weather__sunrise weather__listItem">Восход: {this.props.sunrise}</li>
						<li className="weather__sunset weather__listItem">Закат: {this.props.sunset}</li>
					</ul>
				}
				<p className="weather__error">{this.props.error}</p>
			</div>
		)
	}
}

export default Weather;