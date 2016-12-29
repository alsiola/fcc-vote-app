// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

type Props = {
    message: string
}
type State = {
    name: string
}

export default class App extends React.Component {
    props: Props;
    state: State;
    
    constructor(props) {
        super(props);
        this.state = {
            name: 'you'
        }
    }
    
    componentWillMount() {
        axios.get('/api/currentuser').then(response => {
            console.log(response);
            this.setState({
                name: response.data.name
            });
        });
    }
    
    render() {
        return (
            <div>This is a react app sending {this.state.name} the following message... {this.props.message}</div>
        );
    }
}