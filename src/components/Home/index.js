import React, { Component } from 'react';
import axios from 'axios';

import { URL_HOME } from '../Utils/paths';

import SliderWidget from '../Utils/Slider';
import Subscriptions from '../Utils/Subscribe';

class Home extends Component {

    state = {
        home: ''
    }

    componentDidMount() {
        axios.get(URL_HOME).then((response) => {
            console.log(response.data);
            this.setState({
                home: response.data
            })
        })
    }

    render() {
        return (
            <>
                <SliderWidget slides={this.state.home.slider}/>
                <Subscriptions />
            </>
        )
    }
}

export default Home;