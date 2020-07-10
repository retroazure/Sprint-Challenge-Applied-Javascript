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

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.innerHTML = "<"

  carouselDiv.appendChild(leftButton);

  let click = 0;

  const mountains = document.createElement("img");
  const computer = document.createElement("img");
  const trees = document.createElement("img");
  const turntable = document.createElement("img");
  
  // const mountains = document.createElement("img");
  // mountains.src = "./assets/carousel/mountains.jpeg";
  // carouselDiv.appendChild(mountains);

  // const computer = document.createElement("img");
  // computer.src = "./assets/carousel/computer.jpeg";
  // carouselDiv.appendChild(computer);


  // const trees = document.createElement("img");
  // trees.src = "./assets/carousel/trees.jpeg";
  // carouselDiv.appendChild(trees);

  // const turntable = document.createElement("img");
  // turntable.src = "./assets/carousel/turntable.jpeg";
  // carouselDiv.appendChild(turntable);




  leftButton.addEventListener("click", (event)=>{
    if(click === 0){
      
      turntable.src = "./assets/carousel/turntable.jpeg";
    
      carouselDiv.appendChild(turntable);
    }
    if(click === 1){
      
      trees.src = "./assets/carousel/trees.jpeg";
      carouselDiv.removeChild(turntable);
      carouselDiv.appendChild(trees);
    }
    if(click === 2){
      
      computer.src = "./assets/carousel/computer.jpeg";

      carouselDiv.removeChild(trees);
      carouselDiv.appendChild(computer);
    }
    if(click === 3){
      
      mountains.src = "./assets/carousel/mountains.jpeg";
      
      carouselDiv.removeChild(computer);
      carouselDiv.appendChild(mountains);
    }
    if(click === 4){
      click = 0;
      carouselDiv.removeChild(mountains);
      turntable.src = "./assets/carousel/turntable.jpeg";
    
      carouselDiv.appendChild(turntable);
    }

    console.log(click);

    ++click;
  });

  


  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.innerHTML = ">";


  carouselDiv.appendChild(rightButton);

  rightButton.addEventListener("click", (event)=>{
    if(click === 0){
      
      mountains.src = "./assets/carousel/mountains.jpeg";
    
      carouselDiv.appendChild(mountains);
    }
    if(click === 1){
      
      computer.src = "./assets/carousel/computer.jpeg";
      carouselDiv.removeChild(mountains);
      carouselDiv.appendChild(computer);
    }
    if(click === 2){
      
      trees.src = "./assets/carousel/trees.jpeg";

      carouselDiv.removeChild(computer);
      carouselDiv.appendChild(trees);
    }
    if(click === 3){
      
      turntable.src = "./assets/carousel/turntable.jpeg";
      
      carouselDiv.removeChild(trees);
      carouselDiv.appendChild(turntable);
    }
    if(click === 4){
      click = 0;
      carouselDiv.removeChild(turntable);
      mountains.src = "./assets/carousel/mountains.jpeg";
    
      carouselDiv.appendChild(mountains);
    }

    console.log(click);

    ++click;
  });
  

  console.log(carouselDiv);
  console.log(document.querySelector("div.carousel-container"));
  const carouselContainer = document.querySelector("div.carousel-container");

  return carouselContainer.appendChild(carouselDiv);

}

carouselComponent();