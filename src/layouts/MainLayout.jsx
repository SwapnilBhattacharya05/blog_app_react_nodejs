import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Navbar />
            {/* SINCE WE WILL BE SHOWING OUR PAGES HERE */}
            {/* CHILDREN CONTENT */}
            <Outlet />
        </div>
    )
}

export default MainLayout