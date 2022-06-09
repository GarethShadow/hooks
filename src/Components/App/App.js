import React from "react";
import UseStateItem from "../UseEState/UseStateItem/UseStateItem";
import UseContextItem from "../UseContext/UseContextItem/UseContextItem";
import UseEffectItem from "../UseEffect/UseEffectItem/UseEffectItem";



function App() {
    const MyContext = React.createContext();

    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            <UseStateItem />
            <MyContext.Provider value="Hello context hook">
                <UseContextItem MyContext={MyContext} />
            </MyContext.Provider>
            <UseEffectItem />
        </div>
    );
}

export default App;
