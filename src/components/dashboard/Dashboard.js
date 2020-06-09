import React, { Component } from 'react';
import ItemList from '../handoveritems/ItemList';
import UserList from '../users/UserList';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { handoveritems } = this.props;

        return (
            <div className="dashboard ">
                 <div className="row">
                     <div className="col s12 m5">
                         <UserList />
                     </div>
                     <div className="col s12 m5 offset-m1">
                         <ItemList handoveritems={handoveritems}/>
                     </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        handoveritems: state.firestore.ordered.CaptainQuestionItems
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'CaptainQuestionItems', orderBy: 'questionCode' }
    ])
)(Dashboard);


// Dashboard left to contain list of users
// Dashboard right to contain list of handover items