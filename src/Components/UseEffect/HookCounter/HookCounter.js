import React, {useEffect} from "react";

const HookCounter = (props) => {
    const {value} = props;

    useEffect(() => {
        console.log(" useEffect() ");
        return () => console.log("clear");
    }, [value])

    return  <div>Hook value: {value}</div>
}

export default HookCounter;