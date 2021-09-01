async function loadUser() {
    let fileUrl = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";
    let response = await axios.get(fileUrl);
    let unorderedList = document.querySelector('#user');
    // unorderedList.innerHTML += "<li>Name: " + response.data.Name + "</li>";
    // unorderedList.innerHTML += `<li>Mobile:${response.data.Mobile}</li>`;

    // extract out all the keys
    for (let k in response.data) {
        let value = response.data[k];
        unorderedList.innerHTML += `<li>${k}: ${value}`;
    }
}


loadUser();