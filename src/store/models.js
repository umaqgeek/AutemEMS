import { BASE_URL } from './actions/index';

export const fetcher = (endpoint, type='GET', data={}) => {

	var options = {
		method: type
	};
	if (type != 'GET') {
		options.headers = {
			'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
	}

	return fetch(BASE_URL + '/' + endpoint, options).then(res => res.json());
};