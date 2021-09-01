async function loadData() {
    let response = await axios.get('https://4geeksacademy.github.io/exercise-assets/txt/hello.txt');
    let content = response.data;
    // document.querySelector('body').innerHTML 
    //         = content + document.querySelector('body').innerHTML;
    // alternatively:
    let bodyElement= document.querySelector('body');
    bodyElement.innerHTML = content + bodyElement.innerHTML;
}


loadData();
