import { API_URL } from '../configuration';

export async function callApi(query) {
	return await fetch(API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(query)
	})
		.then(async res => {
			const data = await res.json();
			return data.data;
		})
		.catch(error => console.error(error));
}
