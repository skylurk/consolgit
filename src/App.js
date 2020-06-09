import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './components/layout/MainPage';
import SignIn from './components/auth/SignIn';

class  App extends Component{
  render() {
    const { auth } = this.props;
    // console.log(auth);
    const page = auth.uid ? <MainPage /> : <SignIn />
    return (
      <BrowserRouter>
            <div className="App">
              { page }
              {/* <Switch>
                <Route path='/signin' component={SignIn} />
                <Route path='/' component={MainPage} />
              </Switch> */}
            </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
