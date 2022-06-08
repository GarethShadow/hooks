import React, {useEffect} from "react";

const HookCounter = (props) => {
    const {value} = props;

    useEffect(() => {
        console.log("mount");
        return () => console.log("un mount ");
    }, [])

    useEffect(() => console.log("update"));

    return <div>Hook value: {value}</div>
}

export default HookCounter;