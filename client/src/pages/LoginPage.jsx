import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around min-h-screen">
            <div className="mb-72">
                <h1 className="text-2xl text-center mb-4 font-nunito font-semibold">Login</h1>
                <form className="max-w-md mx-auto ">
                    <input type="email" placeholder="yourmail@mail.com" />
                    <input type="password" placeholder="Password" />
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