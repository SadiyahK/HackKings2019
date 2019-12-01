import React from 'react';
import 'react-dropdown/style.css';
import ShelterView from "../components/shelterView";

export default class searchPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {check: false};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({ check: !prevState.check }));
    }
  
    render() {
      return (
        <div className="margin-10 pad-10"> 
            <h1>Search Page</h1>
            <form onSubmit={this.handleSubmit}>
                <label for="animal" className="margin-5">Animal:</label>
                <select name="Animals">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                </select>
                <br/><br/>
                <label for="age" className="margin-5">Age:</label>
                <input type="text" name="age"/>
                <br/><br/>
                <label for="male" className="margin-5">Male</label>
                <input type="radio" name="gender" id="male" value="male"/>
                <label for="female" className="margin-5">Female</label>
                <input type="radio" name="gender" id="female" value="female"/>
                <label for="any" className="margin-5">Any</label>
                <input type="radio" name="gender" id="any" value="Any"/>
                <br/><br/>
                <label for="postcode" className="margin-5">Postcode:</label>
                <input type="text" name="postcode"/>
                <br/><br/>
                <input type="submit" value="Search"/>
            </form>
            { this.state.check &&
                <React.Fragment>
                    <ShelterView shelterId="S123456" animals ="A123456"/>
                    <ShelterView shelterId="S112233" animals="A112233"/>
                </React.Fragment>
            }
        </div>
      );
    }
  }