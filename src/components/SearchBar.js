import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {
    state = {
        term: ''
    }

    handleInputChange = (event) => {
        this.setState({
            term:event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // call callback from parent component
        // this tells the parent component what the search term is
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <label>Video Search</label>
                    <input type="text" onChange={this.handleInputChange} value={this.state.term}/>
                    <div className="searchButtonContainer">
                        <button className="searchBtn ui secondary button" type="submit">Search</button>
                    </div>   
                </form>
            </div>
        )
    }
}

export default SearchBar;