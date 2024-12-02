document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            const filterBtn = document.getElementById('filter-btn');

            filterBtn.addEventListener('click', function() {
                filterItems();
                placeDecorations();
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
                            <b>Found at:</b> ${item.foundAt}<br>
                            <b>Date:</b> 11/11/1111<br>
                            <b>Category:</b> ${item.category}<br>
                        </p>
                        </div>
                    </div>
                `;
                contentDiv.appendChild(goldenWrapper);
            });
            placeDecorations();

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
                                    <b>Found at:</b> ${item.foundAt}<br>
                                    <b>Date:</b> 11/11/1111<br>
                                    <b>Category:</b> ${item.category}<br>
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

// Dropdown menu for category filters
var checkList = document.getElementById('filters');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

function placeDecorations() {
    const carousel3 = document.querySelector('#carousel3');

    if (carousel3) {
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/hamster-dance.gif';
        decorationImage.alt = 'Hamster with headphones dancing.';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '150px';
        decorationImage.style.right = '70vw';
        decorationImage.style.zIndex = '10';
        decorationImage.style.transform = 'scaleX(-1)';

        carousel3.parentElement.insertBefore(decorationImage, carousel3);
    }

    // Example check for carousel with id #carousel4
    const carousel8 = document.querySelector('#carousel8');

    if (carousel8) {
        // Create a new image element to be placed before the carousel
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/nun-reading.gif'; // Replace with your image path
        decorationImage.alt = 'Cartoon Nun reading a bible.';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '60px';
        decorationImage.style.left = '60vw';
        decorationImage.style.transform = 'scaleX(-1)';
        decorationImage.style.zIndex = '-1';

        // Insert the image before the carousel
        carousel8.parentElement.insertBefore(decorationImage, carousel8);
    }

    const carousel9 = document.querySelector('#carousel9');

    if (carousel9) {
        // Create a new image element to be placed before the carousel
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/nun-akimbo.gif'; // Replace with your image path
        decorationImage.alt = 'Cartoon Nun wielding two pistols.';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '60px';
        decorationImage.style.right = '60vw';
        decorationImage.style.zIndex = '-1';

        // Insert the image before the carousel
        carousel9.parentElement.insertBefore(decorationImage, carousel9);
    }


    const carousel10 = document.querySelector('#carousel10');

    if (carousel10) {
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/nun-guitar.gif';
        decorationImage.alt = 'Cartoon Nun playing a guitar';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '50px';
        decorationImage.style.left = '60vw';
        decorationImage.style.transform = 'scaleX(-1)';
        decorationImage.style.zIndex = '-1';

        carousel10.parentElement.insertBefore(decorationImage, carousel10);
    }

    const carousel11 = document.querySelector('#carousel11');

    if (carousel11) {
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/nun-help.gif';
        decorationImage.alt = 'Cartoon Nun holding red text that says HELP';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '50px';
        decorationImage.style.right = '60vw';
        decorationImage.style.zIndex = '-1';

        carousel11.parentElement.insertBefore(decorationImage, carousel11);
    }

    const carousel12 = document.querySelector('#carousel12');

    if (carousel12) {
        const decorationImage = document.createElement('img');
        decorationImage.src = '../images/nun-swing.gif';
        decorationImage.alt = 'Cartoon Nun grasping the air and swinging around.';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '50px';
        decorationImage.style.left = '60vw';
        decorationImage.style.zIndex = '-1';

        carousel12.parentElement.insertBefore(decorationImage, carousel12);
    }

/*     if (carousel) {
        const anotherDecorationImage = document.createElement('img');
        anotherDecorationImage.src = '../images/decorative-image2.png';
        anotherDecorationImage.alt = 'Another Decorative Image';
        anotherDecorationImage.style.position = 'absolute';
        anotherDecorationImage.style.top = '50px';
        anotherDecorationImage.style.right = '20px';
        anotherDecorationImage.style.zIndex = '-1';

        carousel.parentElement.insertBefore(anotherDecorationImage, carousel);
    } */
}
