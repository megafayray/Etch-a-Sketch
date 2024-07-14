// Create starting grid:
createDivs();

function createDivs(){
    const container = document.querySelector("#container");
    for (let i = 0; i < (16*16); i++){
        const div = document.createElement("div");
        div.setAttribute("style", "background: black; width:15px; aspect-ratio: 1/1; box-sizing: border-box; flex: 1 0 6.25%;")
        div.classList.add("squares");
        container.appendChild(div);
    };
}

//When mouse enters a div, change its background colour:

const parent = document.querySelector("#container");
parent.addEventListener("mouseover", hover);
function hover(e){
    e.target.style.backgroundColor = "green";
};

// On button click, clear previous grid and create new one
// based on user entered value:

const button = document.querySelector("button");
button.addEventListener("click", () => {
    //Remove previously created child div elements from the container:
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //Prompt, then make new grid:
    
    let enteredNumber = prompt("How many squares do you want?");
    console.log(enteredNumber); //test = passed
    if (enteredNumber >100 || 
        isNaN(enteredNumber)){
        alert("Please enter a number <= 100");
    } else {
        let totalSquares = enteredNumber * enteredNumber;
        console.log(totalSquares); //test = passed
        for (let i = 0; i < totalSquares; i++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("style", "background: pink; width:15px; aspect-ratio: 1/1; box-sizing: border-box;")
            let percentage = (100 / enteredNumber) + "%";
            console.log(percentage); //test = passed
            newDiv.style.flexBasis = percentage;
            newDiv.classList.add("newSquares");
            container.appendChild(newDiv);
        }
    };
});

    
