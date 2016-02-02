import _ from 'lodash';
import DataUtils from './DataUtils';
import Chance from 'chance';
const chance = new Chance();

export default {
  /**
   * Processes array and formats it for Chart.js bar chart.
   *
   * @param {Array} data - Array of objects with label and data keys.
   * @return {Array}
   */
  processBar(data) {
    let allData = {
      labels: [],
      datasets: [
        {
          fillColor: 'white',
          strokeColor: 'white',
          highlightFill: 'white',
          highlightStroke: 'white',
          data: [],
        },
      ],
    };

    for (let i = 0; i < data.length; i++) {
      allData.labels.push(data[i].label);
      allData.datasets[0].data.push(data[i].data);
    }

    return allData;
  },

  /**
   * Processes array and formats it for Chart.js pie chart.
   *
   * @param {Array} data - Array of objects with label and data keys.
   * @return {Array}
   */
  processPie(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].value = data[i].data;
      delete data[i].data;
      data[i].color = chance.color({ format: 'hex' });
    }

    return data;
  },

  /**
   * Processes array of events and converts it to an array of
   * objects with label and data keys based on a function that returns
   * a label.
   *
   * @param {Array} events - Array of events.
   * @param {string} viewBy - The user's chosen viewBy property.
   * @return {Array}
   */
  process(events, viewBy) {
    if (events) {
      let data = [];

      for (let i = 0; i < events.length; i++) {
        if (events[i]) {
          const label = DataUtils.getProperty(events[i] , DataUtils.getViewByProperty(viewBy));

          if (label) {
            if (DataUtils.exists(data, label)) {
              // If the label already exists, just increment its data key
              const index = DataUtils.find(data, label);
              data[index].data++;
            } else {
              data.push({
                label: label,
                data: 1
              });
            }
          }
        }
      }

      return data;
    } else {
      return events;
    }
  }
};
