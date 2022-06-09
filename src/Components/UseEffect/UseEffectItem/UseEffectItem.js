import UseEffectImage from "../../../images/98_useEffect.png";
import React, {Component, useState} from "react";
import HookCounter from "../HookCounter/HookCounter";

const UseEffectItem = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h2 style={{textAlign: "center"}}>useEffect</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseEffectImage} alt=""/>
                {visible ? (
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <HookCounter value={value}/>
                                <ClassCounter value={value}/>
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
        </div>
    );
}

class ClassCounter extends Component {
    componentDidMount() {
        console.log("class: mount");
    }

    componentDidUpdate() {
        console.log("class: update");
    }

    componentWillUnmount() {
        console.log("class: unmount");
    }

    render() {
        return <p>Class counter: {this.props.value}</p>
    }
}

export default UseEffectItem