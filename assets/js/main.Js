const apiRickPersonajes = async (pagina) =>{
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado")
    divRes.innerHTML= " ";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="cards">
            <img src="${item.image}" class="card-image" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.status}</p>
                <p class="card-text">${item.species}</p>
                <p class="card-text">${item.gender}</p>
            </div>
        </div>`

        divRes.appendChild(divItem);
    });
}

const apiRickEpisodios = async (pagina) =>{
    let url = "https://rickandmortyapi.com/api/episode/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado")
    divRes.innerHTML= " ";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="cards">
            <div class="card-body">
                <h5 class="card-title">Episodio ${item.id}</h5>
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.air_date}</p>
            </div>
        </div>`

        divRes.appendChild(divItem);
    })
}

const apiRickLocaciones = async (pagina) =>{
    let url = "https://rickandmortyapi.com/api/location/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes = document.querySelector("#resultado")
    divRes.innerHTML= " ";
    data.results.map(item=>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="cards">
            <div class="card-body">
                <h5 class="card-title">location ${item.id}</h5>
                <p class="card-text">${item.name}</p>
                <p class="card-text">${item.type}</p>
                <p class="card-text">${item.dimension}</p>
            </div>
        </div>`

        divRes.appendChild(divItem);
    })
}


