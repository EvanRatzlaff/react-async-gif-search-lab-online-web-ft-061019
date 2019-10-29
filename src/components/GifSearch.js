import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.query} onChange={event => this.setState({ query: event.target.value})} />
                </form>
            </div>
        )
    }
}