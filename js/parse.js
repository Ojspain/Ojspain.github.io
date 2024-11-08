document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            data.forEach(item => {
                // Create a section for each item
                const section = document.createElement('section');
                
                // Create the Bootstrap carousel structure
                let carouselItems = item.images.map((image, index) => {
                    return `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${item.name}</h5>
                                <p>Found at: ${item.foundAt}</p>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    `;
                }).join('');

                // Create the full carousel with controls
                section.innerHTML = `
                    <div id="carousel-${item.name.replace(/\s+/g, '-')}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${carouselItems}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${item.name.replace(/\s+/g, '-')}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${item.name.replace(/\s+/g, '-')}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        <div class="carousel-indicators">
                            ${item.images.map((image, index) => {
                                return `<button type="button" data-bs-target="#carousel-${item.name.replace(/\s+/g, '-')}" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
                            }).join('')}
                        </div>
                    </div>
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
