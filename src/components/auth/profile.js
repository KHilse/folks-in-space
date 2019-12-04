import React from 'react';

const Profile = props => {
    return (
        <div>
            <h1>Profile</h1>
            <img src={props.user.profileImage} />
            <p>Full Name: {props.user.fullName}</p>
            <p>First Name: {props.user.firstName}</p>
            <p>Last Name: {props.user.lastName}</p>
            <p>email: {props.user.email}</p>
        </div>
    )
}

export default Profile;