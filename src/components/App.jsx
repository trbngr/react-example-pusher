import React, {Component} from 'react';
import { connect } from 'react-redux';
import {itemAdded} from '../data/actions/List.js';

import Pusher from './PusherChannel.js';

class App extends Component {
    render() {
        const {list, itemAdded} = this.props;

        const items = list.map(function (i) {
            return <li></li>;
        })

        const bindings = [
            {event: 'item-added', handler: itemAdded }
        ];

        return (
            <div>
                <Pusher channel="my-channel" bindings={bindings}/>
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