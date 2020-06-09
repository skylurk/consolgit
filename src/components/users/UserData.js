import React from 'react';

const UserData = (props) => {
    const id = props.match.params.id;
        return(
            <div className="view-user-data">
                <p>User Data - {id}</p>
            </div>
        )
    }

export default UserData;