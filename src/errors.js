
export class RouterError extends Error {
	statusText = 'UnhandledError';
	status = 500;

	constructor(message) {
		super(message);
		this.name = 'RouterError';
	}
}
