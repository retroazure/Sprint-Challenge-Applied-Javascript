/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function carouselComponent() {

  let index = 0;

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  const imgArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"];

  let img = document.createElement("img");
  img.setAttribute("src", imgArray[index]);
  carouselDiv.appendChild(img);


  let changeImg = event => {

    event.preventDefault();

    console.log('damn you just clicked me');

    if (event.target.classList.contains('right-button')) { 

      if (index < 3) {

        index++;

        document.querySelector('.carousel img').setAttribute("src", imgArray[index]);

      } else if (index === 3) {

        index = 0;

        document.querySelector('.carousel img').setAttribute("src", imgArray[index]);

      }
    }
    
    if(event.target.classList.contains('left-button')){
      if(index > 0){
        index--;
        document.querySelector('.carousel img').setAttribute("src", imgArray[index]);
      }
      
      
      else if(index === 0){
        index = 3;

      document.querySelector('.carousel img').setAttribute("src", imgArray[index]);
      }
    }

  }

 

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.innerHTML = "<"
  leftButton.addEventListener("click", event => changeImg(event));

  carouselDiv.appendChild(leftButton);

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.innerHTML = ">"  
  rightButton.addEventListener("click", event => changeImg(event));
  carouselDiv.appendChild(rightButton);
  

  console.log(carouselDiv);
  console.log(document.querySelector("div.carousel-container"));
  const carouselContainer = document.querySelector("div.carousel-container");

  return carouselContainer.appendChild(carouselDiv);

}

carouselComponent();