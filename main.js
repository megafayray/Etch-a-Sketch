createDivs();

function createDivs (){
    const container = document.querySelector("#container");
    for (let i = 0; i < (16*16); i++){
        const div = document.createElement("div");
        div.setAttribute("style", "background: black; width:15px; aspect-ratio: 1/1; box-sizing: border-box; border: dashed red; flex: 1 0 6.25%;")
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
    } else {
        createNew(enteredNumber);
    };
});

function createNew(enteredNumber){
    const container = document.querySelector("#container");
    for (let i = 0; i < (enteredNumber * enteredNumber); i++){
        const div = document.createElement("div");
        div.setAttribute("style", "background: black; width:15px; aspect-ratio: 1/1; box-sizing: border-box; border: dashed red; flex: 1 0 calc(100 / enteredNumber);")
        div.classList.add("squares");
        container.appendChild(div);
    }
}
    
