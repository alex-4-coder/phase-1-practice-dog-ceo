console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById('dog-image-container');
  const breedList = document.getElementById('dog-breeds');
  const dropdown = document.getElementById('breed-dropdown');
  let allBreeds = [];

  // Challenge 1: Fetch and display 4 random dog images
  fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '200px';
        img.style.margin = '10px';
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and display all dog breeds
  fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Function to render breed list items
  function renderBreeds(breeds) {
    breedList.innerHTML = ''; // clear existing items
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      li.style.cursor = 'pointer';
      
      // Challenge 3: Change color on click
      li.addEventListener('click', () => {
        li.style.color = 'blue';
      });

      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by first letter
  dropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });
});
