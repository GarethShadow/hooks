import React, {useState} from "react";

const App = () => {
    const [name, setName] = useState("Joing");
    const [age, setAge] = useState(25);
    const [rate, setRate] useState(25);

    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            {name} is {age} year old
            his rate is ${rate} per hout
        </div>
    );
}
export default App;
