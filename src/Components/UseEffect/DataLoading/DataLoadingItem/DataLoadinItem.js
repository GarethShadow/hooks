import React, {useEffect, useState} from "react";
import useEffectDataLoading from "../../../../images/100_использование_useEffect_для_загрузки_данных.png";

const DataLoadinItem = () => {
    const [id, setId] = useState(1);
    const [name, setName] = useState(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then(res => res.json())
            .then(data => !cancelled && setName(data.name));
        return () =>  cancelled = true;
    }, [id]);

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Data loading useEffect</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={useEffectDataLoading} alt=""/>
                <div>
                    {id > 0 ? (<p style={{width: "200px"}}>{id} - {name}</p>) : (<p style={{width: "200px"}}>{id} - dont planet</p>)}

                    <button onClick={() => {
                        setId(v => v + 1)
                    }}>+
                    </button>
                    <button onClick={() => {
                        setId(v => v - 1)
                    }}>-
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DataLoadinItem;