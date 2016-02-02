import React, { PropTypes } from 'react';

export default class SearchBox extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input className="form-control form-zoom" type="text" placeholder="Search" value={this.props.searchValue} onChange={this.props.handleChange} />
      </form>
    );
  }
}
