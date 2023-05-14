import LanguageCards from "../components/LanguageCards"

const MainSection = () => {
    return (
        <div className="px-6 py-12 lg:flex lg:justify-center lg:items-center mt-[30px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12">
                <LanguageCards />
                <LanguageCards />
                <LanguageCards />
                <LanguageCards />
                <LanguageCards />
                <LanguageCards />
            </div>
        </div>
    )
}

export default MainSection