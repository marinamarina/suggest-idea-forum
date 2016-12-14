import React from 'react';
import grandstand from 'bbc-morph-grandstand';

export default class MyModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };
    }

    componentWillMount() {
        grandstand(this.props.serviceName);
    }

    clicked() {
        this.setState({ clicked: true });
    }

    render() {
        if (!this.state.clicked) {
            return <h1 onClick={() => this.clicked()}>Hello, I have not been clicked</h1>;
        } else {
            return <h1>I have been clicked!</h1>;
        }
    }
}

MyModule.displayName = 'MyModule';

MyModule.propTypes = {
    serviceName: React.PropTypes.string
};
