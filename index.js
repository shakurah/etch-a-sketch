const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}

const gridItems =  document.querySelectorAll(".grid-item");

gridItems.forEach( gridItem => {
    gridItem.addEventListener("mouseenter", () => {
        gridItem.classList.add("pixelated");
    })
})