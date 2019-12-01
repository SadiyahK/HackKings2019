import React from 'react';
import animalList from "../data/animalProfiles";
import ShelterView from "../components/shelterView";
import _ from 'lodash';


export default class MatchMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sport: null,
        work: null,
        outdoorsy: null,
        travel: null,
        allergies: {}
  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSportChange = this.handleSportChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleOutdoorsChange = this.handleOutdoorsChange.bind(this);
    this.handleTravelChange = this.handleTravelChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.groupByShelters();

  }

  handleSportChange(event) {
    event.preventDefault();
    this.setState({sport: event.target.value});
  }

  handleWorkChange(event) {
    event.preventDefault();
    this.setState({work: event.target.value});
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
  }

  filterAnimalSearch() {
      const filteredAnimals = animalList.filter(item => (!this.state.outdoorsy || item.outdoor === this.state.outdoorsy) && (this.state.work || item.attentionSeeking === this.state.work) && (!this.state.travel || item.abandonIssue === this.state.travel))
      return filteredAnimals.map(item => ({animalId: item.animalId, shelterId: item.shelterId}));
  }

  groupByShelters(){
      const filteredAnimals = this.filterAnimalSearch();
      console.log(filteredAnimals);  
      
      let groupedShelterResults = {};
      for (const i in filteredAnimals) {
          const filteredAnimal = filteredAnimals[i];
          if(groupedShelterResults[filteredAnimal.shelterId]) {
              groupedShelterResults[filteredAnimal.shelterId].push(filteredAnimal.animalId);
          }
          else {
              groupedShelterResults[filteredAnimal.shelterId] = [filteredAnimal.animalId];
          }
      }
      this.setState({groupedShelterResults})
  }

  render() {
    return (
      <div className="margin-10 pad-10"> 
          <h1>Match Me</h1>
          <form onSubmit={this.handleSubmit}>
              <label for="Work" className="margin-5">Number of hours spent working per week:</label>
                <select name="Work" onChange={this.handleWorkChange}>
                      { _.range(1, 50 + 1).map(value => <option key={value} value={value}>{value}</option>) }
                </select>
                <br/><br/>
              <label for="Sport" className="margin-5">Number of hours spent working out per week:</label>
              <select name="Sport" onChange={this.handleSportChange}>
                    { _.range(1, 50 + 1).map(value => <option key={value} value={value}>{value}</option>) }
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
          {
              Object.keys(this.state.groupedShelterResults).map((key) => {
                  return <ShelterView key= {key} shelterId= {key} animals={this.state.groupedShelterResults[key]}/>
              })
          }
      </div>
    );
  }
}