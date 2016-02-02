import React from 'react';
import DataUtils from '../utils/DataUtils';
import { viewByTypes, graphTypes } from '../constants/Values';
import { BarChart, PieChart, Select } from '../components';

export default class DataView extends React.Component {
  componentWillMount() {
    this.props.actions.fetchEvents(this.props.query.q);
  }
  handleChange = (event) => {
    this.props.actions.changeViewBy(event.target.value);
  };
  handleGraphChange = (event) => {
    this.props.actions.changeGraph(event.target.value);
  };
  render() {
    let graph = () => {
      if (this.props.requestingEvents) {
        return (
          <div className="col-md-4 col-md-offset-4">
            <h3 className="loading">Loading...</h3>
          </div>
        );
      } else {
        if (this.props.graph === 'bar') {
          return <BarChart data={this.props.events} viewBy={this.props.viewBy} />;
        } else {
          return <PieChart data={this.props.events} viewBy={this.props.viewBy} />;
        }
      }
    };

    return (
      <div className="page-background">
        <div className="container col-sm-8 col-sm-offset-2">
          <h3 className="brand">Eventbrite Visualizer</h3>
          <div className="select-container col-xs-6 col-xs-offset-3">
            <p className="description-inline">View By</p>
            <Select class="select" optionClass="select-option" options={viewByTypes} value={this.props.viewBy} onChange={this.handleChange} />
          </div>
          <div className="select-container container-margin col-xs-6 col-xs-offset-3">
            <p className="description-inline">Graph By</p>
            <Select class="select" optionClass="select-option" options={graphTypes} value={this.props.graph} onChange={this.handleGraphChange} />
          </div>
          {graph()}
        </div>
      </div>
    );
  }
}
