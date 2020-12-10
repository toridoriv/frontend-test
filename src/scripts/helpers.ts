export function createClassName(defaultClasses: string, classes?: Array<string>):string {
	let tempArr = [];
	if (classes !== undefined) {
		tempArr.push(defaultClasses);
		tempArr = tempArr.concat(classes);
		return tempArr.join(' ');
	} else {
		return defaultClasses;
	}
};

export function addNewCounter() {
	console.log('add counter');
};
