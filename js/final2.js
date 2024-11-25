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


                section.innerHTML = `
                <div class="item-wrapper">
                <div class="item-content">
                    <div class="content-container">
                    <div class="item-data">
                        <div class="data">
                        <span>
                            <span class="data-span">Category:</span>
                            <span class="data-span2">
                            ${item.category}
                            <br />
                            </span>
                            <span class="data-span3">Found at:</span>
                            <span class="data-span4">
                                ${item.foundAt}
                            <br />
                            </span>
                            <span class="data-span5">Date:</span>
                            <span class="data-span6">4/5/2022{NEED TO ADD METADATA}</span>
                        </span>
                        </div>
                    </div>
                    <div class="image-container">
                        ${imagesHtml}
                    </div>
                    </div>
                    <div class="description-text">
                    <span>
                        <span class="description-text-span">Description:</span>
                        <span class="description-text-span2">
                            ${item.description}
                        </span>
                    </span>
                    </div>
                    <div class="description-container">
                    <div class="item-name">${item.id} - ${item.name}</div>
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
        
                        section.innerHTML = `
                            <div class="item-wrapper">
                            <div class="item-content">
                                <div class="content-container">
                                <div class="item-data">
                                    <div class="data">
                                    <span>
                                        <span class="data-span">Category:</span>
                                        <span class="data-span2">
                                        ${item.category}
                                        <br />
                                        </span>
                                        <span class="data-span3">Found at:</span>
                                        <span class="data-span4">
                                            ${item.foundAt}
                                        <br />
                                        </span>
                                        <span class="data-span5">Date:</span>
                                        <span class="data-span6">4/5/2022{NEED TO ADD METADATA}</span>
                                    </span>
                                    </div>
                                </div>
                                <div class="image-container">
                                    ${imagesHtml}
                                </div>
                                </div>
                                <div class="description-text">
                                <span>
                                    <span class="description-text-span">Description:</span>
                                    <span class="description-text-span2">
                                        ${item.description}
                                    </span>
                                </span>
                                </div>
                                <div class="description-container">
                                <div class="item-name">${item.id} - ${item.name}</div>
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
