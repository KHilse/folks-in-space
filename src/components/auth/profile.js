import React from 'react';
import Card from '@material-ui/core/Card';

const cardStyle = {
    display: 'block',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '30vw',
    height: '40vw',
    transform: 'translate(-50%,-50%)',
    transitionDuration: '0.3s',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
}

const Profile = props => {
    return (
        <Card raised={true} style={cardStyle}>
            <div>
                <h1>Profile</h1>
                <img className="profile-image" src={props.user.profileImage} alt="profile" />
                <p>Full Name: {props.user.fullName}</p>
                <p>First Name: {props.user.firstName}</p>
                <p>Last Name: {props.user.lastName}</p>
                <p>Email: {props.user.email}</p>
            </div>
        </Card>
    )
}

export default Profile;