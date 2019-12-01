import React from 'react';

import AnimalSearch from '../components/AnimalSearch';
import NavBar from '../components/NavBar';

export default () => {
  
  return (
    <div className="row">   
        <NavBar/>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A123456"/>
        </div>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A123455"/>
        </div>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A112233"/>
        </div>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A111111"/>
        </div>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A222222"/>
        </div>
        <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
            <AnimalSearch animalID = "A123111"/>
        </div>
    </div>
  );
}

