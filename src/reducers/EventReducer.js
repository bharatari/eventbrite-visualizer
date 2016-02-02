import { handleActions } from 'redux-actions';

const initialState = {
  requestingEvents: false,
  events: [],
  error: null,
};

export default handleActions({
  REQUEST_EVENTS: (state, action) => ({
    ...state,
    requestingEvents: true,
  }),
  RECEIVE_EVENTS: {
    next(state, action) {
      return {
        ...state,
        requestingEvents: false,
        events: action.payload,
      };
    },
    throw(state, action) {
      return {
        ...state,
        requestingEvents: false,
        error: action.payload,
      };
    }
  },
}, initialState);
