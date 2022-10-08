import React from 'react';
import './Friend.css'
const Friend = ({friend}) => {
    const {name,username,email}=friend;

    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p><strong>User name:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Friend;