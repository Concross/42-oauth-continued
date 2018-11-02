import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthForm from '../auth-form';
import { signupRequest, loginRequest } from '../../action/auth-actions';

class Landing extends React.Component {
  render() {
    console.log(this.props.match);
    const { auth } = this.props.match.params;
    const handleComplete = auth === 'signup' ? this.props.signup : this.props.login;

    const redirectToDashboard = path => this.props.history.replace(path);
    return (
      <AuthForm onComplete={handleComplete} redirect={redirectToDashboard} auth={auth} />
    );
  }
}

const mapStateToProps = state => ({ token: state.token });

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)),
    login: user => dispatch(loginRequest(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
