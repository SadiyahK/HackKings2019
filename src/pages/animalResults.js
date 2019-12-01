import React from 'react';
import Header from '../components/Header';

import AnimalSearch from '../components/AnimalSearch';

export default (props) => {
    const id = props.location.search.split("=")[1];
    const aniID = id.split(",");
  return (
    <div className="row">   
        <Header/>
        {aniID.map((value, index) => {
            return <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = {value}/>
        </div> 
        })}
    </div>
    
  );
}

