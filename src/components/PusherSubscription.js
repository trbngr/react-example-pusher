import React, {PropTypes} from 'react';
import $script from 'scriptjs';

const scriptUrl = 'https://js.pusher.com/3.0/pusher.js';
const secret = 'YOUR SECRET KEY';
const options = {
    encrypted: true
};

let client = undefined;

function getClient(log, cb) {
    if (typeof cb !== 'function') {
        return;
    }

    if (client)
    {
        cb(client);
        return;
    }

    $script(scriptUrl, function () {
        client = new Pusher(secret, options);
        cb(client);
    })
}

class PusherSubscription extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        channel: PropTypes.string.isRequired,
        bindings: PropTypes.arrayOf(PropTypes.shape({
            event: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        })).isRequired
    };

    componentWillUnmount(){
        getClient(this.log, client=>{
            client.disconnect();
        });
    }

    componentDidMount() {
        getClient(this.log, client => {
            const {channel, bindings} = this.props;

            var subscription = client.subscribe(channel);
            for (var binding of bindings) {
                subscription.bind(binding.event, binding.handler);
            }
        });
    }

    render() {
        return null;
    }
}

export default PusherSubscription;
