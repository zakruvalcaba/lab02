/*eslint-env browser*/

var milesDriven = window.prompt("How many miles have you driven?");
var gallons = window.prompt("How many gallons of fuel does your car hold?");
var mpg = milesDriven / gallons;
document.write(mpg);