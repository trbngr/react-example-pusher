import React, {Component} from 'react';
import { connect } from 'react-redux';
import {itemAdded} from '../data/actions/List.js';

import Pusher from './PusherSubscription.js';

class App extends Component {
    render() {
        const {list} = this.props;

        const items = list.map(function (i) {
            return <li></li>;
        })

        const eventHandlers = [
            {event: 'item-added', handler: (item)=>this.props.itemAdded(item)}
        ];

        return (
            <div>
                <Pusher channel="private-channel" handlers={eventHandlers}/>
                <ol>
                    {items}
                </ol>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps, {itemAdded})(App);