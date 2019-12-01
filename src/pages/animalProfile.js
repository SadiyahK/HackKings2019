import React from 'react';

import PetProfile from '../components/PetProfile';
import NavBar from '../components/NavBar';

export default (props) => {
    const id = props.location.search.split("=")[1];
  return (
    <div className="">   
    <NavBar/>
        <div className="">
            <PetProfile animalID = {id}/>
        </div>
    </div>
  );
}




