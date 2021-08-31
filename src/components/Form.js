import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form className="form"onSubmit={this.props.weatherMethod}>
				<input className="form__input"type="text" name="city" placeholder="Город"/>
				<button className="form__button">Узнать погоду сейчас</button>
			</form>
		)
	}
}

export default Form;