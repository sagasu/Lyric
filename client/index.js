import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from './components/song-list';
import App from './components/app';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import SongCreate from './components/song-create';

const client = new ApolloClient({});

const Root = () => {
  return(
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>

          

        </Route>
        <Route path="song/new" component={SongCreate}></Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
