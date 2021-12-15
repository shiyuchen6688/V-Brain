import React from "react"
import Logo from "../components/Logo"
import OptionList from "../components/OptionList"

function Home() {
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Logo />
            <OptionList />
            <p> Welcome</p>
        </div>
    )
}

export default Home