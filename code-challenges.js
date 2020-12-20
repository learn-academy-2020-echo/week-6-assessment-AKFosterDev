// ASSESSMENT 6: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
	{ name: 'ford prefect', occupation: 'hitchhiker' },
	{ name: 'zaphod beeblebrox', occupation: 'president of the galaxy' },
	{ name: 'arthur dent', occupation: 'radio employee' },
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sentenceMaker = (arr) => {
	let cappedNamesArray = []
	let occupationArray = []
	let resultArray = []

	// isolate the name key and cap first letter of each name, then save to it's own array
	for (let i = 0; i < arr.length; i++) {
		//let names = arr[i].name
		let cappedNames = arr[i].name
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
			.join(' ')
		cappedNamesArray.push(cappedNames)
	}

	// isolate the occupation keys and save to their own array
	for (let i = 0; i < arr.length; i++) {
		// let occupations = arr[i].occupation
		// occupationArray.push(occupations)
		occupationArray.push(arr[i].occupation)
	}

	// loop and add interpolated string combination to it's own array
	for (let i = 0; i < arr.length; i++) {
		resultArray.push(`${cappedNamesArray[i]} is a ${occupationArray[i]}. `)
	}

	// return the array as strings
	return resultArray.join(' ')
}

// call the function
console.log('Problem #1')
console.log(sentenceMaker(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, 'Heyyyy!', 45, -9, 0, 'Yo', false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, 'Hola', 43, -34, 'greetings', true]
// Expected output: [ 2, 1, -1 ]

// Create a function that takes a mixed array as an argument
const returnRemainder = (arr) => {
	// filtered numbers from argument array
	// map the filtered array & return an array with the remainder of the numbers when divided by 3
	return arr
		.filter((item) => {
			return typeof item === 'number'
		})
		.map((item) => item % 3)
}

// call the function
console.log('Problem #2')
console.log(returnRemainder(testingArray1))
console.log(returnRemainder(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, 'hi', 10, 3, 'hello', 4, 'hi']
var testingArray4 = [7, 'hi', 3, 1, 'hi', 4, 'hello', 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// Create a function that takes in two arrays as arguments
const noDuplicateArray = (arr1, arr2) => {
	// create a variable to hold two arrays combined
	let uniqueArray = arr1.concat(arr2)
	// return one filtered array with no duplicate values by comparing the equality at each index
	return uniqueArray.filter(
		(item, index) => uniqueArray.indexOf(item) === index
	)
}

// call the function
console.log('Problem #3')
console.log(noDuplicateArray(testingArray3, testingArray4))

// **************** NOT PART OF ASSESSMENT ****************
// **************** PRACTICE ITERATING ARRAY OF OBJECTS ****************
//console.log('NOT PART OF ASSESSMENT')
// Nested for Loops
// let twoD = [
// 	[1, 2, 3, 4, 5, 6, 7],
// 	[8, 10, 5, 7, 3, 22, 6, 42],
// 	[123, 54, 12, 11, 9, 15],
// ]

// let rows = twoD.length
// for (let i = 0; i < rows; i++) {
// 	let items = twoD[i].length // loops each array
// 	//console.log(i, items)
// 	for (let n = 0; n < items; n++) {
// 		// loops each item within the i array
// 		//console.log(twoD[i][n])
// 	}
// }

// let bigHero = {
// 	characters: [
// 		{ name: 'Hiro', voice: 'Ryan Potter' },
// 		{ name: 'Baymax', voice: 'Scott Adsit' },
// 		{ name: 'Go Go Tamago', voice: 'Jamie Chung' },
// 		{ name: 'Fred', voice: 'T.J. Miller' },
// 	],
// }

// // extract characters array from containing object
// let chars = bigHero.characters // or  bigHero['characters']
// // loop through array of objects
// for (let i = 0, len = chars.length; i < len; i++) {
// 	console.log(chars[i]) // returns each object
// 	console.log(chars[i].name) // returns name in current object
// 	console.log(chars[i].voice) // returns voice in current object
// 	for (let prop in chars[i]) {
// 		// prop is a variable for the 'key' - have to use bracket notation
// 		console.log(prop, chars[i][prop])
// 	}
// }
