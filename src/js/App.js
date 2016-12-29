// @flow

import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
    message: string
}

export default class App extends React.Component {
    props: Props;
    
    render() {
        return (
            <div>This is a react app sending you the following message... {this.props.message}</div>
        );
    }
}