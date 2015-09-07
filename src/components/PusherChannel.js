import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { connectToPusher } from '../data/actions/Pusher.js';

class PusherChannel extends React.Component {

    constructor(props) {
        super(props);
        this.props.connectToPusher();
    }

    static propTypes = {
        client: PropTypes.object,
        channel: PropTypes.string.isRequired,
        bindings: PropTypes.arrayOf(PropTypes.shape({
            event: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        })).isRequired
    };

    componentWillUnmount() {
        if(this.props.client)
            this.props.client.disconnect();
    }

    shouldComponentUpdate(next){
        return next.client !== this.props.client;
    }

    render() {

        const {client, channel, bindings} = this.props;

        if (!client)
            return null;

        var subscription = client.subscribe(channel);
        for (var binding of bindings) {
            subscription.bind(binding.event, binding.handler);
        }

        return null;
    }
}

function mapStateToProps(state) {
    return {
        client: state.pusher.client
    };
}

export default connect(mapStateToProps, {connectToPusher})(PusherChannel);
