import axios from 'axios'
import { useEffect, useState } from 'react'
import './Item.scss'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const Item = () => {
    const [photo, setPhoto] = useState("");
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then((photos) => setPhoto(photos.data.message))
    }, [])
    return (
        <div>
            <div className="feed-item flex relative" style={
                {
                    backgroundImage: "url(" + photo + ")"
                }
            }>
            </div>
            <div className="footer">
                <h1 className="text-md text-indigo-700 font-bold">Sherlock</h1>
                <div className="flex items-center">
                    <span className="text-indigo-700 text-xs mr-2">70</span>
                    <MdFavoriteBorder className="fav-icon text-indigo-700" />
                </div>
            </div>
        </div>
    )
}