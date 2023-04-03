const renderSection = (sectionName, sectionCategory, piatti) => {
    const sectionTitleElement = document.querySelectorAll(`#${sectionCategory} h3`)[0];

    sectionTitleElement.innerText = sectionName;

    const filteredPiatti = piatti.filter(x => x.category === sectionCategory).slice(0,3);
    const sectionElement = document.getElementById(sectionCategory);

    for (let piatto of filteredPiatti) {

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("col-12", "col-sm-6", "col-md-4", "py-2");
        cardContainer.innerHTML = `           
        <div class="card shadow">
        <img
          src="${piatto.imageUrl}"
          class="card-img-top"
          alt="dolci"
        />
        <div class="card-body">
          <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
          <p class="card-text">
            ${piatto.description}
          </p>
        </div>
      </div>
        `
        sectionElement.appendChild(cardContainer);
    }
}

const renderMenu = (piatti) => {
    renderSection("Dolci", "dolci", piatti);
}

fetch("http://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti")
    .then(res => res.json())
    .then(res => renderMenu(res))
    .catch(res => console.log("errore"));

