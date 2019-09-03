import React, { Component } from 'react';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { URL_TEAMS } from '../Utils/paths';
import { Link } from 'react-router-dom';

class Teams extends Component {

    state = {
        teams: [],
        filtered: [],
        keyword: ''
    }

    componentDidMount() {
        axios.get(URL_TEAMS).then(response => {
            this.setState({
                teams: response.data,
                filtered: response.data
            })
        })
    }

    renderList = (filtered) => (
        filtered.map((team, index) => (
            <CSSTransition
                key={index}
                timeout={500}
                classNames="fade"
            >
                <Link 
                    to={`/teams/${team.name}`}
                    className="team_item"
                >
                    <img alt={team.name} src={`images/teams/${team.logo}`} />
                </Link>
            </CSSTransition>
        ))
    )

    searchTerm = (event) => {
        const keyword = event.target.value;
        if(keyword !== '') {
            const list = this.state.teams.filter( item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({
                filtered: list,
                keyword
            })
        } else {
            this.setState({
                filtered: this.state.teams,
                keyword
            })
        }
    }

    render() {
        // console.log(this.state.teams)
        return (
            <div className="teams_component">
                <div className="teams_input">
                    <input 
                        type="text" 
                        placeholder="Search for a Team" 
                        value={this.state.keyword}
                        onChange={(event) => this.searchTerm(event)}
                    />
                </div>
                <div className="teams_container">
                    <TransitionGroup component="span">
                        {this.renderList(this.state.filtered)}
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}

export default Teams;