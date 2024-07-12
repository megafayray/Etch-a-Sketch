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
    console.log(enteredNumber); //just to test that I'm getting the intended value
    if (enteredNumber >100 || 
        isNaN(enteredNumber)){
        alert("Please enter a number <= 100");
    } else {
        const newContainer = document.querySelector("#container");
        let totalSquares = enteredNumber * enteredNumber;
        console.log(totalSquares); //test 
        for (let i = 0; i < totalSquares; i++){
            
            const newDiv = document.createElement("div");
            newDiv.setAttribute("style", "background: pink; width:15px; aspect-ratio: 1/1; box-sizing: border-box; border: dashed red; flex: 1 0 calc(100 / enteredNumber);")
            newDiv.classList.add("newSquares");
            newContainer.appendChild(newDiv);
        }
    };
});

    
