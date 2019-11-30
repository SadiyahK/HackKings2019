import ShelterView from '../components/shelterView';
import React from 'react';
import {Link} from "gatsby"
export default () => {
  
    return (
        <div>
            <ShelterView shelterId="S123456" animals ="A123456"/>
            <ShelterView shelterId="S112233" animals="A112233"/>
        </div>
          
    );
  }