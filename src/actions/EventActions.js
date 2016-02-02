import { createAction } from 'redux-actions';
import DataUtils from '../utils/DataUtils';

export const requestEvents = createAction('REQUEST_EVENTS');
export const receiveEvents = createAction('RECEIVE_EVENTS');

export function fetchEvents(keyword) {
  return function (dispatch) {
    dispatch(requestEvents());

    DataUtils.search(keyword)
      .then(function (data) {
        dispatch(receiveEvents(data.events));
      });
  }
}
