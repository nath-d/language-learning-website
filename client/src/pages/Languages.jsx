import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Languages = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    async function registerLanguage(event) {
        event.preventDefault();
        try {
            await axios.post('/language',
                {
                    name,
                    desc
                });
            alert('Upload Successful')
        } catch (e) {
            alert('Upload failed')
        }
    }



    return (
        <div className="mt-4 grow flex items-center justify-around min-h-screen">
            <div className="mb-72">
                <Link to={'/'}>
                    <h1 className='flex flex-col justify-start items-center font-semibold font-mont text-3xl mb-24'>
                        ランゲージラボ
                        <h2 className='text-sm text-slate-600'>LANGUAGE LAB</h2></h1>
                </Link>
                <h1 className="text-2xl text-center mb-4 font-nunito font-semibold">Upload Courses</h1>
                <form className="max-w-md mx-auto " onSubmit={registerLanguage}>
                    <input type="text"
                        placeholder="Enter course name"
                        value={name}
                        onChange={event => setName(event.target.value)} />
                    <input type="text"
                        placeholder="Enter course description"
                        value={desc}
                        onChange={event => setDesc(event.target.value)} />
                    <button className="w-full p-2 mt-4">Upload</button>

                </form>
            </div>
        </div>
    )
}
