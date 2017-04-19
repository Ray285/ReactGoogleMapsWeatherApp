import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather (cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (9/5*(weather.main.temp - 273) + 32));
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="°F"/></td>
                <td><Chart data={pressure} color="green" units="hPa"/></td>
                <td><Chart data={humidity} color="blue" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStatetoProps ({ weather }) {// Defines a variable inside the function called weather
    return { weather };// Whenever we have a key and value that are identical we can simplify to this.
}

export default connect(mapStatetoProps)(WeatherList);