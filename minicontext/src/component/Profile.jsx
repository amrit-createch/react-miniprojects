import React,{useContext} from "react";
import userContext from "../Context/UserContext";

function Profile() {
     const {user} = useContext(useContext)
    if(!user) return <div> please login </div>
    return <div>welcome {user.username}</div>
}

export default Profile
