import React from "react";
import AnimalList from "../data/animalProfiles";
import {Link} from "gatsby";


export default ({animalID}) => {
    return (
        <div className="">
        {
            AnimalList.filter(item => item.animalId ===animalID).map(item => {
                return (
                    <div >
                        <div className = "row">
                            <div className = "col-xs-4 col-md-4 col-lg-4">
                                <img src={require(`../images/${item.image}`)} alt="Logo" className = "aniPic" />
                            </div>
                            <div class="vl"></div>
                            <div className = "pad-2-t pad-2-b col-xs-5 col-md-5 col-lg-5"> 
                                <div className = ""> 
                                    <h2> Name: {item.name}</h2>
                                    <h3> Breed: {item.breed} </h3>
                                    <h3> Gender: {item.gender} </h3>
                                </div>
                            </div>
                            <div className = "pad-30-t pad-10-l col-xs-2 col-md-2 col-lg-2"> 
                                <div className = "row"> 
                                <Link to={"animalProfile?id="+item.animalId}>
                                    <button className="btn">Learn More</button> 
                                </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                )
            })
        }
        </div>
    )
}
