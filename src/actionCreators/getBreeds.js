import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState(); // Get animal from Redux state

    if (animal) {
      petfinder.breed.list({ animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          // Gives an object to our Root Reducer (index.js)
          // Which then passes it to our breeds.js reducer
          dispatch({
            type: "SET_BREEDS",
            payload: data.petfinder.breeds.breed
          });
        } else {
          dispatch({ type: "SET_BREEDS", payload: [] });
        }
      });
    } else {
      dispatch({ type: "SET_BREEDS", payload: [] });
    }
  };
}
