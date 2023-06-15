
//Restart the game
let restart = document.querySelector("#b")


//Grab all squares
let squares = document.querySelectorAll("td")

// clear all the squares 
function clearBoard(){
    for (let i = 0; i < squares.length; i++){
    squares[i].textContent = '';

    }
}

restart.addEventListener("click", clearBoard)


//check the squared marker
function changeMarker(){
    if (this.textContent === "") {
        this.textContent = "X"
    }
    else if (this.textContent === "X") {
        this.textContent = "O"
    }
    else {
        this.textContent = ""
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changeMarker)
    
}
