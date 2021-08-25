import "./Feed.scss";
import { Item } from "./Item";
import { MdFilterList } from "react-icons/md";
import { useState } from "react";

let mockao = [];
for (let i = 0; i < 20; i++) {
    mockao.push({ id: i })
}

let filtersSectionClasses = "filters-section space-x-3"

export const Feed = () => {

    const [showFilters, setShowFilters] = useState(false);

    const toggleShowFilters = () => {
        setShowFilters(!showFilters);
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl md:text-5xl font-bold">Pets para adoção na sua região</h1>
            <div className="w-full flex my-4">
                <button onClick={toggleShowFilters} className="ml-auto btn-filter">
                    <MdFilterList className="text-2xl" />
                </button>
            </div>

            {
                showFilters ?
                    <div className={filtersSectionClasses}>
                        <div className="flex items-center">
                            Cachorro <input className="ml-1" type="checkbox" />
                        </div>
                        <div className="flex items-center">
                            Gato <input className="ml-1" type="checkbox" />
                        </div>
                        <div>Qualquer um <input type="checkbox" /></div>
                    </div> : <> </>
            }

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    mockao.map(x => <Item key={x.id} id={x.id} />)
                }
            </div>
        </div>
    )
}