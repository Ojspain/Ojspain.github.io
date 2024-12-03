https://youtu.be/og5keBZVaGw



JSON FILE FORMAT:



[
    {
      "id": 0,
      "name": "Name 1",
      "category": ["Category1", "Category2", "Category3"],
      "foundAt": "Location1",
      "date": "Date1",
      "description": "Description1",
      "images": [
        {
          "url": "link/to/first/image",
          "alt": "alt text for first image"
        },
        {
          "url": "link/to/second/image",
          "alt": "alt text for second image"
        }
      ]
    },// end of first item
    {
      "id": 1,
      "name": "Name 2",
      "category": ["Category1", "Category5", "Category6"],
      "foundAt": "Location2",
      "date": "Date2",
      "description": "Description2",
      "images": [
        {
          "url": "link/to/first/image",
          "alt": "alt text for first image"
        },
        {
          "url": "link/to/second/image",
          "alt": "alt text for second image"
        }
      ]
    }// Add a comma and continue from here
]



JAVASCRIPT EXPLAINED


First - Replace the placeholder link with the link to your JSON file.

Second - Add your decorations in placeDecorations(). For instance, If I wanted to add decorations
to the item with id 3, I would do something like this:
///////////////////////////////////////////////////////////////////////////////
    const carousel3 = document.querySelector('#carousel3');

    if (carousel3) {
        const decorationImage = document.createElement('img');
        decorationImage.src = 'link/to/decoration1';
        decorationImage.alt = 'Alt text for decoration1';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '150px';
        decorationImage.style.right = '70vw'; //can also be left
        decorationImage.style.zIndex = '-1';

        carouselN.parentElement.insertBefore(decorationImage, carousel3);
    }
///////////////////////////////////////////////////////////////////////////////

for other ids, just replace the 3 after all instances of carousel with the id of your choosing.
Feel free to change the zIndex to have it appear on top of other items or move the position around
to fit your needs.


Third - Link your html page to the json file and it should work just like that.


Extra - For those who want to change or add categories to the json file and are wondering how to
change the format of the generated html, look for this section of code.

