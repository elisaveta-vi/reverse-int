module.exports = function reverse(n) {

	let number = Math.abs(n);
	number = number + '';
	return number.split('').reverse().join('');

}

