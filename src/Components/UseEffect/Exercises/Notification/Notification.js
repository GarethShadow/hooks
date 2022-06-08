import React, {useEffect, useState} from "react";

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

export default Notification;