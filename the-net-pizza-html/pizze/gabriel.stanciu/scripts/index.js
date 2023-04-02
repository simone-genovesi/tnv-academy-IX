

    const renderSection = (sectionName, sectionId, piatti) => {
        const sectionTitleItem = document.querySelectorAll(`#${sectionId} h2`)[0];
        sectionTitleItem.innerText = sectionName;

        const filterPiatti = piatti.filter(p => p.category === sectionId && p.price < 9);
        const sectionItem = document.getElementById(sectionId);

        for(let piatto of filterPiatti){
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

            
            cardContainer.innerHTML = `
            <div class="card shadow">
               <img src="${piatto.imageUrl} " class="card-img-top" alt="${piatto.title} "/>
               <div class="card-body">
                  <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                  <p class="card-text">
                     ${piatto.description} 
              </p>
            </div>
          </div>

            `;
            sectionItem.appendChild(cardContainer);
        }
    }

    const renderMenu = (piatti) => {
        renderSection('Piatti Consigliati','primi', piatti);
        
        
    }


fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-IX/piatti/')
    .then(res => res.json())
    .then(res => renderMenu(res))
    .catch(err => console.log('errore'));