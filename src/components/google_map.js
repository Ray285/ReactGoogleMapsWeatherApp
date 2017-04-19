import React, { Component } from 'react';

class GoogleMap extends Component {
    //Lifecycle method that gets called automatically after this component has been rendered to the screen
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render () {
        // The ref attribute allows us to get a reference to an html element
        // that has been rendered to the page. "this.refs.map" will provide access to the element.
        return <div ref="map" />;
    }
}

export default GoogleMap;
