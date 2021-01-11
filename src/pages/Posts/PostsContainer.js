import React from "react";
import {connect} from "react-redux";
import {PageTemplate} from "../../components/PageTemplate";
import {createPostThunk, setCurrentPostCommentsThunk} from "../../redux/reducer";

class PostsContainer extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(postData){
        this.props.setCurrentPostCommentsThunk(postData);
    }
    render() {
        return <PageTemplate list={this.props.userPosts} tableHeadData={['ID','USER_ID','TITLE','BODY']}
                             handleFunc={this.handleClick}
                             createPost={this.props.createPostThunk}
                             currentUserId={this.props.currentUserId}
        />
    }
}
const mapStateToProps = state =>{
    return {
        userPosts: state.userPosts,
        currentUserId:state.currentUserId
    }
}
export default connect(mapStateToProps,{setCurrentPostCommentsThunk,createPostThunk})(PostsContainer)

