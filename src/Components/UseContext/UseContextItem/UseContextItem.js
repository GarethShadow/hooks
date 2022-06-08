import React, {useContext} from "react";
import UseContexImage from "../../../images/97_useContext.png";

const UseContextItem = ({MyContext}) => {
    const value = useContext(MyContext)
    return (
        <div>
            <h2 style={{textAlign: "center"}}>useContext</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img style={{height: "190px", marginRight: "10px"}} src={UseContexImage} alt=""/>
                <div>
                    {value}
                </div>
            </div>
        </div>
    );
};

export default UseContextItem;