// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divHeader = document.createElement("div");
    divHeader.classList.add("header");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.innerHTML = "MARCH 28, 2019";
    
    const firstTitle = document.createElement("h1");
    firstTitle.innerHTML = "Lambda Times";

    const temperature = document.createElement("span");
    temperature.classList.add("temp");
    temperature.innerHTML = "98º";

    divHeader.appendChild(dateSpan);
    divHeader.appendChild(firstTitle);
    divHeader.appendChild(temperature);

    const fullHeader = document.querySelector("div.header-container");

    return fullHeader.appendChild(divHeader);
}

Header();