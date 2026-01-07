const container = document.querySelector(".container");
const CONTAINERSIZE = 500;
let grid = 16; 

function isValidNum(num){
    
}
function makeGrid(size){
    container.innerHTML = "";
    let totalSquares = size * size;
    let squaresize = CONTAINERSIZE / size

    for (let i = 0; i < totalSquares; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item")

        div.style.width = `${squaresize}px`
        div.style.height = `${squaresize}px`
        container.appendChild(div);
    }
}
makeGrid(grid)
const btn =  document.querySelector(".btn");

btn.addEventListener("click", () => {
    let squareSide = Number(prompt("How many squares per side"));

    makeGrid(squareSide);
})


container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")) {
        e.target.classList.add("pixelated");
    }
})