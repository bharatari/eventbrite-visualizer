import _ from 'lodash';
import { eventbriteToken } from '../constants/Keys';
import { viewByProperties } from '../constants/Values';

export default {
  base: 'https://www.eventbriteapi.com/v3',
  options: {
    headers: {
      Authorization: 'Bearer ' + eventbriteToken,
    },
  },

  /**
   * Fetches events from Eventbrite API.
   *
   * @param {string} keyword - Keyword to search events.
   * @return {Promise}
   */
  search(keyword) {
    const url = this.base + '/events/search/' +
      '?q=' + keyword +
      '&popular=true' +
      '&expand=venue,category,format,ticket_classes';

    return fetch(url, this.options)
      .then(function (response) {
        return response.json();
      });
  },

  /**
   * Checks whether the label already exists in array.
   *
   * @param {Array} data - Array of objects with data and label keys.
   * @param {string} label - The label to look for.
   * @return {boolean}
   */
  exists(data, label) {
    if (data && label) {
      const labels = _.pluck(data, 'label');
      return _.includes(labels, label);
    }

    return false;
  },

  /**
   * Finds label by index.
   *
   * @param {Array} data - Array of objects with data and label keys.
   * @param {string} label - The label to look for.
   * @return {number}
   */
  find(data, label) {
    if (data && label) {
      return _.findIndex(data, function (o) {
        return o.label === label;
      });
    }

    return null;
  },

  /**
   * Finds property in object. Supports nested properties.
   *
   * @param {Object} object
   * @param {string} property
   */
  getProperty(object, property) {
    if (object && property) {
      if (property.indexOf('.') !== -1) {
        const properties = property.split('.');
        let value = object;

        for (let i = 0; i < properties.length; i++) {
          if (value[properties[i]]) {
            value = value[properties[i]];
          } else {
            return null;
          }
        }

        return value;
      }

      return object[property];
    }

    return null;
  },

  /**
   * Finds the property path for a given viewBy value.
   *
   * @param {string} key
   * @return {string}
   */
  getViewByProperty(key) {
    if (key) {
      let value = _.find(viewByProperties, function (o) {
        return o.key === key;
      });

      return value.property;
    }

    return null;
  }
};
