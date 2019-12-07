import React from 'react';

const Profile = props => {
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <img className="profile-image" src={props.user.profileImage} alt="profile" />
            <p>Full Name: {props.user.fullName}</p>
            <p>First Name: {props.user.firstName}</p>
            <p>Last Name: {props.user.lastName}</p>
            <p>email: {props.user.email}</p>
        </div>
    )
}

export default Profile;