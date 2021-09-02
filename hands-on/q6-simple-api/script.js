
let url = "https://api.kanye.rest/"

// 
window.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#random-btn');
    document.querySelector('#random-btn').addEventListener('click', async function () {
        let response = await axios.get(url);
        console.log(response.data.quote);
        let quote = response.data.quote;
        document.querySelector('#quote').innerHTML = quote;

    })
})


