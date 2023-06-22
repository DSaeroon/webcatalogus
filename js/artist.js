const artistElement = document.querySelector('.container-artist');


function fetchData(url) { // fetch data from the server
    fetch(url)//
        .then(response => response.json())//convert the response to json
        .then(data => showArtist(data))//show the data
}

function showArtist(data) { // show the data

    // data.forEach(element => {
    //     const row = creatRow(element);
    //     artistElement.innerHTML += row;
    // });

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const row = creatRow(element);
        artistElement.innerHTML += row;
    }
    // console.log(data);//show the data in the console
}

function creatRow(artist) {// create a row for each artist
    const row = `
        <div class="row">
            <div class="col-md-12">
            <h5>${artist.title}</h5>
            <p>${artist.description}</p>
            <p>${artist.releaseYear}</p>           
            <img src="${artist.imageUrl}" alt="image"/>
            <a href="${artist.videoUrl}" target="_blank"><button class="btn btn-warning">Click here for Music</button></a>
            </div>
            </div>`

    return row;
}