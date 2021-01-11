import React, {useState} from "react";
import {Popup} from "../../components/Popup";
import {Link} from "react-router-dom";


export const PostInfo = props =>{
    const [activePopup,togglePopup] = useState(false);

    const handleClick=()=>{
        togglePopup(!activePopup)
    }

    return <div className="tableWrapper">
        <header>Title: {props.postTitle}</header>
        <div className='buttonsContainer'>
            <input type="button" className='editButton' value='Edit' onClick={handleClick}/>
            <Link to={`/posts/${props.userId}`}>
                <input type="button" className='deleteButton' value='Delete'
                       onClick={()=>props.deletePost(props.postId)}/>
            </Link>
        </div>
        <div>
            <div className='header'>Description:</div>
            <div>{props.postBody}</div>
            <div className='header'>Comments:</div>
        </div>
        {
            props.comments && props.comments.map(comment =>{
            return <div key={`${props.postId + comment.email}`}>
                <div>
                    <h3>
                        {comment.name}
                    </h3>
                </div>
                <div>{comment.body}</div>
                <div className='author'>{comment.email}</div>
                <hr/>
            </div>
            }
        )}
        {
            activePopup &&
            <Popup togglePopup={handleClick}
                   redirectLink={`/posts/${props.userId}`} headline={"Edit Post"}
                   isCreatPostPopup={true}
                   handleFunc={props.createPost}
                   userId={props.userId}
            />
        }
    </div>
}
