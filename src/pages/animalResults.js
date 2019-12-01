import React from 'react';
import Header from '../components/Header';

import AnimalSearch from '../components/AnimalSearch';

export default () => {
  
  return (
    <div><Header className = "header"/>
    <div className="">   
        <div className="">
            <AnimalSearch animalID = "A123456"/>
        </div>
    </div>
    </div>
  );
}

