import { useState } from "react"
import { Link } from "react-router-dom"

const SignUpPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="mt-4 grow flex items-center justify-around min-h-screen">
            <div className="mb-72">
                <h1 className="text-2xl text-center mb-4 font-nunito font-semibold">Sign Up</h1>
                <form className="max-w-md mx-auto ">
                    <input type="text" placeholder="Enter your name"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder="yourmail@mail.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="w-full p-2">Login</button>
                    <div className="py-2 text-center text-gray-500 font-nunito">
                        Already a member?
                        <Link className="underline text-black font-semibold" to={'/login'}> Login </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage