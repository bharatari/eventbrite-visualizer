import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeView from '../views/HomeView';
import { pushState } from 'redux-router';
import * as UserActions from '../actions/UserActions';

class HomeContainer extends React.Component {
  render() {
    return (
      <HomeView {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  searchValue: state.user.searchValue
});

const ActionCreators = {
  pushState,
  ...UserActions
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
