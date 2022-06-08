import React, {useState} from "react";
import UseStateImg from "../../images/96_useState.png";


const App = () => {
    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            <HookUseState/>
        </div>
    );
}

const HookUseState = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>useState</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseStateImg} alt=""/>
                <div>
                    <HookUseStateSwitcher/>
                    <HookUseStateObject />
                </div>
            </div>
        </div>

    );
}

const HookUseStateSwitcher = () => {
    const [color, setColor] = useState("white");
    const [colorText, setColorText] = useState("black");
    const [fontSize, setFontSize] = useState(14);

    return (
        <div style={{paddingBottom: "10px", backgroundColor: color}}>
            <p style={{margin: "0px", marginBottom: "10px", fontSize: `${fontSize}px`, color: colorText}}>Testing useState</p>
            <button onClick={() => {
                setColor("black");
                setColorText("white");
            }}>Dark
            </button>
            <button onClick={() => {
                setColor("white");
                setColorText("black")
            }}>Light
            </button>
            <button onClick={() => setFontSize((size) => size + 2)}>+</button>
            <button onClick={() => setFontSize((size) => size - 2)}>-</button>
        </div>
    );
}

const HookUseStateObject = () => {
    const [person, setPerson] = useState({
        firstName: "Bob",
        lastName: "Smith"
    });

    const [firstName, setFirstName] = useState("Bob");
    const [lastName, setLastName] = useState("Smith");

    const changePerson = () => {
        setPerson((person) => {
            return {
                ...person,
                firstName: "Alexander"
            }
        });
    };

    return (
        <div>
            <div>
                <div>{firstName} {lastName}</div>
                <button onClick={() => setFirstName("Alexander")}>Click me</button>
            </div>
            <div>
                <div>{person.firstName} {person.lastName}</div>
                <button onClick={changePerson}>Change name</button>
            </div>

        </div>
    );
};


export default App;
