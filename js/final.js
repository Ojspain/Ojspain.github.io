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
                    <div class="carousel-wrap">
                    <div id="carousel" class="carousel slide" data-ride="slide" data-interval="false">
                        <div class="carousel-inner">
                `;

                item.images.forEach((image, index) => {
                    //imagesHtml += `<img src="${image.url}" alt="${image.alt}" style="width:100%;margin:10px 0;">`;
                    if(index == 0){
                        imagesHtml += `
                        <div class="item active">
                            <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                        </div>
                        `;

                    }else {
                        imagesHtml += `
                        <div class="item">
                            <img class="d-block w-100" src="${image.url}" alt="${image.url}">
                        </div>
                        `;

                    }

                });
                imagesHtml += `
                    </div>
                        <a class="left carousel-control" href="#carousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>   
                    </div>
                    </div>
                `;

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
                            <div class="carousel-wrap">
                            <div id="carousel" class="carousel slide" data-ride="slide" data-interval="false">
                                <div class="carousel-inner">
                        `;

                        item.images.forEach((image, index) => {
                            //imagesHtml += `<img src="${image.url}" alt="${image.alt}" style="width:100%;margin:10px 0;">`;
                            if(index == 0){
                                imagesHtml += `
                                <div class="item active">
                                    <img class="d-block w-100" src="${image.url}" alt="${image.alt}">
                                </div>
                                `;

                            }else {
                                imagesHtml += `
                                <div class="item">
                                    <img class="d-block w-100" src="${image.url}" alt="${image.url}">
                                </div>
                                `;

                            }

                        });
                        imagesHtml += `
                            </div>
                                <a class="left carousel-control" href="#carousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                </a>
                                <a class="right carousel-control" href="#carousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                </a>   
                            </div>
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
