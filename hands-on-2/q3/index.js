window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json');
    console.log(response);
    let data = response.data.address; // extract out the nested object
                                      // that we want to use
    console.log(data);
    document.querySelector('#street-address').innerHTML = data.streetAddress;
    document.querySelector('#city').innerHTML = data.city;
    document.querySelector('#state').innerHTML = data.streetAddress;
    document.querySelector('#postal-code').innerHTML = data.postalCode;
    document.querySelector("#address").style.display='block';
    let phoneNumber = response.data.phoneNumbers[0].number;
})