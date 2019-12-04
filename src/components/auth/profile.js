import React from 'react';

const Profile = props => {
    return (
        <div>
            <h1>Profile</h1>
    <p>email: {props.user.email}</p>
        </div>
    )
}

export default Profile;