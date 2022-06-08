import React from "react";
import UseStateItem from "../UseEState/UseStateItem/UseStateItem";
import UseContextItem from "../UseContext/UseContextItem/UseContextItem";



function App() {
    const MyContext = React.createContext();

    return (
        <div>
            <UseStateItem />
            <MyContext.Provider value="Hello context hook">
                <UseContextItem MyContext={MyContext} />
            </MyContext.Provider>
        </div>
    );
}

export default App;
