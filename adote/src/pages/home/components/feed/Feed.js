import "./Feed.scss";
import { Item } from "./Item";
import { MdFilterList } from "react-icons/md";

let mockao = [];
for (let i = 0; i < 20; i++) {
    mockao.push({id: i}) 
}

export const Feed = () => {
    return (
        <div className="p-10">
            <h1 className="text-4xl md:text-5xl font-bold">Pets para adoção na sua região</h1>
            <div className="w-full flex my-4">
                <button className="ml-auto btn-filter">
                    <MdFilterList className="text-2xl" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    mockao.map(x => <Item key={x.id}/>)
                }
            </div>
        </div>
    )
}