import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User = () => {
    const {id} = useParams()
    let [user,setUser] = useState({});
    useEffect(()=>{
        fetch(`https://api.github.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>(
            console.log(data),
            setUser(data)))
    },[])
  return (
    <div className="flex items-center justify-center p-4 bg-slate-600 text-white text-3xl flex-row gap-10">
        <img src={user?.avatar_url} alt="" className="w-32 h-32 rounded-full border-4 border-white"/>
        <div>
            User Name : {user?.name} <br/>
            User Followers : {user?.followers}
        </div>
    </div>
  )
}

export default User
