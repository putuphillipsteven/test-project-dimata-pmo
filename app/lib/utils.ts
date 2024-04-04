export const getDateAsString = (): string => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const currentDate: Date = new Date();
	return currentDate.toLocaleDateString('en-US', options);
};
