// Code your solution in this file
function findMatching(drivers, name) {
    const array = drivers.filter(function (driver) {driver.toLowerCase() === name.toLowerCase()});
    return array

}
