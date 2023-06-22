console.log(`fetch js has loaded`);

const genresDataElement = document.querySelector('.genres-data'); //this calls on for the HTML 

function fetchGenres(url) { //fetches de API Data
    fetch(url)
        .then(myData => myData.json())
        .then(myJsonData => showData(myJsonData))
}

function showData(genres) { //this loops the data into the cards a total of 3 times Eureka! 🤓
    console.log(genres);


    for (let i = 0; i < genres.length; i++) {
        const element = genres[i];
        const card = createBootstrapCard(element);
        genresDataElement.innerHTML += card;

    }
}

function createBootstrapCard(genre) { //here we make our cards with links where the information of the API should be put in Eureka! 🤓
    const card = `
        <div class="container-fluid pt-5 row-cols-md-1 mt-5">
        <div class="card h-100 bg-warning">
            <img src="${genre.imageUrl}" height="350px" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${genre.title}</h5>
            <p class="card-text text-light bg-dark text-center">${genre.description}</p>
            </div>
        </div>
        </div>
        `
    return card;
}