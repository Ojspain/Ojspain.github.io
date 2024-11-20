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
                item.images.forEach(image => {
                    imagesHtml += `<img src="${image.url}" alt="${image.alt}" style="width:100%;margin:10px 0;">`;
                });

                section.innerHTML = `
                    <h2>${item.name}</h2> 
                    
                    ${imagesHtml}
                    
                    <p><strong>Location Found: ${item.foundAt}</strong></p>
                    
                    <p>${item.description}</p>
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
                            <div id="carouselWithControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                        `;
                        item.images.forEach((image, index) => {
                            //imagesHtml += `<img src="${image.url}" alt="${image.alt}" style="width:100%;margin:10px 0;">`;
                            if(index == 0){
                                imagesHtml += `
                                <div class="carousel-item active">
                                <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                                </div>
                                `;

                            }else {
                                imagesHtml += `
                                <div class="carousel-item">
                                <img class="d-block w-100" src="${image.url}" alt="${image.url}">
                                </div>
                                `;

                            }

                        });
                        imagesHtml += `
                            </div>
                            <a class="carousel-control-prev" href="#carouselWithControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselWithControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>
                        `;
        
                        section.innerHTML = `
                            <h2>${item.name}</h2> 
                            
                            ${imagesHtml}
                            
                            <p><strong>Location Found: ${item.foundAt}</strong></p>
                            
                            <p>${item.description}</p>
                        `;
                        contentDiv.appendChild(section);
                    }
                });                
            }
        })
        .catch(error => console.error('Error loading the data:', error));
});
