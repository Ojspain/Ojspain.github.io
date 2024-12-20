document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            const filterBtn = document.getElementById('filter-btn');

            filterBtn.addEventListener('click', function() {
                filterItems();
            });
            contentDiv.style.display = 'flex'; 
            contentDiv.style.flexDirection = 'column'; 
            contentDiv.style.alignItems = 'center'; 
            contentDiv.style.gap = '20px';

            data.forEach(item => {
                const section = document.createElement('section');

                let imagesHtml = '';

                imagesHtml += `
                    <div id="carousel${item.id}" class="carousel slide">
                    <div class="carousel-inner">
                `;
                `
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#simpleCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#simpleCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                `;

                item.images.forEach((image, index) => {
                    if (index == 0) {
                        imagesHtml += `
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                            </div>
                        `;
                    } else {
                        imagesHtml += `
                            <div class="carousel-item">
                                <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                            </div>
                        `;
                    }
                });

                imagesHtml += `
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                `;


            section.innerHTML += `
                <div class="golden-wrapper">
                    <div class="carousel-wrap">
                        ${imagesHtml}
                    </div>
                    <div class="golden-vertical">
                        <div class="small-square">
                            <h2>${item.id} - ${item.name}</h2>
                            <p>${item.description}</p>
                        </div>
                        <div class="golden-horizontal">
                        <p>
                            Found at: ${item.foundAt}
                            Date: 11/11/1111
                            Category: ${item.category}
                        </p>
                        </div>
                    </div>
                </div>
            
            `;
                contentDiv.appendChild(section);
            });
            function filterItems() {
                const checkboxes = document.querySelectorAll('input[name="category"]:checked');
                const selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value);
                contentDiv.innerHTML = '';
                data.forEach(item => {
                    if (item.category.some(cat => selectedCategories.includes(cat))) {
                        const section = document.createElement('section');
        
                        let imagesHtml = '';

                        imagesHtml += `
                        <div id="carousel${item.id}" class="carousel slide">
                        <div class="carousel-inner">
                    `;
                    `
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#simpleCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#simpleCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    `;
    
                    item.images.forEach((image, index) => {
                        if (index == 0) {
                            imagesHtml += `
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                                </div>
                            `;
                        } else {
                            imagesHtml += `
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                                </div>
                            `;
                        }
                    });
    
                    imagesHtml += `
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel${item.id}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    `;
        
                    section.innerHTML += `
                    <div class="golden-wrapper">
                        <div class="carousel-wrap">
                            ${imagesHtml}
                        </div>
                        <div class="golden-vertical">
                            <div class="small-square">
                                <h2>${item.id} - ${item.name}</h2>
                                <p>${item.description}</p>
                            </div>
                            <div class="golden-horizontal">
                            <p>
                                Found at: ${item.foundAt}
                                Date: 11/11/1111
                                Category: ${item.category}
                            </p>
                            </div>
                        </div>
                    </div>
                    `;
                        contentDiv.appendChild(section);
                    }
                });                
            }
        })
        .catch(error => console.error('Error loading the data:', error));
});
