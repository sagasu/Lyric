import React, { Component } from 'react';
import {graphql } from 'react-apollo';
import fetchSong from '../queries/fetch-song';
import LyricCreate from './lyric-create';

class SongDetails extends Component {
    render() {
        const {song} = this.props.data;

        if(!song) { return <div>Loading...</div>}

        return (
            <div>
                <h3>{song.title}</h3>
                <LyricCreate songId={this.props.params.id}></LyricCreate>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetails);