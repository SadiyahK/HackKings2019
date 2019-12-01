import ShelterView from '../components/ShelterView';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import React from 'react';

export default () => {
    
    return (
        <div>
        <Header className = "header"/>
            <ShelterView shelterId="S123456" animals ="A123456"/>
            <ShelterView shelterId="S112233" animals="A112233"/>
        </div>
          
    );
  }