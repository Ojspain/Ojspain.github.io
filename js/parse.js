document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.style.display = 'flex'; 
            contentDiv.style.flexDirection = 'column'; 
            contentDiv.style.alignItems = 'center'; 
            contentDiv.style.gap = '20px'; // Adds spacing between items

            data.forEach(item => {
                const section = document.createElement('section');
                section.style.width = '100%'; 
                section.style.maxWidth = '400px'; // Adjust max width
                section.style.border = '1px solid #ccc'; 
                section.style.padding = '10px'; 
                section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

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
        })
        .catch(error => console.error('Error loading the data:', error));
});
