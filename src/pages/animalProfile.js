import React from 'react';

import PetProfile from '../components/PetProfile';

export default (props) => {
    const id = props.location.search.split("=")[1];
  return (
    <div className="">   
        <div className="">
            <PetProfile animalID = {id}/>
        </div>
    </div>
  );
}




