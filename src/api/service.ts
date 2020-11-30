import axios from 'axios';

export default class Service {
	api: any;

	constructor() {
		this.api = axios.create();
		this.api.defaults.baseURL = 'http://192.168.0.8:3001/api/v1/counter';
		this.api.defaults.headers = {
			'Content-Type': 'application/json'
		};
	}

	// Fetch a list of counters
	async requestGet() {
		return await this.api.get('');
	}
	// Adds a counter
	async requestPostNewCounter(name: string) {
		return await this.api.post('', {
			title: name
		});
	}
	// Increments the value of a counter
	async requestPostIncrements(id: string) {
		return await this.api.post('/inc', {
			id
		});
	}
	// Decrements the value of a counter
	async requestPostDecrements(id: string) {
		return await this.api.post('/dec', {
			id
		});
	}
	// Deletes a counter
	async requestDelete(id: string) {
		return await this.api.delete('', {
			id
		});
	}
}