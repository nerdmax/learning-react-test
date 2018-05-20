import { createStore, combineReducers } from 'redux';
import C from './constants';
import colors from './reducers/colors';
import sort from './reducers/sort';
import { removeColor, rateColor, sortColors, addColor } from './actions';

const initialState = {
  colors: [
    {
      id: 0,
      title: 'Rad Red',
      color: '#FF0000',
      rating: 3,
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
    },
    {
      id: 1,
      title: 'Crazy Green',
      color: '#00FF00',
      rating: 0,
      timestamp: 'Fri Mar 11 2016 12:00:00 GMT-0800 (PST)',
    },
    {
      id: 2,
      title: 'Big Blue',
      color: '#0000FF',
      rating: 5,
      timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
    },
  ],
  sort: 'SORTED_BY_TITLE',
};

const store = createStore(
  combineReducers({ colors, sort }),
  localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {},
);

console.log(store.getState());

const actionAddColors = {
  type: C.ADD_COLOR,
  id: '234234234234',
  color: '#0000FF',
  title: 'Big Blue',
  timestamp: 'time stamp test',
};

const actionRateColors = {
  type: C.RATE_COLOR,
  id: 2,
  rating: 'rated',
};

const actionRemoveColors = {
  type: C.REMOVE_COLOR,
  id: 0,
};

const actionSort = {
  type: C.SORT_COLORS,
  sortBy: 'CHANGED',
};

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});

store.dispatch(addColor('add color function', 'color code'));
console.log(store.getState());

store.dispatch(rateColor('234234234234', 'CHANGEDDDDDD'));
console.log(store.getState());

store.dispatch(removeColor('234234234234'));
console.log(store.getState());

store.dispatch(sortColors('rating'));
console.log(store.getState());
