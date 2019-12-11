import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"

export default function Logout(props) {
    let history = useHistory()
    useEffect(() => {
        localStorage.removeItem('token')
        props.setCurrentUser(null)
        history.push("/")
    }, [])

    return (
        <div>
            I'm pushing you out
        </div>
    )
}
