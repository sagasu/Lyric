import React, { Component } from 'react';
import {graphql } from 'react-apollo';
import fetchSong from '../queries/fetch-song';


class SongDetails extends Component {
    render() {
        return (
            <div>
                <h3>Song Details</h3>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetails);