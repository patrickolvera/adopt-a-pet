import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import getBreeds from "./actionCreators/getBreeds";
import changeBreed from "./actionCreators/changeBreed";
import changeAnimal from "./actionCreators/changeAnimal";
import changeLocation from "./actionCreators/changeLocation";

class Search extends React.Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.props.handleLocationChange}
            id="location"
            value={this.props.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={this.props.animal}
            onChange={this.props.handleAnimalChange}
            onBlur={this.props.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={this.props.breed}
            onChange={this.props.handleBreedChange}
            onBlur={this.props.handleBreedChange}
            disabled={this.props.breeds.length === 0}
          >
            <option />
            {this.props.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button onClick={this.props.search}>Submit</button>
      </div>
    );
  }
}
// Links our state from Redux (store) into props
const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

// Links our handlers to our actionCreators/
const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

// Inject state as props and dispatch handlers to <Search/>
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
