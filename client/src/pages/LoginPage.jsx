import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../UserContext"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUser } = useContext(UserContext)

    async function LoginUser(event) {
        event.preventDefault()
        try {
            const { data } = await axios.post('/login',
                {
                    email,
                    password
                });
            console.log(data)
            if (data.msg === "success") {
                setUser(data.result)
                alert('Login Successful');
                setRedirect(true)

            } else if (data.msg === "passWrong") {
                alert('Wrong Password')
            } else {
                alert("Login Unsuccessful")
            }

        } catch (e) {
            alert('Login Unsuccessful')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around min-h-screen">
            <div className="mb-72">
                <h1 className="text-2xl text-center mb-4 font-nunito font-semibold">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={LoginUser}>
                    <input type="email"
                        placeholder="yourmail@mail.com"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <button className="w-full p-2 mt-4">Login</button>
                    <div className="py-2 text-center text-gray-500 font-nunito">
                        Not a memeber yet ?
                        <Link className="underline text-black font-semibold" to={'/signUp'}> Sign Up </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage