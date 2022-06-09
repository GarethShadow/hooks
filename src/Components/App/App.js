import React, {useState, useContext, useEffect} from "react";
import UseStateImg from "../../images/96_useState.png";
import USseContextImg from "../../images/97_useContext.png";
import UseEffectImg from "../../images/98_useEffect.png";
import UseEffectExImg from "../../images/99_useEffect_нпражнения.png";
import UseEffectDataLeadingImg from "../../images/100_использование_useEffect_для_загрузки_данных.png";


const App = () => {
    const MyContext = React.createContext();
    return (
        <div style={{width: "550px", margin: "0 auto"}}>
            <HookUseState/>
            <MyContext.Provider value="Hello context hook">
                <HookUseContext MyContext={MyContext} />
            </MyContext.Provider>
            <HookUseEffect />
            <HookUseEffectDataLoading />
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
                <button onClick={changePerson}>Change first name</button>
            </div>

        </div>
    );
};

const HookUseContext = ({MyContext}) => {
    const value = useContext(MyContext)
    return (
        <div>
            <h2 style={{textAlign: "center"}}>useContext</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={USseContextImg} alt=""/>
                <div>
                    {value}
                </div>
            </div>
        </div>
    );
};

const HookUseEffect = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h2 style={{textAlign: "center"}}>useEffect</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseEffectImg} alt=""/>
                {visible ? (
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <HookCounter value={value}/>
                            </div>
                            <button style={{height: "max-content", marginLeft: "10px"}}
                                    onClick={() => setVisible(false)}>hide
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setValue(v => v + 1)
                            }}>+
                            </button>
                            <button onClick={() => {
                                setValue(v => v - 1)
                            }}>-
                            </button>
                            <button onClick={() => {
                                setValue(0)
                            }}>clear
                            </button>
                        </div>
                    </div>
                ) : (<button style={{height: "max-content"}} onClick={() => setVisible(true)}>how</button>)}
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseEffectExImg} alt=""/>
                <Notification/>
            </div>
        </div>
    );
}

const HookCounter = (props) => {
    const {value} = props;

    useEffect(() => {
        console.log(" useEffect() ");
        return () => console.log("clear");
    }, [value])

    return  <div>Hook value: {value}</div>
}

const HookUseEffectDataLoading = () => {
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
                <img style={{height: "190px", marginRight: "10px"}} src={UseEffectDataLeadingImg} alt=""/>
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

const Notification = () => {
    const [hide, setHide] = useState(true);
    const [visible , setVisible] = useState(false);

    useEffect(() => {
        const hideTimeout = setTimeout(() => setHide(false), 3000);
        const visibleTimeout = setTimeout(() => setVisible(true), 5000);
        return () => {
            clearTimeout(hideTimeout);
            clearTimeout(visibleTimeout);
        };
    }, []);

    return (
        <div>
            {hide && <p>Hello hide useEffect</p>}
            {visible && <p>Hello visible useEffect</p>}
        </div>
    );
}


export default App;
