import { createStore, combineReducers } from 'redux';
import photosReducer from '../reducers/photos';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      photos: photosReducer,
      filters: filtersReducer
    })
  );

  return store;
};