import { Outlet } from "react-router"
import Header from "./components/HeaderFile"
export default function Layout() {
    return (
        <div className="p-4">
            <Header/>
            <Outlet/>
        </div>
    )
}