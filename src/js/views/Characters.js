import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Characters = () => {
    
const {store, actions} = useContext(Context);   
    
    return <div className="container">
        <h2>Characters</h2>
        <div className="row">
        {store.characters.map((elm, index)=>{
            return <Card title={elm.name}  route={"/detail/character/" + elm.uid}/>
           })}
        </div>
    </div>       
}          

