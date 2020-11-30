import Service from './service';

export default class Middleware {

	public apiService: Service;

	constructor() {
		this.apiService = new Service;
	}

	noIdea() {
		return '';
	}

	getCounters() {
		const promiseCounters = this.apiService.requestGet();
		promiseCounters.then((response) => {
			return response.data;
		});
		promiseCounters.catch((error) => {
			return error;
		});
	}

	postCounter(name: string) {
		const promiseCounter = this.apiService.requestPostNewCounter(name);
		promiseCounter.then((response) => {
			return response.data;
		});
		promiseCounter.catch((error) => {
			return error;
		});
	}

	incrementValue(id: string) {
		const promiseIncrement = this.apiService.requestPostIncrements(id);
		promiseIncrement.then((response) => {
			return response.data;
		});
		promiseIncrement.catch((error) => {
			return error;
		});
	}

	decrementValue(id: string) {
		const promiseDecrement = this.apiService.requestPostDecrements(id);
		promiseDecrement.then((response) => {
			return response.data;
		});
		promiseDecrement.catch((error) => {
			return error;
		});
	}

	deleteCounter(id: string) {
		const promiseDelete = this.apiService.requestDelete(id);
		promiseDelete.then((response) => {
			return response.data;
		});
		promiseDelete.catch((error) => {
			return error;
		});
	}
}