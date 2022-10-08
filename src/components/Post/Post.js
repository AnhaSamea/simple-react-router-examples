import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p>{body}</p>
            {/* first one */}
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            {/* second one */}
            <button onClick={handleNavigate}>Show Details 2</button>
            {/* third one */}
            <Link to={`/post/${id}`}>Visit here </Link>
        </div>
    );
};

export default Post;