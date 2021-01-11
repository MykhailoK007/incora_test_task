import axios from "axios";


const apiLists = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const actionsWithApi = {
    getUsers(){return apiLists.get('/users').then(res => {
        return res.data})},
    getUserPosts(id){return apiLists.get(`posts?userId=${id}`).then(res =>res.data)},
    updatePost(id,data){ return apiLists.put(`/posts/${id}`,{title:data.title,body:data.body})},
    getPostInfo(id){return apiLists.get(`comments?postId=${id}`).then(res=>res.data)},
    deletePost(id){return apiLists.delete(`posts/${id}`)},
    createPost(data){return apiLists.post(`posts`,{title:data[1],body:data[2],userId:data[0]})}
}

