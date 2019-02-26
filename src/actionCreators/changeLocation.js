export default function changeLocation(location) {
  return { type: "SET_LOCATION", payload: location };
}

// example tests:
// expect(changeLocation("Minneapolis, MN")).toEqual({ type: "SET_LOCATION, payload: "Minneapolis, MN" });
// expect(changeLocation("Minneapolis, MN")).toEqualSnapShot();
