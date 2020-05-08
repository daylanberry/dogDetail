import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

class DogDetails extends Component {
  render() {
    const { dog } = this.props
    return (

        <div className='DogDetails row justify-content-center mt-5'>
          <div className='col-11 col-lg-5'>
            <div className='DogDetails-card card'>
              <img src={dog.src} className='card-img-top' alt={dog.name} />
              <div className='card-body'>
                <h2 classNAme='card-title'>
                  {dog.name}
                </h2>
                <h4 classNAme='card-subtitle text-muted'>
                  {dog.age} years old
                </h4>
              </div>
              <ul className='list-group list-group-flush'>
                {
                  dog.facts.map((fact, i) => (
                    <li key={i} className='list-group-item'>{fact}</li>
                  ))
                }
              </ul>
              <div classNAme='card-body'>
                <Link className='btn btn-info' to='/dogs'>Go Back</Link>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
export default DogDetails;
