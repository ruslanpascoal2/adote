import "./Navbar.scss";
import { NavbarAction} from "./NavbarAction"
import { GiSittingDog } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    return (
        <div className="navbar px-4 md:px-10">
            <div className="cursor-pointer rounded-full bg-indigo-700 p-4 flex items-center justify-center">
                <Link to="/">
                    <GiSittingDog className="text-white text-3xl"/>
                </Link>
            </div>
            <div className="space-x-3 md:space-x-6 flex">
               <NavbarAction>Quero doar um Pet</NavbarAction>
            </div>
        </div>
    )
}