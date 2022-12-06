import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Planets = () => {

const {store} = useContext(Context);

    return <div className="container">
        <h2>Planets</h2>
        <div className="row">
           {store.planets.map((elm, index)=>{
            return <Card titulo={elm.name}/>
           })}
        </div>
    </div>
        
}