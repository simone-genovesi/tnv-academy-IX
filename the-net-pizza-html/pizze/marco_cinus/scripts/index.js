const renderSection = (sectionName, sectionId, piatti) => {
    const sectionTitleElement = document.querySelectorAll(`#${sectionId} h2`)[0];
    sectionTitleElement.innerText = sectionName;

    const filteredPiatti = piatti.filter(x => x.category === sectionId);
    const sectionElement = document.getElementById(sectionId);

    let contatoreCard = 0;

    for(let piatto of filteredPiatti){
        if(contatoreCard >= 3){
            break;
        }
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
        cardContainer.innerHTML = `
            <div class="card" style="width: 17rem;">
                <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}"/>
                <div class="card-body">
                    <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                    <p class="card-text">
                    ${piatto.description}
                    </p>
                </div>
            </div>
        `;
        sectionElement.appendChild(cardContainer);
        contatoreCard++;
    }
}

const renderMenu = (piatti) => {
    renderSection('Dolci consigliati', 'dolci', piatti);
}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti')
    .then(res => res.json())
    .then(res => renderMenu(res))
    .catch(err => console.log('errore'));
