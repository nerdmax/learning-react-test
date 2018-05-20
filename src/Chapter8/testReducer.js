import C from './constants';
import color from './reducers/color';
import colors from './reducers/colors';
import sort from './reducers/sort';

console.log(color);
const actionAddColor = {
  type: C.ADD_COLOR,
  id: '234234234234',
  color: '#0000FF',
  title: 'Big Blue',
  timestamp: 'time stamp test',
};

const actionRateColor = {
  type: C.RATE_COLOR,
  id: '123',
  rating: '0000',
};

const actionRateColor2 = {
  type: C.RATE_COLOR,
  id: '456',
  rating: '0000',
};

console.log(color({}, actionAddColor));

console.log(color(
  {
    id: '123',
    rating: '9999',
  },
  actionRateColor,
));

console.log(color(
  {
    id: '123',
    rating: '9999',
  },
  actionRateColor2,
));

const currentColors = [
  {
    id: '123',
    rating: '000',
  },
];

const actonAddColors = {
  type: C.ADD_COLOR,
  id: '234234234234',
  color: '#0000FF',
  title: 'Big Blue',
  timestamp: 'time stamp test',
};

const actionRateColors = {
  type: C.RATE_COLOR,
  id: '123',
  rating: 'rated',
};

const actionRemoveColors = {
  type: C.REMOVE_COLOR,
  id: '123',
};

console.log(colors(currentColors, actonAddColors));
console.log(colors(currentColors, actionRateColors));
console.log(colors(currentColors, actionRemoveColors));

const stateSort = 'SORTED_BY_DATE';

const actionSort = {
  type: C.SORT_COLORS,
  sortBy: 'CHANGED',
};

console.log(sort(stateSort, actionSort));
