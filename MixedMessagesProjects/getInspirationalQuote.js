const getInspiration = () => {
    let quote_id = Math.floor(Math.random()*1000);

    const quoteAPI = `https://favqs.com/api/quotes/${quote_id}`;

    fetch(quoteAPI)
        .then(response => { // Add a semicolon here
            if (response.ok) {
                return response.json();
            }
        })
        .then (data => {
            let {body, author} = data.quote; // this is the author and body of the quote
        })

        .catch(error => {
            console.error(error);
        });

        console.log(`A little inspiration for you: ${body} - ${author}`);
    }

export default getInspiration;