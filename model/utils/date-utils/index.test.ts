import { getNumberOfDaysFromDate } from '.';

it('should return 31 days', () =>
	expect(getNumberOfDaysFromDate(new Date(2020, 0, 1))).toBe(31));
