import React from 'react';
import animalList from "../data/animalProfiles";
import _ from 'lodash';
import AnimalSearch from "../components/AnimalSearch";
import Header from '../components/Header';


export default class MatchMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sport: null,
        work: null,
        outdoorsy: null,
        travel: null,
        allergies: {},
        matchingAnimals: []
  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSportChange = this.handleSportChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleOutdoorsChange = this.handleOutdoorsChange.bind(this);
    this.handleTravelChange = this.handleTravelChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.sport);
    console.log(this.state.work);
    console.log(this.state.outdoorsy);
    console.log(this.state.travel);
    //console.log(this.filterAnimalSearch())
    this.setState({matchingAnimals: this.filterAnimalSearch()});
  }

  handleSportChange(event) {
    event.preventDefault();
    switch (event.target.value) {
      case "1": this.setState({sport: "2"});
      case "2": this.setState({sport: "4"});
      case "3": this.setState({sport: "6"});
      case "4": this.setState({sport: "8"});
      case "5": this.setState({sport: "10"});
      default: this.setState({sport: null});
    }
  }

  handleWorkChange(event) {
    event.preventDefault();
    if(event.target.value === "4" || event.target.value === "5"){
      this.setState({work: false});
    }
    else{
      this.setState({work: true});
    }
  }

  handleOutdoorsChange(event) {
    event.preventDefault();
    if(event.target.value === "Outdoors"){
      this.setState({outdoorsy: true});
    }
    else{
      this.setState({outdoorsy: false});
    }
  }

  handleTravelChange(event) {
    if(event.target.value === "week" || event.target.value === "month" ){
      this.setState({travel: false});
    }
    else{
      this.setState({travel: true});
    }
  }

  filterAnimalSearch() {
      const filteredAnimals = animalList.filter(item => (!this.state.outdoorsy || item.outdoor === this.state.outdoorsy) && (!this.state.work || item.attentionSeeking === this.state.work) && (!this.state.travel || item.abandonIssue === this.state.travel) && (!this.state.sport || item.activeLevel === this.state.sport))
      return filteredAnimals.map(item => ({animalId: item.animalId, shelterId: item.shelterId}));
  }

  render() {

    console.log(this.state.matchingAnimals);

    return (
      <div className=""> 
          <Header/>
          <div className ="pad-10">
            <h1>Match Me</h1>
            <form onSubmit={this.handleSubmit}>
                <label for="Work" className="margin-5">Number of hours spent working per week:</label>
                  <select name="Work" onChange={this.handleWorkChange}>
                      <option value="1">less than 10 hours</option>
                      <option value="2">Between 11-20</option>
                      <option value="3">Between 21-30</option>
                      <option value="4">Between 31-40</option>
                      <option value="5">Greater than 40</option>
                  </select>
                  <br/><br/>
                <label for="Sport" className="margin-5">Number of hours spent working out per week:</label>
                <select name="Sport" onChange={this.handleSportChange}>
                      <option value="1">Less than 5 hours</option>
                      <option value="2">Between 6-15 hours</option>
                      <option value="3">Between 16-25 hours</option>
                      <option value="4">Between 26-35 hours</option>
                      <option value="5">Greater than 36 hours</option>
                  </select>
                <br/><br/>
                <label for="Outdoors" className="margin-5">Outdoors</label>
                <input type="radio" name="outdoorsy" id="Outdoors" value="Outdoors" onChange={this.handleOutdoorsChange}/>
                <label for="Indoors" className="margin-5">Indoors</label>
                <input type="radio" name="outdoorsy" id="Indoors" value="Indoors" onChange={this.handleOutdoorsChange}/>
                <br/><br/>
                <label for="travel" className="margin-5">Travel Frequency :</label>
                <select name="TravelFrequency" onChange={this.handleTravelChange}>
                    <option value="week"> Once a week</option>
                    <option value="month"> Once a month</option>
                    <option value="halfYear"> Once every 6 months</option>
                    <option value="year"> Once a year</option>
                </select>
                <br/><br/>
                <input type="submit" value="Search"/>
            </form>
            <div className="row">  
                {this.state.matchingAnimals.map((value, index) => {
                    return <div className="col-xs-5 col-md-5 col-lg-5 margin-5 pad-5 bord">
                    <AnimalSearch animalID = {value.animalId}/>
                </div> 
                })}
            </div>
          </div>
      </div>
    );
  }
}