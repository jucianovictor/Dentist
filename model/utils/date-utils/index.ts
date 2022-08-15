export function getNumberOfDaysFromDate(date: Date): number {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function getMonthNameFromDate(date: Date, locale = 'default'): string {
	return date.toLocaleDateString(locale, { month: 'long' });
}
