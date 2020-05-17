import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './components/song-list';

const client = new ApolloClient({});

const Root = () => {
  return(
    <ApolloProvider client={client}>
      <SongList></SongList>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
