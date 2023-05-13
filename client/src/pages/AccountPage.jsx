import axios from "axios"
import { useContext } from 'react'
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"

export const AccountPage = () => {
    const { user, setUser } = useContext(UserContext)

    async function logout() {
        await axios.post('/logout')
        setUser(null)
    }

    return (
        <div>
            <Link to={'/'} className=''><button onClick={logout} className='border font-thin rounded-full px-4 py-1 bg-slate-700 text-white'>
                LOGOUT</button></Link>

        </div>
    )
}


