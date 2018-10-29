import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createAppStore from '../../lib/store';
import PlayersContainer from '../players-container';

const store = createAppStore();

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={PlayersContainer} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
