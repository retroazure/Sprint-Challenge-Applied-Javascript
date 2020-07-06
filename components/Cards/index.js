// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function articleCard() {

    
    const divCard = document.createElement("div");
    divCard.classList.add("card");



    axios.get("https://lambda-times-backend.herokuapp.com/articles").then((response)=>{
    console.log(response.data.articles);

    const data = response.data.articles;

    for(let i = 0; i<data["javascript"].length; i++){
        
        const divHeadline = document.createElement("div");
        divHeadline.classList.add("headline");
        divHeadline.textContent = `${data["javascript"][i]["headline"]}`
        divCard.appendChild(divHeadline);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        divCard.appendChild(divAuthor);

        const divImg = document.createElement("div");
        divImg.classList.add("img-container");
        divAuthor.appendChild(divImg);

        const authorImg = document.createElement("img");
        authorImg.src = `${data["javascript"][i]["authorPhoto"]}`
        divImg.appendChild(authorImg);

        const authorName = document.createElement("span");
        authorName.textContent = `${data["javascript"][i]["authorName"]}`
        divAuthor.appendChild(authorName);
    }

    for(let i = 0; i<data["bootstrap"].length; i++){
        const divHeadline = document.createElement("div");
        divHeadline.classList.add("headline");
        divHeadline.textContent = `${data["bootstrap"][i]["headline"]}`
        divCard.appendChild(divHeadline);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        divCard.appendChild(divAuthor);

        const divImg = document.createElement("div");
        divImg.classList.add("img-container");
        divAuthor.appendChild(divImg);

        const authorImg = document.createElement("img");
        authorImg.src = `${data["bootstrap"][i]["authorPhoto"]}`
        divImg.appendChild(authorImg);

        const authorName = document.createElement("span");
        authorName.textContent = `${data["bootstrap"][i]["authorName"]}`
        divAuthor.appendChild(authorName);
    }

    for(let i = 0; i<data["jquery"].length; i++){
        const divHeadline = document.createElement("div");
        divHeadline.classList.add("headline");
        divHeadline.textContent = `${data["jquery"][i]["headline"]}`
        divCard.appendChild(divHeadline);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        divCard.appendChild(divAuthor);

        const divImg = document.createElement("div");
        divImg.classList.add("img-container");
        divAuthor.appendChild(divImg);

        const authorImg = document.createElement("img");
        authorImg.src = `${data["jquery"][i]["authorPhoto"]}`
        divImg.appendChild(authorImg);

        const authorName = document.createElement("span");
        authorName.textContent = `${data["jquery"][i]["authorName"]}`
        divAuthor.appendChild(authorName);
    }

    for(let i = 0; i<data["node"].length; i++){
        const divHeadline = document.createElement("div");
        divHeadline.classList.add("headline");
        divHeadline.textContent = `${data["node"][i]["headline"]}`
        divCard.appendChild(divHeadline);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        divCard.appendChild(divAuthor);

        const divImg = document.createElement("div");
        divImg.classList.add("img-container");
        divAuthor.appendChild(divImg);

        const authorImg = document.createElement("img");
        authorImg.src = `${data["node"][i]["authorPhoto"]}`
        divImg.appendChild(authorImg);

        const authorName = document.createElement("span");
        authorName.textContent = `${data["node"][i]["authorName"]}`
        divAuthor.appendChild(authorName);
    }

    for(let i = 0; i<data["technology"].length; i++){
        const divHeadline = document.createElement("div");
        divHeadline.classList.add("headline");
        divHeadline.textContent = `${data["technology"][i]["headline"]}`
        divCard.appendChild(divHeadline);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add("author");
        divCard.appendChild(divAuthor);

        const divImg = document.createElement("div");
        divImg.classList.add("img-container");
        divAuthor.appendChild(divImg);

        const authorImg = document.createElement("img");
        authorImg.src = `${data["technology"][i]["authorPhoto"]}`
        divImg.appendChild(authorImg);

        const authorName = document.createElement("span");
        authorName.textContent = `${data["technology"][i]["authorName"]}`
        divAuthor.appendChild(authorName);
    }
    
}).catch((e)=>{
    console.log(e);
});

    return document.querySelector("div.cards-container").appendChild(divCard);
}

articleCard();