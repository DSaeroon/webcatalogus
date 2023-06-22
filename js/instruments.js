const instrumentElement = document.querySelector('.container-instrument')   //html word aangeroepen

function fetchData(url) { //fetched de api data
    fetch(url)
        .then(response => response.json())
        .then(data => showInstrument(data))
}


function showInstrument(data) {     // loops the api data into the cards so there are 3 cards with the data
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const row = createRow(element)
        //console.log(instrumentElement)
        instrumentElement.innerHTML += row;

    }
    console.log(data)
}
function createRow(instrument) {    //makes the card 
    const row = `
    <br>
    <div class="col">
    <div class="row p-4 mx-4 mb-5 mt-5">
    <div class="card d-flex align-items-center bg-dark text-success">
    <img src="${instrument.imageUrl}" height="350px" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${instrument.title}</h5>
    <p> ${instrument.description} </p>
    <p> Hoeveel kleppen: <strong> ${instrument.numberOfValves} </strong> </p>
    <p> Hoeveel strings: <strong> ${instrument.numberOfStrings} </strong> </p>
    <p> Bekende spelers: <br> <strong> ${instrument.players} </strong> </p>
    </div>
    </div>
    `
    return row;
}
