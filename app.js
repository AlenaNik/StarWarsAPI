let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let birth_year = document.querySelector('#birth_year');
let eye_color = document.querySelector('#eye_color');


// Asking for info
    sayHello = () => {
        updateWithLoading()
        let randomNumber = Math.floor((Math.random() * 88) +1)
        let apiUrl = 'https://swapi.co/api/people/' + randomNumber
        axios.get(apiUrl).then(res => {
            updateInfo(res.data)
        }).catch(e => {
            updateInfoWithError()
        })
    };

 // updating an info to put it inside of
    updateInfo = (data) => {
            name.innerText = data.name;
            height.innerText = `Height: ${data.height}`;
            mass.innerText = `Mass: ${data.mass}`;
            birth_year.innerText = `Year: ${data.birth_year}`;
            eye_color.innerText = `Eyes: ${data.eye_color}`;
    };
// in case there is an error
updateInfoWithError = (data) => {
    name.innerText = 'Oh no! This person isnt available now.';
    height.innerText = '';
    mass.innerText = '';
    birth_year.innerText = '';
    eye_color.innerText = '';
};

// loading
updateWithLoading = (data) => {
    name.innerTextHTML = '<i class="fas fa-spinner"></i>';
    height.innerText = '';
    mass.innerText = '';
    birth_year.innerText = '';
    eye_color.innerText = '';
};



button.addEventListener('click', sayHello);