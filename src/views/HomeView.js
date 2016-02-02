import React from 'react';
import { SearchBox } from '../components';

export default class HomeView extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.pushState(null, '/data', { q: this.props.searchValue });
  };
  handleChange = (event) => {
    this.props.actions.changeSearch(event.target.value);
  };
  render() {
    return (
      <div className="page-background">
        <div className="main-box">
          <h3 className="brand">Eventbrite Visualizer</h3>
          <p className="description">Enter a keyword to search and visualize popular Eventbrite events</p>
          <SearchBox handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={this.props.searchValue} />
        </div>
      </div>
    );
  }
}
