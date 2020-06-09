import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

import logo from '../../assets/images/logowithtext.PNG';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="sign-in-page">
                <div className="row">
                <div className="col s12 m6 left-area valign-wrapper">
                    <div className="left-signin-pane">
                    <form onSubmit={this.handleSubmit} className="white">
                                <h5 className="grey-text text-darken-3">Log In</h5>
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password...</label>
                                    <input type="password" id="password" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button className="login-btn  lighten-1 z-depth-0">Log In</button>
                                    <div className="red-text center">
                                        { authError ? <p>{authError}</p> : null }
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>

                <div className="col s12 m6 right-area valign-wrapper">
                <img src={logo} alt="FlyKasas" />
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
