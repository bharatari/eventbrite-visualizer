import _ from 'lodash';
import { eventbriteToken } from '../constants/Keys';

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
   * Gets country from Eventbrite event.
   *
   * @param {Object} event - Eventbrite event object.
   * @return {string}
   */
  getCountry(event) {
    if (event) {
      if (event.venue) {
        if (event.venue.address) {
          if (event.venue.address.country) {
            return event.venue.address.country;
          }
        }
      }
    }

    return '';
  },

  /**
   * Gets capacity from Eventbrite event.
   *
   * @param {Object} event - Eventbrite event object.
   * @return {number}
   */
  getCapacity(event) {
    if (event) {
      if (event.capacity) {
        return event.capacity;
      }
    }

    return 0;
  },

  /**
   * Gets category from Eventbrite event.
   *
   * @param {Object} event - Eventbrite event object.
   * @return {string}
   */
  getCategory(event) {
    if (event) {
      if (event.category) {
        if (event.category.name) {
          return event.category.name;
        }
      }
    }

    return '';
  },

  /**
   * Gets format from Eventbrite event.
   *
   * @param {Object} event - Eventbrite event object.
   * @return {string}
   */
  getFormat(event) {
    if (event) {
      if (event.format) {
        if (event.format.name) {
          return event.format.name;
        }
      }
    }

    return '';
  },

  /**
   * Returns the function that returns the specified type of data
   * from an Eventbrite event object.
   *
   * @param {string} viewBy - Type of data user chooses to view.
   * @return {Function} - The function that returns that data from Eventbrite event object.
   */
  getPropertyFunction(viewBy) {
    if (viewBy === 'country') {
      return this.getCountry;
    } else if (viewBy === 'capacity') {
      return this.getCapacity;
    } else if (viewBy === 'category') {
      return this.getCategory;
    } else if (viewBy === 'format') {
      return this.getFormat;
    } else {
      return this.getCountry;
    }
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
};
