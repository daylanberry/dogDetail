import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { dogs } = this.props
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center'>Dog List!</h1>

          <div className='row'>
            {
              dogs.map(dog => (
                <div key={dog.name} className='Dog col-md-4 text-center'>
                  <img src={dog.src} />
                  <h3>
                    <Link className='underline' to={`dogs/${dog.name}`}>
                      {dog.name}
                    </Link>
                  </h3>
                </div>
              ))
            }

          </div>

      </div>
    );
  }
}
export default DogList;
