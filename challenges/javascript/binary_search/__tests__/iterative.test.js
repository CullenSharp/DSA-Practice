// Testing deps
const {describe, test, expect} = require('@jest/globals');

const iterativeBinarySearch = require('../iterative');

describe('Testing iterative algorithm 🔁', () => {
	test('Returns index of integer found in array', () => {
		expect(iterativeBinarySearch([1, 2, 3, 4, 5, 6, 7], 4)).toEqual(3);
	});

	test('Returns -1 if target not found', () => {
		expect(iterativeBinarySearch([1, 5, 200, 203, 1000], 0)).toEqual(-1);
	});

	test('Testing happy path', () => {
		expect(iterativeBinarySearch([-10, 10, 13, 50, 200, 50000, 50001], 50)).toEqual(3);
	});

	test('Testing sad path', () => {
		expect(iterativeBinarySearch([-1, -0, 3, 7, 10, 11, 15, 16, 20, 21, 45, 46, 47, 50, 51, 52, 100], 16)).toEqual(7);
	});

	test('Return -1 on empty array', () => {
		expect(iterativeBinarySearch([], 1)).toEqual(-1);
	});
});
