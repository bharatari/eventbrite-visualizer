import React, { PropTypes } from 'react';

export default class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    const renderOptions = () => {
      let options = [];
      let index = 0;
      this.props.options.forEach((option) => {
        options.push(
          <option key={index} value={option.value} className={this.props.optionClass}>
            {option.label}
          </option>
        );
        index++;
      });
      return options;
    };
    return (
      <select className={this.props.class} value={this.props.value} onChange={this.props.onChange}>
        {renderOptions()}
      </select>
    );
  }
}
