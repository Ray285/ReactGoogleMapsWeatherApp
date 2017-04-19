import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average (data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div><strong>{ average(props.data) } {props.units}</strong></div>
        </div>
    );
}
