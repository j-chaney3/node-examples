//sytanx for node imports
//const rect = require('./rectangle');

//syntax for es6 imports
//Note* must add package.json with "type": "Module"
import { area, perimeter } from './rectangle.js';

function solveRect(l, w) {
	console.log(`solving for rectangle with dimensions: ${l}, ${w}`);
	if (l <= 0 || w <= 0) {
		console.log(
			`Rectangle dimensions must be greater than zero: Recieved: ${l}, ${w}`
		);
	} else {
		console.log(`\tArea of rectangle: ${area(l, w)}`);
		console.log(`\tPerimeter of rectangle: ${perimeter(l, w)}`);
	}
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
