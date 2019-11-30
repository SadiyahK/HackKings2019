import React from 'react';
import 'react-dropdown/style.css';

export default class searchPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    render() {
      return (
        <div className="margin-10 pad-10"> 
        <h1>Search Page</h1>
        <form action="">
            <label for="animal">Animal:</label>
            <select name="Animals">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
            </select>
            <br/><br/>
            <label for="age">Age:</label>
            <input type="text" name="age" onChange={this.handleChange}/>
            <br/><br/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="any">Any</label>
            <input type="radio" name="gender" id="any" value="Any"/>
            <br/><br/>
            <label for="postcode">Postcode:</label>
            <input type="text" name="postcode"/>
            <br/><br/>
            <input type="submit" value="Search"/>
        </form>
        </div>
      );
    }
  }