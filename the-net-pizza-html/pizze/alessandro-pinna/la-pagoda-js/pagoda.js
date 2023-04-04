


function renderDailyDish(piatti){
    const collegaAId = document.getElementById("daily");
    for(let i=0;i<3;i++){
        const liPiatto = document.createElement('div')
        let id = Math.floor(Math.random() * 12) + 1;
        let nomePiatto = piatti[id].title;
        liPiatto.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'my-2');
    liPiatto.innerHTML = 
    `<div class="card">
    <img src="${piatti[id].imageUrl}">
    <div class="card-body">
      <a href=""><h5 class="card-title">${piatti[id].title}</h5></a>
      <p class="card-text">${piatti[id].description}</p>
    </div>
    </div>`;
    collegaAId.appendChild(liPiatto);
    }  
}

//Recupera i dati dal file JSON utilizzando fetch
fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/')
  .then(risposta => risposta.json())
  .then(risposta => renderDailyDish(risposta))
  .catch(errore => console.log(errore));











