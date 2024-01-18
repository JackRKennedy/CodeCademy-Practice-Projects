//testing console out and functions in vanilla js
insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

async function getInsult() {
    const response = await fetch(insultURL);
    const data = await response.json();
    
    console.log(data.insult);
};

getInsult(); //test function