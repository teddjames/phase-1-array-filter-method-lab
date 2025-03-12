// Code your solution here
// index.js

// findMatching() accepts an array of driver names (strings)
// and returns all names that match the provided string (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// fuzzyMatch() accepts an array of driver names (strings)
// and returns only those names that start with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(
    (driver) => driver.slice(0, letters.length) === letters
  );
}

// matchName() accepts an array of driver objects (each with a "name" property)
// and returns the driver objects whose name property matches the provided string (case-insensitive)
function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}

// Export the functions for use in tests
module.exports = { findMatching, fuzzyMatch, matchName };
