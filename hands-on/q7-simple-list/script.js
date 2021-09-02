window.addEventListener("DOMContentLoaded", function(){
    let url = "https://anapioficeandfire.com/api/books/";
    document.querySelector('#load-btn').addEventListener('click', async function(){
        let response = await axios.get(url);
        for (let book of response.data) {
            let bookTitle = book.name;
            let pageNumbers = book.numberOfPages;
            let html = `<div class="card" style="padding:1em">
                <div class="card-title">${bookTitle}</div>
                <div class="card-body">
                Number of Pages:${pageNumbers}
                </div>`
            document.querySelector('#results').innerHTML += html;
        }

        console.log(response.data);
    })
})