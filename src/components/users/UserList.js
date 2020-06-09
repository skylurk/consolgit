import React from 'react';
import UserSummary from './UserSummary'

const UserList = ({users}) => {
    return (
        <div className="user-list section">
            <div className="card z-depth-2 user-summary">
                { users && users.map(user =>{
                    return (
                        <UserSummary user={user} key={user.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default UserList;