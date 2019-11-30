import React from 'react';
import {Link} from "gatsby"

import SearchBar from '../components/SearchBar';

export default () => {
  
  return (
    <div className="row pad-5-l margin-10 pad-10 my-class">   
    <div className="col-xs-12 col-md-6 is-green-bg">
    <SearchBar/>
        </div>  
        <div className="col-xs-6 col-lg-3 is-grey-bg">
        <h1 className="is-red">
          YAY
        </h1>
            </div>
            <div className="col-xs-6 col-lg-3  is-red-bg is-white">
        <h1>
            <Link to="/">
          YAY
          </Link>
        </h1>
            </div>
        
    
    </div>
  );
}

