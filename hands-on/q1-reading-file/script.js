loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', function(){
    async function run(){
        let response = await axios.get('contact.txt');
        document.querySelector('div#content').innerHTML = response.data
    }
    run();
})

