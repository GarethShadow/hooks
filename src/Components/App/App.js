import React, {useState, useCallback, useMemo, useEffect} from "react";
import UseCollback_useMemo_img from "../../images/102_useCollback_useMemo.png";


const App = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            <div>
                <h2 style={{textAlign: "center"}}>useEffect</h2>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <img style={{height: "190px", marginRight: "10px"}} src={UseCollback_useMemo_img} alt=""/>
                    {visible ? (
                        <div style={{textAlign: "right"}}>
                            <button onClick={() => setValue(v => v + 1)}>+</button>
                            <button onClick={() => setValue(v => v - 1)}>-</button>
                            <button style={{height: "max-content"}} onClick={() => setVisible(false)}>Hide</button>
                            <PlanetInfo id={value}/>
                        </div>
                    ) : (
                        <div>
                            <button style={{height: "max-content"}} onClick={() => setVisible(true)}>Show</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => data);
};

const useRequest = (request) => {
    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), []);
    const [dataState, setDataState] = useState(initialState);

    useEffect(() => {
        setDataState(initialState)
        let cencelled = false;
        request()
            .then(data => !cencelled && setDataState({
                data,
                loading: false,
                error: null,
            }))
            .catch(error => !cencelled && setDataState({
                data: null,
                loading: false,
                error,
            }));
        return () => cencelled = true;
    }, [request, initialState]);

    return dataState;
};

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);

    return useRequest(request);
};

const PlanetInfo = ({id}) => {
    const {data, loading, error} = usePlanetInfo(id);

    if (error) {
        return <div>Something is wrong</div>
    }

    if (loading) {
        return <p>LOADING...</p>
    }

    return <p style={{width: "200px"}}>{id} - {data.name}</p>
};

export default App;