///////////////////////////////////////////////////////////////////////////////
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
                            <b>Date:</b> ${item.date}<br>
                            <b>Category:</b> ${item.category}<br>
                        </p>
                        </div>
                    </div>
                `;
                contentDiv.appendChild(goldenWrapper);
///////////////////////////////////////////////////////////////////////////////

It appears twice, so make sure to replace the format in the page load and in the filter.
Just treat it like writing html, but when you want to insert some data for the item from
the json file, just use ${item.PLACEHOLDER} where PLACEHOLDER is the name of your new
metadata.


FULL JS FILE EXAMPLE
///////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    fetch('PLACEHOLDER_LINK_TO_JSON_FILE')
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
                            <b>Date:</b> ${item.date}<br>
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
                                    <b>Date:</b> ${item.date}<br>
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

    // Example  for carousel item with id 4
    
    const carousel4 = document.querySelector('#carousel4');

    if (carousel4) {
        // Create a new image element to be placed before the carousel
        const decorationImage = document.createElement('img');
        decorationImage.src = 'PATH/TO/IMAGE';
        decorationImage.alt = 'Image description';
        decorationImage.style.position = 'absolute';
        decorationImage.style.top = '60px';
        decorationImage.style.left = '60vw'; //can also be right
        decorationImage.style.zIndex = '-1';

        // Insert the image before the carousel
        carousel4.parentElement.insertBefore(decorationImage, carousel4);
    }
}
///////////////////////////////////////////////////////////////////////////////




FULL HTML FILE EXAMPLE:


///////////////////////////////////////////////////////////////////////////////


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>PLACEHOLDER_TITLE</title>
    <link rel="stylesheet" href="LINK_TO_CSS">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="header-container">
        <img src="LINK_TO_DECORATION" alt="decoration left" class="decoration left"> 
        <h1>PLACEHOLDER_HEADING</h1>
        <img src="LINK_TO_DECORATION" alt="decoration right" class="decoration right">
    </div>
    
    <div class="wrapper">
      <div class="filter-wrapper">
        <div id="filters" class="dropdown-check-list" tabindex="100">
          <span class="anchor">Select Options &nbsp;&nbsp;&nbsp;&nbsp;▽</span>
          <ul class="items">
            <li><input type="checkbox" name="category" value="Category1"> Category1 </li>
            <li><input type="checkbox" name="category" value="Category2"> Category2 </li>
            <li><input type="checkbox" name="category" value="Category3"> Category3 </li>
            <li><input type="checkbox" name="category" value="Category4"> Category4 </li>
            <li><input type="checkbox" name="category" value="Category5"> Category5 </li>
            <li><input type="checkbox" name="category" value="Category6"> Category6 </li>
            <li><button id="filter-btn">Filter</button></li>
          </ul>
        </div>
      </div>

      <div id="content"></div>

    </div>

    
    <script src="../js/cabinet.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
///////////////////////////////////////////////////////////////////////////////

FULL CSS EXAMPLE:





///////////////////////////////////////////////////////////////////////////////
@import url('https://fonts.googleapis.com/css2?family=Cantata+One&family=Viaoda+Libre&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

body {
    font-family: "Cormorant Garamond", serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    background-image: url('BACKGROUND_TILE_IMAGE_LINK');
    background-repeat: repeat;
    background-size: auto;
    display: flex;
    flex-direction: column;
}

h1{
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 3em;
}

.wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 5vh;
}

.filter-wrapper{
    max-width: 16vw;
    display: flex;
    position: absolute;
    top: 0;
    margin-left: 4vw;
}

.dropdown-check-list {
	display:inline-block;
	position:relative;
    top: 0px;
    width: 100%;
}
.dropdown-check-list .anchor {
	width:100%;
    font-size:1em;
	cursor:pointer;
	display:inline-block;
  color: #2B2B2B;
	background-color: #D4E3EA;
	padding:5px 10px;
	border:1px solid #5E5768;
	box-sizing:border-box;
}

.dropdown-check-list ul.items {
	position:absolute;
	top:100%;
    left:0;
    width:100%;
    box-sizing:border-box;
	padding:5px 0;
	margin:0;
  color: #2B2B2B;
	border:1px solid #5E5768;
	background-color: #D4E3EA;
	display:none;
	z-index:1000;


}
.dropdown-check-list ul.items li {
	list-style:none;
	padding:5px 10px;
	font-size:0.9em;
	box-sizing:border-box;
}
.dropdown-check-list.visible .items {
	display:block;
}

.dropdown-check-list ul.items li button {
  display: block;
  margin: 0 auto;
  width: 80%;
  text-align: center;
  border-radius: 15px;
  background-color: #A0BDC9;
}



  
label {
    display: block;
    margin-bottom: 5px;
}
  
  
.header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
}


.left {
    transform: scaleX(-1);
    margin-right: 20px;
}

.right {
    margin-left: 20px;
}

section {
    display: inline-block;
    max-width: 600px;  
    border: 1px solid black;
    padding:20px;
    margin:10px;
    background-color: #F5F5F5;
    text-align: center;
}


.carousel-wrap {
    width: 61.8%; 
    aspect-ratio: 1 / 1; 
    margin: 0 auto;
    background-color: #F5F5F5;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  
  .golden-wrapper {
    width: 60vw;
/*     margin: 0 15vw; */
    aspect-ratio: 1.618 / 1;/*Horizontal ratio*/
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #D4E3EA;
    border: 2px solid #5E5768;
    color: #2B2B2B;
    box-shadow: 7px 7px 5px #5E5768;
  }
  .golden-horizontal {
    width: 100%;
    margin: 0;
    padding: 0;
    aspect-ratio: 1.618 / 1;/*Horizontal ratio*/
    position: relative;
    background-color: #D4E3EA;
    border-top: 1px solid black;
    border-left: 1px solid black;
  }
  
  .golden-vertical {
    width: 38.2%;
    margin: 0;
    padding: 0;
    aspect-ratio: 1 / 1.618;/*Vertical ratio*/
    display: flex;
    flex-direction: column;
    background-color: #D4E3EA;
  }

  .square {
    width: 61.8%; /* Golden ratio of parent width */
    aspect-ratio: 1 / 1; /* Square */
    margin: 0;
    padding: 0;;
    background-color: #D4E3EA;
    position: relative;
    /* border: 1px solid black; */
  }
  .small-square {
    height: 61.8%; /* Golden ratio of parent width */
    aspect-ratio: 1 / 1; /* Square */
    margin: 0px;
    padding: 0px 5px;
    background-color: #D4E3EA;
    position: relative;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    
    
  }

.small-square h2{
  font-family: "Cantata One", serif;
  font-weight: 400;
  font-size: 2.1em;
  text-align: center;
}

.small-square p{
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1em;
  padding: 5px 10px;
}

.golden-horizontal p{
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 1.5em;
  padding: 5px 10px;
}
  
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1rem;
    color: #333;
    padding: 10px;
    box-sizing: border-box;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
}
  
///////////////////////////////////////////////////////////////////////////////
