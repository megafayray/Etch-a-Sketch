//window.onload=prompt("How many squares per side would you like?");

createDivs();

function createDivs (){
    const container = document.querySelector("#container");
    for (let i = 0; i <16; i++){
        const div = document.createElement("div");
        div.setAttribute("style", "background: black; width:15px; aspect-ratio: 1/1;")
        div.classList.add("squares");
        container.appendChild(div);
    }
}


