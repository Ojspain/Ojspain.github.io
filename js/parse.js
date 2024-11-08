document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            data.forEach(item => {
                const section = document.createElement('section');
                section.innerHTML = `
                    <h2>${item.name}</h2>
                    
                    <div class="image-grid">
                        ${item.images.map(img => `
                            <img src="${img.url}" alt="${img.alt}">
                        `).join('')}
                    </div>
                    
                    <p><strong>Location Found: ${item.foundAt}</strong></p>
                    
                    <p>${item.description}</p>
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
