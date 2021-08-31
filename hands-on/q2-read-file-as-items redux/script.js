
// let beenClicked = false;
// document.querySelector('#load-btn').addEventListener('click', async function(){

//     if (beenClicked==true) {
//         return; // stop the event immediately
//     }
//     beenClicked = true;
//     console.log("loading")
//     let response = await axios.get('items.txt');
//     // processing: convert the response.data string to an array
//     // response.data => "apples,bananas,..."
//     let fruits = response.data.split(',');
    
//     // output: add each fruit to the div
//     let fruitsDiv = document.querySelector('#fruits');
//     fruitsDiv.innerHTML = ""; // empty out all the child elements
//     for (let currentFruit of fruits) {
//         // using innerHTML:
//         // fruitsDiv.innerHTML += `<li>${currentFruit}</li>`;

//         // using appendChild:
//         let liElement = document.createElement('li');
//         liElement.innerHTML = currentFruit;
//         fruitsDiv.appendChild(liElement);
//     }
//     beenClicked = false;
// })

document.querySelector('#load-btn').addEventListener('click', async function(){

   document.querySelector('#load-btn').disabled = true;
    
    let response = await axios.get('items.txt');
    // processing: convert the response.data string to an array
    // response.data => "apples,bananas,..."
    let fruits = response.data.split(',');
    
    // output: add each fruit to the div
    let fruitsDiv = document.querySelector('#fruits');
    fruitsDiv.innerHTML = ""; // empty out all the child elements
    for (let currentFruit of fruits) {
        // using innerHTML:
        // fruitsDiv.innerHTML += `<li>${currentFruit}</li>`;

        // using appendChild:
        let liElement = document.createElement('li');
        liElement.innerHTML = currentFruit;
        fruitsDiv.appendChild(liElement);
    }
    document.querySelector('#load-btn').disabled = false;

})