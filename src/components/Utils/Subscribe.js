import React, { Component } from 'react'
import axios from 'axios';

import { URL_SUB } from '../Utils/paths';

class Subscriptions extends Component {

    state = {
        email:'',
        subscriptions: '',
        error: false,
        success: false,
        alreadyIn: false
    }

    // componentDidMount() {
    //     axios.get(URL_SUB).then(response => {
    //         console.log(response.data)
    //         this.setState({ subscriptions: response.data})
    //     })
    // }

    clearMessages = () => {
        setTimeout(() => {
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })
        }, 3000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)) {
            //subscribe user
        } else {
            this.setState({error: true})
        }
        this.clearMessages();
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        const state = this.state;
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={state.email} 
                            placeholder="youremail@gmail.com"
                            onChange={this.onChangeInput}
                        />
                        <div className={state.error ? "error show" : "error"}>Check your email</div>
                        <div className={state.success ? "success show" : "success"}>Thank you</div>
                        <div className={state.alreadyIn ? "success show" : "success"}>You are already in the DB</div>
                    </form>
                </div>

                <small>
                    small message at bottom of email entry
                </small>
            </div>
        )
    }
}

export default Subscriptions;