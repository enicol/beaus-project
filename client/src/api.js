const API_BASE_URL = 'http://lcboapi.com/';
const API_TOKEN = 'MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO';
const AUTH_TOKEN = `Token token=${API_TOKEN}`;

const BASIC_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': AUTH_TOKEN
};

// const initialReformat = (data) => {
// 	let products = {}
// 	return data.r.map(row => {
// 		products = row.Value
// 		row = row.dims
// 		row.Value = products
// 		return row
// 	})
// } response.data.items.slice(0,10)

// export let fetchItems = () => {
//     let url = "http://lcboapi.com/products/access_key=MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO"
// 	return axios.get(url).then(
// 		(response) => {
// 			return response.data.items.slice(0,10);
// 			return items;
// 		},
// 		(err) => {
// 			console.log(err);
// 		}
// 	)
// }

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

export function fetchProducts() {
	const url = `${API_BASE_URL}products/access_key=${API_TOKEN}`;
		return fetch(url, {
			method: 'get',
			headers: BASIC_HEADERS,
			mode: 'no-cors',
			credentials: 'include'
		})
		.then(response => {
			if (!response.ok) { throw response }
			return response.json()  //we only get here if there is no error);
		});
}
