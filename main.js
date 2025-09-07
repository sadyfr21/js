const url = 'https://rickandmortyapi.com/api/character';

const respuesta = fetch(url);
respuesta.then(res => res.json())
    .then(data=>{return data.results})
    .catch(err=>console.log(error))
    .finally(()=>console.log('proceso terminado'))

console.log(respuesta);

const obtenerPersonajes = async()=>{
    respuesta.map(
(personajes) => {
    return personajes ={
        id: personajes.id,
        name: personajes.name,
        status: personajes.status,
        species: personajes.especies,

    }
}
    )
}

    


async function mostrarPersonajes() {
    const personajes = await respuesta;

    const section = document.getElementById('contenedor');

    let html ="";
    personajes.forEach(personajes =>(
        html+= `
        <div class="card" id=${personajes.name}>
            <img src=${personajes.image} alt=${personajes.name}>
            <h2>${personajes.name}</h2>
            <p>${personajes.status}</p>
            <p>${personajes.species}</p>
        </div>`
    ))

    console.log(personajes)
    section.innerHTML =html;
}

mostrarPersonajes();

console.log(personajes)
section.innerHTML=html;