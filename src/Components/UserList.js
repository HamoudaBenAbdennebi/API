import React,{useState,useEffect} from 'react'
import axios from 'axios';

const UserList = () => {
    const [users,setUsers] = useState('')

    useEffect(()=>{
const loadData = async () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> setUsers(res.data))
}
loadData()
    },[])
    return (
        users?
        <div>
            {
                users.map(item=>{
                    return(
                        <>
                        <p>nom: {item.name}</p>


                        </>
                    )
                })
            }
            
        </div>:
        <div><p>loading</p></div>
    )
}

export default UserList
