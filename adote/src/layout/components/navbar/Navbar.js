import "./Navbar.scss";
import { NavbarAction} from "./NavbarAction"
import { GiSittingDog } from "react-icons/gi";

export const Navbar = () => {
    return (
        <div className="navbar px-4 md:px-10">
            <div className="cursor-pointer rounded-full bg-indigo-700 p-4 flex items-center justify-center">
                <GiSittingDog className="text-white text-3xl"/>
            </div>
            <div className="space-x-3 md:space-x-6 flex">
               <NavbarAction primary>Quero adotar</NavbarAction>
               <NavbarAction>Quero doar</NavbarAction>
            </div>
        </div>
    )
}