import React, {useContext} from "react";

import { Context } from "../store/appContext";


export const Detailscharacters = () => {

  const {store, actions} = useContext(Context);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="http://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_1024x1024.jpg?v=1616087475" width={700} />
          </div>
          <div className="col">
          {store.url.map((elm, index)=>{
            return <p>{elm.url}</p>
          })}
          </div>
        </div>
      </div>
      <table>           
      </table>
    </>
  );
};
