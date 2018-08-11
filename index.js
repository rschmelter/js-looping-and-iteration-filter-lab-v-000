// Code your solution in this file
function findMatching(drivers, name) {
    const newDrivers = drivers.filter(function (driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });

    return newDrivers;
}
