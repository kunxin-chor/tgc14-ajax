document.querySelector('#load-btn').addEventListener('click', async function(){
    // //method 1: loading in serial
    let response = await axios.get('file1.txt');
    let file1Content = response.data;
    response = await axios.get('file2.txt');
    let file2Content = response.data;
    document.querySelector('#content').value = file1Content + file2Content;

    // method 2: load in parallel
    // let request1 = axios.get('file1.txt');
    // let request2 = axios.get('file2.txt');

    // let response1 = await request1;
    // let response2 = await request2;

    // let file1Content = response1.data;
    // let file2Content = response2.data;
    // document.querySelector("#content").value = file1Content + file2Content;
})