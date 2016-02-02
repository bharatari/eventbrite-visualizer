import { handleActions } from 'redux-actions';

const initialState = {
  searchValue: '',
  viewBy: 'country',
  graph: 'bar',
};

export default handleActions({
  CHANGE_SEARCH: (state, action) => ({
    ...state,
    searchValue: action.payload,
  }),
  CHANGE_VIEW_BY: (state, action) => ({
    ...state,
    viewBy: action.payload,
  }),
  CHANGE_GRAPH: (state, action) => ({
    ...state,
    graph: action.payload,
  }),
}, initialState);
