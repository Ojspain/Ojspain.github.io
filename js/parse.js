document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/unnamedActant/Example_JSON/main/cloudData.JSON')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');

            data.forEach((item, index) => {
                const carouselId = `carousel${index}`;
                
                const section = document.createElement('section');
                section.classList.add('mb-5');
                
                section.innerHTML = `
                    <h2>${item.name}</h2>
                    <p><strong>Category:</strong> ${item.category.join(', ')}</p>
                    <p><strong>Found At:</strong> ${item.foundAt}</p>
                    <p>${item.description}</p>
                    
                    <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        ${item.images.map((img, i) => `
                          <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${img.url}" class="d-block w-100" alt="${img.alt}">
                          </div>`).join('')}
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                `;
                
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
