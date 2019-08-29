import React, { Component } from 'react';
import axios from 'axios';

import { URL_HOME } from '../Utils/paths';

import SliderWidget from '../Utils/Slider';
import Subscriptions from '../Utils/Subscribe';
import Blocks from './Blocks';

class Home extends Component {

    state = {
        home: ''
    }

    componentDidMount() {
        axios.get(URL_HOME).then((response) => {
            console.log(response.data);
            this.setState({ home: response.data })
        })
    }

    render() {
        const home = this.state.home;
        return (
            <>
                <SliderWidget slides={home.slider}/>
                <Subscriptions />
                <Blocks blocks={home.blocks}/>
            </>
        )
    }
}

export default Home;