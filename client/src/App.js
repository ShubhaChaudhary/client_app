import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import HomeDashBoard from './components/HomeDashBoard'
import AddExpensePage from './components/AddPhotoPage'
import EditExpensePage from './components/EditPhotoPage'
import HelpExpensePage from './components/HelpPhotoPage'
import Header from './components/Header'
import Error from './components/Error'
import createStore from './store/createStore'
import { addphotos } from './Action/photos'
import { setTagFilter } from './Action/filters';
import getVisiblePhotos from './selectors/visiblePhotos'

const store=createStore()
store.dispatch(addphotos({ tag: 'Water bill' }))
store.dispatch(addphotos({ tag: 'Laptop' }))
store.dispatch(setTagFilter('water'));

console.log(store.getState())
const state = store.getState();
const visible = getVisiblePhotos(state.photos, state.filters);
console.log(store.getState())

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Header />
      <Switch>
      <Route path="/" exact component={HomeDashBoard} />
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage}/>
      <Route path="/help" component={HelpExpensePage}/>
      <Route component={Error} />
      </Switch>
      </div>
      </BrowserRouter>
       )
      
}
}
export default App;
