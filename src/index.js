console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(result => renderImage(result))
  }

  function renderImage (result) {
      
      result.message.forEach(function(image){
        const imageTag = document.createElement("img")
        imageTag.src = image
        const imageContainer = document.getElementById("dog-image-container")
        imageContainer.appendChild(imageTag)
      })  
  }

  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => renderDom(result))
  }


  function filterBreeds (array) {
    array.forEach(function(breeds) {
        const ul = document.getElementById("dog-breeds")
        const li = document.createElement("li")
        li.innerText = breeds
        li.addEventListener("click", function() {
            li.style.color = "blue"
        })
        ul.appendChild(li)
    })
  }

  function renderDom (result) {
    const breedArray = Object.keys(result.message);
    const a = breedArray.filter(breed => breed.startsWith("a"))
    filterBreeds(a);
    const ul = document.getElementById("dog-breeds")

    let dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", function(event){
        while (ul.hasChildNodes()) {
            ul.removeChild(ul.lastChild);
        }
        const newArr = breedArray.filter(breed => breed.startsWith(event.target.value))
        filterBreeds(newArr);
    })
}
 
document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})
  
  
  
  