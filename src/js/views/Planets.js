import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Planets = () => {

const {store, actions} = useContext(Context);

    return <div className="container">
        <h2>Planets</h2>
        <div className="row">
           {store.planets.map((elm, index)=>{
            return <Card title={elm.name} route={"/detail/planet/" + elm.uid}/>
           })}
        </div>
    </div>
        
}