import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './components/song-list';
import App from './components/app';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import SongCreate from './components/song-create';
import SongDetails from './components/song-details';

import './style/style.css';

const client = new ApolloClient({});

const Root = () => {
  return(
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
          <Route path="songs/new" component={SongCreate}></Route>
          <Route path="songs/:id" component={SongDetails}></Route>
          

        </Route>
        
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
