import { Outlet } from "react-router-dom"
import NavigationBar from "../navigation/navigation"

const RootLayout = () =>{
    return <>
    <NavigationBar />
    <main>
        <Outlet />
    </main>
    </>
}

export default RootLayout;