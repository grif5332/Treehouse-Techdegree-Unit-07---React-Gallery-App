import React, { Component } from 'react';

class Search extends Component {

    state = {
        searchData: ''
    }

    // sets searchData to the value of the input.
    onSearchChange = e => {
        this.setState({searchData: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render () {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" name="search" onChange={this.onSearchChange} ref={(input) => this.query = input} placeholder="Search..." required/>
                <button type="submit" className="search-button">
                    <p className="search-text">Search</p>
                </button>
            </form>
        )
    }
}
export default Search;