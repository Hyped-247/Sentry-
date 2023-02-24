import React, {Component} from 'react';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        // Todo: Uncomment to view error on Sentry.
        // Todo: throw new Error('Parameter is not a number!');
    };


    /**
     * Render the dom
     * @returns {*}
     */
    render() {

        return (<h1>Hello world</h1>);
    };
};
