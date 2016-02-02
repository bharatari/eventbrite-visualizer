import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

export default class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter/>
      </Provider>
    );
  }
}
