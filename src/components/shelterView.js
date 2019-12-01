import React from "react";
import ShelterList from "../data/shelterProfiles.json"
import {Link} from "gatsby" 
export default ({shelterId, animals}) => {
    //const [name, setName] = useState("");

    console.log(animals)
    return (
        <div>
            {
                ShelterList.filter(item => item.shelterId === shelterId).map(item => {
                    return (
                        <div className="border-radius">
                            <div className="inline-child" >
                            <img src={require(`../images/animal-shelter1.jpg`)} alt="Logo" className = "shelter-pic" />
                            </div>
                            <div className="inline-child">
                            <h2 className="text">{item.name}</h2>
						    <h4 className="text-sub">{item.address}</h4>
                            <Link to= {"animalResults?id="+animals} >
                                <button type="button" className="btn">View Animals</button>
                            </Link>      
                            </div>                  
                        </div>
                    )
                })
            }
        </div>
    )
}
