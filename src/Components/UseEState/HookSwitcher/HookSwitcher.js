import React, {useState} from "react";

const HookSwitcher = () => {
    const [color, setColor] = useState("white");
    const [colorText, setColorText] = useState("black");
    const [fontSize, setFontSize] = useState(14);

    return (
        <div style={{padding: "10px", backgroundColor: color}}>
            <p style={{fontSize: `${fontSize}px`, color: colorText}}>Test text</p>
            <button onClick={() => {
                setColor("black");
                setColorText("white");
            }}>Dark</button>
            <button onClick={() => {
                setColor("white");
                setColorText("black")
            }}>Light</button>
            <button onClick={() => setFontSize((size) => size + 2)}>+</button>
            <button onClick={() => setFontSize((size) => size - 2)}>-</button>
        </div>
    );
};

export default HookSwitcher;