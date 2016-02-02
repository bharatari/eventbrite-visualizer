import _ from 'lodash';
import DataUtils from './DataUtils';
import Chance from 'chance';
const chance = new Chance();

export default {
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
  processPie(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].value = data[i].data;
      delete data[i].data;
      data[i].color = chance.color({ format: 'hex' });
    }

    return data;
  },
  process(events, propertyFunction) {
    if (events) {
      let data = [];

      for (let i = 0; i < events.length; i++) {
        if (events[i]) {
          const label = propertyFunction(events[i]);

          if (label) {
            if (DataUtils.exists(data, label)) {
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
