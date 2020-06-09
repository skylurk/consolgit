import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks';

const Navbar = (props) => {
    const { auth, profile} = props;
    return (
        <nav className="nav-wrapper grey darken-3">
                <Link to='/' className="brand-logo company-name">Kasas</Link>
                <SignedInLinks profile={profile} />
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile 
    }
}

export default connect(mapStateToProps)(Navbar);