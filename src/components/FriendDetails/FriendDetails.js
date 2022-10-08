import React from 'react';
import { useLoaderData} from 'react-router-dom';
const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const {name,phone,website} = friend;
    return (
        <div>
            <h1><strong>Details About:</strong> {name}</h1>
            <p><strong>Phone: </strong>{phone}</p>
            <p><strong>Website: </strong>{website}</p>
        </div>
    );
};

export default FriendDetails;