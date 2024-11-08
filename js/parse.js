// Fetch the houseBibleData JSON
fetch('../Assignments/HouseBible.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('carousel-container');
    
    // Loop through the fetched data to create carousels for each item
    data.forEach((item, index) => {
      const carouselId = `carousel${index}`;
      
      let carouselHTML = `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">`;

      // Add carousel images
      item.images.forEach((image, imgIndex) => {
        carouselHTML += `
          <div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
            <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
            <div class="carousel-caption d-none d-md-block">
              <h5>${item.name}</h5>
            </div>
          </div>`;
      });

      carouselHTML += `
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="description">
          <p><strong>Category:</strong> ${item.category.join(', ')}</p>
          <p><strong>Found At:</strong> ${item.foundAt}</p>
          <p><strong>Description:</strong> ${item.description}</p>
        </div>
        <hr>`;

      // Append the carousel to the container
      container.innerHTML += carouselHTML;
    });
  })
  .catch(error => console.error('Error fetching data:', error));
