import React, {useState} from "react";

const App = () => {
    const [name, setName] = useState("Joing");
    const [age, setAge] = useState(25);
    const [rate, setRate] = useState(25);

    return (
        <div style={{width: "550px", margin: "0 auto"}}>

            <h2 style={{textAlign: "center"}}>useEffect</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseCollback_useMemo_img} alt=""/>
                <div>
                    {name} is {age} year old
                    his rate is ${rate} per hout
                </div>
            </div>

        </div>
    );
}
export default App;
