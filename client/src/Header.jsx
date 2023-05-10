import { useContext, useState } from 'react'
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';


const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const { user, setUser } = useContext(UserContext)

    async function logout() {
        await axios.post('/logout')
        setUser(null)
    }
    return (
        <header>
            <div className='h-[70px] w-[100%] pt-2 flex'>
                <div onClick={handleClick} className='md:hidden z-10 fixed right-[20px] top-[20px] text-[20px]'>
                    <BiMenu />
                </div>
                <Link to={'/'} className=''>
                    <h1 className='h-[70px] flex flex-col justify-start items-center p-4 pl-6 font-semibold font-mont text-3xl'>
                        ランゲージラボ
                        <h2 className='text-sm font-regular text-slate-600'>LANGUAGE LAB</h2></h1>
                </Link>


                <ul className='hidden font-nunito fixed w-[70%] h-[70px] right-[30px] md:flex justify-end items-center gap-8'>
                    <Link to={'/'}><li className=''>HOME</li></Link>
                    <li className=''>ABOUT</li>
                    <li className=''>SKILLS</li>
                    <li className=''>PROJECTS</li>
                    {!user ? (<Link to={'/login'} className=''><button className='border font-thin rounded-lg px-3 py-2.5 bg-slate-700 text-white'>
                        SIGN IN</button></Link>) : (<Link to={'/'} className=''><button onClick={logout} className='border font-thin rounded-lg px-3 py-2.5 bg-slate-700 text-white'>
                            LOGOUT</button></Link>)}
                </ul>


                <ul className={!nav ? 'hidden' : 'absolute font-light font-nunito top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
                    <li className='py-4 text-2xl'>HOME</li>
                    <li className='py-4 text-2xl'>ABOUT</li>
                    <li className='py-4 text-2xl'>SKILLS</li>
                    <li className='py-4 text-2xl'>PROJECTS</li>
                    {!user ? (<Link to={'/login'} className=''><button className='border font-thin rounded-lg px-3 py-2.5 bg-slate-700 text-white'>
                        SIGN IN</button></Link>) : (<Link to={'/'} className=''><button onClick={logout} className='border font-thin rounded-lg px-3 py-2.5 bg-slate-700 text-white'>
                            LOGOUT</button></Link>)}
                </ul>


            </div>
            {!!user && (
                <div className='pt-2 font-nunito text-lg fixed w-[100%] right-[30px] md:flex justify-end items-center'>Logged in as {user.name}</div>
            )}
        </header>
    )
}

export default Header
