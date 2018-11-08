import React from 'react';
import { connect } from 'react-redux';
import queryString from 'querystring';
import * as route from '../../action/route';

export class LandingContainer extends React.Component {
  componentDidMount() {
    console.log('in landing');
  }

  render() {
    const googleLoginBaseURL = 'https://accounts.google.com/o/oauth2/v2/auth';

    const googleLoginQuery = queryString.stringify({
      client_id: '133083091596-eidkf1tktu2evk2vqe1l8c0qdvhdg0sr.apps.googleusercontent.com',
      response_type: 'code',
      redirect_uri: `http://localhost:3000/oauth`,
      scope: `openid profile email`,
    });

    const googleLoginURL = `${googleLoginBaseURL}?${googleLoginQuery}`;

    return (
      <div className="landing-container">
        <button onClick={this.props.goToLogin}>Login</button>
        <button onClick={this.props.goToSignup}>Signup</button>
        <a href={googleLoginURL}>Login with Google!</a>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(route.switchRoute('/login')),
  goToSignup: () => dispatch(route.switchRoute('/signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
