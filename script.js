const memeBtn = document.querySelector(".btn");
let img = document.querySelector("img")
const h3 = document.querySelector("h3")
const h2 = document.querySelector("h2")


const updateLink=(name,urls)=>{
    img.setAttribute("src",urls)
    h2.innerHTML = name;
}
const generateMeme =()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((resp)=> resp.json())
    .then((data)=>{
        const author= data.author;
        const url= data.url
        console.log(data);
       updateLink(author,url)
    })

}
memeBtn.addEventListener("click", generateMeme)