// loadBtn = document.querySelector('#load-image-btn');

// loadBtn.addEventListener('click', function(){
//     async function run(){
//         let response = await axios.get("artwork.json");
//         let type = response.data
//         let responseDiv = document.querySelector('div#artwork')
//         for (let eachService of type) {
//         document.querySelector('div#content').innerHTML = eachService.title;

//         }
//         }
//         run()
//     })

loadBtn = document.querySelector('#load-image-btn');

loadBtn.addEventListener('click', async ()=>{
    let response = await axios.get('artwork.json');

    let h2Element = document.createElement('h2');
    h2Element.innerHTML = response.data.title

    let imageElement = document.createElement('img');
    imageElement.src = response.data.image_url

    let artworkDiv = document.querySelector('#artwork');
    artworkDiv.appendChild(h2Element);
    artworkDiv.appendChild(imageElement);
    
})
    

