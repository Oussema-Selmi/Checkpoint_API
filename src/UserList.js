import axios from 'axios'
import React,{useState,useEffect} from 'react'
import User from './User'

const UserList = () => {

    const[UsersList ,setUsersList]=useState([])

    const GettingUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsersList(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        GettingUsers()
    }, [])



    return (
        UsersList.map((user)=><User user={user} key={user.id}/>)
    )
}

export default UserList
