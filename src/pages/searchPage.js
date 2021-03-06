import React from 'react';
import Header from '../components/Header';
import ShelterView from "../components/shelterView";
import animalList from "../data/animalProfiles";

export default class searchPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          gender: null,
          age: null,
          animal: null,
          location: null,
          groupedShelterResults: {}
    };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAnimalChange = this.handleAnimalChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
      this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.groupByShelters();

    }

    handleAnimalChange(event) {
        event.preventDefault();
        if(event.target.value === "Cat" || event.target.value === "Dog" ){
            this.setState({animal: event.target.value});
        }
        else{
            this.setState({animal: null});
        }
    }

    handleAgeChange(event) {
        event.preventDefault();
        this.setState({age: event.target.value});
    }

    handleGenderChange(event) {
        event.preventDefault();
        if(event.target.value !== "Any"){
            this.setState({gender: event.target.value});
        }
        else{
            this.setState({gender: null});
        }
    }

    handlePostcodeChange(event) {
        event.preventDefault();
        this.setState({location: event.target.value});
    }

    filterAnimalSearch() {
        const filteredAnimals = animalList.filter(item => (!this.state.gender || item.gender === this.state.gender) && (!this.state.animal || item.animal === this.state.animal) && (!this.state.age || item.age === this.state.age))
        return filteredAnimals.map(item => ({animalId: item.animalId, shelterId: item.shelterId}));
    }

    groupByShelters(){
        const filteredAnimals = this.filterAnimalSearch();
        
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
        <div><Header className="header"/>
        <div className="margin-10 pad-5"> 
            <h1 className="label">Search</h1>
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label for="animal" className="margin-5 label">Animal:</label>
                <select name="Animals" onChange={this.handleAnimalChange}>
                    <option value="Any">Any</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Other">Other</option>
                </select>
                <br/><br/>
                <label for="age" className="margin-3">Age:</label>
                <input type="text" name="age" onChange={this.handleAgeChange}/>
                <br/><br/>
                <label for="Male" className="margin-3">Male</label>
                <input type="radio" name="gender" id="Male" value="Male" onChange={this.handleGenderChange}/>
                <label for="Female" className="margin-3">Female</label>
                <input type="radio" name="gender" id="Female" value="Female" onChange={this.handleGenderChange}/>
                <label for="any" className="margin-3">Any</label>
                <input type="radio" name="gender" id="any" value="Any" onChange={this.handleGenderChange}/>
                <br/><br/>
                <label for="postcode" className="margin-3">Postcode:</label>
                <input type="text" name="postcode" onChange={this.handlePostcodeChange}/>
                <br/><br/>
                <input type="submit" value="Search" className="btn margin-3"/>
            </form>
            {
                Object.keys(this.state.groupedShelterResults).map((key) => {

                    console.log(this.state.groupedShelterResults[key])
                    return <ShelterView key= {key} shelterId= {key} animals={this.state.groupedShelterResults[key]}/>
                })
            }
        </div>
        </div>
      );
    }
  }