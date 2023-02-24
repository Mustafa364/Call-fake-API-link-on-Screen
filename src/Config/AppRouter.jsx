import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Post from "../Screen/post";
import Todos from "../Screen/todos";
import Comments from "../Screen/comments";
import Users from "../Screen/users";
import Albums from "../Screen/albums";





function AppRouter(){
return <>
<BrowserRouter>
<nav>
    <Link to="/todo"> <button> Todo Page </button> </Link>
    <Link to="/post"> <button>Post Page </button> </Link>
    <Link to="/users"> <button>Users Page </button> </Link>
    <Link to="/Comments"> <button> Comments Page </button> </Link>
    <Link to="/albums"> <button> Albums Page </button> </Link>
  
 
</nav>
<Routes>
<Route path="todo" element={<Todos/>}/> 
<Route path="post" element={<Post/>}/> 
<Route path="Comments" element={<Comments/>}/> 
<Route path="users" element={<Users/>}/> 
<Route path="albums" element={<Albums/>}/> 
</Routes>
</BrowserRouter>
</>
}
export default AppRouter;