import React from 'react';
import Header from "../components/Header";

export default class homePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    };
    }
  
    render() {
            return (
                    <div>
                        <Header/>
                            <h3 align="center">Welcome to our webpage!</h3>
                            <h4 align="center">Here you can search for animals to adopt at your local animal shelters, 
                                find events in your local community to raise money for the shelters to support and take 
                                care of the animals, pair yourself up to an animal that matches your lifestyle and make your own profile. </h4>
                            <img src={require(`../images/homePageImage.jpeg`)} alt = "Logo" class="center"/>

                            
                    </div>
                )
    }
  }