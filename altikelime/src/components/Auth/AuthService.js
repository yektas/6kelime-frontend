import decode from 'jwt-decode';

export default class AuthService {
	// Initializing important variables
	constructor(domain) {
		this.fetch = this.fetch.bind(this); // React binding stuff
		this.login = this.login.bind(this);
		this.getProfile = this.getProfile.bind(this);
	}

	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken(); // GEtting token from localstorage
		return !!token && !this.isTokenExpired(token); // handwaiving here
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				// Checking if token is expired. N
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	setToken(token) {
		// Saves user token to localStorage
		localStorage.setItem('token', token);
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('token');
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('token');
	}

	getProfile() {
		// Using jwt-decode npm package to decode the token
		return decode(this.getToken());
	}
}
