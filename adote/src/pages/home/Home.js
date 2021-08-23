import { useEffect, useState } from "react";
import { Filter } from "./components/filter/Filter"
import "./Home.scss";
import axios from "axios";

export const Home = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let _cities = [];
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
            .then((res) => {
                _cities = res.data;
                _cities.sort((a, b) => a.nome.localeCompare(b.nome));
                _cities.sort((a, b) => a.municipio.microrregiao.mesorregiao.UF.sigla.localeCompare(b.municipio.microrregiao.mesorregiao.UF.sigla));
            })
            .finally(() => {
                setCities(_cities);
                setLoading(true);
            })
    }, []);

    useEffect(() => {
    }, [loading])


    return (
        <div>
            <div className="home-filter">
                {
                    !loading ?
                        <div className="h-full w-full flex items-center justify-center text-gray-100">
                            Carregando...
                        </div> :
                        <div className="flex flex-col items-center">
                            <label className="text-white  text-xl mb-5">Encontre um Pet na sua cidade &#128054;</label>
                            <Filter cities={cities} />
                        </div>
                }
            </div>
        </div>
    )
}