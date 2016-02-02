import _ from 'lodash';
import { eventbriteToken } from '../constants/Keys';

export default {
  base: 'https://www.eventbriteapi.com/v3',
  options: {
    headers: {
      'Authorization': 'Bearer ' + eventbriteToken,
    }
  },
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
  getCapacity(event) {
    if (event) {
      if (event.capacity) {
        return event.capacity;
      }
    }
    return 0;
  },
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
  //getTicketClasses
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
  exists(data, label) {
    if (data && label) {
      const labels = _.pluck(data, 'label');
      return _.includes(labels, label);
    }
    return false;
  },
  find(data, label) {
    if (data && label) {
      return _.findIndex(data, function (o) {
        return o.label === label;
      });
    }
    return null;
  }
}
