window.addEventListener('DOMContentLoaded', function(){
    // using const informs other programmers that the variable API_BASE_URL
    // shouldn't be reassigned
    const BASE_API_URL = 'https://openlibrary.org';
    document.querySelector('#search-btn').addEventListener('click', async function(){
        let searchTerms = document.querySelector('#search-terms').value;
        /*
            let searchTermElement = document.querySelector("#search-terms");
            let searchTerms = searchTermElement.value;
        */

        // let response = await axios.get(BASE_API_URL+"/search.json?q=The Lord of the Rings&limit=10");
        let response = await axios.get(BASE_API_URL+"/search.json",{
            'params': {
                'title':searchTerms,
                'limit': 10
            }
        })
        let resultDiv =  document.querySelector('#results');
        resultDiv.innerHTML = "";   
        for (let book of response.data.docs) {
            let html = `
                <li>${book.title} by ${book.author_name.join(", ")}</li>
            `
           resultDiv.innerHTML += html;
        }

    }) 
})