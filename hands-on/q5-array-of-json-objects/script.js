loadBtn = document.querySelector('#load-users-btn');

loadBtn.addEventListener('click', async function(){
    let response =  await axios.get('users.json');
    let users = response.data.users;
    let allUsersDiv = document.querySelector('#all-users');
    let divElement = document.createElement('div');
    
    for(let i of users){
        let firstName = document.createElement('h2');
        firstName.innerHTML = `${i.firstName}`

        let lastName = document.createElement('h2');
        lastName.innerHTML = `${i.lastName}`;

        let emailAddress = document.createElement('h2');
        emailAddress.innerHTML = `${i.emailAddress}`; 

        
        divElement.appendChild(firstName);
        divElement.appendChild(lastName);
        divElement.appendChild(emailAddress);

        allUsersDiv.appendChild(divElement);
    }
    
})

searchBtn = document.querySelector('#searchButton')
searchBtn.addEventListener('click', async function(){
    let userIdValue = document.querySelector('#textbox').value
    let response =  await axios.get('users.json');
    let users = response.data.users;
    let searchUsersDiv = document.querySelector('#search-user');
    //let divElement = document.createElement('div');
    for(let i of users){
        //let userId = document.createElement('h2');
        if (userIdValue == i.userId){
            searchUsersDiv.innerHTML = `
            ${i.firstName} ${i.lastName}`
        }else{
            searchUsersDiv.innerHTML = `User not found`
        }
        // divElement.appendChild(userId);
        // searchUsersDiv.appendChild(divElement)

    }
})