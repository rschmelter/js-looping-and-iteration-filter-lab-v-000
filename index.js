// Code your solution in this file
function findMatching(drivers, name) {
    const array = drivers.filter(function (driver) {driver.name.toLowerCase() === name.toLowerCase()});
    return array

}
