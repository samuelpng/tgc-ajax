btn = document.querySelector('#load-btn');
btn.addEventListener('click', async function(){
    let request1 = axios.get('file1.txt');  
    let request2 = axios.get('file2.txt');

    let response1 = await request1; 
    let response2 = await request2;

    document.querySelector('#content').innerHTML = `${response1.data}
${response2.data};`
})