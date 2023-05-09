import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screeen">
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export default Layout