
// window.addEventListener('DOMContentLoaded', function(){
//     let url = "https://randomuser.me/api/?results=10";

//     // select the button and make it run some code when it is clicked
//     document.querySelector('#load-btn').addEventListener('click', async function(){
             
//         // remove all existing child elements in #users
//         document.querySelector('#users').innerHTML = "";
       
//         let response = await axios.get(url);
//         for (let eachUser of response.data.results) {
           
//             let name = eachUser.name.first + " " + eachUser.name.last;
//             let city = eachUser.location.city;
//             let image = eachUser.picture.medium
       

//             /*
//             <div class="user">
//                 <h1>Tan Ah Kow</h1>
//                 <h2>City: Singapore</h2>
//                 <img src="ahkow.jpg"/>
//             </div>
//             */

//             // use append child
//             let divElement = document.createElement('div');
//             divElement.className = "user";

//             let h1Element = document.createElement('h1');
//             h1Element.innerHTML = name;
//             // add h1Element as a child of divElement
//             divElement.appendChild(h1Element);

//             let h2Element = document.createElement('h2');
//             h2Element.innerHTML = "City: " + city;
//             divElement.appendChild(h2Element);

//             let imageElement = document.createElement('img');
//             imageElement.src = image; 
//             divElement.appendChild(imageElement);

//             // use append child and innerHTML
//             document.querySelector('#users').appendChild(divElement);

//         }
//     })
// });


window.addEventListener('DOMContentLoaded', function(){
    let url = "https://randomuser.me/api/?results=10";

    // select the button and make it run some code when it is clicked
    document.querySelector('#load-btn').addEventListener('click', async function(){
             
        // remove all existing child elements in #users
        document.querySelector('#users').innerHTML = "";
       
        let response = await axios.get(url);
        for (let eachUser of response.data.results) {
           
            let name = eachUser.name.first + " " + eachUser.name.last;
            let city = eachUser.location.city;
            let image = eachUser.picture.medium
       

            /*
            <div class="user">
                <h1>Tan Ah Kow</h1>
                <h2>City: Singapore</h2>
                <img src="ahkow.jpg"/>
            </div>
            */

            // use append child
            let divElement = document.createElement('div');
            divElement.className = "user";

            divElement.innerHTML = `
            <div class="user">
                <h1>${name}</h1>
                <h2>City: ${city}</h2>
                <img src="${image}"/>
            </div>
            `
            // use append child and innerHTML
            document.querySelector('#users').appendChild(divElement);

        }
    })
});