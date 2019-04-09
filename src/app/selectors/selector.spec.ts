import * as fromMyReducers from './';

describe('selectors', () => {
	it('getFirstCount should return -5', () => {
		expect(fromMyReducers.getFirstCount()).toBe(-5);
	});

	it('getSecondCount should return 10', () => {
		expect(fromMyReducers.getSecondCount()).toBe(10);
	});
});
