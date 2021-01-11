import './App.css';
import React from "react";
import UsersContainer from "./pages/Users/UsersContainer";
import  {Switch, Route} from "react-router-dom";
import PostsContainer from "./pages/Posts/PostsContainer";
import PostContainer from "./pages/Post/PostContainer";

function App() {
  return (
    <div>
        <Switch>
            <Route path="/" exact children={<UsersContainer/>}/>
            <Route path={"/posts/:userId"} exact children={<PostsContainer/>}/>
            <Route path={"/post/:postId"} exact children={<PostContainer/>}/>
        </Switch>
    </div>
  );
}
export default App;
