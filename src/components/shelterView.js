import React, {useState} from "react";
import ShelterList from "../data/shelterProfiles"
import {Link} from "gatsby" 
export default ({shelterId, animals}) => {
    //const [name, setName] = useState("");
    return (
        <div>
            {
                ShelterList.filter(item => item.id.includes(shelterId)).map(item => {
                    return (
                        <div className="border-radius">
                            <h5 className="text">{item.name}</h5>
						    <h5 className="text-sub">{item.address}</h5>
                            <Link to="../pages/animalListView">
                                <button type="button" className="btn"></button>
                            </Link>                        
                            </div>
                    )
                })
            }
        </div>
    )
}
