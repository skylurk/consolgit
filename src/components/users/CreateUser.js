import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
// import { Redirect } from 'react-router-dom';

class CreateUser extends Component {
    state = {
        name : '',
        email : '',
        password : '',
        position : '',
        department : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }


    render() {
        const { authError } = this.props;
        // if (auth.uid) return <Redirect to='/' />
        return(
            <div className="create-user-item">
                <div className="create-user z-depth-2">
                <form onSubmit={this.handleSubmit} className="white add-user-form">
                    <h5 className="grey-text text-darken-3">Add User</h5>
                    <div className="input-field">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password...</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <label>Select Department</label>
                    <select
                    id="department"
                     className="browser-default" 
                     onChange={this.handleChange}>
                        <option value="Flight Crew">Flight Crew</option>
                        <option value="Operations">Operations</option>
                        <option value="Maintenance">Maintenance</option>
                    </select><br></br>

                    <label>Select Position</label>
                    <select
                    id="position"
                     className="browser-default" 
                     onChange={this.handleChange}>
                        <option value="Captain">Captain</option>
                        <option value="Co-Pilot">Co-Pilot</option>
                        <option value="Operations">Operations</option>
                        <option value="Engineer">Engineer</option>
                    </select>

                    <div className="input-field">
                        <button className="login-btn  lighten-1 z-depth-0">Register User</button>
                        <div className="red-text center">
                                { authError ? <p>{ authError }</p> : null}
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);