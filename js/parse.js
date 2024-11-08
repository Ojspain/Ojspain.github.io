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
                    }
                });                
            }
        })
        .catch(error => console.error('Error loading the data:', error));
});
