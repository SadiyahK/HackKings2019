import React, {useState} from "react";
import ShelterList from "../data/shelterProfiles.json"
import {Link} from "gatsby" 
export default ({shelterId, animals}) => {
    //const [name, setName] = useState("");
    return (
        <div>
            {
                ShelterList.filter(item => item.shelterId === shelterId).map(item => {
                    return (
                        <div className="border-radius">
                            <h2 className="text">{item.name}</h2>
						    <h4 className="text-sub">{item.address}</h4>
                            <Link to="../pages/animalListView">
                                <button type="button" className="btn">View Animals</button>
                            </Link>                        
                            </div>
                    )
                })
            }
        </div>
    )
}
