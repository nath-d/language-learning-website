import { Outlet } from "react-router-dom"
import IndexPage from "./pages/IndexPage"

const Layout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screeen">
                <IndexPage />
                <Outlet />
            </div>
        </>
    )
}

export default Layout