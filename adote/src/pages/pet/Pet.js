import "./Pet.scss";
import { Link } from "react-router-dom";
export const Pet = () => {
    return(
        <div className="pet-page container mx-auto">
            <div className="pt-3 self-start flex items-center">
            <Link className=" underline text-gray-600" to="/">Home </Link> &nbsp;/ Pet
            </div>
            <section className="photos mt-4">
                <div className="photo" style={{backgroundImage: "url(" +
                     "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    + ")"
                }}>
                </div>
            </section>
            <section className="actions">
                <button className="adopt-btn">Quero adotar! 😍</button>
            </section>
            <section className="pet-details">
                <h1 className="pet-name">Sherlock</h1>
                <p className="description">
                Lotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sd
                lotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sd
                lotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sd
                lotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sdlotrm sd
                </p>
            </section>
        </div>
    )    
}