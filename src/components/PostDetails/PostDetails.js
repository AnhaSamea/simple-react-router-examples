import React from 'react';
import { useLoaderData,useNavigate} from 'react-router-dom';
const PostDetails = () => {
const post = useLoaderData();
// console.log(post);
const { title, body,userId } = post;
const navigate = useNavigate()
const handleNavigate = ()=>{
    navigate(`/friend/${userId}`)
}

    return (
        <div>
             <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default PostDetails;