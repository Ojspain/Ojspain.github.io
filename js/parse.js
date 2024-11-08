document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            data.forEach(item => {
                const section = document.createElement('section');

                let imagesHtml = '';
                item.images.forEach(image => {
                    imagesHtml += `<img src="${image.url}" alt="${image.alt}" style="width:100%;max-width:300px;margin:10px 0;">`;
                });

                section.innerHTML = `
                    <h2>${item.name}</h2> 
                    
                    ${imagesHtml}
                    
                    <p><strong>Location Found: ${item.foundAt}</strong></p>
                    
                    <p>${item.description}</p>
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
