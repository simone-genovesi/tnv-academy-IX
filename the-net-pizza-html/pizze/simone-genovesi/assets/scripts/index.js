const renderSection = (sectionName, sectionId, piatti) => {
    const sectionTitleElement = document.querySelectorAll(`#${sectionId} h3`)[0];
    sectionTitleElement.innerText = sectionName;

    const filteredPiatti = piatti.sort(() => Math.random() - 0.5).slice(0,3);

    const sectionElement = document.getElementById(sectionId);

    for(let piatto of filteredPiatti) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        if(!piatto.available) {
            cardContainer.style.opacity = '50%';
        }

        cardContainer.innerHTML = `
            <div class="card shadow">
                <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}" />
                <div class="card-body">
                    <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                    <p class="card-text">
                        ${piatto.description}
                    </p>
                </div>
            </div>
        `;

        sectionElement.appendChild(cardContainer);
    }
}

const renderMenu = (piatti) => {
    renderSection('Valuta tre piatti dal nostro menu', 'piatti', piatti);

    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'none';

    const menuDiv = document.getElementById('menu');
    menuDiv.style.display = 'block';
}

fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti')
  .then(res => res.json())
  .then(res => renderMenu(res))
  .catch(err => console.log('errore'));
