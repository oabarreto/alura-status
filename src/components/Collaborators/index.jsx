import { useState, useEffect } from 'react'
import CollabCard from"../CollabCards"
export default function Collaborators({ name }) {
    const [userInfos, setUserInfos] = useState({})

    const getUser = () => {
        const URL = `https://api.github.com/users/${name}`
        useEffect(() => {
            fetch(URL)
             .then(response => response.json())
             .then(data => setUserInfos(data)) 
        },[]) 
    }
    getUser()
    
    return (

        <CollabCard 
        avatar={userInfos.avatar_url} 
        name={userInfos.name} url={userInfos.html_url}
        user_login={userInfos.login}
        />
    )
}

 