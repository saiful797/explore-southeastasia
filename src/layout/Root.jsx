import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (

        <div className="max-w-[1300px] mx-auto font-Robot">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    );
};

export default Root;