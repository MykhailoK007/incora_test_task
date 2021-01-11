import {actionsWithApi} from "../API/api";

const SET_USER_LIST = "SET_USER_LIST";
const SET_USER_POSTS ="SET_USER_POSTS";
const SET_POST_COMMENTS ="SET_POST_COMMENTS";
const CHANGE_POST_DATA = "CHANGE_POST_DATA";
const DELETE_POST = "DELETE_POST";
const CREATE_POST = "CREATE_POST";
const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID"
const initialState = {
    usersList:[],
    userPosts:[],
    currentPostInfo:{},
    currentUserId:''
}
export const reducer = (state =initialState,action) =>{
    switch(action.type){
        case SET_USER_LIST:
            return {
                ...state,
                usersList:[...action.dataList]
            }
        case SET_USER_POSTS:

            return {
                ...state,
                userPosts:[...action.posts]
            }
        case SET_POST_COMMENTS:
            const postData =action.postData;
            return {
                ...state,
                currentPostInfo:{
                    id:postData[0],
                    userId:postData[1],
                    title:postData[2],
                    body:postData[3],
                    comments:[...action.commentsList]
                }
            }
        case SET_CURRENT_USER_ID:
            return {
                ...state,
                currentUserId:action.id
            }
        default:
            return state;
    }
}
const setUserList =(dataList)=>({type:SET_USER_LIST, dataList});
const setUserPosts = (posts)=>({type:SET_USER_POSTS,posts});
const setCurrentPostComments = (postData,commentsList)=>({type:SET_POST_COMMENTS, postData, commentsList})
const changePostData = ()=>({type:CHANGE_POST_DATA})
const deletePost = ()=>({type:DELETE_POST})
const createPost = data=>({type:CREATE_POST,data})
const setCurrentUserId= (id)=>({type:SET_CURRENT_USER_ID,id})

export const setUsersListThunk = ()=> dispatch =>actionsWithApi.getUsers().then(res=>dispatch(setUserList(res)));
export const setUserPostsThunk = (id) => dispatch =>{actionsWithApi.getUserPosts(id)
    .then(res=>{
        dispatch(setUserPosts(res))
        dispatch(setCurrentUserId(id))
    })
}
export const setCurrentPostCommentsThunk = (data) => dispatch =>{actionsWithApi.getPostInfo(data[0])
    .then(res=>{
        dispatch(setCurrentPostComments(data,res))
    })
}
export const changePostDataThunk =(id,data) => dispatch =>{actionsWithApi.updatePost(id,data)
    .then(res=>dispatch(changePostData(res)))
}
export const deletePostThunk = id=> dispatch =>{actionsWithApi.deletePost(id).then(()=>dispatch(deletePost()))}
export const createPostThunk = data =>dispatch  => {
    actionsWithApi.createPost(data)
        .then(() => dispatch(createPost(data)))
}
