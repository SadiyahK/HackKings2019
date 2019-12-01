import React from 'react';

import Events from '../components/events';
import Header from '../components/Header';

export default (props) => {
    const id = props.location.search.split("=")[1];
  return (
    <div className="">   
    <Header/>
        <div className="">
            <Events eventsID = {id}/>
        </div>
    </div>
  );
}