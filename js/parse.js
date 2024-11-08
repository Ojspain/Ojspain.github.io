document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            data.forEach(item => {
                const section = document.createElement('section');
                section.innerHTML = `
                    <h2>${item.name}</h2> 
                    
                    <img src="${item.images[0].url}" alt="${item.images[0].alt}" style="width:100%;max-width:300px;">
                    
                    <p><strong>Location Found: ${item.foundAt}</strong></p>
                    
                    <p>${item.description}</p>
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
