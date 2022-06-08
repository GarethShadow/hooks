import React from "react";
import UseStateItem from "../UseState/UseStateItem/UseStateItem";
import UseContextItem from "../UseContext/UseContextItem/UseContextItem";
import UseEffectItem from "../UseEffect/Exercises/UseEffectItem/UseEffectItem";
import DataLoadingItem from "../UseEffect/DataLoading/DataLoadingItem/DataLoadinItem";


function App() {
    const MyContext = React.createContext();

    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            <UseStateItem />
            <MyContext.Provider value="Hello context hook">
                <UseContextItem MyContext={MyContext} />
            </MyContext.Provider>
            <UseEffectItem />
            <DataLoadingItem />
        </div>
    );
}

export default App;
