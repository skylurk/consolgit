import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import UserList from '../UserList';
import UserData from '../UserData';
import EditUser from '../EditUser';
import CreateUser from '../CreateUser';

class UserMain extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="user-main-page">
                 <div className="row">
                     <div className="col s12 m7">
                         <Switch>
                            <Route path='/users/userdata/:id' component={UserData} />
                            <Route path='/users/edituser' component={EditUser} />
                            <Route path='/users/createuser' component={CreateUser} />
                         </Switch>

                     </div>
                     <div className="col s12 m5">
                         <UserList users={users} />
                     </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps)(UserMain);