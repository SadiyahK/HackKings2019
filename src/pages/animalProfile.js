import React from 'react';

import PetProfile from '../components/PetProfile';
import Header from '../components/Header';

export default (props) => {
    const id = props.location.search.split("=")[1];
  return (
    <div className="">   
    <Header/>
        <div className="">
            <PetProfile animalID = {id}/>
        </div>
    </div>
  );
}




