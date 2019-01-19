import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import HomeDashBoard from './components/HomeDashBoard'
import AddPhotoPage from './components/AddPhotoPage'
import EditPhotoPage from './components/EditPhotoPage'
import HelpPhotoPage from './components/HelpPhotoPage'
import Header from './components/Header'
import Error from './components/Error'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import { addPhotos } from './Action/photos'
import { setTagFilter } from './Action/filters';
import getVisiblePhotos from './selectors/visiblePhotos'
const store=createStore()
store.dispatch(addPhotos({ tag: 'Water' }));
store.dispatch(addPhotos({ tag: 'Gas bill'}));
store.dispatch(addPhotos({ tag: 'Harry' }));
store.dispatch(addPhotos({ tag: 'Snake' }));
// store.dispatch(setTagFilter('water'));

const state = store.getState()
console.log(state)
const visible= getVisiblePhotos(state.photos, state.filters);
console.log(visible);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
      <Switch>
      <Route path="/" exact component={HomeDashBoard} />
      <Route path="/create" component={AddPhotoPage}/>
      <Route path="/edit/:id" component={EditPhotoPage}/>
      <Route path="/help" component={HelpPhotoPage}/>
      <Route component={Error} />
      </Switch>
      </div>
      </BrowserRouter>
       )
      
}
};

const jsx=(
  <Provider store={store}>
  <App/>
  </Provider>
);
export default jsx;
