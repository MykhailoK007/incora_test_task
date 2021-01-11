import React from 'react'
import {PostInfo} from "./PostInfo";
import {connect} from "react-redux";
import {changePostDataThunk, createPostThunk, deletePostThunk} from "../../redux/reducer";

const PostContainer = props =>{
        const {id,userId,title,body,comments} = props.currentPostInfo
        return <PostInfo comments={comments} postTitle={title} postBody={body} postId={id} userId={userId}
                         changePostData={props.changePostDataThunk} deletePost={props.deletePostThunk}
                         createPost={props.createPostThunk}
        />
}
const mapStateToProps = state =>({currentPostInfo:state.currentPostInfo})

export default connect(mapStateToProps,{changePostDataThunk,deletePostThunk,createPostThunk})(PostContainer)
