document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');

            data.forEach(item => {
                // Create a section for each item
                const section = document.createElement('section');
                section.classList.add('mb-4');

                // Carousel indicators
                const indicators = item.images.map((_, index) => `
                    <button type="button" data-bs-target="#carousel-${item.name.replace(/\s+/g, '-')}" 
                            data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" 
                            aria-label="Slide ${index + 1}">
                    </button>
                `).join('');

                // Carousel items
                const carouselItems = item.images.map((image, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
                        <div class="carousel-caption d-md-block">
                            <p>${image.alt}</p>
                        </div>
                    </div>
                `).join('');

                // Carousel structure
                section.innerHTML = `
                    <div id="carousel-${item.name.replace(/\s+/g, '-')}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            ${indicators}
                        </div>
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
                    </div>
                    <h5 class="mt-3">${item.name}</h5>
                    <p><strong>Found at:</strong> ${item.foundAt}</p>
                    <p>${item.description}</p>
                `;

                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
