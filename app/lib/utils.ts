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

export const extractDate = (datetimeString: string) => {
	// Extract the date portion (YYYY-MM-DD) by taking the substring from index 0 to 9
	return datetimeString.substring(0, 10);
};

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
