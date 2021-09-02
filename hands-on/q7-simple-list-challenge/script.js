window.addEventListener("DOMContentLoaded", function(){
    let url = "https://anapioficeandfire.com/api/books/";
    document.querySelector('#load-btn').addEventListener('click', async function(){
        let response = await axios.get(url);
        let characters = [];
        for (let book of response.data) {
            console.log(book.povCharacters);
            for(let currentCharacter of book.povCharacters) {
                let response = await axios.get(currentCharacter);
                characters.push(response.data.name);
            }
            let bookTitle = book.name;
            let pageNumbers = book.numberOfPages;
            let html = `<div class="card" style="padding:1em">
                <div class="card-title">${bookTitle}</div>
                <div class="card-body">
                Number of Pages:${pageNumbers}
                Characters: ${characters.join(", ")}
                </div>`
            document.querySelector('#results').innerHTML += html;
        }

        console.log(response.data);
    })
})

// window.addEventListener("DOMContentLoaded", function(){
//     let url = "https://anapioficeandfire.com/api/books/";
//     document.querySelector('#load-btn').addEventListener('click', async function(){
//         let response = await axios.get(url);
//         for (let book of response.data) {
//             console.log(book.povCharacters);
//             let requests = [];
//             for(let currentCharacter of book.povCharacters) {
//                 let request = axios.get(currentCharacter);
//                 requests.push(request);
//             }

//             // WAIT FOR ALL THE REQUESTS TO FINISH
//             let characters = [];
//             for (r of requests) {
//                 let response =  await r;
//                 characters.push(response.data.name);
//             }
//             // LOOP INVARIANT: characters array will contain the information
//             // from all the povCharacters endpoint

//             let bookTitle = book.name;
//             let pageNumbers = book.numberOfPages;
//             let html = `<div class="card" style="padding:1em">
//                 <div class="card-title">${bookTitle}</div>
//                 <div class="card-body">
//                 Number of Pages:${pageNumbers}
//                 Characters: ${characters.join(", ")}
//                 </div>`
//             document.querySelector('#results').innerHTML += html;
//         }

//         console.log(response.data);
//     })
// })