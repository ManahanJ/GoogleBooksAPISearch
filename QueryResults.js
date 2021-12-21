import fetch from 'node-fetch';

export default class QueryResults {
    // Wrapper around fetch for mocking purposes
    googleQuery(query) {
        return fetch('https://www.googleapis.com/books/v1/volumes?q=' + String(query) + '&fields=items(volumeInfo)', {
            headers: {
                "X-API-KEY": String(process.env.API_KEY)
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success');
            return result.items;
        })
        .catch(error => {
            console.error('Error', error);
        })
    }
}
// Need API Key from env file, find resulting error code and handle it
// 200 OK is responded when good along with results, find error codes other than this