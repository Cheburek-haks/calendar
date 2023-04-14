import React from "react";
import "./App.css";
import { ClickIcon, Number } from "./shared";
import iconArrowRight from "./shared/assets//img/iconArrowRight.svg";
import iconArrowLeft from "./shared/assets//img/iconArrowLeft.svg";
import iconPlus from "./shared/assets//img/iconPlus.svg";

function App() {
    return (
        <div className="App">
            <ClickIcon size="small" icon={iconArrowLeft} />
            <ClickIcon size="small" icon={iconPlus} />
            <ClickIcon size="small" icon={iconArrowRight} />
            <Number title="1" />
            <Number title="2" />
            <Number title="3" />
            <Number title="11" />
            <Number title="12" />
            <Number title="13" />
        </div>
    );
}

export default App;
