console.log("connected")


console.log('Inside connected')


let counter = 0

let newgame = {
    score: 0,
    level: 6,
    playerArry: [],
    cpuArray: [],
    // activate start game here gameon: true,
}

console.log("test")
let cpuArray = newgame.cpuArray
let level = newgame.level
let playerArry = newgame.playerArry

let startgame = {
    welcome: () => {
        //display welcom message on message html
    },
    RandomGen: () => {
        cpuArray.push(Math.floor(Math.random() * 4))

    },
}



turnTracker = {
    cpuTurn: true,
    playerTurn: false,
    //not finished in here yet
    switcher: () => {
        if (this.cpuTurn === true) {
            this.playerTurn = false
            Turns.cpuTurn
        } else {
            if (this.cpuTurn === false) {
                playerTurn = true
            }
        }
    }
}

let playerTurn = turnTracker.playerTurn
let switcher = turnTracker.switcher


let Turns = {
    cpuTurn: () => {
        startgame.RandomGen()
        console.log(cpuArray) //update the display
        console.log('end turn')
        turnTracker.cpuTurn = false
        turnTracker.playerTurn =true
    },

    playerTurn: () => {
        // input large function. will check player array against cpu array after every click
        // click > check array > increase click counter > turn checker > countinue or end turn
        if (playerArry[counter] === cpuArray[counter]) {
            counter++
            if(playerArry.length === cpuArray.length){
                //increase level
                // end player turn
                turnTracker.cpuTurn = true
                turnTracker.playerTurn = false
                this.cpuTurn()
            } 
        } else {
            console.log("try again")
            //reset to level one
            // call a new game
        }
    }
}


let domHande = {

}

//let red = ()=>{
$('#red').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(1)
    } else {
        console.log(" not your turn!!!")
    }
})
$('#blue').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(2)
    } else {
        console.log(" not your turn!!!")
    }
})
$('#green').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(3)
    } else {
        console.log(" not your turn!!!")
    }
})
$('#yellow').on('click', () => {
    if (playerTurn) {
        console.log('clicked')
        playerArry.push(4)
    } else {
        console.log(" not your turn!!!")
    }
})
//}


 // end of ready doc