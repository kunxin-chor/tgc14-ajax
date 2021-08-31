document.querySelector('#load-btn').addEventListener('click', async function(){
    let response = await axios.get('items.txt');
    // processing: convert the response.data string to an array
    // response.data => "apples,bananas,..."
    let fruits = response.data.split(',');
    
    // output: add each fruit to the div
    let fruitsDiv = document.querySelector('#fruits');
    for (let currentFruit of fruits) {
        // using innerHTML:
        // fruitsDiv.innerHTML += `<li>${currentFruit}</li>`;

        // using appendChild:
        let liElement = document.createElement('li');
        liElement.innerHTML = currentFruit;
        fruitsDiv.appendChild(liElement);
    }
})