import { useState } from "react";

function Home(){
    return (
        <div>
            <Header/>
        </div>
    )
}

function Header(){
    return(
        <div className="header">
            <h1 className="titulo-animado">Título Maneiro</h1>
        </div>
    )
}

export default Home