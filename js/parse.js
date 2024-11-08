// This event listener waits for the DOM (Document Object Model) to fully load before executing the contained code.
document.addEventListener('DOMContentLoaded', function() {
  
    // Fetches JSON data from the provided URL.
    fetch('https://ojspain.github.io/Assignments/HouseBible.json')
        .then(response => response.json())  // Parses the response as JSON.
        .then(data => {
            // Gets a reference to the element with the id 'content' in the HTML document.
            const contentDiv = document.getElementById('content');
            
            // Iterates over each item in the fetched data array.
            data.forEach(item => {
                // Creates a new 'section' element.
                const section = document.createElement('section');
                
                // Start building the section with dynamic data from the current item.
                section.innerHTML = `
                    <h2>${item.name}</h2>
                    <p><strong>Location Found: ${item.foundAt}</strong></p>
                    <p>${item.description}</p>
                `;

                // Create a carousel if the item has multiple images
                if (item.images && item.images.length > 1) {
                    const carousel = document.createElement('section');
                    carousel.classList.add('carousel');
                    carousel.setAttribute('aria-label', 'Gallery');

                    const viewport = document.createElement('ol');
                    viewport.classList.add('carousel__viewport');

                    item.images.forEach((image, index) => {
                        const slide = document.createElement('li');
                        slide.classList.add('carousel__slide');
                        
                        const snapper = document.createElement('div');
                        snapper.classList.add('carousel__snapper');
                        
                        const img = document.createElement('img');
                        img.src = image.url;
                        img.alt = image.alt;
                        img.style.width = '100%';
                        img.style.maxWidth = '300px';

                        snapper.appendChild(img);
                        slide.appendChild(snapper);
                        
                        // Add navigation links to each slide
                        const prevLink = document.createElement('a');
                        prevLink.href = `#carousel__slide${(index === 0 ? item.images.length : index)}`;
                        prevLink.classList.add('carousel__prev');
                        prevLink.textContent = 'Go to previous slide';

                        const nextLink = document.createElement('a');
                        nextLink.href = `#carousel__slide${(index + 2 > item.images.length ? 1 : index + 2)}`;
                        nextLink.classList.add('carousel__next');
                        nextLink.textContent = 'Go to next slide';

                        slide.appendChild(prevLink);
                        slide.appendChild(nextLink);
                        viewport.appendChild(slide);
                    });

                    carousel.appendChild(viewport);

                    // Append the carousel to the section
                    section.appendChild(carousel);
                } else {
                    // If there's only one image, display it as before
                    const img = document.createElement('img');
                    img.src = item.images[0].url;
                    img.alt = item.images[0].alt;
                    img.style.width = '100%';
                    img.style.maxWidth = '300px';
                    section.appendChild(img);
                }

                // Appends the newly created section to the 'content' div.
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
        // Catches and logs any errors in the fetch operation.
});
