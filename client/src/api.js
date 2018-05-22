const API_BASE_URL = 'http://lcboapi.com/';
const API_TOKEN = 'MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO';
const AUTH_TOKEN = `Token token=${API_TOKEN}`;

const BASIC_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': AUTH_TOKEN
};


export function fetchItems() {
	const url = `${API_BASE_URL}products/438457`;
	return fetch(url, {
		method: 'get',
		headers: BASIC_HEADERS,
		mode: 'no-cors',
		credentials: 'include'
	})
	.then(response => {
		if (response.status !== 200) throw (response.status);
		return response;
	})
	.then(response => response.json())
};
