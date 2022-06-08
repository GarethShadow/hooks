import HookSwitcher from "../HookSwitcher/HookSwitcher";
import ObjectState from "../ObjectState/ObjectState";
import UseStateImage from "../../../images/96_useState.png"

const UseStateItem = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>useState</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseStateImage} alt=""/>
                <div>
                    <HookSwitcher />
                    <ObjectState />
                </div>
            </div>
        </div>

    );
}

export default UseStateItem;