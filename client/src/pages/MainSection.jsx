import LanguageCards from "../components/LanguageCards"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';

const MainSection = () => {

    const { user, setUser } = useContext(UserContext)
    const [lang, setLang] = useState([])

    axios.get('/allLanguage').then(
        (response) => {
            setLang(response.data)
        }
    )
    return (
        <div className="px-6 py-12 lg:flex lg:justify-center lg:items-center mt-[30px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12">
            {
                lang.map((data) => {
                    return (
                        <LanguageCards key={data._id} name={data.name} desc={data.desc}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MainSection