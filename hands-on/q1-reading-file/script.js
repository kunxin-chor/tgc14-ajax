// let loadBtn = document.querySelector('#load-btn');
// loadBtn.addEventListener('click', async function(){

// })

document.querySelector('#load-btn').addEventListener('click', async function(){
    let response = await axios.get('contact.txt')
    let contentDiv = document.querySelector('#content');
    // contentDiv.innerText = response.data;
    contentDiv.innerHTML = response.data;
})

