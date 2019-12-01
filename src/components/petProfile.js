import React from "react";
import AnimalList from "../data/animalProfiles"
import ShelterList from "../data/shelterProfiles"


export default ({animalID}) => {
    return (
        <div>
            {
                AnimalList.filter(item => item.animalId === animalID).map(item => {
                    return (
                        <div>
                            <div className = "row margin-10 pad-5 bord">
                                <div className = "col-xs-3 col-md-3 col-lg-3">
                                    <img src={require(`../images/${item.image}`)} alt="Logo"  className = "aniPic"/>
                                </div>
                                    
                                <div class="vl"></div>
                                <div className = "col-xs-5 col-md-5 col-lg-5">
                                    <div className = "">
                                            <h3>Animal: {item.animal}</h3>  
                                    </div>
                                    
                                    <div className = "">
                                        <h3>Breed: {item.breed}</h3>
                                    </div>

                                    <div className = "">
                                        <h3>Name: {item.name}</h3> 
                                    </div>
                                
                                    <div className = "">
                                        <h3>Gender: {item.gender}</h3> 
                                    </div>

                                    <div className = "">
                                        <h3>Age: {item.age}</h3>
                                    </div>
                                
                                </div>

                                <div className = "col-xs-2 col-md-2 col-lg-2">
                                {item.neutered === true &&
                                    <h3>
                                    NEUTERED
                                    </h3>
                                }
                                {item.neutered === false &&
                                    <h3>
                                    NOT NEUTERED
                                    </h3>
                                }
                                {item.vaccinations === true &&
                                    <h3>
                                    VACCINATED
                                    </h3>
                                }
                                {item.vaccinations === false &&
                                    <h3>
                                    NOT VACCINATED
                                    </h3>
                                }
                                <h3>ACTIVE LEVEL : {item.activelevel}</h3>
                            </div>
                        </div>
                        <div>{
                            
                            ShelterList.filter(shelter => shelter.shelterId ===item.shelterId).map(shelter => {
                                return (
                                    <div>
                                        <h2 className = "margin-10"> You can find me at {shelter.name} ! </h2>
                                        <div className = "col-xs-11 col-md-11 col-lg-11 margin-10">
                                            <img src={require(`../images/${shelter.location}`)} alt="Logo"  className = "aniPic"/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}