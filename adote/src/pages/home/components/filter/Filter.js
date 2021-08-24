import { useEffect, useState } from "react";
import "./Filter.scss";
import { Field, Formik } from 'formik';
import { BiSearchAlt } from "react-icons/bi"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const Filter = ({ cities }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [results, setResults] = useState(cities);
    const [overlayRef, setOverlayRef] = useState(null);


    useEffect(() => {
        setResults(cities);
    }, [cities])

    useEffect(() => {
        setOverlayRef(document.getElementById("autocomplete--overlay--filter"));
    }, [overlayRef])

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
        if(!showOverlay){
            disableBodyScroll(overlayRef);
        }
        else{
            enableBodyScroll(overlayRef);
        }
    }

    const filter = (value) => {
        const key = value.trim();
        const results = cities.filter(item => item.nome.toLocaleUpperCase().includes(key.toLocaleUpperCase()));
        setResults(results);
    }

    const selectFilter = (city, setFieldValue) => {
        if (!city) {
            setShowOverlay(false);
            enableBodyScroll(overlayRef);
            return;
        }
        setFieldValue('filter', city.nome, false)
        setShowOverlay(!showOverlay);
    }

    return (
        <div>
            {
                showOverlay ?
                    <div className="backdrop"></div> :
                    <></>

            }
            <div className="autocomplete">
                <Formik
                    initialValues={{
                        filter: ""
                    }}
                >
                    {
                        ({ setFieldValue, handleChange, handleBlur }) =>
                            <form>
                                <div style={{ position: "relative" }}>
                                    <BiSearchAlt className="search-icon text-gray-500" />
                                    <Field className="autocomplete-input"
                                        id="autocomplete--filter"
                                        name="filter"
                                        autoComplete={'' + Math.random()}
                                        onFocus={toggleOverlay}
                                        onChange={(ev) => {
                                            filter(ev.target.value);
                                            handleChange(ev);
                                        }}
                                        onBlur={(ev) => {
                                            selectFilter(null)
                                            handleBlur(ev);
                                        }}
                                        type="text"
                                    />
                                </div>
                                <div id="autocomplete--overlay--filter" className={`autocomplete-overlay ${showOverlay ? "overlay-in" : "overlay-out"}`}>
                                    <div className="overlay-content">
                                        <ul>
                                            {results.map(x => <li key={x.id} onMouseDown={(ev) => selectFilter(x, setFieldValue, handleBlur, ev)}>
                                                {`${x.nome} - ${x.municipio.microrregiao.mesorregiao.UF.sigla}`}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <button  className="submit-btn">
                                    Ir
                                </button>
                            </form>
                    }
                </Formik>
            </div>
        </div>
    )
}


function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
  
function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}