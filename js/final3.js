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
                let imagesHtml = `
                    <div id="carousel${item.id}" class="carousel slide">
                    <div class="carousel-inner">
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

                const goldenWrapper = document.createElement('div');
                goldenWrapper.className = 'golden-wrapper';
                goldenWrapper.innerHTML = `
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
                            <em>Found at:</em> ${item.foundAt}
                            <em>Date:</em> 11/11/1111
                            <em>Category:</em> ${item.category}
                        </p>
                        </div>
                    </div>
                `;
                contentDiv.appendChild(goldenWrapper);
            });

            function filterItems() {
                const checkboxes = document.querySelectorAll('input[name="category"]:checked');
                const selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value);
                contentDiv.innerHTML = '';
                data.forEach(item => {
                    if (item.category.some(cat => selectedCategories.includes(cat))) {
                        let imagesHtml = `
                            <div id="carousel${item.id}" class="carousel slide">
                            <div class="carousel-inner">
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

                        const goldenWrapper = document.createElement('div');
                        goldenWrapper.className = 'golden-wrapper';
                        goldenWrapper.innerHTML = `
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
                        `;
                        contentDiv.appendChild(goldenWrapper);
                    }
                });
            }
        })
        .catch(error => console.error('Error loading the data:', error));
});
