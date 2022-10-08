import React from 'react';
import {Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    const {id,name,username,email}=friend;

    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p><strong>User name:</strong><Link to={`/friend/${id}`}>{username}</Link></p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default Friend;