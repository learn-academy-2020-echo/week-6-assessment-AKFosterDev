// ASSESSMENT 6: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
	{ name: 'ford prefect', occupation: 'hitchhiker' },
	{ name: 'zaphod beeblebrox', occupation: 'president of the galaxy' },
	{ name: 'arthur dent', occupation: 'radio employee' },
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// for (let i = 0, len = people.length; i <= len; i++) {
// 	console.log(people[i].name)
// 	// let capName = arr[i].name
// }

const sentenceMaker = (arr) => {
	let namesArray = arr.map((item) => item.name)

	let namesCappedArray = namesArray.split(' ')

	return namesCappedArray
}

console.log(sentenceMaker(people))
// // Create a function that takes an array of objects
// const sentenceMaker = (arr) => {
// 	let nameCapArray = []
// 	let occArray = []
// 	// loop people array and edit name prop to cap names
// 	for (let i = 0; i <= arr.length; i++) {
// 		//console.log(arr[i].name)
// 		let capName = arr[i].name
// 		// .toLowerCase()
// 		// .split(' ')
// 		// .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
// 		// .join(' ')
// 		// nameCapArray.push(capName)

// 		// nameCapArray.push(
// 		// 	capName
// 		// 		.toLowerCase()
// 		// 		.split(' ')
// 		// 		.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
// 		// 		.join(' ')
// 		// )
// 		// for (let j = 0; j <= arr.length; j++) {
// 		//   // return a sentence for each instance with each person’s name capitalized
// 		//   return `${capName} is a ${arr[j].occupation}.`
// 		// }
// 	}
// 	return nameCapArray
// }
// call the function
// console.log('Problem #1')
// console.log(sentenceMaker(people))
