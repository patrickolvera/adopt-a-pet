export default function breedReducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return ""; // Reset Breed to empty string on Animal Change
  } else {
    return state;
  }
}
