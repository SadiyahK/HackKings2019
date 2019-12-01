import React from 'react';
import _ from 'lodash';

import NavBar from '../components/NavBar';

export default () => {
  
  return (
    <div className="row">   
        <NavBar/>
        <div className = "row">
            <h1 className ="pad-5"> MATCH ME </h1>
            </div>
            <div className = "row">
            <select id="hours">
            { _.range(1, 51).map(value => <option key={value} value={value}>{value}</option>) }
           
            
          </select>
         
        </div>
    </div>
  );
}