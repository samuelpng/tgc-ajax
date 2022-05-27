btn = document.querySelector('#load-btn')
btn.addEventListener('click', async function(){
  let response = await axios.get('items.txt');
  console.log(response.data)
  fruitArray = response.data.split(",")
  for (i of fruitArray){
    fruitsList = document.querySelector('ul#fruits-list');
    console.log(i)
    
    // fruitsList.innerHTML = fruitslist.innerHTML + `<li>${i}</li>`
    let liElement = document.createElement('li');
    liElement.innerHTML = i
    fruitsList.appendChild(liElement);
  }
})

document.querySelector('load-btn')




