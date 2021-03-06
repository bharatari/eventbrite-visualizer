import React, { PropTypes } from 'react';
import ChartUtils from '../utils/ChartUtils';
import { Bar } from 'react-chartjs';

export default class BarChart extends React.Component {
  state = {
    options: {
      responsive: true,
      scaleFontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      scaleFontSize: 12,
      scaleFontStyle: 'normal',
      scaleFontColor: 'white',
      tooltipFontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: 'normal',
      tooltipFontColor: 'white',
      tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: 'bold',
      tooltipTitleFontColor: 'white',
    },
  };
  static propTypes = {
    data: PropTypes.array.isRequired,
    viewBy: PropTypes.string.isRequired,
  };
  componentDidMount() {
    if (this.props.data) {
      const data = ChartUtils.processBar(
        ChartUtils.process(this.props.data, this.props.viewBy)
      );
      this.setState({
        data,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    const data = ChartUtils.processBar(
      ChartUtils.process(nextProps.data, nextProps.viewBy)
    );
    this.setState({
      data: data,
    });
  }
  render() {
    let content;
    if (this.state.data) {
      content = <Bar className="canvas" data={this.state.data} options={this.state.options} />
    } else {
      content = null;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
