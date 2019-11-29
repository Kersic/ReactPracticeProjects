import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center mt-4">Lost dogs</h1>
      <div className="row mt-5">
        {dogs.map(dog => (
          <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>
            <Link to={"/dogs/" + dog.name}>
              <img src={dog.src} alt={dog.name} />
              <br />
              <h3 className="underline">{dog.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
