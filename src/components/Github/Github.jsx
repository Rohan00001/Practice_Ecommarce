// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

const User = () => {
    // let [user,setUser] = useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Darkrider0007")
    //     .then(res=>res.json())
    //     .then(data=>(
    //         console.log(data),
    //         setUser(data)))
    // },[])
    const user = useLoaderData();
  return (
    <div className="flex items-center justify-center p-4 bg-slate-600 text-white text-3xl flex-row gap-10">
        <img src={user.avatar_url} alt="" className="w-32 h-32 rounded-full border-4 border-white"/>
        <div>
            User Name : {user.name} <br/>
            User Followers : {user.followers}
        </div>
    </div>
  )
}

export default User

export const githubLoader = () => {
    const data = fetch("https://api.github.com/users/Darkrider0007");
    console.log(data);
    return data;
}