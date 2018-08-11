// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}
