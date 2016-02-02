import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DataView from '../views/DataView';
import * as EventActions from '../actions/EventActions';
import * as UserActions from '../actions/UserActions';
import { pushState } from 'redux-router';

class DataContainer extends React.Component {
  render() {
    return (
      <DataView {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.router.location.query,
  events: state.event.events,
  viewBy: state.user.viewBy,
  graph: state.user.graph,
});

const ActionCreators = {
  ...EventActions,
  ...UserActions,
  pushState,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
