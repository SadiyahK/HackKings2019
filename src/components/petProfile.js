import React, {useState} from "react";
import AnimalList from "../data/animalProfiles"


export default () => {
    //const [search, setSearch] = useState("");
   // const changeSearch = (event) => {
    //    setSearch(event.target.value)
   // }
    return (
        <div>
            {
                AnimalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => {
                    return (
                        <div className = "row">
                            <div className = "col-xs-3 col-md-3 col-lg-3">
                                 <img src={require('../images/${item.image}')} alt="Logo"/>;
                            </div>
                                
                            <div class="vl"></div>
                                <div className = "col-xs-8 col-md-8 col-lg-8">

                                 <div className = "">
                                        <h5>Animal: {item.animal}</h5>  
                                </div>
                                
                                <div className = "">
                                     <h5>Breed: {item.breed}</h5>
                                </div>

                                <div className = "">
                                    <h5>Name: {item.name}</h5> 
                                </div>
                            
                                <div className = "">
                                    <h5>Gender: {item.gender}</h5> 
                                </div>

                                <div className = "">
                                    <h5>Age: {item.age}</h5>
                                </div>
                            
                            </div>

                            <div>
                           
                            <h3>{item.neutered}</h3>
                            <h3>{item.vaccinations}</h3>
                            <h3>{item.activelevel}</h3>
                            


                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}