import { useState } from "react";

const Home = () =>{
    return (
        <div>
            <Header/>
        </div>
    )
}

function Header(){
    let [cont, setCont] = useState(1);

    const addCont=()=>{
        setCont(cont+1)
    }

    return(
        <div>
            <div>{cont}</div>
            <input type='button' value='add' onClick={addCont}/>
        </div>
    )
}

export default Home