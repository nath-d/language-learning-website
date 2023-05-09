import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

const SignUpPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        try {
            await axios.post('/signUp',
                {
                    name,
                    email,
                    password
                });
            alert('Registration Successful')
        } catch (e) {
            alert('Registration failed')
        }
    }



    return (
        <div className="mt-4 grow flex items-center justify-around min-h-screen">
            <div className="mb-72">
                <h1 className="text-2xl text-center mb-4 font-nunito font-semibold">Sign Up</h1>
                <form className="max-w-md mx-auto " onSubmit={registerUser}>
                    <input type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={event => setName(event.target.value)} />
                    <input type="email"
                        placeholder="yourmail@mail.com"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <button className="w-full p-2 mt-4">Sign Up</button>
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