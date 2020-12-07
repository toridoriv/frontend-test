export function createClassName(defaultClasses: string, classes?: Array<string>):string {
	if (classes !== undefined) {
		classes.unshift(defaultClasses);
		return classes.join(' ');
	} else {
		return defaultClasses;
	}
};

export function addNewCounter() {
	console.log('add counter');
};
