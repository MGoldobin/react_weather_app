import './App.css';
import React from 'react';
import Info from './Info'
import Form from './Form'
import Weather from './Weather'

const apiKey = "09db2e62a2f803896720745b6be832c9";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      weather: undefined,
      error: undefined
    };
  }

  _getCelsius = (temp) => {
    return Math.round(temp - 273);
  }

  _getTime = (time) => {
    const date = new Date(time*1000);
    return (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }

  _getWeather = async (e) => {
    e.preventDefault();

    const cityName = e.target.elements.city.value;
		
    if(cityName) {
      const apiWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey);
      const data = await apiWeather.json();

      this.setState({
        temp: this._getCelsius(data.main.temp),
        city: data.name,
        country: data.sys.country,
        sunrise: this._getTime(data.sys.sunrise),
        sunset: this._getTime(data.sys.sunset),
        weather: data.weather[0].main,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        weather: undefined,
        error: "Введите название города"
      });
    }
	}

  render() {
    return (
      <div className="app">
        <Info />
        <Form weatherMethod={this._getWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          weather={this.state.weather}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;