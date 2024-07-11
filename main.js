createDivs();

function createDivs (){
    const container = document.querySelector("#container");
    for (let i = 0; i <16; i++){
        const div = document.createElement("div");
        div.setAttribute("style", "background: black; width:15px; aspect-ratio: 1/1; box-sizing: border-box; border: dashed red")
        div.classList.add("squares");
        container.appendChild(div);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let enteredNumber = prompt("How many squares do you want?");
    if (enteredNumber >100 || 
        isNaN(enteredNumber)){
        alert("Please enter a number <= 100");
    };
});

    
