let fruits = [];
let counter = 0;
document.querySelector('#load-btn').addEventListener('click', async function(){
    let response = await axios.get('items.txt');
    // processing: convert the response.data string to an array
    // response.data => "apples,bananas,..."
    fruits = response.data.split(',');  
    alert("Fruits loaded");
    counter = 0;
   
})

document.querySelector("#display-btn").addEventListener('click', function(){

})