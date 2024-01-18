const getInsult = () => {// Define the API endpoint URL
const apiUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

// Define any required headers or authentication tokens

// Make a request to the API
fetch(apiUrl)
    .then(response => {
        // Handle the response
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
    .then(data => {
        // Process the data returned from the API
        let quote = data.insult;
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
    });

// display the quote

console.log(`I\'ve got one for you: ${quote}`);
}; 

export default getInsult;


