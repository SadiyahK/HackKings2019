import React, {useState} from "react";
import AnimalList from "../data/animalProfiles"

export default () => {
    const [search, setSearch] = useState("");
    const changeSearch = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            <input onChange={(e) => changeSearch(e)} placeholder="search"/>
            {
                AnimalList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => {
                    return (
                        <div>
                            <h5>{item.name}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
